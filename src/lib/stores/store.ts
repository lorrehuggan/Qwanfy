import type { Track } from '$lib/types';
import { writable } from 'svelte/store';

type ActiveSearch = {
	track?: string | undefined;
	artist?: string | undefined;
	image?: string | undefined;
};

export const RelatedStore = writable<Track[][] | []>([]);

export const SearchingStore = writable<boolean>(false);

export const EnabledStore = writable<boolean>(false);

export const ActiveSearchStore = writable<ActiveSearch>({
	track: '',
	artist: '',
	image: ''
});
