const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BkZG8kGD.js","../chunks/scheduler.jOzty4Yz.js","../chunks/index.Ddz2pc-A.js","../chunks/paths.BHtxeMJE.js","../chunks/stores.CfGfTOjx.js","../chunks/entry.rZwmTgpI.js","../chunks/index.Cvv8NYGd.js","../assets/0.DeNjAzFc.css","../nodes/1.2AoQ309Y.js","../nodes/2.D4pe4x6K.js","../chunks/Content.BgrFaKcB.js","../assets/2.DnikFfp7.css","../nodes/3.2trSVA96.js","../nodes/4.vooLCjI8.js","../chunks/each.D6YF6ztN.js","../chunks/Hero.DalCSULA.js","../assets/4.Bv8iNrHR.css","../nodes/5.DmdrW2Sc.js","../nodes/6.CneI1FHx.js","../nodes/7.B2k2BRxI.js","../assets/7.C9aUo0mF.css","../nodes/11.4OIS9aip.js","../nodes/17.D0pHaQsY.js","../chunks/Description.yEJdzLRv.js","../assets/17.DDBELK3m.css","../nodes/18.DUFzWFg8.js"])))=>i.map(i=>d[i]);
import{s as M,a as C,E as h,c as N,k as O,d as b,W as U,U as q,e as B,b as W,f as X,j as A,X as d,t as Y,g as F,m as G,x as V,Y as y,V as H}from"../chunks/scheduler.jOzty4Yz.js";import{S as J,i as K,b as g,e as S,t as v,g as L,c as T,a as D,m as k,d as R}from"../chunks/index.Ddz2pc-A.js";const Q="modulepreload",Z=function(s,e){return new URL(s,e).href},I={},f=function(e,r,n){let i=Promise.resolve();if(r&&r.length>0){const t=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),_=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(r.map(a=>{if(a=Z(a,n),a in I)return;I[a]=!0;const l=a.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(!!n)for(let P=t.length-1;P>=0;P--){const w=t[P];if(w.href===a&&(!l||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${m}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Q,l||(p.as="script"),p.crossOrigin="",p.href=a,_&&p.setAttribute("nonce",_),document.head.appendChild(p),l)return new Promise((P,w)=>{p.addEventListener("load",P),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${a}`)))})}))}function u(t){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=t,window.dispatchEvent(o),!o.defaultPrevented)throw t}return i.then(t=>{for(const o of t||[])o.status==="rejected"&&u(o.reason);return e().catch(u)})},me={};function $(s){let e,r,n;var i=s[1][0];function u(t,o){return{props:{data:t[3],form:t[2]}}}return i&&(e=y(i,u(s)),s[12](e)),{c(){e&&T(e.$$.fragment),r=h()},l(t){e&&D(e.$$.fragment,t),r=h()},m(t,o){e&&k(e,t,o),O(t,r,o),n=!0},p(t,o){if(o&2&&i!==(i=t[1][0])){if(e){L();const _=e;g(_.$$.fragment,1,0,()=>{R(_,1)}),S()}i?(e=y(i,u(t)),t[12](e),T(e.$$.fragment),v(e.$$.fragment,1),k(e,r.parentNode,r)):e=null}else if(i){const _={};o&8&&(_.data=t[3]),o&4&&(_.form=t[2]),e.$set(_)}},i(t){n||(e&&v(e.$$.fragment,t),n=!0)},o(t){e&&g(e.$$.fragment,t),n=!1},d(t){t&&b(r),s[12](null),e&&R(e,t)}}}function x(s){let e,r,n;var i=s[1][0];function u(t,o){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return i&&(e=y(i,u(s)),s[11](e)),{c(){e&&T(e.$$.fragment),r=h()},l(t){e&&D(e.$$.fragment,t),r=h()},m(t,o){e&&k(e,t,o),O(t,r,o),n=!0},p(t,o){if(o&2&&i!==(i=t[1][0])){if(e){L();const _=e;g(_.$$.fragment,1,0,()=>{R(_,1)}),S()}i?(e=y(i,u(t)),t[11](e),T(e.$$.fragment),v(e.$$.fragment,1),k(e,r.parentNode,r)):e=null}else if(i){const _={};o&8&&(_.data=t[3]),o&8215&&(_.$$scope={dirty:o,ctx:t}),e.$set(_)}},i(t){n||(e&&v(e.$$.fragment,t),n=!0)},o(t){e&&g(e.$$.fragment,t),n=!1},d(t){t&&b(r),s[11](null),e&&R(e,t)}}}function ee(s){let e,r,n;var i=s[1][1];function u(t,o){return{props:{data:t[4],form:t[2]}}}return i&&(e=y(i,u(s)),s[10](e)),{c(){e&&T(e.$$.fragment),r=h()},l(t){e&&D(e.$$.fragment,t),r=h()},m(t,o){e&&k(e,t,o),O(t,r,o),n=!0},p(t,o){if(o&2&&i!==(i=t[1][1])){if(e){L();const _=e;g(_.$$.fragment,1,0,()=>{R(_,1)}),S()}i?(e=y(i,u(t)),t[10](e),T(e.$$.fragment),v(e.$$.fragment,1),k(e,r.parentNode,r)):e=null}else if(i){const _={};o&16&&(_.data=t[4]),o&4&&(_.form=t[2]),e.$set(_)}},i(t){n||(e&&v(e.$$.fragment,t),n=!0)},o(t){e&&g(e.$$.fragment,t),n=!1},d(t){t&&b(r),s[10](null),e&&R(e,t)}}}function j(s){let e,r=s[6]&&z(s);return{c(){e=B("div"),r&&r.c(),this.h()},l(n){e=W(n,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=X(e);r&&r.l(i),i.forEach(b),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(n,i){O(n,e,i),r&&r.m(e,null)},p(n,i){n[6]?r?r.p(n,i):(r=z(n),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(n){n&&b(e),r&&r.d()}}}function z(s){let e;return{c(){e=Y(s[7])},l(r){e=F(r,s[7])},m(r,n){O(r,e,n)},p(r,n){n&128&&G(e,r[7])},d(r){r&&b(e)}}}function te(s){let e,r,n,i,u;const t=[x,$],o=[];function _(l,m){return l[1][1]?0:1}e=_(s),r=o[e]=t[e](s);let a=s[5]&&j(s);return{c(){r.c(),n=C(),a&&a.c(),i=h()},l(l){r.l(l),n=N(l),a&&a.l(l),i=h()},m(l,m){o[e].m(l,m),O(l,n,m),a&&a.m(l,m),O(l,i,m),u=!0},p(l,[m]){let E=e;e=_(l),e===E?o[e].p(l,m):(L(),g(o[E],1,1,()=>{o[E]=null}),S(),r=o[e],r?r.p(l,m):(r=o[e]=t[e](l),r.c()),v(r,1),r.m(n.parentNode,n)),l[5]?a?a.p(l,m):(a=j(l),a.c(),a.m(i.parentNode,i)):a&&(a.d(1),a=null)},i(l){u||(v(r),u=!0)},o(l){g(r),u=!1},d(l){l&&(b(n),b(i)),o[e].d(l),a&&a.d(l)}}}function re(s,e,r){let{stores:n}=e,{page:i}=e,{constructors:u}=e,{components:t=[]}=e,{form:o}=e,{data_0:_=null}=e,{data_1:a=null}=e;U(n.page.notify);let l=!1,m=!1,E=null;q(()=>{const c=n.page.subscribe(()=>{l&&(r(6,m=!0),H().then(()=>{r(7,E=document.title||"untitled page")}))});return r(5,l=!0),c});function p(c){V[c?"unshift":"push"](()=>{t[1]=c,r(0,t)})}function P(c){V[c?"unshift":"push"](()=>{t[0]=c,r(0,t)})}function w(c){V[c?"unshift":"push"](()=>{t[0]=c,r(0,t)})}return s.$$set=c=>{"stores"in c&&r(8,n=c.stores),"page"in c&&r(9,i=c.page),"constructors"in c&&r(1,u=c.constructors),"components"in c&&r(0,t=c.components),"form"in c&&r(2,o=c.form),"data_0"in c&&r(3,_=c.data_0),"data_1"in c&&r(4,a=c.data_1)},s.$$.update=()=>{s.$$.dirty&768&&n.page.set(i)},[t,u,o,_,a,l,m,E,n,i,p,P,w]}class pe extends J{constructor(e){super(),K(this,e,re,te,M,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const de=[()=>f(()=>import("../nodes/0.BkZG8kGD.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),()=>f(()=>import("../nodes/1.2AoQ309Y.js"),__vite__mapDeps([8,1,2,4,5,6,3]),import.meta.url),()=>f(()=>import("../nodes/2.D4pe4x6K.js"),__vite__mapDeps([9,1,2,3,10,11]),import.meta.url),()=>f(()=>import("../nodes/3.2trSVA96.js"),__vite__mapDeps([12,1,2,3]),import.meta.url),()=>f(()=>import("../nodes/4.vooLCjI8.js"),__vite__mapDeps([13,1,2,14,15,10,3,16]),import.meta.url),()=>f(()=>import("../nodes/5.DmdrW2Sc.js"),__vite__mapDeps([17,1,2,3,15,10]),import.meta.url),()=>f(()=>import("../nodes/6.CneI1FHx.js"),__vite__mapDeps([18,1,2,3,15,10]),import.meta.url),()=>f(()=>import("../nodes/7.B2k2BRxI.js"),__vite__mapDeps([19,1,2,14,3,15,10,4,5,6,20]),import.meta.url),()=>f(()=>Promise.resolve().then(()=>oe),void 0,import.meta.url),()=>f(()=>Promise.resolve().then(()=>ne),void 0,import.meta.url),()=>f(()=>Promise.resolve().then(()=>ie),void 0,import.meta.url),()=>f(()=>import("../nodes/11.4OIS9aip.js"),__vite__mapDeps([21,1,2,15,10,6,3]),import.meta.url),()=>f(()=>Promise.resolve().then(()=>se),void 0,import.meta.url),()=>f(()=>Promise.resolve().then(()=>le),void 0,import.meta.url),()=>f(()=>Promise.resolve().then(()=>_e),void 0,import.meta.url),()=>f(()=>Promise.resolve().then(()=>ae),void 0,import.meta.url),()=>f(()=>Promise.resolve().then(()=>ce),void 0,import.meta.url),()=>f(()=>import("../nodes/17.D0pHaQsY.js"),__vite__mapDeps([22,1,2,15,10,23,24]),import.meta.url),()=>f(()=>import("../nodes/18.DUFzWFg8.js"),__vite__mapDeps([25,1,2,14,15,10,3,23]),import.meta.url)],he=[],be={"/":[2],"/404":[3],"/competition/results/[year]":[-5],"/competition/rules":[5],"/competition/sample-problem":[6],"/competition/tasks/[year]":[-8],"/contact-us":[-9],"/contest-information":[-10],"/contest-rules":[-11],"/editions":[-12],"/home":[-13],"/past-editions":[-14],"/past-editions/itacpc-2021":[-15],"/past-editions/itacpc-2022":[-16],"/sample-problem":[-17],"/schedule":[17],"/universities":[-19]},ge={handleError:({error:s})=>{console.error(s)},reroute:()=>{}},oe=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),ne=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),ie=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),se=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),le=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),_e=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),ae=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),ce=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{be as dictionary,ge as hooks,me as matchers,de as nodes,pe as root,he as server_loads};