const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CSjNfCh0.js","../chunks/scheduler.BhmD_UjX.js","../chunks/index.2L2FXbiv.js","../chunks/paths.bsSEf6T1.js","../chunks/stores.DCd99J21.js","../chunks/entry.f7pGkgWv.js","../chunks/index.BHVJBHx_.js","../assets/0.BJ67Cu6r.css","../nodes/1.Cb4KrFc4.js","../nodes/2.CQkyz9dY.js","../chunks/Content.CyWzGPHe.js","../assets/2.DnikFfp7.css","../nodes/3.CrOq2-2F.js","../nodes/4.DnfMSiwt.js","../chunks/each.D6YF6ztN.js","../chunks/Hero.DEe2fJIa.js","../assets/4.Bv8iNrHR.css","../nodes/5.DjfFHsxp.js","../nodes/6.B0ANYYQg.js","../nodes/7.DjnTPDZY.js","../assets/7.C9aUo0mF.css","../nodes/8.C8WxsIFf.js","../nodes/10.Bs0dzQWD.js","../chunks/Description.D18PhNKm.js","../assets/10.DDBELK3m.css","../nodes/11.Cr5qQqWk.js"])))=>i.map(i=>d[i]);
import{s as C,a as N,B as h,c as q,k,d as g,X as U,V as W,e as z,b as X,f as Y,j as V,Y as d,t as Z,g as F,m as G,x as D,Z as R,W as H}from"../chunks/scheduler.BhmD_UjX.js";import{S as J,i as K,b as w,e as A,t as E,g as T,c as y,a as I,m as L,d as O}from"../chunks/index.2L2FXbiv.js";const Q="modulepreload",M=function(s,e){return new URL(s,e).href},S={},m=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=M(c,r),c in S)return;S[c]=!0;const a=c.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!r)for(let v=t.length-1;v>=0;v--){const P=t[v];if(P.href===c&&(!a||P.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const p=document.createElement("link");if(p.rel=a?"stylesheet":Q,a||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),a)return new Promise((v,P)=>{p.addEventListener("load",v),p.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function _(t){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t}return o.then(t=>{for(const i of t||[])i.status==="rejected"&&_(i.reason);return e().catch(_)})},se={};function $(s){let e,n,r;var o=s[1][0];function _(t,i){return{props:{data:t[3],form:t[2]}}}return o&&(e=R(o,_(s)),s[12](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&o!==(o=t[1][0])){if(e){T();const l=e;w(l.$$.fragment,1,0,()=>{O(l,1)}),A()}o?(e=R(o,_(t)),t[12](e),y(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(o){const l={};i&8&&(l.data=t[3]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&E(e.$$.fragment,t),r=!0)},o(t){e&&w(e.$$.fragment,t),r=!1},d(t){t&&g(n),s[12](null),e&&O(e,t)}}}function x(s){let e,n,r;var o=s[1][0];function _(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return o&&(e=R(o,_(s)),s[11](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&o!==(o=t[1][0])){if(e){T();const l=e;w(l.$$.fragment,1,0,()=>{O(l,1)}),A()}o?(e=R(o,_(t)),t[11](e),y(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(o){const l={};i&8&&(l.data=t[3]),i&8215&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)}},i(t){r||(e&&E(e.$$.fragment,t),r=!0)},o(t){e&&w(e.$$.fragment,t),r=!1},d(t){t&&g(n),s[11](null),e&&O(e,t)}}}function ee(s){let e,n,r;var o=s[1][1];function _(t,i){return{props:{data:t[4],form:t[2]}}}return o&&(e=R(o,_(s)),s[10](e)),{c(){e&&y(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),k(t,n,i),r=!0},p(t,i){if(i&2&&o!==(o=t[1][1])){if(e){T();const l=e;w(l.$$.fragment,1,0,()=>{O(l,1)}),A()}o?(e=R(o,_(t)),t[10](e),y(e.$$.fragment),E(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(o){const l={};i&16&&(l.data=t[4]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&E(e.$$.fragment,t),r=!0)},o(t){e&&w(e.$$.fragment,t),r=!1},d(t){t&&g(n),s[10](null),e&&O(e,t)}}}function j(s){let e,n=s[6]&&B(s);return{c(){e=z("div"),n&&n.c(),this.h()},l(r){e=X(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=Y(e);n&&n.l(o),o.forEach(g),this.h()},h(){V(e,"id","svelte-announcer"),V(e,"aria-live","assertive"),V(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(r,o){k(r,e,o),n&&n.m(e,null)},p(r,o){r[6]?n?n.p(r,o):(n=B(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&g(e),n&&n.d()}}}function B(s){let e;return{c(){e=Z(s[7])},l(n){e=F(n,s[7])},m(n,r){k(n,e,r)},p(n,r){r&128&&G(e,n[7])},d(n){n&&g(e)}}}function te(s){let e,n,r,o,_;const t=[x,$],i=[];function l(a,u){return a[1][1]?0:1}e=l(s),n=i[e]=t[e](s);let c=s[5]&&j(s);return{c(){n.c(),r=N(),c&&c.c(),o=h()},l(a){n.l(a),r=q(a),c&&c.l(a),o=h()},m(a,u){i[e].m(a,u),k(a,r,u),c&&c.m(a,u),k(a,o,u),_=!0},p(a,[u]){let b=e;e=l(a),e===b?i[e].p(a,u):(T(),w(i[b],1,1,()=>{i[b]=null}),A(),n=i[e],n?n.p(a,u):(n=i[e]=t[e](a),n.c()),E(n,1),n.m(r.parentNode,r)),a[5]?c?c.p(a,u):(c=j(a),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null)},i(a){_||(E(n),_=!0)},o(a){w(n),_=!1},d(a){a&&(g(r),g(o)),i[e].d(a),c&&c.d(a)}}}function ne(s,e,n){let{stores:r}=e,{page:o}=e,{constructors:_}=e,{components:t=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:c=null}=e;U(r.page.notify);let a=!1,u=!1,b=null;W(()=>{const f=r.page.subscribe(()=>{a&&(n(6,u=!0),H().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,a=!0),f});function p(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function v(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function P(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return s.$$set=f=>{"stores"in f&&n(8,r=f.stores),"page"in f&&n(9,o=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,i=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,c=f.data_1)},s.$$.update=()=>{s.$$.dirty&768&&r.page.set(o)},[t,_,i,l,c,a,u,b,r,o,p,v,P]}class ae extends J{constructor(e){super(),K(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const le=[()=>m(()=>import("../nodes/0.CSjNfCh0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),()=>m(()=>import("../nodes/1.Cb4KrFc4.js"),__vite__mapDeps([8,1,2,4,5,6,3]),import.meta.url),()=>m(()=>import("../nodes/2.CQkyz9dY.js"),__vite__mapDeps([9,1,2,3,10,11]),import.meta.url),()=>m(()=>import("../nodes/3.CrOq2-2F.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),()=>m(()=>import("../nodes/4.DnfMSiwt.js"),__vite__mapDeps([13,1,2,14,15,10,3,16]),import.meta.url),()=>m(()=>import("../nodes/5.DjfFHsxp.js"),__vite__mapDeps([17,1,2,3,15,10]),import.meta.url),()=>m(()=>import("../nodes/6.B0ANYYQg.js"),__vite__mapDeps([18,1,2,3,15,10]),import.meta.url),()=>m(()=>import("../nodes/7.DjnTPDZY.js"),__vite__mapDeps([19,1,2,14,3,15,10,4,5,6,20]),import.meta.url),()=>m(()=>import("../nodes/8.C8WxsIFf.js"),__vite__mapDeps([21,1,2,15,10,6,3]),import.meta.url),()=>m(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url),()=>m(()=>import("../nodes/10.Bs0dzQWD.js"),__vite__mapDeps([22,1,2,15,10,23,24]),import.meta.url),()=>m(()=>import("../nodes/11.Cr5qQqWk.js"),__vite__mapDeps([25,1,2,14,15,10,3,23]),import.meta.url)],ce=[],fe={"/":[2],"/404":[3],"/competition/results/[year]":[-5],"/competition/rules":[5],"/competition/sample-problem":[6],"/competition/tasks/[year]":[-8],"/editions":[-9],"/home":[-10],"/schedule":[10],"/universities":[-12]},_e={handleError:({error:s})=>{console.error(s)},reroute:()=>{}},ie=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{fe as dictionary,_e as hooks,se as matchers,le as nodes,ae as root,ce as server_loads};
