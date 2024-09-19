import{s as ne,e as h,a as S,b as g,f as $,i as Z,d as c,c as I,j as m,W as T,k as z,l as r,w as B,Y as Le,n as W,H as xe,o as ke,Z as Ce,z as ce,A as ue,D as he,p as Se,t as me,g as fe,u as Ie,q as Me,r as qe}from"../chunks/scheduler.piR_H7nd.js";import{S as se,i as oe,c as ee,a as te,m as le,t as Y,b as G,d as ae}from"../chunks/index.C44RW9Sf.js";import{b as x}from"../chunks/paths.BdmzVwnP.js";import{p as Te}from"../chunks/stores.C1R0xTeG.js";const ze=!0,tt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ze},Symbol.toStringTag,{value:"Module"}));function De(s){window.addEventListener("click",e);function e(l){s.contains(l.target)||s.dispatchEvent(new CustomEvent("outsideclick"))}return{destroy(){window.removeEventListener("click",e)}}}function je(s){let e,l,d="Home",u,i,a,t,n="Competition",o,f,L,v,M="Tasks",k,j,y,D="Results",V,A,w,_,q,O="Rules",P,p,E,Q="Schedule",F,U,H,X="Universities",re,K,N,ge="Past editions",de,ve;return{c(){e=h("li"),l=h("a"),l.textContent=d,u=S(),i=h("li"),a=h("details"),t=h("summary"),t.textContent=n,o=S(),f=h("ul"),L=h("li"),v=h("a"),v.textContent=M,k=S(),j=h("li"),y=h("a"),y.textContent=D,V=S(),A=h("li"),w=S(),_=h("li"),q=h("a"),q.textContent=O,P=S(),p=h("li"),E=h("a"),E.textContent=Q,F=S(),U=h("li"),H=h("a"),H.textContent=X,re=S(),K=h("li"),N=h("a"),N.textContent=ge,this.h()},l(b){e=g(b,"LI",{});var C=$(e);l=g(C,"A",{href:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1uc19m6"&&(l.textContent=d),C.forEach(c),u=I(b),i=g(b,"LI",{});var J=$(i);a=g(J,"DETAILS",{});var ie=$(a);t=g(ie,"SUMMARY",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-9olvqq"&&(t.textContent=n),o=I(ie),f=g(ie,"UL",{class:!0});var R=$(f);L=g(R,"LI",{});var pe=$(L);v=g(pe,"A",{href:!0,"data-svelte-h":!0}),Z(v)!=="svelte-1vm96gq"&&(v.textContent=M),pe.forEach(c),k=I(R),j=g(R,"LI",{});var be=$(j);y=g(be,"A",{href:!0,"data-svelte-h":!0}),Z(y)!=="svelte-g8q2qa"&&(y.textContent=D),be.forEach(c),V=I(R),A=g(R,"LI",{}),$(A).forEach(c),w=I(R),_=g(R,"LI",{});var we=$(_);q=g(we,"A",{href:!0,class:!0,"data-svelte-h":!0}),Z(q)!=="svelte-s8v3na"&&(q.textContent=O),we.forEach(c),R.forEach(c),ie.forEach(c),J.forEach(c),P=I(b),p=g(b,"LI",{});var _e=$(p);E=g(_e,"A",{href:!0,"data-svelte-h":!0}),Z(E)!=="svelte-gyprcv"&&(E.textContent=Q),_e.forEach(c),F=I(b),U=g(b,"LI",{});var $e=$(U);H=g($e,"A",{href:!0,"data-svelte-h":!0}),Z(H)!=="svelte-1pkhau"&&(H.textContent=X),$e.forEach(c),re=I(b),K=g(b,"LI",{});var Ee=$(K);N=g(Ee,"A",{href:!0,"data-svelte-h":!0}),Z(N)!=="svelte-785jgb"&&(N.textContent=ge),Ee.forEach(c),this.h()},h(){var b;m(l,"href",x+"/"),T(l,"font-bold",s[1].route.id===`${x}/`),m(t,"class","svelte-volf8h"),T(t,"font-bold",(b=s[1].route.id)==null?void 0:b.includes(`${x}/competition`)),m(v,"href",x+"/competition/tasks/2023"),T(v,"font-bold",s[1].route.id===`${x}/competition/tasks/[year]`),m(y,"href",x+"/competition/results/2023"),T(y,"font-bold",s[1].route.id===`${x}/competition/results/[year]`),m(q,"href",x+"/competition/rules"),m(q,"class","gap-8 min-w-max"),T(q,"font-bold",s[1].route.id===`${x}/competition/rules`),m(f,"class","p-2"),m(E,"href",x+"/schedule"),T(E,"font-bold",s[1].route.id===`${x}/schedule`),m(H,"href",x+"/universities"),T(H,"font-bold",s[1].route.id===`${x}/universities`),m(N,"href",x+"/editions"),T(N,"font-bold",s[1].route.id===`${x}/editions`)},m(b,C){z(b,e,C),r(e,l),z(b,u,C),z(b,i,C),r(i,a),r(a,t),r(a,o),r(a,f),r(f,L),r(L,v),r(f,k),r(f,j),r(j,y),r(f,V),r(f,A),r(f,w),r(f,_),r(_,q),a.open=s[0],z(b,P,C),z(b,p,C),r(p,E),z(b,F,C),z(b,U,C),r(U,H),z(b,re,C),z(b,K,C),r(K,N),de||(ve=[B(l,"click",s[3]),B(v,"click",s[3]),B(y,"click",s[3]),B(q,"click",s[3]),B(a,"toggle",s[4]),Le(De.call(null,a)),B(a,"outsideclick",s[2]),B(E,"click",s[3]),B(H,"click",s[3]),B(N,"click",s[3])],de=!0)},p(b,[C]){var J;C&2&&T(l,"font-bold",b[1].route.id===`${x}/`),C&2&&T(t,"font-bold",(J=b[1].route.id)==null?void 0:J.includes(`${x}/competition`)),C&2&&T(v,"font-bold",b[1].route.id===`${x}/competition/tasks/[year]`),C&2&&T(y,"font-bold",b[1].route.id===`${x}/competition/results/[year]`),C&2&&T(q,"font-bold",b[1].route.id===`${x}/competition/rules`),C&1&&(a.open=b[0]),C&2&&T(E,"font-bold",b[1].route.id===`${x}/schedule`),C&2&&T(H,"font-bold",b[1].route.id===`${x}/universities`),C&2&&T(N,"font-bold",b[1].route.id===`${x}/editions`)},i:W,o:W,d(b){b&&(c(e),c(u),c(i),c(P),c(p),c(F),c(U),c(re),c(K)),de=!1,xe(ve)}}}function He(s,e,l){let d;ke(s,Te,o=>l(1,d=o));const u=Ce();let i=!1;function a(){l(0,i=!1)}function t(){l(0,i=!1),u("closeDrawer")}function n(){i=this.open,l(0,i)}return[i,d,a,t,n]}class Ae extends se{constructor(e){super(),oe(this,e,He,je,ne,{})}}var ye={exports:{}};(function(s,e){function l(){var a=document.querySelector("[data-toggle-theme]"),t=a?a.getAttribute("data-key"):null;(function(n=localStorage.getItem(t||"theme")){localStorage.getItem(t||"theme")&&(document.documentElement.setAttribute("data-theme",n),a&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(o=>{o.classList.add(a.getAttribute("data-act-class"))}))})(),a&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(n=>{n.addEventListener("click",function(){var o=n.getAttribute("data-toggle-theme");if(o){var f=o.split(",");document.documentElement.getAttribute("data-theme")==f[0]?f.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem(t||"theme")):(document.documentElement.setAttribute("data-theme",f[1]),localStorage.setItem(t||"theme",f[1])):(document.documentElement.setAttribute("data-theme",f[0]),localStorage.setItem(t||"theme",f[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(L=>{L.classList.toggle(this.getAttribute("data-act-class"))})})})}function d(){var a=document.querySelector("[data-set-theme='']"),t=a?a.getAttribute("data-key"):null;(function(n=localStorage.getItem(t||"theme")){if(n!=null&&n!="")if(localStorage.getItem(t||"theme")&&localStorage.getItem(t||"theme")!=""){document.documentElement.setAttribute("data-theme",n);var o=document.querySelector("[data-set-theme='"+n.toString()+"']");o&&([...document.querySelectorAll("[data-set-theme]")].forEach(f=>{f.classList.remove(f.getAttribute("data-act-class"))}),o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class")))}else{var o=document.querySelector("[data-set-theme='']");o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(n=>{n.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem(t||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(o=>{o.classList.remove(o.getAttribute("data-act-class"))}),n.getAttribute("data-act-class")&&n.classList.add(n.getAttribute("data-act-class"))})})}function u(){var a=document.querySelector("select[data-choose-theme]"),t=a?a.getAttribute("data-key"):null;(function(n=localStorage.getItem(t||"theme")){if(localStorage.getItem(t||"theme")){document.documentElement.setAttribute("data-theme",n);var o=document.querySelector("select[data-choose-theme] [value='"+n.toString()+"']");o&&[...document.querySelectorAll("select[data-choose-theme] [value='"+n.toString()+"']")].forEach(f=>{f.selected=!0})}})(),a&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(n=>{n.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem(t||"theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem(t||"theme")+"']")].forEach(o=>{o.selected=!0})})})}function i(a=!0){a===!0?document.addEventListener("DOMContentLoaded",function(t){l(),u(),d()}):(l(),u(),d())}s.exports={themeChange:i}})(ye);var Be=ye.exports;function Ze(s){let e,l,d,u,i,a,t,n,o,f;return{c(){e=h("label"),l=h("input"),d=S(),u=ce("svg"),i=ce("path"),a=S(),t=ce("svg"),n=ce("path"),this.h()},l(L){e=g(L,"LABEL",{class:!0});var v=$(e);l=g(v,"INPUT",{type:!0,"data-toggle-theme":!0}),d=I(v),u=ue(v,"svg",{class:!0,xmlns:!0,viewBox:!0});var M=$(u);i=ue(M,"path",{d:!0}),$(i).forEach(c),M.forEach(c),a=I(v),t=ue(v,"svg",{class:!0,xmlns:!0,viewBox:!0});var k=$(t);n=ue(k,"path",{d:!0}),$(n).forEach(c),k.forEach(c),v.forEach(c),this.h()},h(){m(l,"type","checkbox"),m(l,"data-toggle-theme","dark,light"),m(i,"d","M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"),m(u,"class","swap-on fill-current w-6 h-6"),m(u,"xmlns","http://www.w3.org/2000/svg"),m(u,"viewBox","0 0 24 24"),m(n,"d","M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"),m(t,"class","swap-off fill-current w-6 h-6"),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"viewBox","0 0 24 24"),m(e,"class","btn btn-ghost btn-circle swap swap-rotate")},m(L,v){z(L,e,v),r(e,l),l.checked=s[0],r(e,d),r(e,u),r(u,i),r(e,a),r(e,t),r(t,n),o||(f=B(l,"change",s[1]),o=!0)},p(L,[v]){v&1&&(l.checked=L[0])},i:W,o:W,d(L){L&&c(e),o=!1,f()}}}function Ve(s,e,l){let d=!1;he(()=>{Be.themeChange(!1),l(0,d=document.documentElement.dataset.theme=="dark")});function u(){d=this.checked,l(0,d)}return[d,u]}class Oe extends se{constructor(e){super(),oe(this,e,Ve,Ze,ne,{})}}function Ue(s){let e,l,d='<label for="menu-drawer" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-7 h-7 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>',u,i,a=`<a href="${x}/" class="btn h-full px-0 rounded-none btn-ghost bg-transparent hover:bg-transparent"><img src="${x}/images/logo/logo.png" alt="" class="h-8 sm:h-12"/></a>`,t,n,o,f,L,v,M,k,j,y,D,V,A,w,_,q,O,P;return f=new Ae({}),v=new Oe({}),_=new Ae({}),_.$on("closeDrawer",s[1]),{c(){e=h("div"),l=h("div"),l.innerHTML=d,u=S(),i=h("div"),i.innerHTML=a,t=S(),n=h("div"),o=h("ul"),ee(f.$$.fragment),L=S(),ee(v.$$.fragment),M=S(),k=h("input"),j=S(),y=h("div"),D=h("label"),V=S(),A=h("div"),w=h("ul"),ee(_.$$.fragment),this.h()},l(p){e=g(p,"DIV",{class:!0});var E=$(e);l=g(E,"DIV",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-16ozq0g"&&(l.innerHTML=d),u=I(E),i=g(E,"DIV",{class:!0,"data-svelte-h":!0}),Z(i)!=="svelte-1mxwx41"&&(i.innerHTML=a),t=I(E),n=g(E,"DIV",{class:!0});var Q=$(n);o=g(Q,"UL",{class:!0});var F=$(o);te(f.$$.fragment,F),F.forEach(c),Q.forEach(c),L=I(E),te(v.$$.fragment,E),E.forEach(c),M=I(p),k=g(p,"INPUT",{id:!0,type:!0,class:!0}),j=I(p),y=g(p,"DIV",{class:!0});var U=$(y);D=g(U,"LABEL",{for:!0,class:!0}),$(D).forEach(c),V=I(U),A=g(U,"DIV",{class:!0});var H=$(A);w=g(H,"UL",{class:!0});var X=$(w);te(_.$$.fragment,X),X.forEach(c),H.forEach(c),U.forEach(c),this.h()},h(){m(l,"class","flex-none lg:hidden"),m(i,"class","grow px-4 lg:pr-0 justify-center lg:justify-start"),m(o,"class","menu xl:menu-lg menu-horizontal gap-2"),m(n,"class","no-flex hidden lg:block"),m(e,"class","w-full navbar h-24 lg:sticky top-0 z-40 bg-base-300 px-2 md:px-4 py-3"),m(k,"id","menu-drawer"),m(k,"type","checkbox"),m(k,"class","drawer-toggle"),m(D,"for","menu-drawer"),m(D,"class","drawer-overlay"),m(w,"class","menu menu-lg p-4 gap-2"),m(A,"class","min-w-[80%] h-full fixed overflow-y-scroll bg-base-300"),m(y,"class","drawer-side z-50 lg:hidden")},m(p,E){z(p,e,E),r(e,l),r(e,u),r(e,i),r(e,t),r(e,n),r(n,o),le(f,o,null),r(e,L),le(v,e,null),z(p,M,E),z(p,k,E),k.checked=s[0],z(p,j,E),z(p,y,E),r(y,D),r(y,V),r(y,A),r(A,w),le(_,w,null),q=!0,O||(P=[B(k,"change",s[3]),B(k,"change",s[2])],O=!0)},p(p,[E]){E&1&&(k.checked=p[0])},i(p){q||(Y(f.$$.fragment,p),Y(v.$$.fragment,p),Y(_.$$.fragment,p),q=!0)},o(p){G(f.$$.fragment,p),G(v.$$.fragment,p),G(_.$$.fragment,p),q=!1},d(p){p&&(c(e),c(M),c(k),c(j),c(y)),ae(f),ae(v),ae(_),O=!1,xe(P)}}}function Pe(s,e,l){let d=!1;function u(){l(0,d=!1),i()}function i(){d?(document.body.style.position="fixed",document.body.style.overflow="hidden"):(document.body.style.position="unset",document.body.style.overflow="unset")}function a(){d=this.checked,l(0,d)}return[d,u,i,a]}class Ne extends se{constructor(e){super(),oe(this,e,Pe,Ue,ne,{})}}function Re(s){let e,l='<svg xmlns="http://www.w3.org/2000/svg" class="h-5 fill-neutral-content" viewBox="0 0 448 512"><path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"></path></svg>',d,u;return{c(){e=h("button"),e.innerHTML=l,this.h()},l(i){e=g(i,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1qyzyqu"&&(e.innerHTML=l),this.h()},h(){m(e,"class","z-50 fixed top-4 right-0 ml-auto btn btn-neutral btn-sm btn-square rounded-r-none lg:!hidden"),T(e,"hidden",s[0])},m(i,a){z(i,e,a),d||(u=B(e,"click",Fe),d=!0)},p(i,[a]){a&1&&T(e,"hidden",i[0])},i:W,o:W,d(i){i&&c(e),d=!1,u()}}}function Fe(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function Ke(s,e,l){let d=!0;function u(){document.body.scrollTop>600||document.documentElement.scrollTop>600?l(0,d=!1):l(0,d=!0)}return he(()=>{u(),window.onscroll=()=>{u()}}),[d]}class Ye extends se{constructor(e){super(),oe(this,e,Ke,Re,ne,{})}}function Ge(s){let e,l,d,u,i,a,t,n,o,f='<a class="email-hidden join-item btn btn-sm xs:btn-md btn-outline border-neutral normal-case" href="email" data-email="aW5mb0BpdGFjcGMuaXQ=">info</a> <a href="https://www.facebook.com/itacpc.it/" class="join-item origin-left btn btn-sm xs:btn-md btn-outline border-neutral bg-[#1877f2] hover:bg-[#094797]"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a> <a href="https://www.instagram.com/itacpc.it/" class="join-item origin-left btn btn-sm xs:btn-md btn-outline border-neutral bg-[#c13584] hover:bg-[#74204f]"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg></a> <a href="https://linkedin.com/company/itacpc" class="join-item origin-left btn btn-sm xs:btn-md btn-outline border-neutral bg-[#3b5998] hover:bg-[#23355b]"><svg xmlns="http://www.w3.org/2000/svg" class="rounded-none h-5 w-5 fill-white" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg></a>',L,v,M,k,j,y,D;l=new Ne({}),u=new Ye({});const V=s[2].default,A=Se(V,s,s[1],null);return{c(){e=h("div"),ee(l.$$.fragment),d=S(),ee(u.$$.fragment),i=S(),a=h("main"),A&&A.c(),t=S(),n=h("footer"),o=h("div"),o.innerHTML=f,L=S(),v=h("div"),M=h("p"),k=me("Copyright © "),j=me(s[0]),y=me(" - ITACPC"),this.h()},l(w){e=g(w,"DIV",{class:!0});var _=$(e);te(l.$$.fragment,_),d=I(_),te(u.$$.fragment,_),i=I(_),a=g(_,"MAIN",{class:!0});var q=$(a);A&&A.l(q),q.forEach(c),t=I(_),n=g(_,"FOOTER",{class:!0});var O=$(n);o=g(O,"DIV",{class:!0,"data-svelte-h":!0}),Z(o)!=="svelte-2bqxim"&&(o.innerHTML=f),L=I(O),v=g(O,"DIV",{});var P=$(v);M=g(P,"P",{class:!0});var p=$(M);k=fe(p,"Copyright © "),j=fe(p,s[0]),y=fe(p," - ITACPC"),p.forEach(c),P.forEach(c),O.forEach(c),_.forEach(c),this.h()},h(){m(a,"class","w-full grow flex flex-col items-center bg-base-100"),m(o,"class","join join-vertical w-full xs:w-fit xs:join-horizontal gap-0"),m(M,"class","opacity-90"),m(n,"class","footer gap-6 footer-center p-10 bg-base-300 text-base-content"),m(e,"class","min-h-screen w-full flex flex-col items-center")},m(w,_){z(w,e,_),le(l,e,null),r(e,d),le(u,e,null),r(e,i),r(e,a),A&&A.m(a,null),r(e,t),r(e,n),r(n,o),r(n,L),r(n,v),r(v,M),r(M,k),r(M,j),r(M,y),D=!0},p(w,[_]){A&&A.p&&(!D||_&2)&&Ie(A,V,w,w[1],D?qe(V,w[1],_,null):Me(w[1]),null)},i(w){D||(Y(l.$$.fragment,w),Y(u.$$.fragment,w),Y(A,w),D=!0)},o(w){G(l.$$.fragment,w),G(u.$$.fragment,w),G(A,w),D=!1},d(w){w&&c(e),ae(l),ae(u),A&&A.d(w)}}}function We(s,e,l){let{$$slots:d={},$$scope:u}=e,i=new Date().getFullYear();return he(()=>{const a=document.querySelector(".email-hidden");new IntersectionObserver(t=>{t.map(n=>{if(n.isIntersecting){let o=atob(n.target.dataset.email);n.target.href="mailto:"+o,n.target.innerHTML=o}})}).observe(a)}),s.$$set=a=>{"$$scope"in a&&l(1,u=a.$$scope)},[i,u,d]}class lt extends se{constructor(e){super(),oe(this,e,We,Ge,ne,{})}}export{lt as component,tt as universal};
