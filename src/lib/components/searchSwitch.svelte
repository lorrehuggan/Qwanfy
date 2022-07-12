<script lang="ts">
	import { Switch } from '@rgossiaux/svelte-headlessui';
	import { EnabledStore } from '$lib/stores/store';
</script>

<div class="flex items-center">
	<span
		class={`mr-2 transition-colors duration-200 ease-in-out ${
			$EnabledStore ? 'text-neutral-600' : ''
		}`}>Track</span
	>
	<Switch
		checked={$EnabledStore}
		on:change={(e) => EnabledStore.set(e.detail)}
		class={`bg-c-pink-500 relative inline-flex h-6 w-11 items-center rounded-full transform transition-all ease-in-out duration-200`}
	>
		<span
			class={` ${
				$EnabledStore ? 'translate-x-6' : 'translate-x-1'
			} inline-block h-4 w-4 rounded-full bg-white transform transition-all ease-in-out duration-200`}
		/>
	</Switch>
	<span
		class={`ml-2 transition-colors duration-200 ease-in-out ${
			$EnabledStore ? '' : 'text-neutral-600'
		}`}>Artist</span
	>
</div>
