<script lang="ts">
	import { PreSearchAlbumStore, PreSearchArtistStore, PreSearchStore } from '$lib/stores/store';
	import SearchList from '$lib/components/searchList.svelte';
	export let track: string = '';
	export let artist: string = '';
</script>

{#if $PreSearchStore}
	<div class="dropdownw-full dropdown-open shadow-main">
		<div
			tabindex="0"
			class="dropdown-content menu max-h-56 w-full overflow-y-scroll bg-base-100 text-neutral"
		>
			{#if $PreSearchAlbumStore.length > 0 || ($PreSearchArtistStore.length > 0 && $PreSearchStore)}
				<!-- Users Main Search  -->
				<SearchList {track} {artist} />
			{/if}
		</div>
	</div>
{/if}
