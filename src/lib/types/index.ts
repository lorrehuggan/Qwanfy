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

export interface Related {
	body: Body;
	headers: Headers;
	statusCode: number;
}

export interface Body {
	tracks: Track[];
}

export interface Track {
	album: Album;
	artists: Artist[];
	disc_number: number;
	duration_ms: number;
	explicit: boolean;
	external_ids: ExternalIDS;
	external_urls: ExternalUrls;
	href: string;
	id: string;
	is_local: boolean;
	is_playable: boolean;
	name: string;
	popularity: number;
	preview_url: null | string;
	track_number: number;
	type: TrackType;
	uri: string;
}

export interface Album {
	album_type: AlbumTypeEnum;
	artists: Artist[];
	external_urls: ExternalUrls;
	href: string;
	id: string;
	images: Image[];
	name: string;
	release_date: Date;
	release_date_precision: ReleaseDatePrecision;
	total_tracks: number;
	type: AlbumTypeEnum;
	uri: string;
}

export enum AlbumTypeEnum {
	Album = 'album',
	Single = 'single'
}

export interface ExternalUrls {
	spotify: string;
}

export enum ArtistType {
	Artist = 'artist'
}

export interface Image {
	height: number;
	url: string;
	width: number;
}

export enum ReleaseDatePrecision {
	Day = 'day'
}

export interface ExternalIDS {
	isrc: string;
}

export enum TrackType {
	Track = 'track'
}

export interface Headers {
	'content-type': string;
	'cache-control': string;
	'x-robots-tag': string;
	'access-control-allow-origin': string;
	'access-control-allow-headers': string;
	'access-control-allow-methods': string;
	'access-control-allow-credentials': string;
	'access-control-max-age': string;
	'content-encoding': string;
	'strict-transport-security': string;
	'x-content-type-options': string;
	date: string;
	server: string;
	via: string;
	'alt-svc': string;
	connection: string;
	'transfer-encoding': string;
}
