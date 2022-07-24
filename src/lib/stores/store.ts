import { writable } from 'svelte/store';
import type { AlbumResponse, ArtistResponse, AudioFeatures, Item, Main, Tracks } from '$lib/types/';

type ActiveSearch = {
	track: string;
	image: string;
};

export const SearchingStore = writable<boolean>(false);

export const EnabledStore = writable<boolean>(false);

export const ActiveSearchStore = writable<ActiveSearch>({
	track: '',
	image: ''
});

export const RelatedStore = writable<boolean>(false);

export const PreSearchStore = writable<boolean>(false);

export const DataStore = writable<Main[] | []>([]);

export const PreSearchAlbumStore = writable<Item[] | []>([]);

export const PreSearchArtistStore = writable<ArtistResponse[] | []>([]);

export const FeaturesStore = writable<AudioFeatures>({
	popularity: 0,
	danceability: 0,
	energy: 0,
	acousticness: 0,
	valence: 0,
	tempo: 0
});

export const songPlayingStore = writable<boolean>(false);
export const songPlayingIDStore = writable<string>('');

export const ErrorStore = writable<string | null>(null);
