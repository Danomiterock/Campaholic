(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{37:function(e,a,t){e.exports=t(67)},67:function(e,a,t){"use strict";t.r(a);var n=t(2),l=t.n(n),r=t(31),c=t.n(r),m=t(70),s=t(71),i=t(73),o=t(72),u=t(34),E=t(69);var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{className:"brownBg"},l.a.createElement(i.a,{className:"mr-auto"},l.a.createElement(i.a.Link,{href:"/"},l.a.createElement("p",{className:"whiteColor"},"Home")),l.a.createElement(i.a.Link,{href:"aboutme"},l.a.createElement("p",{className:"whiteColor"},"About")),l.a.createElement(i.a.Link,{href:"contact"},l.a.createElement("p",{className:"whiteColor"},"Profile"))),l.a.createElement(o.a,{inline:!0},l.a.createElement(u.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(E.a,{className:"primaryColor",variant:"outline-info"},"Search"))),l.a.createElement("br",null))};var f=function(){return l.a.createElement("header",{className:"masthead"},l.a.createElement("div",{className:"headnav"},l.a.createElement("h1",null," Campaholic "),l.a.createElement(p,null)))};var d=function(){return l.a.createElement("section",{className:"jumbotron"},l.a.createElement("div",null,l.a.createElement("h1",null,"Nature is calling"),l.a.createElement("p",null,"Find your next adventure.")))},h=t(35),N=t(12),v=t.n(N),b=function(){return v.a.get("/api/posts")};var w=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){b().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("section",{className:"posts"},l.a.createElement("h2",null,"Feed"),t.map((function(e){return l.a.createElement("article",{className:"postcard",key:e._id},l.a.createElement("div",{className:"postheading"},l.a.createElement("p",null,e.username),l.a.createElement("p",null,"Posted: ",e.date)),l.a.createElement("div",{className:"postmain"},l.a.createElement("img",{src:"https://images.unsplash.com/photo-1590990771866-c172665b47ce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",alt:"location"}),l.a.createElement("p",{className:"location"},e.location),l.a.createElement("p",{className:"description"},e.description)),l.a.createElement("div",{className:"submain"},l.a.createElement("p",{className:"activities"},"Activities: "),l.a.createElement("ul",null,l.a.createElement("li",null,e.activities)),l.a.createElement("p",{className:"friends"},e.username," is with:"),l.a.createElement("ul",{className:"friendlist"},l.a.createElement("li",null,e.friends))))})))};var g=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null," Campaholic \xa9 2021"))},x=function(){return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(w,null),l.a.createElement(g,null)))};var k=function(){return l.a.createElement("div",null,l.a.createElement(x,null))};c.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.94d50e49.chunk.js.map