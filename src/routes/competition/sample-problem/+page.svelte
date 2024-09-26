<script>
	// @ts-nocheck
	import { base } from '$app/paths';
	import Hero from '$lib/components/page/Hero.svelte';
	import Content from '$lib/components/page/Content.svelte';

	export let data;
</script>

<svelte:head>
	<title>Sample Problem - ITACPC</title>
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

		<table>
			<tr>
				<td>
					<p>
						In the first sample case it's possible to obtain a
						spread of 0 by choosing K=2 chambers that have the same
						heights: 80, 80.
					</p>

					<p>
						Clearly, this is the best result possible (we can't go
						below 0).
					</p>
				</td>
				
				<td>
					<img src="{base}/images/sample1.png" alt="Visualization of first sample">
				</td>
			</tr>

			<tr>
				<td>
					<p>
						In the second sample case it's not possible to obtain a
						spread of 0 because all the chambers have different
						heights.
					</p>

					<p>
						However, it's possible to reach a spread of 6 by
						choosing the chambers with heights: 90, 95, 89.
					</p>

					<p>
						We can see (e.g. by trying all of them) that there is no
						other set of K=3 chambers that can give us a spread of
						5, so the spread 6 is indeed optimal!
					</p>
				</td>

				<td>
					<img src="{base}/images/sample2.png" alt="Visualization of second sample">
				</td>
			</tr>
		</table>

		<hr>

		<h2 class="text-2xl">👇 Here is the Solution! 💡</h2>

		<p>
			An obvious solution would be to try all the possible sets of K
			elements. We will see that this solution is actually incredibly
			slow, and it also proves quite difficult to implement in languages
			such as C++ (in Python it's quite easy because of its rich standard
			library, see: <a
			href="https://docs.python.org/3/library/itertools.html#itertools.combinations">itertools.combinations</a>).
		</p>

		<p>
			As it usually happens, “obvious” solutions are often wrong (or too
			slow). In fact, here the number of possible combinations of K
			elements from a set of N elements can become huge. In the example
			above, with N=10 and K=3, we only have 120 possible combinations. If
			we increased to N=30 and K=15 we would have more than 150 million
			combinations! Solving such a testcase is probably still feasible
			within the time limit, but what's the worst possible testcase?
		</p>

		<p>
			From the “Constraints” section of the problem description (and from
			a quick look at <a
			href="https://en.wikipedia.org/wiki/Pascal's_triangle">Pascal's
			triangle</a>) we can see that the worst possible case is when
			N=1000000 and K=500000. In that case, the number of combinations
			will be around 10<sup>301026</sup>, yes, that number is “1” followed
			by 301026 zeroes!
		</p>

		<p>
			For perspective, the observable universe is estimated to “only” have
			around 10<sup>80</sup> atoms.
		</p>

		<h2 class="text-xl">Let's do it faster!</h2>

		<p>
			Let's take the example with N=10 and the following heights (the
			solution, with spread 6, is marked):
		</p>

		<p>
			67, <strong>90</strong>, 22, 79, <strong>95, 89</strong>, 76, 21,
			65, 99
		</p>

		<p>
			Let's <strong>sort</strong> the heights in increasing order (but we
			will see that also decreasing order is OK):
		</p>

		<p>
			21, 22, 65, 67, 76, 79, 89, <strong>90, 95, 99</strong>
		</p>

		<p>
			Now that the numbers are sorted, we can easily see that it's never a
			good idea to choose K chambers which are not consecutive in the
			sorted array. Why is that? Well, because if we chose a
			non-consecutive set then it would obviously be possible to reduce
			its spread by replacing some chamber!
		</p>

		<p>
			This leads us to a much faster solution: just sort the numbers and
			then test all the (N-K+1) possible “windows” of K consecutive
			elements.
		</p>

		<h2 class="text-xl">Let's see some code!</h2>

		<h3>C++ Solution</h3>

		<pre>
&num;&#105;&#110;&#99;&#108;&#117;&#100;&#101;&#32;&lt;&#97;&#108;&#103;&#111;&#114;&#105;&#116;&#104;&#109;&gt;
&num;&#105;&#110;&#99;&#108;&#117;&#100;&#101;&#32;&lt;&#105;&#111;&#115;&#116;&#114;&#101;&#97;&#109;&gt;
&num;&#105;&#110;&#99;&#108;&#117;&#100;&#101;&#32;&lt;&#118;&#101;&#99;&#116;&#111;&#114;&gt;
&#117;&#115;&#105;&#110;&#103;&#32;&#110;&#97;&#109;&#101;&#115;&#112;&#97;&#99;&#101;&#32;&#115;&#116;&#100;&semi;

