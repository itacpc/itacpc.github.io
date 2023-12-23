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
					{#if university.url}
						<a class="h-auto py-2 btn btn-secondary text-lg w-full normal-case" href={university.url}>
							University's website
						</a>
					{/if}

					{#if university?.national_referent?.email}
						<div class="divider m-0 mt-2 font-bold">
							<span class="-mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 fill-base-content"
									viewBox="0 0 512 512"
								>
									<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
									<path
										d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
									/>
								</svg>
							</span>
							National referent
						</div>
						<div class="w-full flex flex-wrap">
							<p class="text-lg text-center">
								{university.national_referent.name || ''},
								<a
									href="mailto:{university.national_referent.email || ''}"
									class="btn-link link-secondary font-semibold"
								>
									{university.national_referent.email || ''}
								</a>
							</p>
						</div>
					{/if}

					{#if university?.scientific_coordinator?.email}
						<div class="divider m-0 font-bold">
							<span class="-mr-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 fill-base-content"
									viewBox="0 0 512 512"
								>
									<!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
									<path
										d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
									/>
								</svg>
							</span>
							Scientific coordinator
						</div>
						<div class="w-full flex flex-wrap">
							<p class="text-lg text-center">
								{university.scientific_coordinator.name},
								<a
									href="mailto:{university.scientific_coordinator.email}"
									class="btn-link link-secondary font-semibold"
								>
									{university.scientific_coordinator.email}
								</a>
							</p>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Content>
