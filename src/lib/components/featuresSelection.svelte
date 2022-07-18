<script lang="ts">
	import { DataStore, ActiveSearchStore } from '$lib/stores/store';
	import RangeInput from '$lib/components/rangeInput.svelte';
	let popularity = 0;
	let energy = 0;
	let tempo = 0;
	let danceability = 0;
	let valence = 0;
	let acousticness = 0;
</script>

{#if $DataStore.length > 0}
	<section class="w-1/3 rounded-lg px-8 shadow-main">
		<div class="sticky top-4 w-full">
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
	</section>
{/if}
