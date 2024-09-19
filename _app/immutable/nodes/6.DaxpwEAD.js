import{s as $,a as d,h as x,d as r,c as m,k as h,t as I,g as K,e as _,b as k,i as N,j as T,n as S}from"../chunks/scheduler.piR_H7nd.js";import{S as C,i as M,c as u,a as f,m as b,t as g,b as w,d as v}from"../chunks/index.C44RW9Sf.js";import{b as y}from"../chunks/paths.Cov1WV_x.js";import{H as P}from"../chunks/Hero.DMFQIGAm.js";import{C as A}from"../chunks/Content.CKxdvEWY.js";function R(n){let e;return{c(){e=I("ITACPC Sample Problem")},l(s){e=K(s,"ITACPC Sample Problem")},m(s,a){h(s,e,a)},d(s){s&&r(e)}}}function L(n){let e,s=`<p>In this page we will show you a sample problem that reflects the
			type of problems you will be asked to solve during a typical ITACPC
			round, and we will also present a possible solution implemented in
			Python, in Java and in C++. Remember that the tasks will always be
			presented in a random order (not in increasing order of difficulty!)
			so it&#39;s important to read all the tasks to find which tasks are the
			easiest; the amount of time that your team will take to solve the
			tasks will be counted towards the final ranking!</p> <h2 class="text-2xl">Scenic Walkway</h2> <h3 class="">Time Limit: 2 seconds — Memory Limit: 128 MiB</h3> <p>The managers of Gardaland Theme Park are building a new attraction,
			consisting of a sequence of <code>N</code> chambers of horrors, each located at a
			different height of <code>H[i]</code> meters. Together with the attraction, they
			also plan to build a scenic walkway following most of the chambers
			from the outside.</p> <p>In order to maximise the visibility of the new attraction, they need
			to carefully plan the altitude at which to build the walkway. For
			this reason they hired Giorgio, who calculated that it would be best
			if at least K chambers were clearly visible from the walkway. Given
			a set of chambers, define its spread as the difference between the
			highest and the lowest chamber in the set. Find the smallest
			possible spread for a set of K chambers!</p> <strong>Input:</strong> <p>The first line contains the two integers N and K. The second line
			contains <code>N</code> integers <code>H[i]</code>.</p> <strong>Output:</strong> <p>You need to write a single line with an integer: the smallest
			possible spread for a set of <code>K</code> chambers.</p> <strong>Constraints:</strong> <ul><li>2 ≤ K ≤ N ≤ 1,000,000</li> <li>0 ≤ H[i] ≤ 1,000,000 for each i=0…N-1</li></ul> <strong>Sample testcases:</strong> <table><tr><td><strong>Input:</strong> <pre>6 2
50 60 80 40 10 80
					</pre></td> <td><strong>Input:</strong> <pre>10 3
67 90 22 79 95 89 76 21 65 99
					</pre></td></tr> <tr><td><strong>Output:</strong> <pre>0
					</pre></td> <td><strong>Output:</strong> <pre>6
					</pre></td></tr></table> <strong>Explanation of sample testcases:</strong> <table><tr><td><p>In the first sample case it&#39;s possible to obtain a
						spread of 0 by choosing K=2 chambers that have the same
						heights: 80, 80.</p> <p>Clearly, this is the best result possible (we can&#39;t go
						below 0).</p></td> <td><img src="${y}/images/sample1.png" alt="Visualization of first sample"/></td></tr> <tr><td><p>In the second sample case it&#39;s not possible to obtain a
						spread of 0 because all the chambers have different
						heights.</p> <p>However, it&#39;s possible to reach a spread of 6 by
						choosing the chambers with heights: 90, 95, 89.</p> <p>We can see (e.g. by trying all of them) that there is no
						other set of K=3 chambers that can give us a spread of
						5, so the spread 6 is indeed optimal!</p></td> <td><img src="${y}/images/sample2.png" alt="Visualization of second sample"/></td></tr></table> <hr/> <h2 class="text-2xl">👇 Here is the Solution! 💡</h2> <p>An obvious solution would be to try all the possible sets of K
			elements. We will see that this solution is actually incredibly
			slow, and it also proves quite difficult to implement in languages
			such as C++ (in Python it&#39;s quite easy because of its rich standard
			library, see: itertools.combinations).</p> <p>As it usually happens, “obvious” solutions are often wrong (or too
			slow). In fact, here the number of possible combinations of K
			elements from a set of N elements can become huge. In the example
			above, with N=10 and K=3, we only have 120 possible combinations. If
			we increased to N=30 and K=15 we would have more than 150 million
			combinations! Solving such a testcase is probably still feasible
			within the time limit, but what&#39;s the worst possible testcase?</p> <p>From the “Constraints” section of the problem description (and from
			a quick look at Pascal&#39;s triangle) we can see that the worst
			possible case is when N=1000000 and K=500000. In that case, the
			number of combinations will be around 10<sup>301026</sup>, yes, that
			number is “1” followed by 301026 zeroes!</p> <p>For perspective, the observable universe is estimated to “only” have
			around 10<sup>80</sup> atoms.</p> <h2 class="text-xl">Let&#39;s do it faster!</h2> <p>Let&#39;s take the example with N=10 and the following heights (the
			solution, with spread 6, is marked):</p> <p>67, 90, 22, 79, 95, 89, 76, 21, 65, 99</p> <p>Let&#39;s sort the heights in increasing order (but we will see that
			also decreasing order is OK):</p> <p>21, 22, 65, 67, 76, 79, 89, 90, 95, 99</p> <p>Now that the numbers are sorted, we can easily see that it&#39;s never a
			good idea to choose K chambers which are not consecutive in the
			sorted array. Why is that? Well, because if we chose a
			non-consecutive set then it would obviously be possible to reduce
			its spread by replacing some chamber!</p> <p>This leads us to a much faster solution: just sort the numbers and
			then test all the (N-K+1) possible “windows” of K consecutive
			elements.</p> <h2 class="text-xl">Let&#39;s see some code!</h2> <h3>C++ Solution</h3> <pre>#include &lt;algorithm&gt;
#include &lt;iostream&gt;
#include &lt;vector&gt;
using namespace std;

int main() {
	int N, K;
	cin &gt;&gt; N &gt;&gt; K;

	vector&lt;int&gt; v(N);
	for (int i = 0; i &lt; N; ++i) {
		cin &gt;&gt; v[i];
	}

	sort(v.begin(), v.end());

	int best = 1000000000;
	for (int i = 0; i &lt; N - K + 1; ++i) {
		best = min(best, v[i + K - 1] - v[i]);
	}

	cout &lt;&lt; best &lt;&lt; endl;
}
		</pre> <p>In our tests, this solution runs in just under 0.5 seconds (and uses
			5 MiB of RAM) on the hardest testcases we have.</p> <h3>Python solution</h3> <pre>N, K = map(int, input().split())
v = list(map(int, input().split()))

v.sort()

best = 10**9
for i in range(N - K + 1):
	best = min(best, v[i + K - 1] - v[i])

print(best)
		</pre> <p>In our tests, this solution runs in just under 2 seconds (and uses
			118 MiB of RAM) on the hardest testcases we have.</p> <h3>Java solution</h3> <pre>import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Main  // class name should be &quot;Main&quot;
{
	public static void main(String[] args) throws IOException
	{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;

		// Read line #1
		st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken());
		int K = Integer.parseInt(st.nextToken());

		// Read line #2
		st = new StringTokenizer(br.readLine());
		int[] v = new int[N];
		for (int i = 0; i &lt; N; i++) {
			v[i] = Integer.parseInt(st.nextToken());
		}

		Arrays.sort(v);

		int best = 1000000000;
		for (int i = 0; i &lt; N - K + 1; i++) {
			best = Math.min(best, v[i + K - 1] - v[i]);
		}

		System.out.println(best);
	}
}
		</pre> <p>In our tests, this solution runs in about 1.5 seconds (and uses 104
			MiB of RAM) on the hardest testcases we have.</p>`;return{c(){e=_("div"),e.innerHTML=s,this.h()},l(a){e=k(a,"DIV",{class:!0,"data-svelte-h":!0}),N(e)!=="svelte-86ysth"&&(e.innerHTML=s),this.h()},h(){T(e,"class","w-full max-w-4xl 2xl:max-w-7xl flex flex-col gap-8")},m(a,o){h(a,e,o)},p:S,d(a){a&&r(e)}}}function j(n){let e,s,a,o,l;return s=new P({props:{$$slots:{default:[R]},$$scope:{ctx:n}}}),o=new A({props:{$$slots:{default:[L]},$$scope:{ctx:n}}}),{c(){e=d(),u(s.$$.fragment),a=d(),u(o.$$.fragment),this.h()},l(t){x("svelte-1cpilgf",document.head).forEach(r),e=m(t),f(s.$$.fragment,t),a=m(t),f(o.$$.fragment,t),this.h()},h(){document.title="ITACPC Sample Problem"},m(t,i){h(t,e,i),b(s,t,i),h(t,a,i),b(o,t,i),l=!0},p(t,[i]){const p={};i&2&&(p.$$scope={dirty:i,ctx:t}),s.$set(p);const c={};i&2&&(c.$$scope={dirty:i,ctx:t}),o.$set(c)},i(t){l||(g(s.$$.fragment,t),g(o.$$.fragment,t),l=!0)},o(t){w(s.$$.fragment,t),w(o.$$.fragment,t),l=!1},d(t){t&&(r(e),r(a)),v(s,t),v(o,t)}}}function H(n,e,s){let{data:a}=e;return n.$$set=o=>{"data"in o&&s(0,a=o.data)},[a]}class E extends C{constructor(e){super(),M(this,e,H,j,$,{data:0})}}export{E as component};
