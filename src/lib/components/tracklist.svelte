<script lang="ts">
	import { DataStore, FeaturesStore } from '$lib/stores/store';
	import { convertMsToMinutesSeconds, shuffle } from '$lib/utils';
	import ActiveSearch from '$lib/components/activeSearch.svelte';
	import PreviewSong from '$lib/components/previewSong.svelte';
	import type { Main } from '$lib/types';

	let selected: Main[] = [];
	let origin: Main[] = [];

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
	}
</script>

<section class="w-2/3 pr-8">
	{#if selected.length > 0}
		<ActiveSearch />
		<h3 class="mb-8 text-2xl font-bold">Track List</h3>
		{#each selected as data}
			<div
				class="mb-4 flex cursor-pointer items-center rounded p-2 transition-all duration-300 ease-in-out hover:bg-stone-800 "
			>
				<img
					src={data.data.images[0].url}
					alt={data.data.name}
					class="mr-4 h-24 w-24 rounded shadow-main"
				/>
				<div class="w-full">
					<div class="flex items-center">
						<p class="text-lg font-black">
							{data.data.name.length > 70
								? `${data.data.name.substring(0, 70)}...`
								: data.data.name}
						</p>
						{#if data.data.explicit}
							<span class="ml-2 border-2 border-c-pink-500 p-[1px] text-sm uppercase">explicit</span
							>
						{/if}
					</div>
					<div class="">
						{#each data.data.artist as artist, i}
							<a href={artist.external_urls.spotify}>
								<span
									class="mr-1 cursor-pointer text-sm transition-colors duration-200 ease-in-out hover:text-c-pink-500"
								>
									{`${artist.name}${i + 1 < data.data.artist.length ? ',' : ''}`}</span
								>
							</a>
						{/each}
					</div>
				</div>
				<div class="flex items-center">
					{#if data.data.preview_url}
						<PreviewSong preview_url={data.data.preview_url} />
					{/if}
					<span class="text-sm">{convertMsToMinutesSeconds(data.data.duration)}</span>
				</div>
			</div>
		{/each}
	{:else if origin.length > 0}
		<p>No Matches</p>
	{/if}
</section>
