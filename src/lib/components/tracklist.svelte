<script lang="ts">
	import { DataStore, FeaturesStore } from '$lib/stores/store';
	import { convertMsToMinutesSeconds, shuffle } from '$lib/utils';
	import ActiveSearch from '$lib/components/activeSearch.svelte';
	import PreviewSong from '$lib/components/previewSong.svelte';
	import type { Main } from '$lib/types';
	import { fade } from 'svelte/transition';

	let selected: Main[] = [];
	let origin: Main[] = [];

	let innerWidth: number = 0;
	let titleLength: number = 50;
	let artistArray: number = 8;

	$: {
		const store = shuffle($DataStore);
		selected = [...store];
		origin = [...store];
		if (
			$FeaturesStore.popularity > 0 ||
			$FeaturesStore.danceability > 0 ||
			$FeaturesStore.energy > 0 ||
			$FeaturesStore.acousticness > 0 ||
			$FeaturesStore.valence > 0 ||
			$FeaturesStore.tempo > 0
		) {
			selected = selected.filter(
				(song) =>
					song.data.popularity >= $FeaturesStore.popularity &&
					song.features.danceability >= $FeaturesStore.danceability &&
					song.features.energy >= $FeaturesStore.energy &&
					song.features.acousticness >= $FeaturesStore.acousticness &&
					song.features.valence >= $FeaturesStore.valence &&
					song.features.tempo >= $FeaturesStore.tempo
			);
		}
		if (innerWidth < 700) {
			titleLength = 25;
			artistArray = 2;
		} else {
			titleLength = 50;
			artistArray = 8;
		}
	}
</script>

<svelte:window bind:innerWidth />

<section class="w-full xl:w-2/3">
	{#if selected.length > 0}
		<ActiveSearch />
		<h3 class="mb-8 text-2xl font-bold uppercase">Track List</h3>
		{#each selected.slice(0, 20) as data, i}
			<div
				class=" group relative mb-4 flex cursor-pointer items-center rounded  p-2 shadow transition-all delay-500 duration-300 ease-in-out hover:bg-gradient-to-r hover:from-c-teal-500 hover:to-c-pink-700 lg:shadow-none "
			>
				<img
					in:fade={{ delay: i * 100 }}
					src={data.data.images[0].url}
					alt={data.data.name}
					class="z-30 mr-4 h-20 w-20 rounded opacity-90 shadow-lg transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:rotate-2 group-hover:opacity-100 lg:h-24 lg:w-24 "
				/>
				<div class="z-30 w-full">
					<div class="flex items-center">
						<p class="text-base font-black group-hover:text-white lg:text-lg">
							{data.data.name.length > titleLength
								? `${data.data.name.substring(0, titleLength)}...`
								: data.data.name}
						</p>
						{#if data.data.explicit}
							<span
								class="ml-2 hidden border-2 border-c-pink-500 p-[1px] text-xs uppercase group-hover:text-white lg:text-sm"
								>explicit</span
							>
						{/if}
					</div>
					<div class="z-30">
						{#each data.data.artist.slice(0, artistArray) as artist, i}
							<a href={artist.external_urls.spotify}>
								<span
									class="mr-1 cursor-pointer text-sm transition-colors duration-200 ease-in-out hover:text-c-pink-500 group-hover:text-white"
								>
									{`${artist.name}${i + 1 < data.data.artist.length ? ',' : ''}`}</span
								>
							</a>
						{/each}
					</div>
				</div>
				<div class="z-30 flex items-center">
					{#if data.data.preview_url}
						<PreviewSong preview_url={data.data.preview_url} />
					{/if}
					<span class="hidden text-sm group-hover:text-white lg:inline"
						>{convertMsToMinutesSeconds(data.data.duration)}</span
					>
				</div>
				<div
					class=" absolute bottom-0 left-0 z-0 h-[90%] w-full translate-y-5 bg-neutral opacity-0 transition-all duration-500 ease-in-out group-hover:-translate-y-0 group-hover:opacity-100"
				/>
			</div>
		{/each}
	{:else if origin.length > 0}
		<p>No Matches</p>
	{/if}
</section>
