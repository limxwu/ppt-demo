import{d,T as _,U as p,h as m,g as u,O as h,o as a,b as n,e as t,R as s,a as r,F as f,J as g,t as v,v as x,V as y,j as b,k as N,f as k,_ as w}from"./index-3CbWie4P.js";import{N as P}from"./NoteDisplay-UDjvQDjh.js";const V={class:"m-4"},T={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},B={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),R={key:0,class:"border-gray-400/50 mb-8"},j=d({__name:"PresenterPrint",setup(z){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(a(),n("div",{id:"page-root",style:v(r(x))},[t("div",V,[t("div",T,[t("h1",D,s(r(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",S,[t("div",B,[t("div",C,s(e==null?void 0:e.no)+"/"+s(r(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),N(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",R)):k("v-if",!0)]))),128))])],4))}}),M=w(j,[["__file","C:/Users/wuyun/AppData/Roaming/npm/node_modules/@slidev/cli/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
