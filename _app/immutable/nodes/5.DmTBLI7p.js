import{s as v,a as d,h as w,d as l,c as f,k as m,t as y,g as C,e as x,b as T,i as P,j as I,n as k}from"../chunks/scheduler.BhmD_UjX.js";import{S as R,i as A,c as h,a as p,m as $,t as g,b,d as _}from"../chunks/index.2L2FXbiv.js";import"../chunks/paths.BCMMTu8R.js";import{H as L}from"../chunks/Hero.DEe2fJIa.js";import{C as H}from"../chunks/Content.CyWzGPHe.js";function M(i){let e;return{c(){e=y("ITACPC Rules")},l(a){e=C(a,"ITACPC Rules")},m(a,s){m(a,e,s)},d(a){a&&l(e)}}}function q(i){let e,a=`<p>The rules of ITACPC are inspired by the <a href="https://icpc.global/regionals/rules" class="btn-link link-secondary" target="_blank">ICPC regional contest rules</a>
			with some changes and additions since it&#39;s an online contest.</p> <h2>Rules as of October 11th, 2024</h2> <ul class="list-disc"><li>The competition is open to students who are currently enrolled
				in a Laurea Triennale or Laurea Magistrale course in an Italian
				university.</li> <li>It&#39;s possible to participate either individually or as part of a
				team. A team should be formed by at least 1 and at most 3
				students. A team represents a university, therefore all members
				of the team must be enrolled at the same university. Please note
				that it&#39;s forbidden to collaborate with anyone who is not part
				of your team.</li> <li>The allowed programming languages for this edition are: C, C++,
				Python3, Java, JavaScript and Kotlin.</li> <li>During the contest, each team member can access the contest
				platform and submit independently, using their individual
				username and password, which will be provided via email (and
				will also be visible from the &quot;My Profile&quot; section of the Team
				Registration page) shortly before the start of the contest.</li> <li>Each problem is pass/fail. Participants are ranked by the number
				of solved problems, breaking ties by penalty (sum of time + 20
				minutes per wrong submission, for all solved problems). Time is
				rounded to minutes.</li> <li>It&#39;s permitted to use code snippets found online as long as the
				source is mentioned in the code (adding a comment with a URL is
				fine). Re-using an entire solution, for example, is not allowed.</li></ul>`;return{c(){e=x("div"),e.innerHTML=a,this.h()},l(s){e=T(s,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1o642pc"&&(e.innerHTML=a),this.h()},h(){I(e,"class","w-full max-w-4xl 2xl:max-w-7xl flex flex-col gap-8")},m(s,n){m(s,e,n)},p:k,d(s){s&&l(e)}}}function S(i){let e,a,s,n,r;return a=new L({props:{$$slots:{default:[M]},$$scope:{ctx:i}}}),n=new H({props:{$$slots:{default:[q]},$$scope:{ctx:i}}}),{c(){e=d(),h(a.$$.fragment),s=d(),h(n.$$.fragment),this.h()},l(t){w("svelte-1adw3hk",document.head).forEach(l),e=f(t),p(a.$$.fragment,t),s=f(t),p(n.$$.fragment,t),this.h()},h(){document.title="Rules - ITACPC"},m(t,o){m(t,e,o),$(a,t,o),m(t,s,o),$(n,t,o),r=!0},p(t,[o]){const c={};o&2&&(c.$$scope={dirty:o,ctx:t}),a.$set(c);const u={};o&2&&(u.$$scope={dirty:o,ctx:t}),n.$set(u)},i(t){r||(g(a.$$.fragment,t),g(n.$$.fragment,t),r=!0)},o(t){b(a.$$.fragment,t),b(n.$$.fragment,t),r=!1},d(t){t&&(l(e),l(s)),_(a,t),_(n,t)}}}function D(i,e,a){let{data:s}=e;return i.$$set=n=>{"data"in n&&a(0,s=n.data)},[s]}class U extends R{constructor(e){super(),A(this,e,D,S,v,{data:0})}}export{U as component};
