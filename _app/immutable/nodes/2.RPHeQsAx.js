import{s as v,a as h,e as f,h as C,d as l,c as d,b as u,i as g,j as x,k as c,n as b}from"../chunks/scheduler.piR_H7nd.js";import{S as w,i as y,c as I,a as _,m as T,t as P,b as $,d as k}from"../chunks/index.C44RW9Sf.js";import{b as S}from"../chunks/paths.B2X82I9m.js";import{C as W}from"../chunks/Content.CKxdvEWY.js";function E(m){let e,s=`<h2 class="text-2xl sm:divider svelte-c5nfw9">About ITACPC</h2> <div class="flex flex-col gap-2 text-justify"><p>The ITACPC is a <strong>team-based programming
				competition</strong> between Universities on a national-scale.
				It is inspired by the well-known
				<a href="https://icpc.global/" class="btn-link link-secondary" target="_blank">ICPC</a>
				competition, which is instead of global scale.</p> <p>If you never participated in a similar competition,
				<a href="${S}/competition/sample-problem" class="btn-link link-secondary">click here to see a sample problem</a></p> <p>The competition contains typically around 10 problems, with
				varying degrees of difficulty. The available time to solve them
				is usually 4 hours.</p></div> <h2 class="text-2xl sm:divider svelte-c5nfw9">Why participate?</h2> <div class="flex flex-col gap-2 text-justify"><p>Quoting from the &quot;Mission&quot; statement of ICPC:</p> <p class="italic">The International Collegiate Programming Contest (ICPC) provides
				college students with opportunities to interact with students
				from other universities and to sharpen and demonstrate their
				problem-solving, programming, and teamwork skills.  The contest
				provides a platform for industry, and academia to encourage and
				focus public attention on the next generation of computing
				professionals as they pursue excellence.</p> <p>In a similar way, the ITACPC aims to provide opportunities to
				students of <strong>Italian universities</strong> by having them
				compete on a <strong>national level</strong>. The winner team
				will be the Italian Champion in programming.</p></div> <h2 class="text-2xl sm:divider svelte-c5nfw9">How to participate?</h2> <div class="flex flex-col gap-2 text-justify"><p>We recommend finding some fellow students who are also
				interested in participating (and that you get along with! 😄)
				and then use the registration form on this website to
				<strong>form a team</strong>. A few hours before the start of a
				contest, <strong>each member of your team will receive the
				username and password</strong> which you will use to access the
				contest platform and submit your solutions.</p></div> <h2 class="text-2xl sm:divider svelte-c5nfw9">How does ITACPC relate to SWERC?</h2> <div class="flex flex-col gap-2 text-justify"><p><a href="http://swerc.eu/">SWERC</a> is one of the different
				regional phases of the aforementioned ICPC competition. In order
				to qualify for ICPC, an Italian team must first win the SWERC
				competition.</p> <p>ITACPC is similar to SWERC because it&#39;s aimed at a &quot;subset&quot; of
				Universities, like SWERC. Participating or not participating in
				ITACPC has no direct consequence on the possibility of
				participating to SWERC. In fact, each university should choose
				whether to participate in SWERC or not, and which teams to
				sponsor and send to compete in SWERC.</p> <p><strong>If an Italian University wishes to participate to
				SWERC</strong>, then it would surely be reasonable to use ITACPC
				as an opportunity to put its teams to the test, using the ITACPC
				ranking as a helpful tool to select which teams are <strong>the
				best of the University</strong> and thus deserve to go to SWERC.</p></div>`;return{c(){e=f("div"),e.innerHTML=s,this.h()},l(o){e=u(o,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1g2i77e"&&(e.innerHTML=s),this.h()},h(){x(e,"class","w-full max-w-4xl text-lg flex flex-col px-2")},m(o,n){c(o,e,n)},p:b,d(o){o&&l(e)}}}function A(m){let e,s,o='<div class="max-w-3xl p-3"><div class="hero w-full h-20 xs:h-36 sm:h-48 md:h-64 lg:h-80 flex justify-start svelte-c5nfw9"><h1 class="font-mono text-xs xs:text-xl sm:text-2xl md:text-4xl lg:text-5xl mt-9 ml-1 xs:mt-14 xs:ml-3 sm:mt-16 sm:ml-4 md:mt-20 md:ml-5 lg:mt-24">italian<br/>collegiate<br/>programming<br/>contest</h1></div></div>',n,i,r;return i=new W({props:{$$slots:{default:[E]},$$scope:{ctx:m}}}),{c(){e=h(),s=f("div"),s.innerHTML=o,n=h(),I(i.$$.fragment),this.h()},l(t){C("svelte-1anpopb",document.head).forEach(l),e=d(t),s=u(t,"DIV",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-u0esr3"&&(s.innerHTML=o),n=d(t),_(i.$$.fragment,t),this.h()},h(){document.title="Home",x(s,"class","w-full flex justify-center bg-base-200 border-b-[1.5px] border-base-300 shadow-sm z-10")},m(t,a){c(t,e,a),c(t,s,a),c(t,n,a),T(i,t,a),r=!0},p(t,[a]){const p={};a&1&&(p.$$scope={dirty:a,ctx:t}),i.$set(p)},i(t){r||(P(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){t&&(l(e),l(s),l(n)),k(i,t)}}}class M extends w{constructor(e){super(),y(this,e,null,A,v,{})}}export{M as component};
