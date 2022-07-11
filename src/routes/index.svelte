<script lang="ts">
	import { RELATED_ARTISTS, SEARCH } from '$lib/api';
	import Search from '$lib/components/search.svelte';

	let track: HTMLInputElement;
	let arstit: any;
	let related: any;

	$: x = related;

	$: datas = {
		related: related,
		arstit: arstit
	};

	async function getData() {
		const response = await fetch(`${SEARCH}?artist=${track.value}`);
		const artistData = await response.json();
		arstit = artistData;
		const relatedArtists = await fetch(
			`${RELATED_ARTISTS}?artistId=${artistData[0].artists[0].id}`
		);
		const relatedArtistsData = await relatedArtists.json();
		related = relatedArtistsData;
		console.log(relatedArtistsData);
	}
</script>

<Search />
