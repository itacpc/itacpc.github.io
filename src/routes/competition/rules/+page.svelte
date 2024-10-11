<script>
	// @ts-nocheck
	import { base } from '$app/paths';
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	export let data;
</script>

<svelte:head>
	<title>Rules - ITACPC</title>
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

		<h2>
			Rules as of October 11th, 2024
		</h2>

		<ul class="list-disc">
			<li>
				The competition is open to students who are currently enrolled
				in a Laurea Triennale or Laurea Magistrale course in an Italian
				university.
			</li>

			<li>
				It's possible to participate either individually or as part of a
				team. A team should be formed by at least 1 and at most 3
				students. A team represents a university, therefore all members
				of the team must be enrolled at the same university. Please note
				that it's forbidden to collaborate with anyone who is not part
				of your team.
			</li>

			<li>
				The allowed programming languages for this edition are: C, C++,
				Python3, Java, JavaScript and Kotlin.
			</li>

			<li>
				During the contest, each team member can access the contest
				platform and submit independently, using their individual
				username and password, which will be provided via email (and
				will also be visible from the "My Profile" section of the Team
				Registration page) shortly before the start of the contest.
			</li>

			<li>
				Each problem is pass/fail. Participants are ranked by the number
				of solved problems, breaking ties by penalty (sum of time + 20
				minutes per wrong submission, for all solved problems). Time is
				rounded to minutes.
			</li>

			<li>
				It's permitted to use code snippets found online as long as the
				source is mentioned in the code (adding a comment with a URL is
				fine). Re-using an entire solution, for example, is not allowed.
			</li>
		</ul>
	</div>
</Content>
