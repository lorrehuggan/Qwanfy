<script>
	import { SearchingStore } from '$lib/stores/store';
	import { loadingMessage } from '$lib/utils';
</script>

<div class="mt-2 h-8 w-full">
	{#if $SearchingStore}
		<div
			class="mb-1 h-1 w-[100px] animate-loading rounded bg-gradient-to-r from-c-teal-500 via-c-pink-300 to-c-pink-500"
		/>
		<p class="font-black">
			{loadingMessage()}
		</p>
	{/if}
</div>
