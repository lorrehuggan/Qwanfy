<script lang="ts">
	import { RelatedStore, SearchingStore } from '$lib/stores/store';
	import { convertMsToMinutesSeconds } from '$lib/utils';
	import ActiveSearch from '$lib/components/activeSearch.svelte';
	import PreviewSong from '$lib/components/previewSong.svelte';
	import { subscribe } from 'svelte/internal';
	import Cross from '$lib/icons/cross.svelte';
	const ran = Math.floor(Math.random() * 9);
</script>

{#if $RelatedStore.length > 0 && !$SearchingStore}
	<section class="mx-auto w-2/3">
		<ActiveSearch />
		<h3 class="mb-8 text-2xl font-bold">Track List</h3>
		{#each $RelatedStore as related}
			<div class="mb-4 flex items-center">
				<img
					src={related[ran].album.images[0].url}
					alt={related[ran].name}
					class="mr-4 h-24 w-24 rounded shadow-lg"
				/>
				<div class="w-full">
					<div class="flex items-center">
						<p class="text-lg font-black">
							{related[ran].name.length > 100
								? `${related[ran].name.substring(0, 100)}...`
								: related[ran].name}
						</p>
						{#if related[ran].explicit}
							<span class="ml-2 border-2 border-c-pink-500 p-[1px] text-sm uppercase">explicit</span
							>
						{/if}
					</div>
					<div class="">
						{#each related[ran].artists as artist, i}
							<a href={artist.external_urls.spotify}>
								<span
									class="mr-1 cursor-pointer text-sm transition-colors duration-200 ease-in-out hover:text-c-pink-500"
								>
									{`${artist.name}${i + 1 < related[ran].artists.length && ','}`}</span
								>
							</a>
						{/each}
					</div>
				</div>
				<div class="flex items-center">
					{#if related[ran].preview_url}
						<PreviewSong preview_url={related[ran].preview_url} />
					{/if}
					<span class="text-sm">{convertMsToMinutesSeconds(related[ran].duration_ms)}</span>
				</div>
			</div>
		{/each}
	</section>
{/if}
