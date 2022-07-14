export interface Main {
	features: Features;
	data: Data;
	origin: Origin;
}

export interface AudioFeatures {
	popularity: number;
	danceability: number;
	energy: number;
	acousticness: number;
	valence: number;
	tempo: number;
}

export interface Data {
	id: string;
	name: string;
	artist: Artist[];
	album: string;
	preview_url: null;
	images: Image[];
	albumURL: string;
	popularity: number;
	explicit: boolean;
	duration: number;
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

export interface Features {
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
	type: string;
	id: string;
	uri: string;
	track_href: string;
	analysis_url: string;
	duration_ms: number;
	time_signature: number;
}

export interface Origin {
	trackName: string;
	artistName: string;
	img: Image[];
}