&#105;&#110;&#116;&#32;&#109;&#97;&#105;&#110;&lpar;&rpar;&#32;&lcub;
&Tab;&#105;&#110;&#116;&#32;&#78;&comma;&#32;&#75;&semi;
&Tab;&#99;&#105;&#110;&#32;&gt;&gt;&#32;&#78;&#32;&gt;&gt;&#32;&#75;&semi;

&Tab;&#118;&#101;&#99;&#116;&#111;&#114;&lt;&#105;&#110;&#116;&gt;&#32;&#118;&lpar;&#78;&rpar;&semi;
&Tab;&#102;&#111;&#114;&#32;&lpar;&#105;&#110;&#116;&#32;&#105;&#32;&equals;&#32;&#48;&semi;&#32;&#105;&#32;&lt;&#32;&#78;&semi;&#32;&plus;&plus;&#105;&rpar;&#32;&lcub;
&Tab;&Tab;&#99;&#105;&#110;&#32;&gt;&gt;&#32;&#118;&lsqb;&#105;&rsqb;&semi;
&Tab;&rcub;

&Tab;&#115;&#111;&#114;&#116;&lpar;&#118;&period;&#98;&#101;&#103;&#105;&#110;&lpar;&rpar;&comma;&#32;&#118;&period;&#101;&#110;&#100;&lpar;&rpar;&rpar;&semi;

&Tab;&#105;&#110;&#116;&#32;&#98;&#101;&#115;&#116;&#32;&equals;&#32;&#49;&#48;&#48;&#48;&#48;&#48;&#48;&#48;&#48;&#48;&semi;
&Tab;&#102;&#111;&#114;&#32;&lpar;&#105;&#110;&#116;&#32;&#105;&#32;&equals;&#32;&#48;&semi;&#32;&#105;&#32;&lt;&#32;&#78;&#32;&#45;&#32;&#75;&#32;&plus;&#32;&#49;&semi;&#32;&plus;&plus;&#105;&rpar;&#32;&lcub;
&Tab;&Tab;&#98;&#101;&#115;&#116;&#32;&equals;&#32;&#109;&#105;&#110;&lpar;&#98;&#101;&#115;&#116;&comma;&#32;&#118;&lsqb;&#105;&#32;&plus;&#32;&#75;&#32;&#45;&#32;&#49;&rsqb;&#32;&#45;&#32;&#118;&lsqb;&#105;&rsqb;&rpar;&semi;
&Tab;&rcub;

&Tab;&#99;&#111;&#117;&#116;&#32;&lt;&lt;&#32;&#98;&#101;&#115;&#116;&#32;&lt;&lt;&#32;&#101;&#110;&#100;&#108;&semi;
&rcub;
		</pre>

		<p>
			In our tests, this solution runs in just under 0.5 seconds (and uses
			5 MiB of RAM) on the hardest testcases we have.
		</p>

		<h3>Python solution</h3>

		<pre>
&#78;&comma;&#32;&#75;&#32;&equals;&#32;&#109;&#97;&#112;&lpar;&#105;&#110;&#116;&comma;&#32;&#105;&#110;&#112;&#117;&#116;&lpar;&rpar;&period;&#115;&#112;&#108;&#105;&#116;&lpar;&rpar;&rpar;
&#118;&#32;&equals;&#32;&#108;&#105;&#115;&#116;&lpar;&#109;&#97;&#112;&lpar;&#105;&#110;&#116;&comma;&#32;&#105;&#110;&#112;&#117;&#116;&lpar;&rpar;&period;&#115;&#112;&#108;&#105;&#116;&lpar;&rpar;&rpar;&rpar;

&#118;&period;&#115;&#111;&#114;&#116;&lpar;&rpar;

&#98;&#101;&#115;&#116;&#32;&equals;&#32;&#49;&#48;&ast;&ast;&#57;
&#102;&#111;&#114;&#32;&#105;&#32;&#105;&#110;&#32;&#114;&#97;&#110;&#103;&#101;&lpar;&#78;&#32;&#45;&#32;&#75;&#32;&plus;&#32;&#49;&rpar;&colon;
&Tab;&#98;&#101;&#115;&#116;&#32;&equals;&#32;&#109;&#105;&#110;&lpar;&#98;&#101;&#115;&#116;&comma;&#32;&#118;&lsqb;&#105;&#32;&plus;&#32;&#75;&#32;&#45;&#32;&#49;&rsqb;&#32;&#45;&#32;&#118;&lsqb;&#105;&rsqb;&rpar;

