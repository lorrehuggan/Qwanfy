<script>
	import '../app.css';
	import Nav from '../lib/components/nav.svelte';
</script>

<Nav />
<main class="min-h-[calc(100vh-5rem)]">
	<slot />
</main>
