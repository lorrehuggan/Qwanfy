<script lang="ts">
	import Search from '$lib/components/search.svelte';
	import Tracklist from '$lib/components/tracklist.svelte';
	import FeaturesSelection from '$lib/components/featuresSelection.svelte';
</script>

<Search />
<section class=" mx-auto flex w-2/3">
	<Tracklist />
	<FeaturesSelection />
</section>
