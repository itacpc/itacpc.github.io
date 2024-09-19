import{s as _,a as d,h as y,d as i,c as p,k as c,t as x,g as C,e as k,b as v,i as T,j as I,n as P}from"../chunks/scheduler.piR_H7nd.js";import{S as H,i as S,c as f,a as u,m as g,t as w,b,d as $}from"../chunks/index.C44RW9Sf.js";import"../chunks/paths.BdmzVwnP.js";import{H as K}from"../chunks/Hero.DMFQIGAm.js";import{C as N}from"../chunks/Content.CKxdvEWY.js";function A(r){let e;return{c(){e=x("ITACPC Sample Problem")},l(a){e=C(a,"ITACPC Sample Problem")},m(a,s){c(a,e,s)},d(a){a&&i(e)}}}function L(r){let e,a=`<p>In this page we will show you a sample problem that reflects the
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
					</pre></td></tr></table> <strong>Explanation of sample testcases:</strong>`;return{c(){e=k("div"),e.innerHTML=a,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-5688gt"&&(e.innerHTML=a),this.h()},h(){I(e,"class","w-full max-w-4xl 2xl:max-w-7xl flex flex-col gap-8")},m(s,o){c(s,e,o)},p:P,d(s){s&&i(e)}}}function M(r){let e,a,s,o,l;return a=new K({props:{$$slots:{default:[A]},$$scope:{ctx:r}}}),o=new N({props:{$$slots:{default:[L]},$$scope:{ctx:r}}}),{c(){e=d(),f(a.$$.fragment),s=d(),f(o.$$.fragment),this.h()},l(t){y("svelte-1cpilgf",document.head).forEach(i),e=p(t),u(a.$$.fragment,t),s=p(t),u(o.$$.fragment,t),this.h()},h(){document.title="ITACPC Sample Problem"},m(t,n){c(t,e,n),g(a,t,n),c(t,s,n),g(o,t,n),l=!0},p(t,[n]){const h={};n&2&&(h.$$scope={dirty:n,ctx:t}),a.$set(h);const m={};n&2&&(m.$$scope={dirty:n,ctx:t}),o.$set(m)},i(t){l||(w(a.$$.fragment,t),w(o.$$.fragment,t),l=!0)},o(t){b(a.$$.fragment,t),b(o.$$.fragment,t),l=!1},d(t){t&&(i(e),i(s)),$(a,t),$(o,t)}}}function G(r,e,a){let{data:s}=e;return r.$$set=o=>{"data"in o&&a(0,s=o.data)},[s]}class B extends H{constructor(e){super(),S(this,e,G,M,_,{data:0})}}export{B as component};
