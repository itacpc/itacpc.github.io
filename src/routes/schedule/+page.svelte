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
		You can find the schedule for ITACPC 2024 below.
	</Description>
	<div class="max-w-xl w-full flex flex-col text-center gap-4">
		<Date>
			<h2 slot="title">Registration</h2>
			<p slot="date">
				Closed on October 18th, 11:59 PM
			</p>
			<p slot="other">
				<a class="btn btn-primary rounded-full mt-4" href="https://teams24.itacpc.it/">
					View teams and get your contest access credentials
				</a>
			</p>
		</Date>

		<Date>
			<h2 slot="title">Contest</h2>
			<p slot="date">October 19th, 9:00 AM - 1:00 PM (4 hours)</p>
			<p slot="other">
				<a class="btn btn-secondary rounded-full mt-4" href="https://judge24.itacpc.it/">
					Access the contest platform
				</a>
			</p>
		</Date>
	</div>
</Content>

<style>
	h2 {
		font-weight: bold;
	}
</style>
