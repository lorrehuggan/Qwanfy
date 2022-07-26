<script lang="ts">
	import { PRE_ENDPOINT } from '$lib/api';
	import SearchSwitch from '$lib/components/searchSwitch.svelte';
	import {
		EnabledStore,
		ActiveSearchStore,
		PreSearchAlbumStore,
		PreSearchArtistStore,
		DataStore,
		RelatedStore,
		PreSearchStore,
		ErrorStore,
		FeaturesStore
	} from '$lib/stores/store';
	import LoadingMessage from '$lib/components/loadingMessage.svelte';
	import SearchDropdown from '$lib/components/searchDropdown.svelte';
	import { animateFrom, resetSearch } from '$lib/utils';
	import { onMount, onDestroy } from 'svelte';

	let track: string = '';
	let artist: string = '';

	onMount(() => {
		animateFrom('#heading', {
			opacity: 0,
			y: -20,
			duration: 1.5,
			ease: 'power3.out'
		});
		animateFrom('#search', {
			opacity: 0,
			duration: 2,
			delay: 0.5,
			ease: 'power3.out'
		});
	});

	function deleteFn(event: KeyboardEvent) {
		if (event.key === 'Backspace') {
			if (track.length === 0) {
				resetSearch();
				return;
			}
		}

		ActiveSearchStore.set({
			track: '',
			image: ''
		});
	}

	function handleInput(event: KeyboardEvent) {
		FeaturesStore.set({
			popularity: 0,
			energy: 0,
			tempo: 0,
			danceability: 0,
			valence: 0,
			acousticness: 0
		});
		PreSearchStore.set(true);
		let search: string = '';
		if (track.length > 1 && track.length < 15) {
			search = track;
			preSearch(`track=${search}`);
			return;
		}
		if (artist.length > 1 && artist.length < 15) {
			search = artist;
			preSearch(`artist=${search}`);
			return;
		}
		if (track.length === 0 || artist.length === 0) {
			PreSearchAlbumStore.set([]);
			PreSearchArtistStore.set([]);
			DataStore.set([]);
			RelatedStore.set(false);
			ActiveSearchStore.set({
				track: '',
				image: ''
			});
			return;
		}
	}

	async function preSearch(search: string) {
		try {
			const request = await fetch(`${PRE_ENDPOINT}?${search}`, {
				headers: {
					Authorization: import.meta.env.VITE_AUTH_TOKEN
				}
			});

			const response = await request.json();

			ErrorStore.set(null);

			if (response.error) {
				ErrorStore.set(response.error);
				return;
			}

			if ($EnabledStore) {
				PreSearchArtistStore.set(response.data);
				return;
			}
			if (!$EnabledStore) {
				PreSearchAlbumStore.set(response.data.tracks.items);
				return;
			}
		} catch (error: any) {
			console.error(error.message);
		}
	}
</script>

<svelte:window on:keydown={handleInput} on:keyup={deleteFn} />

<section class="mx-auto mt-8 w-[90%] xl:w-2/3">
	<h1 id="heading" class="mb-12 w-full text-3xl font-black sm:text-4xl lg:text-5xl xl:w-1/2">
		Discover new music with the help of old favorites.
	</h1>

	<div id="search" class="flex border-b-2 border-neutral py-2">
		{#if $EnabledStore}
			<input
				class="w-full text-base text-neutral focus:outline-none lg:text-lg"
				type="text"
				placeholder="Search by artist name"
				bind:value={artist}
			/>
		{:else}
			<input
				class="w-full text-base text-neutral  focus:outline-none lg:text-lg"
				type="text"
				placeholder="Search by track name"
				bind:value={track}
			/>
		{/if}
		<SearchSwitch />
	</div>

	{#if !$ErrorStore}
		<SearchDropdown {track} {artist} />
	{/if}

	<LoadingMessage />
</section>
