(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,e,n){"use strict";n.r(e);var o=n(4),c=n.n(o),r=n(2),a=n(1),i=(n(9),n(0)),s=Object(a.memo)((function(t){var e=t.goods;return Object(i.jsx)("ul",{children:e.map((function(t){return Object(i.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})}));function u(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var d="all",l="onlyRed",b="onlyFive",j=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],o=e[1],c=Object(a.useState)(null),j=Object(r.a)(c,2),f=j[0],h=j[1],O=Object(a.useState)(new Date),m=Object(r.a)(O,2),y=m[0],p=m[1];Object(a.useEffect)((function(){switch(f){case b:u().then((function(t){return t.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)})).then(o);break;case l:u().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o);break;case d:u().then(o)}}),[f,y]);var g=function(t){h(t),p(new Date)};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Dynamic list of Goods"}),Object(i.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return g(d)},children:"Load all goods"}),Object(i.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return g(b)},children:"Load 5 first goods"}),Object(i.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return g(l)},children:"Load red goods"}),Object(i.jsx)(s,{goods:n})]})};c.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))},9:function(t,e,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.c51e93d5.chunk.js.map