export interface New {
	albums: Albums;
}

export interface Albums {
	href: string;
	items: Item[];
	limit: number;
	next: string;
	offset: number;
	previous: null;
	total: number;
}

export interface Item {
	album_type: string;
	artists: Artist[];
	available_markets: string[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	name: string;
	release_date: Date;
	release_date_precision: string;
	total_tracks: number;
	type: string;
	uri: string;
}

export interface Artist {
	external_urls: ExternalUrls;
	href: string;
	id: string;
	name: string;
	type: string;
	uri: string;
}

export interface ExternalUrls {
	spotify: string;
}

export interface Image {
	height: number;
	url: string;
	width: number;
}

export interface Song {
	id: string;
	trackName: string;
	artistName: string;
	artist: string;
	album: string;
	images: Image[];
	albumHref: string;
	artistUri: string;
	artistHref: string;
	artistId: string;
	audioFeatures: AudioFeatures;
}

export interface AudioFeatures {
	danceability: number;
	energy: number;
	key: number;
	loudness: number;
	mode: number;
	speechiness: number;
	acousticness: number;
	instrumentalness: number;
	liveness: number;
	valence: number;
	tempo: number;
	type: Type;
	id: string;
	uri: string;
	track_href: string;
	analysis_url: string;
	duration_ms: number;
	time_signature: number;
}

export enum Type {
	AudioFeatures = 'audio_features'
}

export interface Image {
	height: number;
	url: string;
	width: number;
}
