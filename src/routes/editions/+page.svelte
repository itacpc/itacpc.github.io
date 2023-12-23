<script>
	// @ts-nocheck
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';
	import AccordionItem from './AccordionItem.svelte';

	import { galleries } from '$lib/stores';

	export let data;
	$galleries = data.galleries;
</script>

<svelte:head>
	<title>Past editions</title>
</svelte:head>

<Hero>Past editions of ITACPC</Hero>

<Content>
	<div class="join join-vertical w-full max-w-2xl shadow-md rounded-box">
		<!-- Use the `year` property -->
		<!-- optional: To display a flag, use the `flag="filename"` property (svg files inside images/flags) -->
		<AccordionItem year="2023">
			<p slot="title">
				December 2nd, 2023
			</p>
		</AccordionItem>
		<AccordionItem year="2022">
			<p slot="title">
				November 26th, 2022
			</p>
		</AccordionItem>
		<AccordionItem year="2021">
			<p slot="title">
				January 12th, 2022
			</p>
		</AccordionItem>
	</div>
</Content>
