<script lang="ts">
	import Board from '$lib/components/Board.svelte';
	import { createQuery } from '@tanstack/svelte-query';
	import { browser } from '$app/environment';
	import { edenFetch } from '@elysiajs/eden';
	import type { App } from '../../server/src/index';
	import { WsState, Messages, send } from '$lib/stores/ws';

	let inputField: HTMLInputElement;
	let msg = '';
	const api = edenFetch<App>('/api');
	const query = createQuery({
		queryKey: ['app'],
		queryFn: async () => {
			const { data, error } = await api('/', {});
			if (error) throw error;
			return data;
		},
		enabled: browser
	});
</script>

<svelte:head>
	<title>Tic-Tac-Toe</title>
</svelte:head>
<div class="flex justify-center items-center w-full h-full flex-col">
	<Board />
	{#if $query.isLoading}
		Loading...
	{/if}
	{#if $query.error}
		An error has occurred:
		{$query.error}
	{/if}
	{#if $query.isSuccess}
		<pre>data: {JSON.stringify($query.data)}</pre>
	{/if}
	<div>
		{#each $Messages as message (message)}
			<div>{message}</div>
		{/each}
	</div>
	{#if !$WsState.ready}
		<div>Connecting...</div>
	{:else}
		<form
			class="flex gap-2"
			on:submit={(e) => {
				e.preventDefault();
				$send(msg);
				msg = '';
				inputField.focus();
			}}
		>
			<input class="input" type="text" bind:value={msg} bind:this={inputField} />
			<button class="btn variant-filled-primary" type="submit">Send</button>
		</form>
	{/if}
</div>
