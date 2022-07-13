<script lang="ts">
	import { RELATED_ARTISTS, SEARCH } from '$lib/api';
	import SearchSwitch from '$lib/components/searchSwitch.svelte';
	import { RelatedStore, SearchingStore, EnabledStore, ActiveSearchStore } from '$lib/stores/store';
	import type { Related, Track } from '$lib/types';
	import LoadingMessage from '$lib/components/loadingMessage.svelte';

	let track: HTMLInputElement;
	let artist: HTMLInputElement;

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			search();
		}
		return;
	}

	async function search() {
		if ((!$EnabledStore && track.value.length > 1) || ($EnabledStore && artist.value.length > 1)) {
			try {
				//Search Store To Get Artist Data
				SearchingStore.set(true);
				const artistData = await fetch(
					`${SEARCH}?track=${!$EnabledStore ? track.value : artist.value}`
				);
				const artistDataResponse: Track[] = await artistData.json();

				if (artistDataResponse[0]) {
					ActiveSearchStore.set({
						track: artistDataResponse[0].name,
						artist: artistDataResponse[0].artists[0].name,
						image: artistDataResponse[0].album.images[0].url
					});
				}

				// Get Related Artists From Searched Artist

				const relatedArtistsData = await fetch(
					`${RELATED_ARTISTS}?artistId=${artistDataResponse[0].artists[0].id}`
				);
				const relatedArtistsDataRes: Related[] = await relatedArtistsData.json();

				relatedArtistsDataRes.map((item: Related) => {
					if ($RelatedStore.length > 19) {
						RelatedStore.update(() => {
							return [];
						});
					}

					RelatedStore.update((state: any) => {
						return [...state, item.body.tracks];
					});
					return item.body.tracks;
				});
				SearchingStore.set(false);
				track.value = '';
				artist.value = '';
				return;
			} catch (error: any) {
				console.log(error.message);
			}
		}
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<section class="mx-auto mt-8 w-2/3">
	<h1 class="mb-12 w-1/2 text-5xl font-black">
		Discover new music with the help of old favorites.
	</h1>

	<div class="border-neutral-50 flex border-b-2 py-2">
		{#if $EnabledStore}
			<input
				class="w-full bg-neutral text-lg focus:outline-none"
				type="text"
				placeholder="Search by artist name"
				bind:this={artist}
			/>
		{:else}
			<input
				class="w-full bg-neutral text-lg focus:outline-none"
				type="text"
				placeholder="Search by track name"
				bind:this={track}
			/>
		{/if}
		<SearchSwitch />
	</div>
	<LoadingMessage />
</section>
