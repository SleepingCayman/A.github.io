"use strict";(self.webpackChunkhongzhenchen_gatsby=self.webpackChunkhongzhenchen_gatsby||[]).push([[435],{6173:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var l=n(7294);const a={width:"5rem"};function r(){let e=[],[t,n]=l.useState([]);return l.useEffect((async()=>{let t=await fetch("https://api.sampleapis.com/wines/reds"),r=await t.json();for(let n=0;n<r.length;n++)console.log(r[n].title),e.push(l.createElement("li",null,l.createElement("div",{style:{width:"40rem",overflow:"hidden"}},l.createElement("div",{style:{width:"5rem",float:"left"}}," ",l.createElement("img",{style:a,src:r[n].image})," "),l.createElement("div",null,"  ",l.createElement("b",null,r[n].winery)," - ",r[n].wine))));n(e)}),[]),l.createElement(l.Fragment,null,l.createElement("h1",null,"wine"),l.createElement("ul",null,t))}}}]);
//# sourceMappingURL=component---src-pages-wine-js-ee75ae7ade6c21ac25e2.js.map