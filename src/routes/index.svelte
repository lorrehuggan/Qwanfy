<script lang="ts">
	import Search from '$lib/components/search.svelte';
	import Tracklist from '$lib/components/tracklist.svelte';
	let val: any;
	$: console.log(val);
</script>

<Search />
<section class=" mx-auto flex w-2/3">
	<Tracklist />
	<section class="w-1/3 px-8">
		<div class="h-72 w-full shadow-xl">
			<input
				bind:value={val}
				type="range"
				min="0"
				max="100"
				step="1"
				class=" form-range h-1 w-full appearance-none rounded bg-gradient-to-r from-c-pink-100 to-c-pink-500 p-0 focus:shadow-none focus:outline-none focus:ring-0
    "
				id="customRange1"
			/>
		</div>
	</section>
</section>
