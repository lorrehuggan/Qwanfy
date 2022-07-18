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
		uniqueArtists = [...new Set($PreSearchArtistStore)];
	}

	async function searchArtist(name: string) {
		if (name.length > 5) {
			try {
				SearchingStore.set(true);
				PreSearchStore.set(false);
				const reponse = await fetch(`${MAIN_ENDPOINT}?id=${name}`);
				const data = await reponse.json();
				DataStore.set(data);
				ActiveSearchStore.set({
					track: $EnabledStore ? $PreSearchArtistStore[0].name : $PreSearchAlbumStore[0].name,
					image: $EnabledStore
						? $PreSearchArtistStore[0].images[0].url
						: $PreSearchAlbumStore[0].album.images[0].url
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

<div
	on:click={() =>
		searchArtist(
			`${$EnabledStore ? $PreSearchArtistStore[0].id : $PreSearchAlbumStore[0].artists[0].id}`
		)}
	class="flex cursor-pointer items-center bg-c-teal-300 p-2 transition-all duration-200 ease-in-out hover:bg-c-pink-300"
>
	<img
		src={$EnabledStore
			? $PreSearchArtistStore[0].images[0].url
			: $PreSearchAlbumStore[0].album.images[0].url}
		alt="album"
		class="h-12 w-12 object-cover"
	/>
	<p class="ml-2 font-bold">
		{$EnabledStore
			? $PreSearchArtistStore[0].name
			: `${$PreSearchAlbumStore[0].name} - ${$PreSearchAlbumStore[0].artists[0].name}`}
	</p>
</div>
<!-- List of similar -->
{#if $EnabledStore}
	{#each uniqueArtists as item}
		<div
			on:click={() => searchArtist(item.id)}
			class="flex cursor-pointer items-center bg-white p-2 transition-all duration-200 ease-in-out hover:bg-c-pink-300"
		>
			<img src={item.images[0].url} alt="artist" class="h-12 w-12 object-cover" />
			<span class="ml-2 font-bold">{item.name}</span>
		</div>
	{/each}
{:else}
	{#each $PreSearchAlbumStore.slice(1, 20) as item}
		<div
			on:click={() => searchArtist(item.artists[0].id)}
			class="flex cursor-pointer items-center bg-white p-2 transition-all duration-200 ease-in-out hover:bg-c-pink-300"
		>
			<img src={item.album.images[0].url} alt="album" class="h-12 w-12 object-cover" />
			<span class="ml-2 font-bold">{`${item.name} - ${item.artists[0].name}`}</span>
		</div>
	{/each}
{/if}
