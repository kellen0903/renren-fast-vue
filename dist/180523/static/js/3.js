webpackJsonp([3,13,29,32],{"6f/g":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("8HvM"),r=n("jqh9"),o=n("sPSN"),l=n("gyMJ"),u=n("NYxO"),c={data:function(){return{loading:!0}},components:{Topbar:i.default,Sidebar:r.default,ContentTabs:o.default},computed:{siteWarpperClasses:function(){return[{"site-sidebar--collapse":this.$store.state.sidebarCollapse}]},siteContentWarpperStyles:function(){return[{minHeight:this.$store.state.documentClientHeight+"px"}]}},created:function(){this.getUserInfo()},mounted:function(){var e=this;this.resetDocumentClientHeight(),window.onresize=function(){e.resetDocumentClientHeight()}},methods:s()({resetDocumentClientHeight:function(){this.UPDATE_DOCUMENT_CLIENT_HEIGHT({height:document.documentElement.clientHeight})},getUserInfo:function(){var e=this;l.a.user.info().then(function(t){var n=t.data;n&&0===n.code&&(e.loading=!1,e.DELETE_CONTENT_TABS([]),e.UPDATE_USER_ID({id:n.user.userId}),e.UPDATE_USER_NAME({name:n.user.username}))})}},Object(u.b)(["UPDATE_DOCUMENT_CLIENT_HEIGHT","UPDATE_USER_ID","UPDATE_USER_NAME","DELETE_CONTENT_TABS"]))},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:this.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"site-wrapper",class:this.siteWarpperClasses,attrs:{"element-loading-text":"拼命加载中"}},[this.loading?this._e():[t("topbar"),this._v(" "),t("sidebar"),this._v(" "),t("div",{staticClass:"site-content__wrapper",style:this.siteContentWarpperStyles},[t("router-view")],1)]],2)},staticRenderFns:[]},m=n("VU/8")(c,d,!1,null,null,null);t.default=m.exports},"8HvM":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("OHGg"),r=n("gyMJ"),o=n("NYxO"),l={data:function(){return{updatePassowrdVisible:!1}},components:{UpdatePassword:i.default},methods:s()({switchSidebarCollapseHandle:function(){this.SWITCH_SIDEBAR_COLLAPSE({collapse:!this.$store.state.sidebarCollapse})},updatePasswordHandle:function(){var e=this;this.updatePassowrdVisible=!0,this.$nextTick(function(){e.$refs.updatePassowrd.init()})},logoutHandle:function(){var e=this;this.$confirm("确定进行[退出]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.a.common.logout().then(function(t){var n=t.data;n&&0===n.code&&(e.DELETE_CONTENT_TABS([]),e.$cookie.delete("token"),e.$router.replace({name:"login"}))})})}},Object(o.b)(["SWITCH_SIDEBAR_COLLAPSE","DELETE_CONTENT_TABS"]))},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"site-topbar"},[a("div",{staticClass:"site-topbar__header"},[a("h1",{staticClass:"site-logo",on:{click:function(t){e.$router.push({name:"home"})}}},[a("a",{staticClass:"site-logo__lg",attrs:{href:"javascript:;"}},[e._v("机器人")]),e._v(" "),a("a",{staticClass:"site-logo__mini",attrs:{href:"javascript:;"}},[e._v("欢天喜地")])])]),e._v(" "),a("div",{staticClass:"site-topbar__body clearfix"},[a("el-menu",{staticClass:"site-topbar__menu",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__switch",attrs:{index:"1-1"},on:{click:function(t){e.switchSidebarCollapseHandle()}}},[a("icon-svg",{attrs:{name:"zhedie"}})],1)],1),e._v(" "),a("el-menu",{staticClass:"site-topbar__menu site-topbar__menu--right",attrs:{mode:"horizontal"}},[a("el-menu-item",{staticClass:"site-topbar__avatar",attrs:{index:"1-2"}},[a("el-dropdown",{attrs:{placement:"bottom","hide-on-click":!1}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:n("zQrT"),alt:e.$store.state.user.name}}),e._v("\n            "+e._s(e.$store.state.user.name)+"\n          ")]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){e.updatePasswordHandle()}}},[e._v("修改密码")]),e._v(" "),a("el-dropdown-item",{nativeOn:{click:function(t){e.logoutHandle()}}},[e._v("退出")])],1)],1)],1)],1)],1),e._v(" "),e.updatePassowrdVisible?a("update-password",{ref:"updatePassowrd"}):e._e()],1)},staticRenderFns:[]},c=n("VU/8")(l,u,!1,null,null,null);t.default=c.exports},jqh9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mvHQ"),s=n.n(a),i=n("Dd8w"),r=n.n(i),o=n("0xDb"),l={name:"sub-menu-nav",props:{menuNav:Object,required:!0},components:{SubMenuNav:c},methods:{gotoRouteHandle:function(e){var t=Object(o.a)(e);/\S/.test(t)&&this.$router.push({name:t})}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.menuNav.list&&e.menuNav.list.length>=1?n("el-submenu",{attrs:{"data-idx":e.menuNav.menuId+"",index:e.menuNav.menuId+""}},[n("template",{attrs:{slot:"title"},slot:"title"},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])]),e._v(" "),e._l(e.menuNav.list,function(e){return n("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})})],2):n("el-menu-item",{attrs:{index:e.menuNav.menuId+"","data-idx":e.menuNav.menuId+""},on:{click:function(t){e.gotoRouteHandle(e.menuNav.url)}}},[n("i",{class:["site-sidebar__menu-icon",e.menuNav.icon?e.menuNav.icon:"fa fa-circle-o"]}),e._v(" "),n("span",[e._v(e._s(e.menuNav.name))])])},staticRenderFns:[]},c=n("VU/8")(l,u,!1,null,null,null).exports,d=n("gyMJ"),m=n("NYxO"),_=n("lHK6"),v=n.n(_),f={data:function(){return{menuNavActive:"1-1"}},components:{SubMenuNav:c},watch:{$route:"routeHandle"},created:function(){var e=this;this.getMenuNavList().then(function(){e.routeHandle(e.$route)})},methods:r()({getMenuNavList:function(){var e=this;return d.a.menu.nav().then(function(t){var n=t.data;n&&0===n.code?(e.UPDATE_MENU_NAV_LIST(n.menuList),sessionStorage.setItem("permissions",s()(n.permissions||"[]"))):(e.UPDATE_MENU_NAV_LIST([]),sessionStorage.setItem("permissions","[]"))})},routeHandle:function(e){if(/^\/n\/.*$/.test(e.path)){var t=this.$store.state.contentTabs.filter(function(t){return t.name===e.name})[0];if(console.log(t),v()(t)){var n=this.getMenuNavByRouteName(e.name,this.$store.state.menuNavList);if(v()(n))return console.error("未能找到可用tab标签页！");t={id:n.menuId,name:e.name,title:n.name,type:-1!==(window.SITE_CONFIG.nestIframeRouteNameList||[]).indexOf(e.name)?"iframe":"module",url:n.url},this.ADD_CONTENT_TAB(t)}this.menuNavActive=t.id+"",this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e.name})}},getMenuNavByRouteName:function(e,t){console.log(t);for(var n=0;n<t.length;n++){var a=t[n].list;console.log(a);for(var s=0;s<a.length;s++)if(Object(o.a)(a[s].url)===e)return a[s]}}},Object(m.b)(["UPDATE_MENU_NAV_LIST","ADD_CONTENT_TAB","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"site-sidebar"},[t("div",{staticClass:"site-sidebar__inner"},[t("el-menu",{staticClass:"site-sidebar__menu",attrs:{"default-active":this.menuNavActive,collapse:this.$store.state.sidebarCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"}},this._l(this.$store.state.menuNavList,function(e){return t("sub-menu-nav",{key:e.menuId,attrs:{"menu-nav":e}})}))],1)])},staticRenderFns:[]},p=n("VU/8")(f,h,!1,null,null,null);t.default=p.exports},sPSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),i=n("lHK6"),r=n.n(i),o=n("NYxO"),l={data:function(){return{}},computed:{tabActiveName:{get:function(){return this.$store.state.contentTabsActiveName},set:function(e){this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e})}}},methods:s()({contentViewHeight:function(e){var t=this.$store.state.documentClientHeight;return t-=50,t-=40,t-=15,t-=15,t-=2,t+="px","iframe"===e.type?{height:t}:{minHeight:t}},getNestIframeUrl:function(e){return window.SITE_CONFIG.nestIframeUrl+e},selectedTabHandle:function(e){e=this.$store.state.contentTabs.filter(function(t){return t.name===e.name}),r()(e)||this.$router.push({name:e[0].name})},removeTabHandle:function(e){var t=this,n=this.$store.state.contentTabs.filter(function(t){return t.name!==e});e===this.tabActiveName&&this.$router.push({name:n[n.length-1].name},function(){t.tabActiveName=t.$route.name}),this.UPDATE_CONTENT_TABS(n)}},Object(o.b)(["UPDATE_CONTENT_TABS","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-content site-content--tabs"},[n("el-tabs",{attrs:{closable:e.$store.state.contentTabs.length>1},on:{"tab-click":e.selectedTabHandle,"tab-remove":e.removeTabHandle},model:{value:e.tabActiveName,callback:function(t){e.tabActiveName=t},expression:"tabActiveName"}},e._l(e.$store.state.contentTabs,function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[n("el-card",{attrs:{"body-style":e.contentViewHeight(t)}},["iframe"===t.type?n("iframe",{attrs:{src:e.getNestIframeUrl(t.url),width:"100%",height:"100%",frameborder:"0",scrolling:"yes"}}):n("keep-alive",[t.name===e.tabActiveName?n("router-view"):e._e()],1)],1)],1)}))],1)},staticRenderFns:[]},c=n("VU/8")(l,u,!1,null,null,null);t.default=c.exports},zQrT:function(e,t,n){e.exports=n.p+"static/img/avatar.c58e465.png"}});