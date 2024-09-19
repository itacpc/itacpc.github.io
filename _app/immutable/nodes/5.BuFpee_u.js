import{s as v,a as d,h as w,d as l,c as f,k as c,t as C,g as y,e as x,b as T,i as P,j as I,n as q}from"../chunks/scheduler.piR_H7nd.js";import{S as k,i as R,c as p,a as h,m as g,t as $,b,d as _}from"../chunks/index.C44RW9Sf.js";import"../chunks/paths.vqf1Wp_t.js";import{H as A}from"../chunks/Hero.DMFQIGAm.js";import{C as L}from"../chunks/Content.CKxdvEWY.js";function H(i){let e;return{c(){e=C("ITACPC Rules")},l(a){e=y(a,"ITACPC Rules")},m(a,s){c(a,e,s)},d(a){a&&l(e)}}}function M(i){let e,a=`<p>The rules of ITACPC are inspired by the <a href="https://icpc.global/regionals/rules" class="btn-link link-secondary" target="_blank">ICPC regional contest rules</a>
			with some changes and additions since it&#39;s an online contest.</p> <p>Rules as of 15/11/2022:</p> <ul class="list-disc"><li>You can participate either individually or as part of a team.
				Each team should be formed by at least 1 and at most 3 eligible
				students. Please note that it&#39;s forbidden to collaborate with
				people who are not part of your team.</li> <li>A student is eligible if he or she is currently enrolled in a
				Laurea Triennale or Laurea Magistrale course in an Italian
				university.</li> <li>The allowed programming languages for this edition are: C, C++,
				Python3, Java, JavaScript and Kotlin.</li> <li>During the contest, each of the team members can access the
				contest platform and submit independently, using their
				individual username and password, which will be provided via
				email (and will also be visible from the &quot;My Profile&quot; section of
				the Team Registration page) shortly before the start of the
				contest.</li> <li>Each problem is pass/fail. Participants are ranked by the number
				of solved problems, breaking ties by penalty (sum of time + 20
				minutes per wrong submission, for all solved problems). Time is
				rounded to minutes.</li> <li>It&#39;s permitted to use code snippets found online, as long as the
				&quot;source&quot; is mentioned in the source code: adding a comment with
				a URL is fine. It&#39;s not allowed to re-use full solutions.</li></ul>`;return{c(){e=x("div"),e.innerHTML=a,this.h()},l(s){e=T(s,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1qjtqnq"&&(e.innerHTML=a),this.h()},h(){I(e,"class","w-full max-w-4xl 2xl:max-w-7xl flex flex-col gap-8")},m(s,n){c(s,e,n)},p:q,d(s){s&&l(e)}}}function E(i){let e,a,s,n,r;return a=new A({props:{$$slots:{default:[H]},$$scope:{ctx:i}}}),n=new L({props:{$$slots:{default:[M]},$$scope:{ctx:i}}}),{c(){e=d(),p(a.$$.fragment),s=d(),p(n.$$.fragment),this.h()},l(t){w("svelte-8zrnoz",document.head).forEach(l),e=f(t),h(a.$$.fragment,t),s=f(t),h(n.$$.fragment,t),this.h()},h(){document.title="ITACPC Rules"},m(t,o){c(t,e,o),g(a,t,o),c(t,s,o),g(n,t,o),r=!0},p(t,[o]){const m={};o&2&&(m.$$scope={dirty:o,ctx:t}),a.$set(m);const u={};o&2&&(u.$$scope={dirty:o,ctx:t}),n.$set(u)},i(t){r||($(a.$$.fragment,t),$(n.$$.fragment,t),r=!0)},o(t){b(a.$$.fragment,t),b(n.$$.fragment,t),r=!1},d(t){t&&(l(e),l(s)),_(a,t),_(n,t)}}}function S(i,e,a){let{data:s}=e;return i.$$set=n=>{"data"in n&&a(0,s=n.data)},[s]}class U extends k{constructor(e){super(),R(this,e,S,E,v,{data:0})}}export{U as component};
