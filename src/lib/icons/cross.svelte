<script>
	import { RelatedStore, ActiveSearchStore, SearchingStore } from '$lib/stores/store';
	function close() {
		RelatedStore.set([]);
		ActiveSearchStore.set({
			track: '',
			artist: '',
			image: ''
		});
	}
</script>

<svg
	on:click={close}
	xmlns="http://www.w3.org/2000/svg"
	class="h-12 w-12 cursor-pointer pr-4 transition-colors duration-200 ease-out hover:text-neutral-900"
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
	stroke-width="2"
>
	<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
