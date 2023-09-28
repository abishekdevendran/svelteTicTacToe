<script lang="ts">
	import Square from '$lib/components/Square.svelte';

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
	let onClick = (coords: [number, number]) => {
		board[coords[0]][coords[1]] = player;
		board = board;
		history = [...history, board];
    player = player === 'X' ? 'O' : 'X';
	};
</script>

<div class="flex flex-col items-center justify-center gap-1">
	{#each board as row, i}
		<div class="flex items-center justify-center gap-1">
			{#each row as square, j}
				<Square value={square} coords={[i, j]} {onClick} />
			{/each}
		</div>
	{/each}
</div>
