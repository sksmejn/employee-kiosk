(this["webpackJsonpemployee-kiosk"]=this["webpackJsonpemployee-kiosk"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},46:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(25),a=c.n(r),i=(c(33),c(10)),o=c(2),j=(c(34),c(35),c(0)),l=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("div",{className:"logo-container",children:Object(j.jsx)("h1",{children:"Employee Kiosk"})}),Object(j.jsx)("div",{className:"list-container",children:Object(j.jsx)("ul",{children:Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Home"})})})})]}),Object(j.jsx)("div",{className:"break"})]})},d=c(16),b=c.n(d),h=c(27),u=c(11),O=(c(46),c(28)),m=c.n(O),x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)("asc"),a=Object(u.a)(r,2),i=a[0],o=a[1],l=Object(n.useState)(""),d=Object(u.a)(l,2),O=d[0],x=d[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://randomuser.me/api/?results=30&nat=US");case 2:t=e.sent,s(t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=c.sort((function(e,t){return("asc"===i?1:-1)*e.name.last.localeCompare(t.name.last)})).filter((function(e){return e.name.first.toLowerCase().includes(O)||e.name.last.toLowerCase().includes(O)||e.email.toLowerCase().includes(O)||e.phone.includes(O)||e.dob.date.includes(O)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{onSearchChange:x}),Object(j.jsx)(g,{onSortChange:o}),Object(j.jsx)("div",{id:"body",children:p.length?p.map((function(e){var t=e.login.uuid,c=e.picture.large,n=e.name.first,s=e.name.last,r=e.email,a=e.phone,i=e.dob.date;return Object(j.jsx)(v,{image:c,firstName:n,lastName:s,phone:a,email:r,dob:i},t)})):Object(j.jsx)("h1",{style:{opacity:.5,marginTop:"1rem"},children:"No such employee in database from search criteria!"})})]})},p=(c(65),function(){return Object(j.jsx)("div",{id:"footer",children:Object(j.jsx)("h1",{children:"Employee Kiosk"})})}),f=function(e){var t=e.onSearchChange,c=Object(n.useCallback)((function(e){t(e.target.value)}),[t]);return Object(j.jsx)("div",{id:"searchbar",children:Object(j.jsx)("input",{id:"search-input",type:"text",placeholder:"Search",onChange:c})})},v=(c(66),function(e){var t,c=e.image,n=e.firstName,s=e.lastName,r=e.phone,a=e.email,i=e.dob;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:c,alt:"Pic of ".concat(n," ").concat(s),width:"200px",height:"200px"}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("div",{children:Object(j.jsx)("strong",{children:Object(j.jsxs)("h3",{children:[s,", ",n]})})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"Number:"})," ",r]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"Email:"})," ",a]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("strong",{children:"DOB:"})," ",(t=i,new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}))]})]})]})}),g=function(e){var t=e.onSortChange,c=Object(n.useCallback)((function(e){t(e.target.value)}),[t]);return Object(j.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(j.jsx)("label",{htmlFor:"sort",children:"Sort By Last Name: "}),Object(j.jsxs)("select",{name:"sort",id:"sort-button",onChange:c,children:[Object(j.jsx)("option",{value:"asc",children:"Ascending"}),Object(j.jsx)("option",{value:"desc",children:"Descending"})]})]})},y=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:Object(j.jsx)(x,{})}),Object(j.jsx)(o.a,{path:"/employee-kiosk/",children:Object(j.jsx)(x,{})})]})}),Object(j.jsx)(p,{})]})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.e8654b24.chunk.js.map