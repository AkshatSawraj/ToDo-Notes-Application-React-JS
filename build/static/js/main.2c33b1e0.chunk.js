(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(17),r=a.n(s),l=(a(25),a(20)),i=a(11),o=a(7),b=a.n(o),j=a(9),d=a(0);function m(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(j.b,{className:"navbar-brand",to:"#",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(j.b,{className:"nav-link",to:"/about",children:"About"})})]}),e.searchbar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})})}function u(){return Object(d.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodoList.com"})})}m.defaultProps={searchbar:!1},m.prototype={title:b.a.string.isRequired,searchbar:b.a.bool};var h=function(e){var t=e.item,a=e.onDelete;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"alert alert-primary",role:"alert",children:[t.sno," ",t.title," ",t.description,Object(d.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:Object(d.jsx)("button",{className:"btn btn-danger btn btn-primary",type:"button",onClick:function(){a(t)},children:"Delete"})})]})})};function x(e){return Object(d.jsxs)("div",{className:"container my-3",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(d.jsx)("h1",{className:"text-center my-3",children:"TO Do's List"}),0===e.todoItems.length?"No tasks to complete":e.todoItems.map((function(t){return Object(d.jsx)(h,{item:t,onDelete:e.onDelete},t.sno)}))]})}var O=function(e){var t=e.addItem,a=Object(n.useState)(""),c=Object(i.a)(a,2),s=c[0],r=c[1],l=Object(n.useState)(""),o=Object(i.a)(l,2),b=o[0],j=o[1];return Object(d.jsxs)("div",{className:"container my-3 ",children:[Object(d.jsx)("h3",{className:"text-center",children:"Add a Task"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===s||""===b?alert("Title and Description fields cant be empty"):(t(s,b),r(""),j(""))},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"title",className:"form-label",children:"Task Title"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"title",value:s,onChange:function(e){r(e.target.value)}})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Description"}),Object(d.jsx)("input",{type:"test",className:"form-control",id:"desc",value:b,onChange:function(e){j(e.target.value)}})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Submit"})]})]})},p=a(2),g=function(){return Object(d.jsx)("div",{children:"This is the about page of our company"})};var v=function(){var e;e=null==localStorage.getItem("array")?[]:JSON.parse(localStorage.getItem("array"));var t=function(e){r(s.filter((function(t){return t!==e})))},a=Object(n.useState)(e),c=Object(i.a)(a,2),s=c[0],r=c[1];Object(n.useEffect)((function(){localStorage.setItem("array",JSON.stringify(s))}),[s]);var o=function(e,t){var a={sno:0===s.length?1:s[s.length-1].sno+1,title:e,description:t};r([].concat(Object(l.a)(s),[a]))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(m,{title:"My Todos List"}),Object(d.jsxs)(p.c,{children:[Object(d.jsx)(p.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(O,{addItem:o}),Object(d.jsx)(x,{todoItems:s,onDelete:t})]})}}),Object(d.jsx)(p.a,{exact:!0,path:"/about",render:function(){return Object(d.jsx)(g,{})}})]}),Object(d.jsx)(u,{})]})})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),f()}},[[32,1,2]]]);
//# sourceMappingURL=main.2c33b1e0.chunk.js.map