<script>
	// @ts-nocheck

	import { base } from '$app/paths';
	import Score from './Score.svelte';

	export let year;
	export let row;
	export let tasks;

	let flag;
	function error() {
		flag.src = `${base}/images/flags/.svg`;
	}

	let open;
</script>

<div class="card w-full bg-base-200 shadow-md border border-base-300">
	<div class="card-body p-6 gap-4">
		<h2 class="card-title flex items-start justify-between gap-4">
			<span class="font-bold text-2xl">
				#{row.Rank}
			</span>
			<span class="text-center grow text-xl">{row["Team"].name}</span>
			<a class="btn bg-gray-100 border-gray-300 flex items-center gap-x-1" href="{base}/universities#{row.University}">
				<img
					bind:this={flag}
					on:error={error}
					class="h-8 rounded-md"
					src="{base}/images/flags/{row.University}.png"
					alt={row.University}
				/>
				<span class="font-semibold text-xs uppercase">
					{row.University}
				</span>
			</a>
		</h2>
		<div class="flex flex-wrap gap-2">
			{#if row['Solved tasks']}
				<p class="text-lg flex items-center gap-2">
					Solved tasks:
					<span class="badge badge-neutral h-fit w-fit transition-none text-lg font-bold">
						{row['Solved tasks']}
					</span>
				</p>
			{/if}
			{#if row.Award}
				<p class="text-lg grow-0 flex items-center gap-1">
					Award:
					<img src="{base}/images/medals/{row.Award}.png" alt={row.Award} class="h-9" />
				</p>
			{/if}
		</div>
		<div class="collapse collapse-arrow bg-base-300">
			<input type="checkbox" bind:checked={open} />
			<div class="collapse-title font-medium h-fit text-lg">
				Solve time of attempted tasks:
			</div>
			<div class="collapse-content {open ? 'mt-2' : ''} flex flex-wrap gap-x-4 gap-y-6">
				{#each tasks as t, i}
					<a
						class="btn hover:bg-base-100 indicator grow normal-case"
						href="{base}/competition/tasks/{year}#{t.id}"
					>
						<Score score={row["Tasks"][i]} />
						{t.id}
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
