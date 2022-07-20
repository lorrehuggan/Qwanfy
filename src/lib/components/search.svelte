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
		PreSearchStore
	} from '$lib/stores/store';
	import LoadingMessage from '$lib/components/loadingMessage.svelte';
	import SearchDropdown from '$lib/components/searchDropdown.svelte';
	import { resetSearch } from '$lib/utils';

	let track: string = '';
	let artist: string = '';

	function deleteFn(event: KeyboardEvent) {
		if (event.key === 'Backspace') {
			if (track.length === 0) {
				resetSearch();
			}
		}

		ActiveSearchStore.set({
			track: '',
			image: ''
		});
	}

	function handleInput(event: KeyboardEvent) {
		PreSearchStore.set(true);
		let search: string = '';
		if (track.length > 1 && track.length < 15) {
			search = track;
			preSearch(`track=${search}`);
		}
		if (artist.length > 1 && artist.length < 15) {
			search = artist;
			preSearch(`artist=${search}`);
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
		}
	}

	async function preSearch(search: string) {
		try {
			const response = await fetch(`${PRE_ENDPOINT}?${search}`);
			const data = await response.json();

			if ($EnabledStore) {
				PreSearchArtistStore.set(data);
				return;
			}
			if (!$EnabledStore) {
				PreSearchAlbumStore.set(data.tracks.items);
				return;
			}
		} catch (error: any) {
			console.error(error.message);
		}
	}
</script>

<svelte:window on:keydown={handleInput} on:keyup={deleteFn} />

<section class="mx-auto mt-8 w-2/3">
	<h1 class="mb-12 w-1/2 text-5xl font-black">
		Discover new music with the help of old favorites.
	</h1>

	<div class="flex border-b-2 border-neutral py-2">
		{#if $EnabledStore}
			<input
				class="w-full text-lg text-neutral focus:outline-none"
				type="text"
				placeholder="Search by artist name"
				bind:value={artist}
			/>
		{:else}
			<input
				class="w-full text-lg  text-neutral focus:outline-none"
				type="text"
				placeholder="Search by track name"
				bind:value={track}
			/>
		{/if}
		<SearchSwitch />
	</div>

	<SearchDropdown {track} {artist} />

	<LoadingMessage />
</section>
