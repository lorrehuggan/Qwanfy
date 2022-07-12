<script>
	import '../app.css';
	import Nav from '../lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Nav />
<main class="min-h-[calc(100vh-9.5rem)]">
	<slot />
</main>
<Footer />
