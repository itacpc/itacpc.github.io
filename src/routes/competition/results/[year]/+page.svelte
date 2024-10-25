<script>
	// @ts-nocheck

	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import { base } from '$app/paths';
	import ResultCard from './ResultCard.svelte';

	export let data;

	function formatTime(solveTime) {
		if (solveTime == null) {
			return '-';
		}

		const hours = Math.floor(solveTime / 60);
		const minutes = `${solveTime % 60}`;
		return `${hours}:${minutes.padStart(2, '0')}`;
	}
</script>

<svelte:head>
	<title>{data.year} Results - ITACPC</title>
</svelte:head>

<Hero>ITACPC {data.year} Results</Hero>

<Content>
	<div class="gap-6 w-full flex-col flex md:hidden">
		{#each data.rows as row, i}
			<ResultCard year={data.year} {row} tasks={data.tasks.contest_tasks} />
		{/each}
	</div>

	<div class="overflow-x-auto w-full rounded-box hidden md:block">
		<table class="table w-fit mx-auto table-sm lg:table-md rounded-box bg-base-200">
			<thead>
				{#each data.headers as th}
					<th class="whitespace-break-spaces text-sm">
						{th}
					</th>
				{/each}
				{#each data.tasks.contest_tasks as task}
					<th class="whitespace-break-spaces text-sm">
						<a
							href="{base}/competition/tasks/{data.year}#{task.id}"
							class="whitespace-break-spaces link link-hover h-min"
						>
							{task.id}
						</a>
					</th>
				{/each}
			</thead>
			<tbody>
				{#each data.rows as row}
					<tr>
						{#each data.headers as header}
							{#if header == 'Award' && row.Award && row.Award != ''}
								<td>
									<div class="tooltip h-7" data-tip={row.Award}>
										<img
											class="w-7 h-7"
											src="{base}/images/medals/{row.Award}.png"
											alt={row.Award}
										/>
									</div>
								</td>
							{:else if header == 'Solved tasks'}
								<td>
									<span class="badge badge-neutral font-bold">
										{row[`${header}`]}
									</span>
								</td>
							{:else if header == 'Team'}
								<td class="left">
									<div class="collapse">
										<input type="checkbox" /> 
										<button class="collapse-title underline decoration-dotted">{row[`${header}`].name}</button>
										<ul class="collapse-content"> 
											{#each row[`${header}`].members as member}
												<li>{member}</li>
											{/each}
									  	</ul>
									</div>
								</td>
							{:else if header == 'University'}
								<td>
									<span class="tooltip cursor-help" data-tip={data.universityMap[row.University]}>
										<img
											class="w-12 h-12"
											src="{base}/images/flags/{row.University}.png"
											alt={data.universityMap[row.University]}
										/>
									</span>
									{#if row.univ_rank == 1}
										<span class="tooltip cursor-help absolute" data-tip="First team of this university">
											<img
												class="w-5 h-5"
												src="{base}/images/medals/first.png"
												alt="First team of this university"
											/>
										</span>
									{/if}
								</td>
							{:else}
								<td>
									{row[`${header}`]}
								</td>
							{/if}
						{/each}

						{#each row["Tasks"] as t}
						<td>
							{#if t[1] > 0}
								<span
									class="badge
										{t[1] > 0
											? (t[0] == null
												? 'badge-error'
												: 'badge-success')
											: ''}"
								>
									{formatTime(t[0])}
								</span><br>
								<span class="text-xs">
									{t[1]}
									tr{t[1] == 1 ? 'y' : 'ies'}
								</span>
							{/if}
						</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</Content>

<style>
	tr {
		border: none;
	}
	td {
		text-align: center;
	}
	.left {
		text-align: left !important;
	}
	td,
	th {
		color: hsl(var(--bc));
		border: 1px solid hsl(var(--b3));
	}
	thead th {
		border-top-width: 0;
	}
	tbody tr td:first-child {
		font-weight: bold;
	}
	tbody:last-child td {
		border-bottom: 0;
	}
	tbody tr td:first-child,
	thead th:first-child {
		border-left: 0;
	}
	tbody tr td:last-child,
	thead th:last-child {
		border-right: 0;
	}
</style>
