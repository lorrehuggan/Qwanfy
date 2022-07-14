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

{#if $DataStore.length > 0 && $ActiveSearchStore.track}
	<section class="w-1/3 rounded-lg px-8 shadow-main">
		<div class="px- w-full">
			<RangeInput
				name="popularity"
				val={popularity}
				emptyValue="Playing at bars"
				fullValue="World Tour"
			/>
			<RangeInput name="energy" val={energy} emptyValue="Chill" fullValue="No Chill" />
			<RangeInput name="tempo" val={tempo} emptyValue="Slow" fullValue="Fast" />
			<RangeInput
				name="danceability"
				val={danceability}
				emptyValue="Nope"
				fullValue="Cutting shapes"
			/>
			<RangeInput name="valence" val={valence} emptyValue="Sad" fullValue="Happy" />
			<RangeInput name="acoustics" val={acousticness} emptyValue="Digital" fullValue="Analog" />
		</div>
	</section>
{/if}
