<script lang="ts">
	export let value = '';
	export let onClick: () => void;
  export let disabled = false;
</script>

<button
	type="button"
	class={`btn aspect-aquare w-full h-full rounded-lg ${value === 'X' ? 'bg-red-600' : ''} ${
		value === 'O' ? 'bg-blue-600' : ''
	} ${
		value === '' ? 'bg-white' : ''
	} transition-all duration-300 transform hover:scale-95 text-7xl font-extrabold`}
	on:click={onClick}
	disabled={value !== '' || disabled}>{value}</button
>
