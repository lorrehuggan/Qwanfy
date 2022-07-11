<script lang="ts">
	import { RELATED_ARTISTS, SEARCH } from '$lib/api';
	import { Switch } from '@rgossiaux/svelte-headlessui';
	import { RelatedStore } from '$lib/stores/store';
	import type { Related, Track } from '$lib/types';

	let track: HTMLInputElement;
	let artist: HTMLInputElement;
	let searched = [];
	let relatedArtists: Track[] = [];

	let enabled = false;

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			search();
		}
		return;
	}

	async function search() {
		if (!enabled && track.value.length > 1) {
			try {
				const artistData = await fetch(`${SEARCH}?track=${track.value}`);
				const artistDataResponse = await artistData.json();
				searched = artistDataResponse;

				const relatedArtistsData = await fetch(
					`${RELATED_ARTISTS}?artistId=${artistDataResponse[0].artists[0].id}`
				);
				const relatedArtistsDataRes = await relatedArtistsData.json();
				relatedArtistsDataRes.map((item: Related) => {
					if ($RelatedStore.length > 0) {
						RelatedStore.update(() => {
							return [];
						});
					}
					RelatedStore.update((state: any) => {
						return [...state, item.body.tracks];
					});
					return item.body.tracks;
				});
				return;
			} catch (error: any) {
				console.log(error.message);
			}
		}
		if (enabled && artist.value.length > 1) {
			try {
				const artistData = await fetch(`${SEARCH}?artist=${artist.value}`);
				const artistDataResponse = await artistData.json();
				searched = artistDataResponse;
				const relatedArtistsData = await fetch(
					`${RELATED_ARTISTS}?artistId=${artistDataResponse[0].artists[0].id}`
				);
				const relatedArtistsDataRes = await relatedArtistsData.json();
				relatedArtistsDataRes.map((item: Related) => {
					if ($RelatedStore.length > 0) {
						RelatedStore.update(() => {
							return [];
						});
					}
					RelatedStore.update((state: any) => {
						return [...state, item.body.tracks];
					});
					return item.body.tracks;
				});
				return;
			} catch (error: any) {
				console.log(error.message);
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<section class="mx-auto mt-10 w-2/3">
	<h1 class="mb-12 w-1/2 text-5xl font-black">
		Discover new music with the help of old favorites.
	</h1>

	<div class="flex border-b-2 border-neutral-50 py-2">
		{#if enabled}
			<input
				class="w-full bg-neutral-900 text-lg focus:outline-none"
				type="text"
				placeholder="Search by artist name"
				bind:this={artist}
			/>
		{:else}
			<input
				class="w-full bg-neutral-900 text-lg focus:outline-none"
				type="text"
				placeholder="Search by track name"
				bind:this={track}
			/>
		{/if}
		<div class="flex items-center">
			<span
				class={`mr-2 transition-colors duration-200 ease-in-out ${
					enabled ? 'text-neutral-600' : ''
				}`}>Track</span
			>
			<Switch
				checked={enabled}
				on:change={(e) => (enabled = e.detail)}
				class={`bg-c-pink-500 relative inline-flex h-6 w-11 items-center rounded-full transform transition-all ease-in-out duration-200`}
			>
				<span
					class={` ${
						enabled ? 'translate-x-6' : 'translate-x-1'
					} inline-block h-4 w-4 rounded-full bg-white transform transition-all ease-in-out duration-200`}
				/>
			</Switch>
			<span
				class={`ml-2 transition-colors duration-200 ease-in-out ${
					enabled ? '' : 'text-neutral-600'
				}`}>Artist</span
			>
		</div>
	</div>
</section>
