"use strict";(self["webpackChunkbackend_management_system"]=self["webpackChunkbackend_management_system"]||[]).push([[148],{2148:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticStyle:{height:"100%"}},[n("el-aside",{staticStyle:{width:"auto"}},[n("common-aside")],1),n("el-container",[n("el-header",{staticStyle:{"background-color":"black"}},[n("common-header")],1),n("common-tag"),n("el-main",[n("router-view")],1),n("el-footer")],1)],1)},l=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[n("div",{staticStyle:{height:"50px","justify-content":"center","align-items":"center","font-family":"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif","font-size":"20px","font-weight":"800",display:"flex",color:"#fff"}},[n("h3",[e._v(" "+e._s(e.isCollapse?"BMS":"Backend managment system")+" ")])]),e._l(e.noChildren,(function(t){return n("el-menu-item",{key:t.path,attrs:{index:t.path+""},on:{click:function(n){return e.clickMenu(t)}}},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])])})),e._l(e.hasChildren,(function(t){return n("el-submenu",{key:t.path,attrs:{index:t.path+""}},[n("template",{slot:"title"},[n("i",{class:"el-icon-"+t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.label))])]),e._l(t.children,(function(t,a){return n("el-menu-item-group",{key:t.path},[n("el-menu-item",{attrs:{index:a+""},on:{click:function(n){return e.clickMenu(t)}}},[n("i",{class:"el-icon-"+t.icon}),e._v(" "+e._s(t.label)+" ")])],1)}))],2)}))],2)},o=[];const r=[{name:"home",path:"/home",icon:"s-home",label:"home",url:"/home"},{name:"user",path:"/user",icon:"user",label:"user",url:"/user"},{name:"products",path:"/products",icon:"video-play",label:"products",url:"/products"},{label:"Others",icon:"location",children:[{name:"page1",path:"/page1",icon:"setting",label:"page1",url:"/page1"},{name:"page2",path:"/page2",icon:"setting",label:"page2",url:"/page2"}]}];var i=r,c={data(){return{menu:i}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){this.$router.push({name:e.name}),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.asyncMenu.filter((e=>!e.children))},hasChildren(){return this.asyncMenu.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},asyncMenu(){return this.$store.state.tab.menu}}},u=c,m=n(1001),h=(0,m.Z)(u,s,o,!1,null,"2f6e2e27",null),d=h.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"l-content"},[n("el-button",{attrs:{plain:"",icon:"el-icon-menu",size:"mini"},on:{click:e.handleCollapse}}),n("el-breadcrumb",{staticStyle:{"margin-left":"20px"},attrs:{separator:"/"}},e._l(e.tags,(function(t){return n("el-breadcrumb-item",{key:t.path,attrs:{to:{path:t.path}}},[e._v(e._s(t.label))])})),1)],1),n("div",{staticClass:"r-content"},[n("el-dropdown",{attrs:{trigger:"click",size:"mini"}},[n("span",[n("img",{staticClass:"user",attrs:{src:e.userImg}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"a"}},[e._v("Profile")]),n("el-dropdown-item",{attrs:{command:"b"},nativeOn:{click:function(t){return e.logOut.apply(null,arguments)}}},[e._v("Logout")])],1)],1)],1)])},f=[],g=n(4665),b={name:"commenHeader",data(){return{userImg:n(9632)}},methods:{handleCollapse(){this.$store.commit("collapseMenu")},logOut(){this.$store.commit("clearToken"),this.$store.commit("clearMenu"),this.$router.push("/login")}},computed:{...(0,g.rn)({tags:e=>e.tab.tabList})}},_=b,k=(0,m.Z)(_,p,f,!1,null,"29c3e7af",null),v=k.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs"},e._l(e.tags,(function(t,a){return n("el-tag",{key:t.name,attrs:{closable:"home"!==t.name,effect:e.$route.name===t.name?"dark":"plain",size:"small"},on:{click:function(n){return e.changeMenu(t)},close:function(n){return e.handleClose(t,a)}}},[e._v(" "+e._s(t.label)+" ")])})),1)},y=[],$={name:"CommonTag",data(){return{}},computed:{...(0,g.rn)({tags:e=>e.tab.tabList})},methods:{...(0,g.OI)({close:"closeTag"}),changeMenu(e){this.$router.push({name:e.name})},handleClose(e,t){const n=this.tags.length-1;this.close(e),e.name===this.$route.name&&(t===n?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}}},M=$,x=(0,m.Z)(M,C,y,!1,null,"24f3ad8b",null),w=x.exports,S={name:"Main",components:{commonAside:d,commonHeader:v,commonTag:w},data(){return{}}},O=S,T=(0,m.Z)(O,a,l,!1,null,null,null),z=T.exports}}]);
//# sourceMappingURL=148.9397daa8.js.map