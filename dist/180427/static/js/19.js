webpackJsonp([19],{tvOM:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("gyMJ"),n={data:function(){return{visible:!1,dataForm:{happyId:"",nickName:"",tid:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1}},methods:{init:function(t){var e=this;this.dataForm.tid=t,this.visible=!0,this.$nextTick(function(){e.getDataList(t)})},getDataList:function(t){var e=this;this.dataListLoading=!0;var a={page:this.pageIndex,limit:this.pageSize,tid:t,happyId:this.dataForm.happyId,nickName:this.dataForm.nickName};i.a.member.list(a).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:"会员列表","close-on-click-modal":!1,visible:t.visible,width:"60%"},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"会员昵称",clearable:""},model:{value:t.dataForm.nickName,callback:function(e){t.$set(t.dataForm,"nickName",e)},expression:"dataForm.nickName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")])],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:"",height:"460"}},[a("el-table-column",{attrs:{prop:"happyId","header-align":"center",align:"center",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"nickName","header-align":"center",align:"center",label:"会员昵称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"totalAmount","header-align":"center",align:"center",label:"余额"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("filterPrice")(e.row.totalAmount))+"\n      ")]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}})],1)},staticRenderFns:[]},o=a("VU/8")(n,l,!1,null,null,null);e.default=o.exports}});