&#112;&#114;&#105;&#110;&#116;&lpar;&#98;&#101;&#115;&#116;&rpar;
		</pre>

		<p>
			In our tests, this solution runs in just under 2 seconds (and uses
			118 MiB of RAM) on the hardest testcases we have.
		</p>

		<h3>Java solution</h3>

		<pre>
&#105;&#109;&#112;&#111;&#114;&#116;&#32;&#106;&#97;&#118;&#97;&period;&#105;&#111;&period;&#66;&#117;&#102;&#102;&#101;&#114;&#101;&#100;&#82;&#101;&#97;&#100;&#101;&#114;&semi;
&#105;&#109;&#112;&#111;&#114;&#116;&#32;&#106;&#97;&#118;&#97;&period;&#105;&#111;&period;&#73;&#79;&#69;&#120;&#99;&#101;&#112;&#116;&#105;&#111;&#110;&semi;
&#105;&#109;&#112;&#111;&#114;&#116;&#32;&#106;&#97;&#118;&#97;&period;&#105;&#111;&period;&#73;&#110;&#112;&#117;&#116;&#83;&#116;&#114;&#101;&#97;&#109;&#82;&#101;&#97;&#100;&#101;&#114;&semi;
&#105;&#109;&#112;&#111;&#114;&#116;&#32;&#106;&#97;&#118;&#97;&period;&#117;&#116;&#105;&#108;&period;&#65;&#114;&#114;&#97;&#121;&#115;&semi;
&#105;&#109;&#112;&#111;&#114;&#116;&#32;&#106;&#97;&#118;&#97;&period;&#117;&#116;&#105;&#108;&period;&#83;&#116;&#114;&#105;&#110;&#103;&#84;&#111;&#107;&#101;&#110;&#105;&#122;&#101;&#114;&semi;

&#112;&#117;&#98;&#108;&#105;&#99;&#32;&#99;&#108;&#97;&#115;&#115;&#32;&#77;&#97;&#105;&#110;&#32;&#32;&sol;&sol;&#32;&#99;&#108;&#97;&#115;&#115;&#32;&#110;&#97;&#109;&#101;&#32;&#115;&#104;&#111;&#117;&#108;&#100;&#32;&#98;&#101;&#32;&quot;&#77;&#97;&#105;&#110;&quot;
&lcub;
&Tab;&#112;&#117;&#98;&#108;&#105;&#99;&#32;&#115;&#116;&#97;&#116;&#105;&#99;&#32;&#118;&#111;&#105;&#100;&#32;&#109;&#97;&#105;&#110;&lpar;&#83;&#116;&#114;&#105;&#110;&#103;&lsqb;&rsqb;&#32;&#97;&#114;&#103;&#115;&rpar;&#32;&#116;&#104;&#114;&#111;&#119;&#115;&#32;&#73;&#79;&#69;&#120;&#99;&#101;&#112;&#116;&#105;&#111;&#110;
&Tab;&lcub;
&Tab;&Tab;&#66;&#117;&#102;&#102;&#101;&#114;&#101;&#100;&#82;&#101;&#97;&#100;&#101;&#114;&#32;&#98;&#114;&#32;&equals;&#32;&#110;&#101;&#119;&#32;&#66;&#117;&#102;&#102;&#101;&#114;&#101;&#100;&#82;&#101;&#97;&#100;&#101;&#114;&lpar;&#110;&#101;&#119;&#32;&#73;&#110;&#112;&#117;&#116;&#83;&#116;&#114;&#101;&#97;&#109;&#82;&#101;&#97;&#100;&#101;&#114;&lpar;&#83;&#121;&#115;&#116;&#101;&#109;&period;&#105;&#110;&rpar;&rpar;&semi;
&Tab;&Tab;&#83;&#116;&#114;&#105;&#110;&#103;&#84;&#111;&#107;&#101;&#110;&#105;&#122;&#101;&#114;&#32;&#115;&#116;&semi;

