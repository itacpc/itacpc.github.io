<script>
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import Date from './Date.svelte';
	import Description from '$lib/components/page/Description.svelte';
</script>

<svelte:head>
	<title>ITACPC Schedule</title>
</svelte:head>

<Hero>Schedule</Hero>

<Content>
	<Description>
		The schedule for ITACPC 2024 is not defined yet. Check back later!
	</Description>
	<!-- <div class="max-w-xl w-full flex flex-col text-center gap-4">
		<Date>
			<h2 slot="title">Warmup round</h2>
			<p slot="date">some date</p>
		</Date>
		<Date>
			<h2 slot="title">Final</h2>
			<p slot="date">some other date</p>
		</Date>
	</div> -->
</Content>

<style>
	h2 {
		font-weight: bold;
	}
</style>
