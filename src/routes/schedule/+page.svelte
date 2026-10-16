<script>
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import Date from './Date.svelte';
	import Description from '$lib/components/page/Description.svelte';
</script>

<svelte:head>
	<title>Schedule - ITACPC</title>
</svelte:head>

<Hero>Schedule</Hero>

<Content>
	<Description>
		The 2026 edition of ITACPC will not take place.
	</Description>
	<div class="max-w-xl w-full flex flex-col text-center gap-4">
		<div class="alert alert-warning shadow-lg">
			<div class="flex flex-col gap-1">
				<strong>Contest cancelled</strong>
				<span>
					We are not organizing ITACPC this year. Please check this website again for future announcements about the next edition.
				</span>
			</div>
		</div>
	</div>
</Content>
