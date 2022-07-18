<script lang="ts">
	import { MAIN_ENDPOINT } from '$lib/api';
	import {
		PreSearchAlbumStore,
		PreSearchArtistStore,
		EnabledStore,
		SearchingStore,
		DataStore,
		ActiveSearchStore,
		PreSearchStore
	} from '$lib/stores/store';
	import type { ArtistResponse } from '$lib/types';

	export let track: string = '';
	export let artist: string = '';

	let uniqueArtists: ArtistResponse[] = [];

	$: {
		uniqueArtists = $PreSearchArtistStore;
	}

	async function searchArtist(id: string, name: string, image: string) {
		if (id.length > 5) {
			try {
				SearchingStore.set(true);
				PreSearchStore.set(false);
				const reponse = await fetch(`${MAIN_ENDPOINT}?id=${id}`);
				const data = await reponse.json();
				DataStore.set(data);
				ActiveSearchStore.set({
					track: name,
					image: image
				});
			} catch (error: any) {
				SearchingStore.set(false);
				console.error(error.message);
			} finally {
				SearchingStore.set(false);
				track = '';
				artist = '';
			}
		}
	}
</script>

<!-- List of similar -->
{#if $EnabledStore}
	{#each uniqueArtists as item}
		<div
			on:click={() => searchArtist(item.id, item.name, item.images[0].url)}
			class="flex cursor-pointer items-center bg-white p-2 transition-all duration-200 ease-in-out hover:bg-c-pink-300"
		>
			<img src={item.images[0].url} alt="artist" class="h-12 w-12 object-cover" />
			<span class="ml-2 font-bold">{item.name}</span>
		</div>
	{/each}
{:else}
	{#each $PreSearchAlbumStore.slice(0, 20) as item}
		<div
			on:click={() =>
				searchArtist(item.artists[0].id, item.artists[0].name, item.album.images[0].url)}
			class="flex cursor-pointer items-center bg-white p-2 transition-all duration-200 ease-in-out hover:bg-c-pink-300"
		>
			<img src={item.album.images[0].url} alt="album" class="h-12 w-12 object-cover" />
			<span class="ml-2 font-bold">{`${item.name} - ${item.artists[0].name}`}</span>
		</div>
	{/each}
{/if}
