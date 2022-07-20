<script>
	import {
		ActiveSearchStore,
		DataStore,
		PreSearchAlbumStore,
		PreSearchArtistStore,
		RelatedStore,
		SearchingStore
	} from '$lib/stores/store';
	function close() {
		PreSearchAlbumStore.set([]);
		PreSearchArtistStore.set([]);
		DataStore.set([]);
		RelatedStore.set(false);
		ActiveSearchStore.set({
			track: '',
			image: ''
		});
	}
</script>

<svg
	on:click={close}
	xmlns="http://www.w3.org/2000/svg"
	class="h-12 w-12 cursor-pointer pr-4 text-white transition-colors duration-200 ease-out hover:text-red-500"
	fill="none"
	viewBox="0 0 24 24"
	stroke="currentColor"
	stroke-width="2"
>
	<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
