import{l as T,L as Y,M as N,N as Z,O as M,P as z,j as E,i as A,Q as O,R as G,T as H,V as I,W as V,q as J,p as K,h as U,c as X,X as tt,Y as et,Z as nt}from"./runtime.DuYAxQZy.js";function rt(e){console.warn("hydration_mismatch")}let u=!1;function x(e){u=e}let p=null,l;function $(e){p=e,l=e&&e[0]}function _(e){if(e.nodeType!==8)return e;var t=e;if(t.data!==T)return e;for(var n=[],a=0;(t=t.nextSibling)!==null;){if(t.nodeType===8){var r=t.data;if(r===T)a+=1;else if(r[0]===Y){if(a===0)return p=n,l=n[0],t;a-=1}}n.push(t)}throw rt(),N}var j,q;function D(){if(j===void 0){j=window,q=document;var e=Element.prototype;e.__click=void 0,e.__className="",e.__attributes=null,e.__e=void 0,Text.prototype.__t=void 0}}function h(){return document.createTextNode("")}function ot(e){const t=e.firstChild;return u?t===null?e.appendChild(h()):_(t):t}function at(e,t){return u?_(l):e.firstChild}function P(e,t=!1){var n=e.nextSibling;if(!u)return n;var a=n.nodeType;if(a===8&&n.data===Z)return P(n,t);if(t&&a!==3){var r=h(),o=M.dom;return o.unshift(r),n==null||n.before(r),r}return _(n)}function W(e){e.textContent=""}function B(e,t){var L;var n=e.ownerDocument,a=t.type,r=((L=t.composedPath)==null?void 0:L.call(t))||[],o=r[0]||t.target,w=0,m=t.__root;if(m){var f=r.indexOf(m);if(f!==-1&&(e===document||e===window)){t.__root=e;return}var C=r.indexOf(e);if(C===-1)return;f<=C&&(w=f)}if(o=r[w]||t.target,o!==e){z(t,"currentTarget",{configurable:!0,get(){return o||n}});try{for(var d,v=[];o!==null;){var b=o.parentNode||o.host||null;try{var i=o["__"+a];if(i!==void 0&&!o.disabled)if(E(i)){var[g,...c]=i;g.apply(o,[t,...c])}else i.call(o,t)}catch(S){d?v.push(S):d=S}if(t.cancelBubble||b===e||b===null)break;o=b}if(d){for(let S of v)queueMicrotask(()=>{throw S});throw d}}finally{t.__root=e,o=e}}}let s;function it(){s=void 0}function ut(e){let t=null,n=u;var a;if(u){for(t=p,s===void 0&&(s=document.head.firstChild);s.nodeType!==8||s.data!==T;)s=s.nextSibling;s=_(s),s=s.nextSibling}else a=document.head.appendChild(h());try{A(()=>e(a))}finally{n&&$(t)}}const st=new Set,F=new Set;function dt(e,t){(e.__t??(e.__t=e.nodeValue))!==t&&(e.nodeValue=e.__t=t)}function ct(e,t,n,a){t===void 0||t(e,n)}function Q(e,t){const n=t.anchor??t.target.appendChild(h());return O(()=>R(e,{...t,anchor:n}),!1)}function lt(e,t){const n=t.target,a=p;try{return O(()=>{x(!0);for(var r=n.firstChild;r&&(r.nodeType!==8||r.data!==T);)r=r.nextSibling;if(!r)throw N;const o=_(r),w=R(e,{...t,anchor:o});return x(!1),w},!1)}catch(r){if(r===N)return t.recover===!1&&G(),D(),W(n),x(!1),Q(e,t);throw r}finally{x(!!a),$(a),it()}}function R(e,{target:t,anchor:n,props:a={},events:r,context:o,intro:w=!1}){D();const m=new Set,f=B.bind(null,t),C=B.bind(null,document),d=i=>{for(let g=0;g<i.length;g++){const c=i[g];m.has(c)||(m.add(c),t.addEventListener(c,f,V.includes(c)?{passive:!0}:void 0),document.addEventListener(c,C,V.includes(c)?{passive:!0}:void 0))}};d(H(st)),F.add(d);let v;const b=I(()=>(J(()=>{if(o){K({});var i=X;i.c=o}r&&(a.$$events=r),v=e(n,a)||{},o&&U()}),()=>{for(const i of m)t.removeEventListener(i,f),document.removeEventListener(i,f);F.delete(d),k.delete(v)}));return k.set(v,b),v}let k=new WeakMap;function ft(e){var t;(t=k.get(e))==null||t()}function y(e,t=M){var n=t.dom;return n===null?t.dom=e:(E(n)||(n=t.dom=[n]),E(e)?n.push(...e):n.push(e)),e}function vt(e,t){var n=(t&et)!==0,a=(t&nt)!==0,r;return()=>{if(u)return y(n?p:l),l;r||(r=tt(e),n||(r=r.firstChild));var o=a?document.importNode(r,!0):r.cloneNode(!0);return y(n?[...o.childNodes]:o),o}}function pt(e){if(!u)return y(h());var t=l;return t||e.before(t=h()),y(t),t}function ht(){if(u)return y(p),l;var e=document.createDocumentFragment(),t=h();return e.append(t),y([t]),e}function mt(e,t){u||e.before(t)}const _t="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_t);export{q as $,mt as a,P as b,ht as c,dt as d,ot as e,at as f,u as g,ut as h,l as i,x as j,_ as k,W as l,p as m,lt as n,Q as o,pt as p,ct as s,vt as t,ft as u};