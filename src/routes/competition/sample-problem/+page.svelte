<script>
	// @ts-nocheck
	import { base } from '$app/paths';
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	export let data;
</script>

<svelte:head>
	<title>ITACPC Sample Problem</title>
</svelte:head>

<Hero>ITACPC Sample Problem</Hero>

<Content>
	<div class="w-full max-w-4xl 2xl:max-w-7xl flex flex-col gap-8">
		<p>
			In this page we will show you a sample problem that reflects the
			type of problems you will be asked to solve during a typical ITACPC
			round, and we will also present a possible solution implemented in
			Python, in Java and in C++. Remember that the tasks will always be
			presented in a random order (not in increasing order of difficulty!)
			so it's important to read all the tasks to find which tasks are the
			easiest; the amount of time that your team will take to solve the
			tasks will be counted towards the final ranking!
		</p>
		
		<h2 class="text-2xl">Scenic Walkway</h2>
		<h3 class="">Time Limit: 2 seconds — Memory Limit: 128 MiB</h3>

		<p>
			The managers of Gardaland Theme Park are building a new attraction,
			consisting of a sequence of <code>N</code> chambers of horrors, each located at a
			different height of <code>H[i]</code> meters. Together with the attraction, they
			also plan to build a scenic walkway following most of the chambers
			from the outside.
		</p>

		<p>
			In order to maximise the visibility of the new attraction, they need
			to carefully plan the altitude at which to build the walkway. For
			this reason they hired Giorgio, who calculated that it would be best
			if at least K chambers were clearly visible from the walkway. Given
			a set of chambers, define its spread as the difference between the
			highest and the lowest chamber in the set. Find the smallest
			possible spread for a set of K chambers!
		</p>

		<strong>Input:</strong>
		
		<p>
			The first line contains the two integers N and K. The second line
			contains <code>N</code> integers <code>H[i]</code>.
		</p>

		<strong>Output:</strong>

		<p>
			You need to write a single line with an integer: the smallest
			possible spread for a set of <code>K</code> chambers.
		</p>

		<strong>Constraints:</strong>

		<ul>
			<li>2 ≤ K ≤ N ≤ 1,000,000</li>
			<li>0 ≤ H[i] ≤ 1,000,000 for each i=0…N-1</li>
		</ul>

		<strong>Sample testcases:</strong>

		<table>
			<tr>
				<td>
					<strong>Input:</strong>
					<pre>
6 2
50 60 80 40 10 80
					</pre>
				</td>
				<td>
					<strong>Input:</strong>
					<pre>
10 3
67 90 22 79 95 89 76 21 65 99
					</pre>
				</td>
			</tr>
			<tr>
				<td>
					<strong>Output:</strong>
					<pre>
0
					</pre>
				</td>
				<td>
					<strong>Output:</strong>
					<pre>
6
					</pre>
				</td>
			</tr>
		</table>

		<strong>Explanation of sample testcases:</strong>

		
	</div>
</Content>
