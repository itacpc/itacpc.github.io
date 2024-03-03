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
		<p>
			The rules of ITACPC are inspired by the <a
			href="https://icpc.global/regionals/rules" class="btn-link
			link-secondary" target="_blank">ICPC regional contest rules</a>
			with some changes and additions since it's an online contest.
		</p>

		<p>
			Rules as of 15/11/2022:
		</p>

		<ul class="list-disc">
			<li>
				You can participate either individually or as part of a team.
				Each team should be formed by at least 1 and at most 3 eligible
				students. Please note that it's forbidden to collaborate with
				people who are not part of your team.
			</li>

			<li>
				A student is eligible if he or she is currently enrolled in a
				Laurea Triennale or Laurea Magistrale course in an Italian
				university.
			</li>

			<li>
				The allowed programming languages for this edition are: C, C++,
				Python3, Java, JavaScript and Kotlin.
			</li>

			<li>
				During the contest, each of the team members can access the
				contest platform and submit independently, using their
				individual username and password, which will be provided via
				email (and will also be visible from the "My Profile" section of
				the Team Registration page) shortly before the start of the
				contest.
			</li>

			<li>
				Each problem is pass/fail. Participants are ranked by the number
				of solved problems, breaking ties by penalty (sum of time + 20
				minutes per wrong submission, for all solved problems). Time is
				rounded to minutes.
			</li>

			<li>
				It's permitted to use code snippets found online, as long as the
				"source" is mentioned in the source code: adding a comment with
				a URL is fine. It's not allowed to re-use full solutions.
			</li>
		</ul>
	</div>
</Content>
