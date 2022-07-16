<script lang="ts">
	import { ActiveSearchStore } from '$lib/stores/store';
	import Cross from '$lib/icons/cross.svelte';
</script>

{#if $ActiveSearchStore.artist}
	<div class="mb-8 flex h-16 items-center overflow-hidden rounded-xl bg-c-pink-400">
		<img
			class="mr-2 h-full object-cover opacity-50 "
			src={$ActiveSearchStore.image}
			alt={$ActiveSearchStore.artist}
		/>
		<div class="w-full">
			<p class="text-lg font-bold">{$ActiveSearchStore.artist}</p>
			<p>{$ActiveSearchStore.track}</p>
		</div>

		<Cross />
	</div>
{/if}
