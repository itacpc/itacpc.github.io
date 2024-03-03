<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	import Flag from './Flag.svelte';
	import Description from '$lib/components/page/Description.svelte';

	export let data;
</script>

<svelte:head>
	<title>Universities</title>
</svelte:head>

<Hero>Universities</Hero>
<Content>
	<Description>
		Here is the list of the participating universities with links to their websites.
	</Description>
	<div class="flex flex-col items-center w-full max-w-2xl gap-6">
		{#each data.universities as university}
			<div
				id={university.short_name}
				class="card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-md border border-base-300"
			>
				<figure
					class="md:flex-col-reverse min-w-fit justify-start items-start md:gap-4 p-8 pb-4 md:pb-8 md:pr-0"
				>
					<h1 class="card-title h-fit justify-center text-2xl">{university.name}</h1>
					<div
						class="divider divider-horizontal before:rounded-t-full after:rounded-b-full md:hidden"
					/>
					<div class="h-fit relative">
						<Flag {university} />
					</div>
				</figure>
				<div class="card-body w-full md:items-start justify-center gap-4 p-8 pt-0 md:pt-8 md:pl-0">
					<p>
						{university.name} first participated in
						<strong>ITACPC&nbsp;{university.earliest_participation}</strong>,
						and took part in {university.total_participations}
						edition{university.total_participations !== 1 ? 's' : ''}
						in total.
					</p>

					<div class="flex">
						{#each Array(university.total_gold_medals) as _, i}
							<img src="/images/medals/gold.png" alt="gold" class="h-9" />
						{/each}
						{#each Array(university.total_silver_medals) as _, i}
							<img src="/images/medals/silver.png" alt="silver" class="h-9" />
						{/each}
						{#each Array(university.total_bronze_medals) as _, i}
							<img src="/images/medals/bronze.png" alt="bronze" class="h-9" />
						{/each}
					</div>

					{#if university.website}
						<a class="h-auto py-2 btn-link link-secondary" href={university.website} target="_blank">
							University's website
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Content>
