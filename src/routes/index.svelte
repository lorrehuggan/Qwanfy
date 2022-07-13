<script lang="ts">
	import Search from '$lib/components/search.svelte';
	import Tracklist from '$lib/components/tracklist.svelte';
	import RangeInput from '$lib/components/rangeInput.svelte';
	let popularity = 0;
	let energy = 0;
	let tempo = 0;
	let danceability = 0;
	let mood = 0;
	let acousticness = 0;
</script>

<Search />
<section class=" mx-auto flex w-2/3">
	<Tracklist />
	<section class="w-1/3 rounded-lg px-8 shadow-main">
		<div class="px- w-full">
			<RangeInput
				name="Popularity"
				val={popularity}
				emptyValue="Playing at bars"
				fullValue="World Tour"
			/>
			<RangeInput name="Energy" val={energy} emptyValue="Chill" fullValue="No Chill" />
			<RangeInput name="Tempo" val={tempo} emptyValue="Slow" fullValue="Fast" />
			<RangeInput
				name="Danceability"
				val={danceability}
				emptyValue="Nope"
				fullValue="Cutting shapes"
			/>
			<RangeInput name="Mood" val={mood} emptyValue="Sad" fullValue="Happy" />
			<RangeInput name="Acoustics" val={acousticness} emptyValue="Digital" fullValue="Analog" />
		</div>
	</section>
</section>
