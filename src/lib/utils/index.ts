import type { AudioFeatures, Main } from '$lib/types';
import {
	EnabledStore,
	ActiveSearchStore,
	PreSearchAlbumStore,
	PreSearchArtistStore,
	DataStore,
	RelatedStore,
	PreSearchStore
} from '$lib/stores/store';
import gsap from 'gsap';

function padTo2Digits(num: number) {
	return num.toString().padStart(2, '0');
}

export function convertMsToMinutesSeconds(milliseconds: number) {
	const minutes = Math.floor(milliseconds / 60000);
	const seconds = Math.round((milliseconds % 60000) / 1000);

	return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${padTo2Digits(seconds)}`;
}

export function loadingMessage() {
	const loadingMessageArray = [
		'Let me think...',
		'Just give me a moment...',
		'Good choice just thinking about that...',
		'Wow you really know your stuff, just thinking...'
	];
	return loadingMessageArray[Math.floor(Math.random() * loadingMessageArray.length)];
}

export function shuffle<T>(array: Array<T>): T[] {
	let counter = array.length;

	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		const index = Math.floor(Math.random() * counter);

		// Decrease counter by 1
		counter--;

		// And swap the last element with it
		const temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}

	return array;
}

export function resetSearch() {
	PreSearchStore.set(false);
	DataStore.set([]);
	RelatedStore.set(false);
	ActiveSearchStore.set({
		track: '',
		image: ''
	});
}

export function animateFrom<T>(id: string, args: T) {
	gsap.from(id, {
		...args
	});
}
