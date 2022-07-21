<script lang="ts">
	export let preview_url: string | null;
	import { Howl, Howler } from 'howler';
	import { songPlayingStore } from '$lib/stores/store';
	$: playedPercent = 0;
	let playing: boolean;
	$: playing;

	const prev = new Howl({
		src: [preview_url!],
		html5: true,
		preload: true,
		autoplay: false,
		loop: false,
		volume: 0.5,
		onplay: (id) => {
			playing = true;
			songPlayingStore.set(true);
		},

		onend: () => {
			playing = false;
			songPlayingStore.set(false);
		}
	});

	const play = () => {
		if ($songPlayingStore) {
			Howler.stop();
			playing = false;
			songPlayingStore.set(false);
			return;
		}
		prev.play();
		setInterval(() => {
			playedPercent = Math.floor((prev.seek() / prev.duration()) * 100);
		}, 1000);
	};
	const stop = () => {
		playing = false;
		songPlayingStore.set(false);
		Howler.stop();
	};
</script>

<div on:mouseenter={play} on:mouseleave={stop} class="mr-2 hidden cursor-pointer flex-col lg:flex">
	<p class=" mb-1 text-xs uppercase group-hover:text-white">preview</p>
	<progress class="progress progress-primary w-full" value={playedPercent} max="100" />
</div>
{#if !playing}
	<svg
		on:click={play}
		xmlns="http://www.w3.org/2000/svg"
		class="absolute right-1 top-2 h-6 w-6 text-c-pink-500 sm:h-9 sm:w-9 lg:hidden"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
			clip-rule="evenodd"
		/>
	</svg>
{:else}
	<svg
		on:click={play}
		xmlns="http://www.w3.org/2000/svg"
		class="absolute right-1 top-2 h-6 w-6 text-neutral sm:h-9 sm:w-9 lg:hidden"
		viewBox="0 0 20 20"
		fill="currentColor"
	>
		<path
			fill-rule="evenodd"
			d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
			clip-rule="evenodd"
		/>
	</svg>
{/if}
