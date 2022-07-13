<script lang="ts">
	export let val = 0;
	export let name: string;
	export let emptyValue: string;
	export let fullValue: string;
</script>

<div class="mb-4 border-b-[1px] border-white/50 py-2">
	<p class="text-sm">{name}</p>
	<input
		bind:value={val}
		type="range"
		min="0"
		max="100"
		class="range range-primary range-xs my-2"
	/>
	<div class="flex items-center justify-between">
		<p class="text-xs text-pink-500">
			{emptyValue}
		</p>
		<p class="text-xs text-pink-500">{fullValue}</p>
	</div>
</div>
