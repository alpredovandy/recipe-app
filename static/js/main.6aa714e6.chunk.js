(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{11:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),s=(t(11),t(2)),i=t.n(s),m=t(5),o=t(1),f=function(e){var a=e.setSearchTerm,t=Object(n.useState)(""),r=Object(o.a)(t,2),l=r[0],s=r[1],i=function(e){e.preventDefault(),a(l)};return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"col s12",onSubmit:function(e){return i(e)}},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s10"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{placeholder:"Add ingredients or name of the recipe you want...",id:"first_name",type:"text",value:l,className:"validate",onChange:function(e){return s(e.target.value)}}),c.a.createElement("label",{htmlFor:"first_name"},"Search for Recipe here")))),c.a.createElement("div",{className:"col s2"},c.a.createElement("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:function(e){return i(e)},style:{marginTop:20}},"Submit",c.a.createElement("i",{className:"material-icons right"},"send"))))))))},u=function(){return c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("img",{src:"https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif",alt:"loader",height:"250px"}))},d=function(e){var a=e.pagination,t=e.setPagination,n=e.recipes,r=e.loading,l=function(){0!==a&&t(a-10)},s=function(){t(a+10)};return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{style:{justifyContent:"center",display:n.length>0&&!r?"block":"none"}},c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",{className:"waves-effect",onClick:l},c.a.createElement("a",{href:"#!"},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("i",{className:"material-icons"},"chevron_left"),c.a.createElement("span",{style:{fontSize:18}},"Prev")))),c.a.createElement("li",{className:"waves-effect",onClick:s},c.a.createElement("a",{href:"#!"},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("span",{style:{fontSize:18}},"Next"),c.a.createElement("i",{className:"material-icons"},"chevron_right")))))),r&&c.a.createElement(u,null),c.a.createElement("div",{className:"row",style:{display:"flex",flexWrap:"wrap"}},!r&&n.map((function(e,a){var t=e.recipe;return c.a.createElement("div",{className:"col s12 m6",key:a},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},c.a.createElement("img",{className:"activator",src:t.image,alt:"img"})),c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},t.label,c.a.createElement("i",{className:"material-icons right"},"more_vert")),c.a.createElement("a",{href:t.url},"Click here")),c.a.createElement("div",{className:"card-reveal"},c.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Ingredients",c.a.createElement("i",{className:"material-icons right"},"close")),c.a.createElement("ul",null,t.ingredientLines.map((function(e,a){return c.a.createElement("li",{key:a},e)}))))))})))),c.a.createElement("div",{style:{alignItems:"center",justifyContent:"center",display:n.length>0&&!r?"flex":"none"}},c.a.createElement("ul",{className:"pagination"},c.a.createElement("li",{className:"waves-effect",onClick:l},c.a.createElement("a",{href:"#!"},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("i",{className:"material-icons"},"chevron_left"),c.a.createElement("span",{style:{fontSize:18}},"Prev")))),c.a.createElement("li",{className:"waves-effect",onClick:s},c.a.createElement("a",{href:"#!"},c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("span",{style:{fontSize:18}},"Next"),c.a.createElement("i",{className:"material-icons"},"chevron_right")))))))};var E=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(0),s=Object(o.a)(l,2),u=s[0],E=s[1],p=Object(n.useState)([]),v=Object(o.a)(p,2),h=v[0],g=v[1],N=Object(n.useState)(!1),b=Object(o.a)(N,2),y=b[0],x=b[1],w=Object(n.useRef)();Object(n.useEffect)((function(){w.current=t}));var j=w.current;return Object(n.useEffect)((function(){t&&(t!==j||u>0)&&function(){var e=Object(m.a)(i.a.mark((function e(){var a,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),"1edc82db","a2a4fe801290a822cef0919ebb65c68a",a=u,j!==t&&(a=0,E(0)),e.next=7,fetch("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("1edc82db","&app_key=").concat("a2a4fe801290a822cef0919ebb65c68a","&from=").concat(a,"&to=").concat(a+10));case 7:return n=e.sent,e.next=10,n.json();case 10:c=e.sent,console.log(c),c.hits.length>0&&(x(!1),g(c.hits));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,u]),c.a.createElement("div",null,c.a.createElement(f,{setSearchTerm:r}),c.a.createElement(d,{recipes:h,pagination:u,setPagination:E,loading:y}))};l.a.render(c.a.createElement(E,null),document.getElementById("root"))},6:function(e,a,t){e.exports=t(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.6aa714e6.chunk.js.map