webpackJsonp([16],{zfT2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("gyMJ"),n={data:function(){return{visible:!1,dataForm:{happyId:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,tid:""}},methods:{init:function(e){this.visible=!0,this.getDataList(e),this.tid=e},getDataList:function(e){var t=this;this.dataListLoading=!0;var a={page:this.pageIndex,limit:this.pageSize,tid:this.tid,happyId:this.happyId};l.a.order.list(a).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"投注订单列表","close-on-click-modal":!1,visible:e.visible,width:"80%"},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"环聊ID",clearable:""},model:{value:e.dataForm.happyId,callback:function(t){e.$set(e.dataForm,"happyId",t)},expression:"dataForm.happyId"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",height:"460"}},[a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",width:"100",label:"订单编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"happyId","header-align":"center",align:"center",width:"100",label:"欢聊id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"游戏名称"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"==t.row.lotteryType?a("el-tag",{attrs:{size:"small"}},[e._v("北京pk10")]):e._e(),e._v(" "),"2"==t.row.lotteryType?a("el-tag",{attrs:{size:"small"}},[e._v("时时彩")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"period","header-align":"center",align:"center",label:"投注期号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"content","header-align":"center",align:"center",label:"投注内容"}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount","header-align":"center",align:"center",label:"投注金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("filterPrice")(t.row.amount))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"openCode","header-align":"center",align:"center",label:"开奖号码"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.status?a("el-tag",{attrs:{size:"small"}},[e._v("待确认")]):e._e(),e._v(" "),1===t.row.status?a("el-tag",{attrs:{size:"small"}},[e._v("待开奖")]):e._e(),e._v(" "),2===t.row.status?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("已开奖")]):e._e(),e._v(" "),3===t.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("已取消")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"投注时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"isWin","header-align":"center",align:"center",label:"是否中奖"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isWin?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("未中奖")]):e._e(),e._v(" "),1===t.row.isWin?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("中奖")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"awardAmount","header-align":"center",align:"center",label:"中奖金额"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e._f("filterPrice")(t.row.awardAmount))+"\n      ")]}}])},[e._v("s\n    ")])],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]},r=a("VU/8")(n,i,!1,null,null,null);t.default=r.exports}});