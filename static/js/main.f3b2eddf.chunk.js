(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{18:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),r=a.n(l),m=a(6),i=a(1),s=a(17),o=a(15),u=a.n(o),b=function(e){var t=e.title,a=e.index,n=e.isActive,l=e.selectTab,r=u()("tabs__item",{active:n});return c.a.createElement("div",{className:r,onClick:function(){return l(a)}},c.a.createElement("p",null,t))},E=(a(23),function(e){var t=e.tabId,a=e.tabs,l=Object(n.useState)(0),r=Object(s.a)(l,2),i=r[0],o=r[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tabs"),c.a.createElement("div",{className:"tabs__container"},c.a.createElement("div",{className:"tabs__nav"},a.map((function(e,a){return c.a.createElement(m.b,{to:"/tabs/".concat(e.id)},c.a.createElement(b,{title:e.title,key:e.id,index:a,isActive:e.id===t,selectTab:function(){return function(e){o(e)}(a)}}))}))),c.a.createElement("div",{className:"tabs__content"},a[i].content)))}),d=function(){return c.a.createElement("header",null,c.a.createElement("nav",{className:"Nav"},c.a.createElement("ul",{className:"Nav__list"},c.a.createElement("li",{className:"Nav__item"},c.a.createElement(m.c,{to:"/",exact:!0,className:"Nav__item"},"Home")),c.a.createElement("li",{className:"Nav__item"},c.a.createElement(m.c,{to:"/tabs",className:"Nav__item"},"Tabs")))))},v=(a(29),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),_=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:function(){return c.a.createElement("h1",null,"Home")}}),c.a.createElement(i.a,{path:"/tabs",render:function(e){var t=e.match;return c.a.createElement(E,{tabId:t.params.tabId,tabs:v})}}),c.a.createElement(i.a,{component:function(){return c.a.createElement("p",null,"Not found")}})))};r.a.render(c.a.createElement(m.a,null,c.a.createElement(_,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f3b2eddf.chunk.js.map