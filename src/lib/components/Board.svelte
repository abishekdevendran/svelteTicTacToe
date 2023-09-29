<script lang="ts">
	import Square from '$lib/components/Square.svelte';
	import toast from 'svelte-french-toast';

	type boardRow = [string, string, string];
	type board = [boardRow, boardRow, boardRow];
	let history: board[] = [];
	let board: board = [
		['', '', ''],
		['', '', ''],
		['', '', '']
	];
	let player = 'X';
	let winner = '';
	let turn = 0;
	$: if (turn === 9 && winner === '') {
		toast.success(`Game ends in a Draw`);
	}
	let isWin = (coords: [number, number]) => {
		const i = coords[0];
		const j = coords[1];
		const isValid = (i: number, j: number) => {
			return i >= 0 && i < 3 && j >= 0 && j < 3;
		};
		const isSame = (i: number, j: number) => {
			return board[i][j] === player;
		};
		// bruteforce check
		// check horizontal
		for (let k = 0; k < 3; k++) {
			let count = 0;
			for (let l = 0; l < 3; l++) {
				if (isValid(k, l) && isSame(k, l)) {
					count += 1;
				}
			}
			if (count === 3) {
				return true;
			}
			// check vertical
			for (let k = 0; k < 3; k++) {
				let count = 0;
				for (let l = 0; l < 3; l++) {
					if (isValid(l, k) && isSame(l, k)) {
						count += 1;
					}
				}
				if (count === 3) {
					return true;
				}
			}
		}
		// check both diagonals
		let count = 0;
		for (let k = 0; k < 3; k++) {
			if (isValid(k, k) && isSame(k, k)) {
				count += 1;
			}
		}
		if (count === 3) return true;
		count = 0;
		for (let k = 0; k < 3; k++) {
			if (isValid(k, 2 - k) && isSame(k, 2 - k)) {
				count += 1;
			}
		}
		if (count === 3) return true;
		return false;
	};
	let onClick = (coords: [number, number]) => {
		board[coords[0]][coords[1]] = player;
		board = board;
		if (isWin(coords)) {
			toast.success(`Winner: ${player}`);
			winner = player;
			return;
		}
		player = player === 'X' ? 'O' : 'X';
		turn += 1;
		history = [...history, structuredClone(board)];
	};
</script>

<p class="mb-6">turn: {turn}</p>
<div class="flex flex-col items-center justify-center gap-1 w-full max-w-lg aspect-square">
	{#each board as row, i}
		<div class="flex items-center justify-center gap-1 w-full h-full">
			{#each row as square, j}
				<Square
					value={square}
					onClick={() => onClick([i, j])}
					disabled={turn === 9 || winner !== ''}
				/>
			{/each}
		</div>
	{/each}
</div>
<div class="btn-group variant-filled my-6">
	<button
		disabled={history.length <= 0}
		class="btn"
		on:click={() => {
			if (history.length <= 0) return;
			history.pop();
			board = structuredClone(
				history.at(-1) ?? [
					['', '', ''],
					['', '', ''],
					['', '', '']
				]
			);
			player = player === 'X' ? 'O' : 'X';
			turn -= 1;
			winner = '';
			history = history;
		}}>Undo</button
	>
	<button
		disabled={turn === 0}
		class="btn"
		on:click={() => {
			board = [
				['', '', ''],
				['', '', ''],
				['', '', '']
			];
			player = 'X';
			turn = 0;
			winner = '';
			history = [];
		}}>Reset</button
	>
</div>
{#if turn === 9}
	<p>Game Over</p>
{:else if winner !== ''}
	<p>Winner: {winner}</p>
{/if}
