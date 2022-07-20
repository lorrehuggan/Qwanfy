<script>
	import SpotifyLogo from '$lib/icons/spotify-icon.svelte';
</script>

<nav class="mx-auto flex h-20 w-5/6 items-center  justify-between lg:w-2/3">
	<div class="flex items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-4 w-4 text-c-teal-500 lg:h-6 lg:w-6"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fill-rule="evenodd"
				d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
				clip-rule="evenodd"
			/>
		</svg>
		<h1
			class="bg-gradient-to-r from-c-teal-600 via-c-pink-400 to-c-pink-500 bg-clip-text text-lg font-black uppercase text-transparent lg:text-4xl"
		>
			kwantize
		</h1>
	</div>
	<ul class="flex text-sm">
		<li class="flex cursor-pointer items-center uppercase">
			Connect with
			<SpotifyLogo />
		</li>
	</ul>
</nav>
