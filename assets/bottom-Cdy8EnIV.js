import{l as a,aF as h,aG as w,aH as m,g as r,aI as S,aJ as C,aK as s,aL as c,aM as y,aN as b,L as j,d as x,D as n,aO as T,aP as O,aQ as k,aR as p,aS as E,aT as P,S as z}from"./index-3CbWie4P.js";const L=a(!1),N=a(!1),R=a(!1),B=a(!0),G=h({xs:460,...b}),g=w(),M=m(),D=r(()=>g.height.value-g.width.value/j>120),I=S(c?document.body:null),l=C(),W=r(()=>{var e,t;return["INPUT","TEXTAREA"].includes(((e=l.value)==null?void 0:e.tagName)||"")||((t=l.value)==null?void 0:t.classList.contains("CodeMirror-code"))}),$=r(()=>{var e;return["BUTTON","A"].includes(((e=l.value)==null?void 0:e.tagName)||"")});s("slidev-camera","default");s("slidev-mic","default");const K=s("slidev-scale",0),A=s("slidev-show-overview",!1),q=s("slidev-presenter-cursor",!0),H=s("slidev-show-editor",!1),U=s("slidev-editor-vertical",!1);s("slidev-editor-width",c?window.innerWidth*.4:318);s("slidev-editor-height",c?window.innerHeight*.4:300);const o=s("slidev-presenter-font-size",1),i=s("slidev-presenter-layout",1);function V(){i.value=i.value+1,i.value>2&&(i.value=1)}function J(){o.value=Math.min(2,o.value+.1)}function Q(){o.value=Math.max(.5,o.value-.1)}const X=y(A);function Y(e,t=""){var v,f;const d=["slidev-page",t],u=(f=(v=e==null?void 0:e.meta)==null?void 0:v.slide)==null?void 0:f.no;return u!=null&&d.push(`slidev-page-${u}`),d.filter(Boolean).join(" ")}const Z=x({name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"main"},active:{type:Boolean,default:!1},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e){var t;n(T,e.route),n(O,a(+((t=e.route)==null?void 0:t.path))),n(k,a(e.renderContext)),n(E,p(e,"active")),n(P,p(e,"clicksContext"))},render(){var e,t;return this.$props.is?z(this.$props.is):(t=(e=this.$slots)==null?void 0:e.default)==null?void 0:t.call(e)}}),_={render(){return[]}},ee={render(){return[]}};export{ee as G,Z as S,L as a,N as b,H as c,K as d,U as e,_ as f,Y as g,q as h,D as i,o as j,J as k,Q as l,R as m,M as n,B as o,i as p,$ as q,W as r,A as s,X as t,I as u,G as v,g as w,l as x,V as y};
