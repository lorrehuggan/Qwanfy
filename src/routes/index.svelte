<script lang="ts">
	import Search from '$lib/components/search.svelte';
	import Tracklist from '$lib/components/tracklist.svelte';
	import FeaturesSelection from '$lib/components/rangeSelection.svelte';
	import { ErrorStore } from '$lib/stores/store';
</script>

<Search />
<section class=" mx-auto flex w-[90%] flex-col xl:w-2/3 xl:flex-row">
	{#if $ErrorStore}
		<p>{$ErrorStore}</p>
	{/if}
	<FeaturesSelection />
	<Tracklist />
</section>
