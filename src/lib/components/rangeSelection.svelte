<script lang="ts">
	import { DataStore, ActiveSearchStore, FeaturesStore } from '$lib/stores/store';
	import RangeInput from '$lib/components/rangeInput.svelte';
	import { fade } from 'svelte/transition';

	let popularity = $FeaturesStore.popularity;
	let energy = $FeaturesStore.energy;
	let tempo = $FeaturesStore.tempo;
	let danceability = $FeaturesStore.danceability;
	let valence = $FeaturesStore.valence;
	let acousticness = $FeaturesStore.acousticness;

	let open: boolean;
	$: open = true;
	function toggle() {
		open = !open;
	}
</script>

{#if $DataStore.length > 0}
	<section class="w-full rounded-lg p-0 xl:mr-4 xl:w-1/3">
		<div tabindex="0" class=" overflow-hidden bg-base-100 xl:sticky xl:top-4">
			<div
				on:click={toggle}
				class={`group mb-2 flex cursor-pointer justify-between ${
					open ? 'border-b border-black' : ''
				} py-2 text-base font-bold z-30`}
			>
				<p>{!open ? 'Hide' : 'Show'} Tracklist Settings</p>
				{#if open}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 cursor-pointer group-hover:text-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 cursor-pointer group-hover:text-red-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
					</svg>
				{/if}
			</div>
			<div
				class={`${
					open ? '-translate-x-full hidden lg:block' : 'translate-x-0 '
				} border-b-2 border-neutral transition-all duration-300 ease-in-out z-10`}
			>
				<RangeInput
					name="popularity"
					val={popularity}
					emptyValue="Playing at bars"
					fullValue="World Tour"
					step={1}
					min={0}
					max={100}
				/>
				<RangeInput
					name="energy"
					val={energy}
					emptyValue="Chill"
					fullValue="No Chill"
					step={0.1}
					min={0}
					max={1}
				/>
				<RangeInput
					name="tempo"
					val={tempo}
					emptyValue="Slow"
					fullValue="Fast"
					step={10}
					min={50}
					max={250}
				/>
				<RangeInput
					name="danceability"
					val={danceability}
					emptyValue="Nope"
					fullValue="Cutting shapes"
					step={0.1}
					min={0}
					max={1}
				/>
				<RangeInput
					name="valence"
					val={valence}
					emptyValue="Sad"
					fullValue="Happy"
					step={0.1}
					min={0}
					max={1}
				/>
				<RangeInput
					name="acoustics"
					val={acousticness}
					emptyValue="Digital"
					fullValue="Analog"
					step={0.1}
					min={0}
					max={1}
				/>
			</div>
		</div>
	</section>
{/if}
