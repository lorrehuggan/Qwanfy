<script lang="ts">
	import { MAIN_ENDPOINT } from '$lib/api';
	import SearchSwitch from '$lib/components/searchSwitch.svelte';
	import { SearchingStore, EnabledStore, ActiveSearchStore, DataStore } from '$lib/stores/store';
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
			SearchingStore.set(true);
			const response = await fetch(
				`${MAIN_ENDPOINT}?${track ? `track=${track.value}` : `artist=${artist.value}`}`
			);
			const data = await response.json();

			DataStore.set(data);
			ActiveSearchStore.set({
				track: data[0].origin.trackName,
				artist: data[0].origin.artistName,
				image: data[0].origin.img[0].url
			});
			SearchingStore.set(false);
			track.value = '';
			artist.value = '';
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
