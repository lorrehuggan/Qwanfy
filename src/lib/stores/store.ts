import type { Track } from '$lib/types';
import { writable } from 'svelte/store';

export const RelatedStore = writable<Track[][] | []>([]);
