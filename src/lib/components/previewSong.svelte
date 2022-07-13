<script lang="ts">
	export let preview_url: string | null;
	import { Howl, Howler } from 'howler';
	$: playedPercent = 0;

	const prev = new Howl({
		src: [preview_url!],
		html5: true,
		preload: true,
		autoplay: false,
		loop: false,
		volume: 0.5,
		onplay: () => {},
		onend: () => {}
	});

	const play = () => {
		prev.play();
		setInterval(() => {
			playedPercent = Math.floor((prev.seek() / prev.duration()) * 100);
		}, 1000);
	};
	const stop = () => {
		prev.stop();
	};
</script>

<div on:mouseenter={play} on:mouseleave={stop} class="mr-2 flex cursor-pointer flex-col">
	<p class=" mb-1 text-xs uppercase">preview</p>
	<progress class="progress progress-primary w-full" value={playedPercent} max="100" />
</div>