&Tab;&Tab;&sol;&sol;&#32;&#82;&#101;&#97;&#100;&#32;&#108;&#105;&#110;&#101;&#32;&num;&#49;
&Tab;&Tab;&#115;&#116;&#32;&equals;&#32;&#110;&#101;&#119;&#32;&#83;&#116;&#114;&#105;&#110;&#103;&#84;&#111;&#107;&#101;&#110;&#105;&#122;&#101;&#114;&lpar;&#98;&#114;&period;&#114;&#101;&#97;&#100;&#76;&#105;&#110;&#101;&lpar;&rpar;&rpar;&semi;
&Tab;&Tab;&#105;&#110;&#116;&#32;&#78;&#32;&equals;&#32;&#73;&#110;&#116;&#101;&#103;&#101;&#114;&period;&#112;&#97;&#114;&#115;&#101;&#73;&#110;&#116;&lpar;&#115;&#116;&period;&#110;&#101;&#120;&#116;&#84;&#111;&#107;&#101;&#110;&lpar;&rpar;&rpar;&semi;
&Tab;&Tab;&#105;&#110;&#116;&#32;&#75;&#32;&equals;&#32;&#73;&#110;&#116;&#101;&#103;&#101;&#114;&period;&#112;&#97;&#114;&#115;&#101;&#73;&#110;&#116;&lpar;&#115;&#116;&period;&#110;&#101;&#120;&#116;&#84;&#111;&#107;&#101;&#110;&lpar;&rpar;&rpar;&semi;

&Tab;&Tab;&sol;&sol;&#32;&#82;&#101;&#97;&#100;&#32;&#108;&#105;&#110;&#101;&#32;&num;&#50;
&Tab;&Tab;&#115;&#116;&#32;&equals;&#32;&#110;&#101;&#119;&#32;&#83;&#116;&#114;&#105;&#110;&#103;&#84;&#111;&#107;&#101;&#110;&#105;&#122;&#101;&#114;&lpar;&#98;&#114;&period;&#114;&#101;&#97;&#100;&#76;&#105;&#110;&#101;&lpar;&rpar;&rpar;&semi;
&Tab;&Tab;&#105;&#110;&#116;&lsqb;&rsqb;&#32;&#118;&#32;&equals;&#32;&#110;&#101;&#119;&#32;&#105;&#110;&#116;&lsqb;&#78;&rsqb;&semi;
&Tab;&Tab;&#102;&#111;&#114;&#32;&lpar;&#105;&#110;&#116;&#32;&#105;&#32;&equals;&#32;&#48;&semi;&#32;&#105;&#32;&lt;&#32;&#78;&semi;&#32;&#105;&plus;&plus;&rpar;&#32;&lcub;
&Tab;&Tab;&Tab;&#118;&lsqb;&#105;&rsqb;&#32;&equals;&#32;&#73;&#110;&#116;&#101;&#103;&#101;&#114;&period;&#112;&#97;&#114;&#115;&#101;&#73;&#110;&#116;&lpar;&#115;&#116;&period;&#110;&#101;&#120;&#116;&#84;&#111;&#107;&#101;&#110;&lpar;&rpar;&rpar;&semi;
&Tab;&Tab;&rcub;

&Tab;&Tab;&#65;&#114;&#114;&#97;&#121;&#115;&period;&#115;&#111;&#114;&#116;&lpar;&#118;&rpar;&semi;

&Tab;&Tab;&#105;&#110;&#116;&#32;&#98;&#101;&#115;&#116;&#32;&equals;&#32;&#49;&#48;&#48;&#48;&#48;&#48;&#48;&#48;&#48;&#48;&semi;
&Tab;&Tab;&#102;&#111;&#114;&#32;&lpar;&#105;&#110;&#116;&#32;&#105;&#32;&equals;&#32;&#48;&semi;&#32;&#105;&#32;&lt;&#32;&#78;&#32;&#45;&#32;&#75;&#32;&plus;&#32;&#49;&semi;&#32;&#105;&plus;&plus;&rpar;&#32;&lcub;
&Tab;&Tab;&Tab;&#98;&#101;&#115;&#116;&#32;&equals;&#32;&#77;&#97;&#116;&#104;&period;&#109;&#105;&#110;&lpar;&#98;&#101;&#115;&#116;&comma;&#32;&#118;&lsqb;&#105;&#32;&plus;&#32;&#75;&#32;&#45;&#32;&#49;&rsqb;&#32;&#45;&#32;&#118;&lsqb;&#105;&rsqb;&rpar;&semi;
&Tab;&Tab;&rcub;

&Tab;&Tab;&#83;&#121;&#115;&#116;&#101;&#109;&period;&#111;&#117;&#116;&period;&#112;&#114;&#105;&#110;&#116;&#108;&#110;&lpar;&#98;&#101;&#115;&#116;&rpar;&semi;
&Tab;&rcub;
&rcub;
		</pre>

		<p>
			In our tests, this solution runs in about 1.5 seconds (and uses 104
			MiB of RAM) on the hardest testcases we have.
		</p>
	</div>
</Content>
