(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{249:function(e,t,n){"use strict";n.r(t);var r=n(247),o=Object(r.a)({name:"PageSection",props:{id:{type:String,default:null},nextId:{type:String,default:null},prevId:{type:String,default:null}}}),l=n(42),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-screen"},[n("h2",{staticClass:"text-2xl font-bold",attrs:{id:"section-"+e.id}},[e._v("Section "+e._s(e.id))]),e._v(" "),n("p",[e._t("default")],2),e._v(" "),e.prevId?n("a",{staticClass:"underline",attrs:{href:"#section-"+e.prevId}},[e._v("Prev")]):e._e(),e._v(" "),e.nextId?n("a",{staticClass:"underline",attrs:{href:"#section-"+e.nextId}},[e._v("Next")]):e._e()])}),[],!1,null,null,null);t.default=component.exports},252:function(e,t,n){"use strict";n.r(t);var r={name:"IndexPage"},o=n(42),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PageSection",{attrs:{id:"1","next-id":"2"}},[e._v("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laborum\n    esse possimus doloremque non fuga blanditiis repellendus distinctio earum\n    odio! Aut, nesciunt! Modi perspiciatis rerum qui accusantium eius? Rerum,\n    possimus!\n  ")]),e._v(" "),n("PageSection",{attrs:{id:"2","prev-id":"1","next-id":"3"}},[e._v("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laborum\n    esse possimus doloremque non fuga blanditiis repellendus distinctio earum\n    odio! Aut, nesciunt! Modi perspiciatis rerum qui accusantium eius? Rerum,\n    possimus!\n  ")]),e._v(" "),n("PageSection",{attrs:{id:"3","prev-id":"2"}},[e._v("\n    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur laborum\n    esse possimus doloremque non fuga blanditiis repellendus distinctio earum\n    odio! Aut, nesciunt! Modi perspiciatis rerum qui accusantium eius? Rerum,\n    possimus!\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageSection:n(249).default})}}]);