import { writable } from 'svelte/store';
import type { AudioFeatures, Main } from '$lib/types/';
type ActiveSearch = {
	track?: string | undefined;
	artist?: string | undefined;
	image?: string | undefined;
};

export const SearchingStore = writable<boolean>(false);

export const EnabledStore = writable<boolean>(false);

export const ActiveSearchStore = writable<ActiveSearch>({
	track: '',
	artist: '',
	image: ''
});

export const RelatedStore = writable<boolean>(false);

export const DataStore = writable<Main[] | []>([]);

export const FeaturesStore = writable<AudioFeatures>({
	popularity: 0,
	danceability: 0,
	energy: 0,
	acousticness: 0,
	valence: 0,
	tempo: 0
});
