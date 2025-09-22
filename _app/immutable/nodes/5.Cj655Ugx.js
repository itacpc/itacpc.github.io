import{s as v,a as d,h as w,d as l,c as h,k as m,t as y,g as C,e as T,b as x,i as P,j as I,n as k}from"../chunks/scheduler.jOzty4Yz.js";import{S as A,i as R,c as p,a as f,m as g,t as $,b,d as _}from"../chunks/index.Ddz2pc-A.js";import"../chunks/paths.DxUhZA9P.js";import{H}from"../chunks/Hero.DalCSULA.js";import{C as L}from"../chunks/Content.BgrFaKcB.js";function j(i){let t;return{c(){t=y("ITACPC Rules")},l(a){t=C(a,"ITACPC Rules")},m(a,s){m(a,t,s)},d(a){a&&l(t)}}}function M(i){let t,a=`<p>The rules of ITACPC are inspired by the <a href="https://icpc.global/regionals/rules" class="btn-link link-secondary" target="_blank">ICPC regional contest rules</a>
			with some changes and additions since it&#39;s an online contest.</p> <h2>Rules as of September 22th, 2025</h2> <ul class="list-disc"><li>The competition is open to students who are currently enrolled
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
				fine). Re-using an entire solution, for example, is not allowed.</li> <li>Using AI tools (like ChatGPT, GitHub Copilot, etc.) to
				automatically generate code is not allowed.</li> <li>The contest judges have final authority on all matters related
				to the contest, including deciding on any rule violations.</li></ul>`;return{c(){t=T("div"),t.innerHTML=a,this.h()},l(s){t=x(s,"DIV",{class:!0,"data-svelte-h":!0}),P(t)!=="svelte-4ijjma"&&(t.innerHTML=a),this.h()},h(){I(t,"class","w-full max-w-4xl 2xl:max-w-7xl flex flex-col gap-8")},m(s,n){m(s,t,n)},p:k,d(s){s&&l(t)}}}function S(i){let t,a,s,n,r;return a=new H({props:{$$slots:{default:[j]},$$scope:{ctx:i}}}),n=new L({props:{$$slots:{default:[M]},$$scope:{ctx:i}}}),{c(){t=d(),p(a.$$.fragment),s=d(),p(n.$$.fragment),this.h()},l(e){w("svelte-1adw3hk",document.head).forEach(l),t=h(e),f(a.$$.fragment,e),s=h(e),f(n.$$.fragment,e),this.h()},h(){document.title="Rules - ITACPC"},m(e,o){m(e,t,o),g(a,e,o),m(e,s,o),g(n,e,o),r=!0},p(e,[o]){const c={};o&1&&(c.$$scope={dirty:o,ctx:e}),a.$set(c);const u={};o&1&&(u.$$scope={dirty:o,ctx:e}),n.$set(u)},i(e){r||($(a.$$.fragment,e),$(n.$$.fragment,e),r=!0)},o(e){b(a.$$.fragment,e),b(n.$$.fragment,e),r=!1},d(e){e&&(l(t),l(s)),_(a,e),_(n,e)}}}class U extends A{constructor(t){super(),R(this,t,null,S,v,{})}}export{U as component};
