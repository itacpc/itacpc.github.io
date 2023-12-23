<script>
	// @ts-nocheck
	import { base } from '$app/paths';
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	export let data;
</script>

<svelte:head>
	<title>ITACPC Rules</title>
</svelte:head>

<Hero>ITACPC Rules</Hero>

<Content>
	<div class="w-full max-w-4xl 2xl:max-w-7xl flex flex-col gap-8">
		TODO: rules
	</div>
</Content>
