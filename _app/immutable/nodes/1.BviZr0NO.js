import{a as y,t as U,d as c,e as i,f as $,b}from"../chunks/disclose-version.Xdn7Rwn-.js";import{u as j,a as l,c as k,r as f,b as p,d as q,g,e as w,n as e,f as z,U as v,s as m,m as A,p as B,t as C,h as D}from"../chunks/runtime.DuYAxQZy.js";import{s as E}from"../chunks/entry.DcjDbNU7.js";function F(){const s=k,n=s.l.u;n&&(n.b.length&&j(()=>{d(s),f(n.b)}),l(()=>{const a=p(()=>n.m.map(q));return()=>{for(const t of a)typeof t=="function"&&t()}}),n.a.length&&l(()=>{d(s),f(n.a)}))}function d(s){if(s.l.s)for(const n of s.l.s)g(n);w(s.s)}function G(s,n,a){if(s==null)return n(void 0),e;const t=s.subscribe(n,a);return t.unsubscribe?()=>t.unsubscribe():t}function I(s,n,a){let t=a[n];const u=t===void 0;u&&(t={store:null,last_value:null,value:A(v),unsubscribe:e},a[n]=t),(u||t.store!==s)&&(t.unsubscribe(),t.store=s??null,t.unsubscribe=L(s,t.value));const r=g(t.value);return r===v?t.last_value:r}function L(s,n){return s==null?(m(n,void 0),e):G(s,a=>m(n,a))}function M(s){N(()=>{let n;for(n in s)s[n].unsubscribe()})}function N(s){z(()=>()=>p(s))}const S=()=>{const s=E;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},T={subscribe(s){return S().page.subscribe(s)}};var Z=U("<h1> </h1> <p> </p>",1);function H(s,n){B(n,!1);const a={};M(a);const t=()=>I(T,"$page",a);F();var u=Z(),r=$(u),h=i(r),_=b(b(r,!0)),x=i(_);C(()=>{var o;c(h,t().status),c(x,(o=t().error)==null?void 0:o.message)}),y(s,u),D()}export{H as component};