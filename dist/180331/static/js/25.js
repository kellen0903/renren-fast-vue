webpackJsonp([25],{sPSN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),r=n.n(a),s=n("lHK6"),i=n.n(s),c=n("NYxO"),o={data:function(){return{}},computed:{tabActiveName:{get:function(){return this.$store.state.contentTabsActiveName},set:function(e){this.UPDATE_CONTENT_TABS_ACTIVE_NAME({name:e})}}},methods:r()({contentViewHeight:function(e){var t=this.$store.state.documentClientHeight;return t-=50,t-=40,t-=15,t-=15,t-=2,t+="px","iframe"===e.type?{height:t}:{minHeight:t}},getNestIframeUrl:function(e){return window.SITE_CONFIG.nestIframeUrl+e},selectedTabHandle:function(e){e=this.$store.state.contentTabs.filter(function(t){return t.name===e.name}),i()(e)||this.$router.push({name:e[0].name})},removeTabHandle:function(e){var t=this,n=this.$store.state.contentTabs.filter(function(t){return t.name!==e});e===this.tabActiveName&&this.$router.push({name:n[n.length-1].name},function(){t.tabActiveName=t.$route.name}),this.UPDATE_CONTENT_TABS(n)}},Object(c.b)(["UPDATE_CONTENT_TABS","UPDATE_CONTENT_TABS_ACTIVE_NAME"]))},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-content site-content--tabs"},[n("el-tabs",{attrs:{closable:e.$store.state.contentTabs.length>1},on:{"tab-click":e.selectedTabHandle,"tab-remove":e.removeTabHandle},model:{value:e.tabActiveName,callback:function(t){e.tabActiveName=t},expression:"tabActiveName"}},e._l(e.$store.state.contentTabs,function(t){return n("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[n("el-card",{attrs:{"body-style":e.contentViewHeight(t)}},["iframe"===t.type?n("iframe",{attrs:{src:e.getNestIframeUrl(t.url),width:"100%",height:"100%",frameborder:"0",scrolling:"yes"}}):n("keep-alive",[t.name===e.tabActiveName?n("router-view"):e._e()],1)],1)],1)}))],1)},staticRenderFns:[]},u=n("VU/8")(o,l,!1,null,null,null);t.default=u.exports}});