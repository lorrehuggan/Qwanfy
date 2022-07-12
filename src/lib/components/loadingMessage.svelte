<script>
	import { SearchingStore } from '$lib/stores/store';
	import { loadingMessage } from '$lib/utils';
</script>

<div class="mt-2 flex h-6 w-full items-center">
	<p class="font-black">
		{#if $SearchingStore}
			{loadingMessage()}
		{/if}
	</p>
</div>
