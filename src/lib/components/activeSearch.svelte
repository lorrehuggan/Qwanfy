<script lang="ts">
	import { ActiveSearchStore } from '$lib/stores/store';
	import Cross from '$lib/icons/cross.svelte';
</script>

{#if $ActiveSearchStore.track}
	<div class="mb-8 flex h-16 items-center overflow-hidden rounded bg-neutral shadow-main">
		<img
			class="mr-2 h-full object-cover opacity-80 "
			src={$ActiveSearchStore.image}
			alt={$ActiveSearchStore.track}
		/>
		<div class="w-full">
			<p class="text-lg font-bold text-white">{$ActiveSearchStore.track}</p>
		</div>

		<Cross />
	</div>
{/if}
