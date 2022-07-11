<script lang="ts">
	import Search from '$lib/components/search.svelte';
	import { RelatedStore } from '$lib/stores/store';
	$: console.log($RelatedStore);
</script>

<Search />
{#if $RelatedStore[0]}
	{#each $RelatedStore[0] as related}
		<p>{related.name}</p>
	{/each}
{/if}
