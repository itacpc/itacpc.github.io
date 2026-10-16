<script>
	import { base } from '$app/paths';
	import Content from '$lib/components/page/Content.svelte';
</script>

<svelte:head>
	<title>ITACPC - Italian Collegiate Programming Contest</title>
</svelte:head>

<div class="w-full flex justify-center bg-base-200 border-b-[1.5px] border-base-300 shadow-sm z-10">
	<div class="max-w-3xl p-3">
		<div class="hero w-full h-20 xs:h-36 sm:h-48 md:h-64 lg:h-80 flex justify-start">
			<h1 class="font-mono text-xs xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-9 ml-1 xs:mt-14 xs:ml-3 sm:mt-16 sm:ml-4 md:mt-20 md:ml-5 lg:mt-24">
				italian<br>collegiate<br>programming<br>contest
			</h1>
		</div>
	</div>
</div>

<Content>
	<div class="w-full max-w-4xl text-lg flex flex-col px-2">
		<!-- <div class="card bg-green-100 shadow-xl mb-8">
			<div class="card-body">
				<h2 class="card-title">
					<span class="badge badge-lg bg-green-400">NEW</span>
					Problem analysis livestream
				</h2>
				<div class="flex flex-row items-center gap-2 text-justify">
					The livestream for ITACPC 2025 is now available!

					<span>
						<a class="btn btn-primary" href="https://www.youtube.com/live/qEZeY6D-y1E">Watch on YouTube</a>
					</span>
				</div>
			</div>
		</div> -->

		<!-- <div class="card bg-green-100 shadow-xl mb-8">
			<div class="card-body">
				<h2 class="card-title">
					<span class="badge badge-lg bg-green-400">NEW</span>
					Registration is open
				</h2>
				<div class="flex flex-row items-center gap-2 text-justify">
					The registration for ITACPC 2025 is now open!

					<span>
						<a class="btn btn-primary" href="https://teams25.itacpc.it/">Register here</a>
					</span>
				</div>
			</div>
		</div> -->

		<div class="alert alert-warning shadow-lg mb-8">
			<div class="flex flex-col gap-3 text-left leading-relaxed">
				<p class="m-0"><strong>This year's ITACPC edition will not take place.</strong></p>
				<p class="m-0">
					Dear ITACPC community,
				</p>
				<p class="m-0">
					We write to you after five years of competitions, stimulating problems, satisfactions, and a beautiful growth that has seen countless students and enthusiasts put themselves to the test in competitive programming.
				</p>
				<p class="m-0">
					Today we are writing to inform you that <strong>this year's edition of ITACPC will not take place</strong>.
				</p>
				<p class="m-0">
					Organizing a competition of this level requires a complex organizational machine and constant commitment. Unfortunately, the combination of two main factors leads us to make a pause for reflection:
				</p>
				<ul class="list-disc pl-6 m-0 space-y-1">
					<li><strong>Human resources and volunteers:</strong> the
					organization relies on the work of a team of volunteers.
					This year we were not able to reach the number of people
					needed to guarantee the standard and care that an event like
					ITACPC deserves.</li>
					<li><strong>The impact of Artificial Intelligence in online
					contests:</strong> the evolution of AI tools makes it
					extremely easy today to be guided in solving problems
					remotely. In a fully online format, it becomes increasingly
					difficult to value and compare transparently the work of
					those who solve tasks completely independently and on their
					own.</li>
				</ul>
				<p class="m-0">
					<strong>What does the future hold for ITACPC?</strong>
				</p>
				<p class="m-0">
					This is not a definitive goodbye, but a moment of
					transition. We are evaluating the possibility of
					reorganizing the competition in the future, rethinking it
					<strong>entirely in person</strong>, following the path of
					established formats such as <strong>SWERC</strong> and
					<strong>ICPC</strong>. A live event would not only guarantee
					fairness in the contest, but would also allow all of us to
					meet again and experience the true spirit of the competitive
					programming community.
				</p>
				<p class="m-0">
					We want to sincerely thank all the sponsors, problem
					setters, testers, and each of you who participated in and
					supported ITACPC over these 5 years.
				</p>
				<p class="m-0">
					We will continue to keep you updated through our <a
					href="https://t.me/itacpc" class="link link-primary"
					target="_blank">Telegram channel</a> and this website.
				</p>
				<p class="m-0">
					See you soon,<br />
					<i>The ITACPC Team</i>
				</p>
			</div>
		</div>

		<h2 class="text-2xl sm:divider">About ITACPC</h2>
		<div class="flex flex-col gap-2 text-justify">
			<p>
				The ITACPC is a <strong>team-based programming
				competition</strong> between Universities on a national-scale.
				It is inspired by the well-known
				<a href="https://icpc.global/" class="btn-link link-secondary"
				target="_blank">ICPC</a>
				competition, which is instead of global scale.
			</p>
			<p>
				If you never participated in a similar competition,
				<a href="{base}/competition/sample-problem" class="btn-link link-secondary">click here to see a sample problem</a>
			</p>
			<p>
				The competition contains typically around 10 problems, with
				varying degrees of difficulty. The available time to solve them
				is usually 4 hours.
			</p>
		</div>
		<h2 class="text-2xl sm:divider">Why participate?</h2>
		<div class="flex flex-col gap-2 text-justify">
			<p>
				Quoting from the "Mission" statement of ICPC:
			</p>

			<p class="italic">
				The International Collegiate Programming Contest (ICPC) provides
				college students with opportunities to interact with students
				from other universities and to sharpen and demonstrate their
				problem-solving, programming, and teamwork skills.  The contest
				provides a platform for industry, and academia to encourage and
				focus public attention on the next generation of computing
				professionals as they pursue excellence.
			</p>

			<p>
				In a similar way, the ITACPC aims to provide opportunities to
				students of <strong>Italian universities</strong> by having them
				compete on a <strong>national level</strong>. The winner team
				will be the Italian Champion in programming.
			</p>
		</div>

		<h2 class="text-2xl sm:divider">How to participate?</h2>
		<div class="flex flex-col gap-2 text-justify">
			<p>
				We recommend finding some fellow students who are also
				interested in participating (and that you get along with! 😄)
				and then use the registration form on this website to
				<strong>form a team</strong>. A few hours before the start of a
				contest, <strong>each member of your team will receive the
				username and password</strong> which you will use to access the
				contest platform and submit your solutions.
			</p>
		</div>

		<h2 class="text-2xl sm:divider">How does ITACPC relate to SWERC?</h2>
		<div class="flex flex-col gap-2 text-justify">
			<p>
				<a href="http://swerc.eu/">SWERC</a> is one of the different
				regional phases of the aforementioned ICPC competition. In order
				to qualify for ICPC, an Italian team must first win the SWERC
				competition.
			</p>

			<p>
				ITACPC is similar to SWERC because it's aimed at a "subset" of
				Universities, like SWERC. Participating or not participating in
				ITACPC has no direct consequence on the possibility of
				participating to SWERC. In fact, each university should choose
				whether to participate in SWERC or not, and which teams to
				sponsor and send to compete in SWERC.
			</p>

			<p>
				<strong>If an Italian University wishes to participate to
				SWERC</strong>, then it would surely be reasonable to use ITACPC
				as an opportunity to put its teams to the test, using the ITACPC
				ranking as a helpful tool to select which teams are <strong>the
				best of the University</strong> and thus deserve to go to SWERC.
			</p>
		</div>

		<!-- TODO: maybe we could add a section explaining why the website, task
		statements, etc are all in English instead of in Italian -->
	</div>
</Content>

<style>
	.hero {
		aspect-ratio: 2.3456;
		background: url(/images/logo/bg.png);
		background-repeat: no-repeat;
  		background-size: contain;
	}

	h2 {
		font-weight: bold;
		padding-top: 2rem;
		padding-bottom: 1rem;
	}
	h2:first-of-type {
		padding-top: 0 !important;
	}
</style>
