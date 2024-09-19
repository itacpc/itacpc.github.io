import{s as Mt,e as E,b as A,j as m,v as wt,k as z,w as St,n as Z,d,x as Ut,a as P,h as Vt,c as L,t as I,g as T,f as M,y as nt,l as h,m as Y,i as kt}from"../chunks/scheduler.piR_H7nd.js";import{S as Pt,i as Lt,c as rt,a as ot,m as ct,t as N,b as J,d as ft,g as jt,e as Nt}from"../chunks/index.C44RW9Sf.js";import{e as j}from"../chunks/each.D6YF6ztN.js";import{H as qt}from"../chunks/Hero.DMFQIGAm.js";import{C as Gt}from"../chunks/Content.CKxdvEWY.js";import{b as bt}from"../chunks/paths.BdmzVwnP.js";import{D as Ft}from"../chunks/Description.Bog5llsy.js";function Rt(a){let t,l,e,n;return{c(){t=E("img"),this.h()},l(c){t=A(c,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){m(t,"class","w-20 md:w-32 rounded-md md:rounded-lg"),wt(t.src,l=bt+"/images/flags/"+a[0].short_name+".png")||m(t,"src",l),m(t,"alt","flag")},m(c,s){z(c,t,s),a[3](t),e||(n=St(t,"error",a[2]),e=!0)},p(c,[s]){s&1&&!wt(t.src,l=bt+"/images/flags/"+c[0].short_name+".png")&&m(t,"src",l)},i:Z,o:Z,d(c){c&&d(t),a[3](null),e=!1,n()}}}function Bt(a,t,l){let{university:e}=t,n;function c(){l(1,n.src=`${bt}/images/flags/.svg`,n)}function s(u){Ut[u?"unshift":"push"](()=>{n=u,l(1,n)})}return a.$$set=u=>{"university"in u&&l(0,e=u.university)},[e,n,c,s]}class Ot extends Pt{constructor(t){super(),Lt(this,t,Bt,Rt,Mt,{university:0})}}function Et(a,t,l){const e=a.slice();return e[1]=t[l],e}function At(a,t,l){const e=a.slice();return e[4]=t[l],e[6]=l,e}function Ht(a,t,l){const e=a.slice();return e[4]=t[l],e[6]=l,e}function Ct(a,t,l){const e=a.slice();return e[4]=t[l],e[6]=l,e}function Jt(a){let t;return{c(){t=I("Universities")},l(l){t=T(l,"Universities")},m(l,e){z(l,t,e)},d(l){l&&d(t)}}}function Kt(a){let t;return{c(){t=I("Here is the list of the participating universities with links to their websites.")},l(l){t=T(l,"Here is the list of the participating universities with links to their websites.")},m(l,e){z(l,t,e)},d(l){l&&d(t)}}}function It(a){let t,l='<img src="/images/medals/gold.png" alt="gold" class="h-9"/>';return{c(){t=E("span"),t.innerHTML=l,this.h()},l(e){t=A(e,"SPAN",{class:!0,"data-tip":!0,"data-svelte-h":!0}),kt(t)!=="svelte-10i7zfo"&&(t.innerHTML=l),this.h()},h(){m(t,"class","tooltip h-7"),m(t,"data-tip","gold")},m(e,n){z(e,t,n)},p:Z,d(e){e&&d(t)}}}function Tt(a){let t,l='<img src="/images/medals/silver.png" alt="silver" class="h-9"/>';return{c(){t=E("span"),t.innerHTML=l,this.h()},l(e){t=A(e,"SPAN",{class:!0,"data-tip":!0,"data-svelte-h":!0}),kt(t)!=="svelte-1vvz4qt"&&(t.innerHTML=l),this.h()},h(){m(t,"class","tooltip h-7"),m(t,"data-tip","silver")},m(e,n){z(e,t,n)},p:Z,d(e){e&&d(t)}}}function yt(a){let t,l='<img src="/images/medals/bronze.png" alt="bronze" class="h-9"/> ';return{c(){t=E("span"),t.innerHTML=l,this.h()},l(e){t=A(e,"SPAN",{class:!0,"data-tip":!0,"data-svelte-h":!0}),kt(t)!=="svelte-el1s16"&&(t.innerHTML=l),this.h()},h(){m(t,"class","tooltip h-7"),m(t,"data-tip","bronze")},m(e,n){z(e,t,n)},p:Z,d(e){e&&d(t)}}}function zt(a){let t,l,e;return{c(){t=E("a"),l=I("University's website"),this.h()},l(n){t=A(n,"A",{class:!0,href:!0,target:!0});var c=M(t);l=T(c,"University's website"),c.forEach(d),this.h()},h(){m(t,"class","h-auto py-2 btn-link link-secondary"),m(t,"href",e=a[1].website),m(t,"target","_blank")},m(n,c){z(n,t,c),h(t,l)},p(n,c){c&1&&e!==(e=n[1].website)&&m(t,"href",e)},d(n){n&&d(t)}}}function Dt(a){let t,l,e,n=a[1].name+"",c,s,u,o,f,g,v,H,y,K=a[1].name+"",x,ht,q,ut,Q=a[1].earliest_participation+"",tt,_t,W=a[1].total_participations+"",et,dt,X=a[1].total_participations!==1?"s":"",lt,mt,pt,C,st,it,gt,vt,at,S;g=new Ot({props:{university:a[1]}});let G=j(Array(a[1].total_gold_medals)),$=[];for(let i=0;i<G.length;i+=1)$[i]=It(Ct(a,G,i));let F=j(Array(a[1].total_silver_medals)),b=[];for(let i=0;i<F.length;i+=1)b[i]=Tt(Ht(a,F,i));let R=j(Array(a[1].total_bronze_medals)),k=[];for(let i=0;i<R.length;i+=1)k[i]=yt(At(a,R,i));let w=a[1].website&&zt(a);return{c(){t=E("div"),l=E("figure"),e=E("h1"),c=I(n),s=P(),u=E("div"),o=P(),f=E("div"),rt(g.$$.fragment),v=P(),H=E("div"),y=E("p"),x=I(K),ht=I(` first participated in
						`),q=E("strong"),ut=I("ITACPC "),tt=I(Q),_t=I(`,
						and took part in `),et=I(W),dt=I(`
						edition`),lt=I(X),mt=I(`
						in total.`),pt=P(),C=E("div");for(let i=0;i<$.length;i+=1)$[i].c();st=P();for(let i=0;i<b.length;i+=1)b[i].c();it=P();for(let i=0;i<k.length;i+=1)k[i].c();gt=P(),w&&w.c(),vt=P(),this.h()},l(i){t=A(i,"DIV",{id:!0,class:!0});var p=M(t);l=A(p,"FIGURE",{class:!0});var _=M(l);e=A(_,"H1",{class:!0});var r=M(e);c=T(r,n),r.forEach(d),s=L(_),u=A(_,"DIV",{class:!0}),M(u).forEach(d),o=L(_),f=A(_,"DIV",{class:!0});var V=M(f);ot(g.$$.fragment,V),V.forEach(d),_.forEach(d),v=L(p),H=A(p,"DIV",{class:!0});var B=M(H);y=A(B,"P",{});var U=M(y);x=T(U,K),ht=T(U,` first participated in
						`),q=A(U,"STRONG",{});var $t=M(q);ut=T($t,"ITACPC "),tt=T($t,Q),$t.forEach(d),_t=T(U,`,
						and took part in `),et=T(U,W),dt=T(U,`
						edition`),lt=T(U,X),mt=T(U,`
						in total.`),U.forEach(d),pt=L(B),C=A(B,"DIV",{class:!0});var O=M(C);for(let D=0;D<$.length;D+=1)$[D].l(O);st=L(O);for(let D=0;D<b.length;D+=1)b[D].l(O);it=L(O);for(let D=0;D<k.length;D+=1)k[D].l(O);O.forEach(d),gt=L(B),w&&w.l(B),B.forEach(d),vt=L(p),p.forEach(d),this.h()},h(){m(e,"class","card-title h-fit justify-center text-2xl"),m(u,"class","divider divider-horizontal before:rounded-t-full after:rounded-b-full md:hidden"),m(f,"class","h-fit relative"),m(l,"class","md:flex-col-reverse justify-start items-start md:gap-4 p-8 pb-4 md:pb-8 md:pr-0"),m(C,"class","flex"),m(H,"class","card-body w-full md:items-start justify-center gap-4 p-8 pt-0 md:pt-8 md:pl-0"),m(t,"id",at=a[1].short_name),m(t,"class","card md:card-side min-w-fit w-full justify-center gap-8 bg-base-200 shadow-md border border-base-300")},m(i,p){z(i,t,p),h(t,l),h(l,e),h(e,c),h(l,s),h(l,u),h(l,o),h(l,f),ct(g,f,null),h(t,v),h(t,H),h(H,y),h(y,x),h(y,ht),h(y,q),h(q,ut),h(q,tt),h(y,_t),h(y,et),h(y,dt),h(y,lt),h(y,mt),h(H,pt),h(H,C);for(let _=0;_<$.length;_+=1)$[_]&&$[_].m(C,null);h(C,st);for(let _=0;_<b.length;_+=1)b[_]&&b[_].m(C,null);h(C,it);for(let _=0;_<k.length;_+=1)k[_]&&k[_].m(C,null);h(H,gt),w&&w.m(H,null),h(t,vt),S=!0},p(i,p){(!S||p&1)&&n!==(n=i[1].name+"")&&Y(c,n);const _={};if(p&1&&(_.university=i[1]),g.$set(_),(!S||p&1)&&K!==(K=i[1].name+"")&&Y(x,K),(!S||p&1)&&Q!==(Q=i[1].earliest_participation+"")&&Y(tt,Q),(!S||p&1)&&W!==(W=i[1].total_participations+"")&&Y(et,W),(!S||p&1)&&X!==(X=i[1].total_participations!==1?"s":"")&&Y(lt,X),p&1){G=j(Array(i[1].total_gold_medals));let r;for(r=0;r<G.length;r+=1){const V=Ct(i,G,r);$[r]?$[r].p(V,p):($[r]=It(),$[r].c(),$[r].m(C,st))}for(;r<$.length;r+=1)$[r].d(1);$.length=G.length}if(p&1){F=j(Array(i[1].total_silver_medals));let r;for(r=0;r<F.length;r+=1){const V=Ht(i,F,r);b[r]?b[r].p(V,p):(b[r]=Tt(),b[r].c(),b[r].m(C,it))}for(;r<b.length;r+=1)b[r].d(1);b.length=F.length}if(p&1){R=j(Array(i[1].total_bronze_medals));let r;for(r=0;r<R.length;r+=1){const V=At(i,R,r);k[r]?k[r].p(V,p):(k[r]=yt(),k[r].c(),k[r].m(C,null))}for(;r<k.length;r+=1)k[r].d(1);k.length=R.length}i[1].website?w?w.p(i,p):(w=zt(i),w.c(),w.m(H,null)):w&&(w.d(1),w=null),(!S||p&1&&at!==(at=i[1].short_name))&&m(t,"id",at)},i(i){S||(N(g.$$.fragment,i),S=!0)},o(i){J(g.$$.fragment,i),S=!1},d(i){i&&d(t),ft(g),nt($,i),nt(b,i),nt(k,i),w&&w.d()}}}function Qt(a){let t,l,e,n;t=new Ft({props:{$$slots:{default:[Kt]},$$scope:{ctx:a}}});let c=j(a[0].universities),s=[];for(let o=0;o<c.length;o+=1)s[o]=Dt(Et(a,c,o));const u=o=>J(s[o],1,1,()=>{s[o]=null});return{c(){rt(t.$$.fragment),l=P(),e=E("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){ot(t.$$.fragment,o),l=L(o),e=A(o,"DIV",{class:!0});var f=M(e);for(let g=0;g<s.length;g+=1)s[g].l(f);f.forEach(d),this.h()},h(){m(e,"class","flex flex-col items-center w-full max-w-2xl gap-6")},m(o,f){ct(t,o,f),z(o,l,f),z(o,e,f);for(let g=0;g<s.length;g+=1)s[g]&&s[g].m(e,null);n=!0},p(o,f){const g={};if(f&512&&(g.$$scope={dirty:f,ctx:o}),t.$set(g),f&1){c=j(o[0].universities);let v;for(v=0;v<c.length;v+=1){const H=Et(o,c,v);s[v]?(s[v].p(H,f),N(s[v],1)):(s[v]=Dt(H),s[v].c(),N(s[v],1),s[v].m(e,null))}for(jt(),v=c.length;v<s.length;v+=1)u(v);Nt()}},i(o){if(!n){N(t.$$.fragment,o);for(let f=0;f<c.length;f+=1)N(s[f]);n=!0}},o(o){J(t.$$.fragment,o),s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)J(s[f]);n=!1},d(o){o&&(d(l),d(e)),ft(t,o),nt(s,o)}}}function Wt(a){let t,l,e,n,c;return l=new qt({props:{$$slots:{default:[Jt]},$$scope:{ctx:a}}}),n=new Gt({props:{$$slots:{default:[Qt]},$$scope:{ctx:a}}}),{c(){t=P(),rt(l.$$.fragment),e=P(),rt(n.$$.fragment),this.h()},l(s){Vt("svelte-4tr6kk",document.head).forEach(d),t=L(s),ot(l.$$.fragment,s),e=L(s),ot(n.$$.fragment,s),this.h()},h(){document.title="Universities"},m(s,u){z(s,t,u),ct(l,s,u),z(s,e,u),ct(n,s,u),c=!0},p(s,[u]){const o={};u&512&&(o.$$scope={dirty:u,ctx:s}),l.$set(o);const f={};u&513&&(f.$$scope={dirty:u,ctx:s}),n.$set(f)},i(s){c||(N(l.$$.fragment,s),N(n.$$.fragment,s),c=!0)},o(s){J(l.$$.fragment,s),J(n.$$.fragment,s),c=!1},d(s){s&&(d(t),d(e)),ft(l,s),ft(n,s)}}}function Xt(a,t,l){let{data:e}=t;return a.$$set=n=>{"data"in n&&l(0,e=n.data)},[e]}class ie extends Pt{constructor(t){super(),Lt(this,t,Xt,Wt,Mt,{data:0})}}export{ie as component};
