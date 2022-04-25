(function(){var e={3510:function(e,t,a){"use strict";a(6992),a(8674),a(9601),a(7727);var n=a(8935),r=(a(1539),a(8783),a(3948),a(2809)),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"home",attrs:{gutter:20}},[a("el-col",{staticStyle:{"margin-top":"20px"},attrs:{span:10}},[a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"user"},[a("img",{attrs:{src:e.userImg}}),a("div",{staticClass:"userinfo"},[a("p",{staticClass:"name"},[e._v("admin")]),a("p",{staticClass:"access"},[e._v("Superb administer")])])]),a("div",{staticClass:"login-info"},[a("p",[e._v("Last login time: "),a("span",[e._v("2022-04-06")])]),a("p",[e._v("Last login place: "),a("span",[e._v("Toronto, Ontario")])])])]),a("el-card",{staticStyle:{"margin-top":"20px"}},[a("el-table",{attrs:{data:e.tableData}},e._l(e.tableLabel,(function(e,t){return a("el-table-column",{key:t,attrs:{prop:t,label:e}})})),1)],1)],1),a("el-col",{attrs:{span:14}},[a("div",{staticClass:"num"},[e._l(e.countData,(function(t){return a("el-card",{key:t.name,staticStyle:{"margin-top":"20px"},attrs:{"body-style":{display:"flex",padding:0}}},[a("i",{staticClass:"icon",class:"el-icon-"+t.icon,style:{backgroundColor:t.color}}),a("div",{staticClass:"detail"},[a("p",{staticClass:"num"},[e._v(e._s(t.value))]),a("p",{staticClass:"txt"},[e._v(e._s(t.name))])])])})),a("el-card",{staticClass:"graph"},[a("div",{ref:"echarts",staticStyle:{height:"280px"}})]),a("div",{staticClass:"subgraph-box"},[a("el-card",{staticClass:"subgraph"},[a("div",{ref:"userEcharts",staticStyle:{height:"280px"}})]),a("el-card",{staticClass:"subgraph"},[a("div",{ref:"videoEcharts",staticStyle:{height:"280px"}})])],1)],2)])],1)},l=[],i=(a(7941),a(4747),a(1249),a(727)),s=[{name:"Apple",todayPurchase:"20",monthlyPurchase:"500",totalPurchase:"1000"},{name:"Samsung",todayPurchase:"30",monthlyPurchase:"400",totalPurchase:"800"},{name:"BlackBerry",todayPurchase:"10",monthlyPurchase:"300",totalPurchase:"700"},{name:"Huawei",todayPurchase:"10",monthlyPurchase:"400",totalPurchase:"900"},{name:"Nokia",todayPurchase:"5",monthlyPurchase:"100",totalPurchase:"200"},{name:"TCL",todayPurchase:"15",monthlyPurchase:"300",totalPurchase:"800"}],u=s,c=[{name:"Today orders",value:1234,icon:"success",color:"#2ec7c9"},{name:"Today paids",value:210,icon:"star-on",color:"#ffb980"},{name:"Today unpaids",value:1234,icon:"present",color:"#5ab1e6"},{name:"Monthly orders",value:6789,icon:"success",color:"#FF6666"},{name:"Monthly paids",value:210,icon:"notebook-1",color:"#E5CCFF"},{name:"Monthly unpaids",value:1234,icon:"box",color:"#FFFFCC"}],d=c,m=a(6166),f=a.n(m),p=function(){return f().request({url:"/home/getData"})},h={name:"home",data:function(){return{userImg:a(9632),tableData:u,tableLabel:{name:"name",todayPurchase:"Today purchase",monthlyPurchase:"Monthly purchase",totalPurchase:"Total purchase"},countData:d}},mounted:function(){var e=this;p().then((function(t){var a=t.data,n=a.code,r=a.data;if(console.log(r),2e4===n){e.tableData=r.tableData;var o=r.orderData,l=Object.keys(o.data[0]),s=[],u=o.date;l.forEach((function(e){s.push({name:e,data:o.data.map((function(t){return t[e]})),type:"line"})}));var c={tooltip:{trigger:"axis"},xAxis:{data:u},yAxis:{},legend:{data:l},series:s},d=i.S1(e.$refs.echarts);d.setOption(c);var m={legend:{textStyle:{color:"#333"}},grid:{left:"20%"},tooltip:{trigger:"axis"},xAxis:{type:"category",data:r.userData.map((function(e){return e.date})),axisLine:{lineStyle:{color:"#17b3a3"}},axisLabel:{interval:0,color:"#333"}},yAxis:[{type:"value",axisLine:{lineStyle:{color:"#17b3a3"}}}],color:["#2ec7c9","#b6a2de"],series:[{name:"new user",data:r.userData.map((function(e){return e.new})),type:"bar"},{name:"active user",data:r.userData.map((function(e){return e.active})),type:"bar"}]},f=i.S1(e.$refs.userEcharts);f.setOption(m);var p={tooltip:{trigger:"item"},color:["#0f78f4","#dd536b","#9462e5","#a6a6a6","#e1bb22","#39c362","#3ed1cf"],series:[{data:r.videoData,type:"pie"}]},h=i.S1(e.$refs.videoEcharts);h.setOption(p)}}))}},v=h,y=a(1001),b=(0,y.Z)(v,o,l,!1,null,null,null),g=b.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage"},[a("el-dialog",{attrs:{title:"add"===e.operateType?"createUser":"renewUser",visible:e.isShow},on:{"update:visible":function(t){e.isShow=t}}},[a("common-form",{ref:"form",attrs:{formLabel:e.operateFormLabel,form:e.operateForm,inline:!0}}),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.isShow=!1}}},[e._v("Cancel")]),a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("Apply")])],1)],1),a("div",{staticClass:"manage-header"},[a("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("Create")]),a("common-form",{ref:"form",attrs:{formLabel:e.formLabel,form:e.searchForm,inline:!0}},[a("el-button",{attrs:{type:"primary"},on:{click:e.getList}},[e._v("Search")])],1)],1)],1)},_=[],C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{"label-width":"100px",model:e.form,inline:e.inline}},[e._l(e.formLabel,(function(t){return a("el-form-item",{key:t.label,attrs:{label:t.label}},["input"===t.type?a("el-input",{attrs:{placeholder:"Please enter"+t.label},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"switch"===t.type?a("el-switch",{attrs:{placeholder:"select date"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),(t.type="date")?a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-mm-dd",placeholder:"select date"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"select"===t.type?a("el-select",{attrs:{placeholder:"please select"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}},e._l(t.opts,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e()],1)})),a("el-form-item",[e._t("default")],2)],2)},w=[],x={name:"commonForm",props:{formLabel:Array,form:Object,inline:Boolean},components:{},data:function(){return{}}},k=x,S=(0,y.Z)(k,C,w,!1,null,null,null),L=S.exports,E=a(6816),T=a.n(E),D={name:"user",components:{commonForm:L},data:function(){return{operateType:"add",isShow:!1,operateFormLabel:T(),operateForm:{name:"",address:"",age:"",birthday:"",gender:1},formLabel:[{model:"keyword",label:"",type:"input"}],searchForm:{keyword:""}}},methods:{confirm:function(){},addUser:function(){},getList:function(){}}},F=D,O=(0,y.Z)(F,P,_,!1,null,null,null),A=O.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},j=[],M={name:"products",components:{},data:function(){return{}}},B=M,Z=(0,y.Z)(B,$,j,!1,null,null,null),N=Z.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},R=[],I={name:"page2",components:{},data:function(){return{}}},U=I,q=(0,y.Z)(U,H,R,!1,null,null,null),W=q.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},z=[],G={name:"page1",components:{},data:function(){return{}}},J=G,Q=(0,y.Z)(J,K,z,!1,null,null,null),V=Q.exports,X=[{path:"/",name:"Main",component:function(){return a.e(313).then(a.bind(a,4313))},children:[{path:"/home",name:"home",component:g},{path:"/user",name:"user",component:A},{path:"/products",name:"products",component:N},{path:"/page1",name:"page1",component:W},{path:"/page2",name:"page2",component:V}]}];n["default"].use(r.Z);var Y=new r.Z({mode:"history",routes:X}),ee=Y,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("HelloWorld"),a("router-view")],1)},ae=[],ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},re=[],oe={components:{},data:function(){return{}}},le=oe,ie=(0,y.Z)(le,ne,re,!1,null,null,null),se=ie.exports,ue={name:"App",components:{HelloWorld:se}},ce=ue,de=(0,y.Z)(ce,te,ae,!1,null,null,null),me=de.exports,fe=a(4549),pe=a.n(fe),he=a(4665),ve=(a(8309),a(4553),a(561),{state:{isCollapse:!1,tabList:[{path:"/",name:"home",label:"home",icon:"home"}],currentMenu:null},mutations:{collapseMenu:function(e){e.isCollapse=!e.isCollapse},selectMenu:function(e,t){if("home"!==t.name){e.currentMenu=t;var a=e.tabList.findIndex((function(e){return e.name===t.name}));-1===a?e.tabList.push(t):e.currentMenu=null}},closeTag:function(e,t){var a=e.tabList.findIndex((function(e){return e.name===t.name}));e.tabList.splice(a,1)}}});n["default"].use(he.ZP);var ye=new he.ZP.Store({modules:{tab:ve}}),be=a(3025),ge=a.n(be),Pe=[],_e={getStatisticalData:function(){for(var e=0;e<7;e++)Pe.push(ge().mock({Apple:ge().Random.float(100,8e3,0,0),Samsung:ge().Random.float(100,8e3,0,0),BlackBerry:ge().Random.float(100,8e3,0,0),Huawei:ge().Random.float(100,8e3,0,0),Nokia:ge().Random.float(100,8e3,0,0),TCL:ge().Random.float(100,8e3,0,0)}));return{code:2e4,data:{videoData:[{name:"TCL",value:899},{name:"Apple",value:1799},{name:"Nokia",value:1400},{name:"BlackBerry",value:1299},{name:"Huawei",value:1899},{name:"Samsung",value:1499}],userData:[{date:"Monday",new:5,active:200},{date:"Tuesday",new:10,active:500},{date:"Wednesday",new:12,active:550},{date:"Thursday",new:60,active:800},{date:"Friday",new:65,active:550},{date:"Saturday",new:53,active:770},{date:"Sunday",new:33,active:170}],orderData:{date:["20220401","20220402","20220403","20220404","20220405","20220406","20220407"],data:Pe},tableData:[{name:"Apple",todayPurchase:"20",monthlyPurchase:"500",totalPurchase:"1000"},{name:"Samsung",todayPurchase:"30",monthlyPurchase:"400",totalPurchase:"800"},{name:"BlackBerry",todayPurchase:"10",monthlyPurchase:"300",totalPurchase:"700"},{name:"Huawei",todayPurchase:"10",monthlyPurchase:"400",totalPurchase:"900"},{name:"Nokia",todayPurchase:"5",monthlyPurchase:"100",totalPurchase:"200"},{name:"TCL",todayPurchase:"15",monthlyPurchase:"300",totalPurchase:"800"}]}}}};ge().mock("/home/getData",_e.getStatisticalData),n["default"].config.productionTip=!1,n["default"].prototype.$http=f(),n["default"].use(pe()),new n["default"]({store:ye,router:ee,render:function(e){return e(me)}}).$mount("#app")},6816:function(){},9632:function(e,t,a){"use strict";e.exports=a.p+"img/guest-user.0e5a905e.jpg"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=e,function(){var e=[];a.O=function(t,n,r,o){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"-legacy.bc859a45.js"}}(),function(){a.miniCssF=function(e){return"css/"+e+".bc422aed.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="sample-v2:";a.l=function(n,r,o,l){if(e[n])e[n].push(r);else{var i,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){i=d;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[r];var m=function(t,a){i.onerror=i.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){a.p="/"}(),function(){var e=function(e,t,a,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)a();else{var l=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=l,s.request=i,r.parentNode.removeChild(r),n(s)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var l=document.getElementsByTagName("style");for(n=0;n<l.length;n++){r=l[n],o=r.getAttribute("data-href");if(o===e||o===t)return r}},n=function(n){return new Promise((function(r,o){var l=a.miniCssF(n),i=a.p+l;if(t(l,i))return r();e(n,i,r,o)}))},r={143:0};a.f.miniCss=function(e,t){var a={313:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(a,n){r=e[t]=[a,n]}));n.push(r[2]=o);var l=a.p+a.u(t),i=new Error,s=function(n){if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",i.name="ChunkLoadError",i.type=o,i.request=l,r[1](i)}};a.l(l,s,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,l=n[0],i=n[1],s=n[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(r in i)a.o(i,r)&&(a.m[r]=i[r]);if(s)var c=s(a)}for(t&&t(n);u<l.length;u++)o=l[u],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(c)},n=self["webpackChunksample_v2"]=self["webpackChunksample_v2"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(3510)}));n=a.O(n)})();
//# sourceMappingURL=app-legacy.cb6c16a7.js.map