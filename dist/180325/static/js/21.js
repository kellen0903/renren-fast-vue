webpackJsonp([21],{EZjq:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("gyMJ"),r={data:function(){return{dataForm:{rechargeNo:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var t={page:this.pageIndex,limit:this.pageSize,rechargeNo:this.dataForm.rechargeNo};n.a.recharge.list(t).then(function(t){var a=t.data;a&&0===a.code?(e.dataList=a.page.list,e.totalPage=a.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},approve:function(e,t,a){var r=this;this.$confirm("确定进行审核操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var i={rechargeId:e,tid:t,type:a};n.a.recharge.approve(i).then(function(e){var t=e.data;t&&0===t.code?r.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){r.getDataList()}}):r.$message.error(t.msg)})})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mod-user"},[a("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"单号",clearable:""},model:{value:e.dataForm.rechargeNo,callback:function(t){e.$set(e.dataForm,"rechargeNo",t)},expression:"dataForm.rechargeNo"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:function(t){e.getDataList()}}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rechargeNo","header-align":"center",align:"center",width:"180",label:"单号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"amount","header-align":"center",align:"center",label:"金额"}}),e._v(" "),a("el-table-column",{attrs:{prop:"happyId","header-align":"center",align:"center",label:"会员id"}}),e._v(" "),a("el-table-column",{attrs:{prop:"teamName","header-align":"center",align:"center",label:"群名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",width:"180",label:"创建时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("待审核")]):e._e(),e._v(" "),2===t.row.status?a("el-tag",{attrs:{size:"small"}},[e._v("审核通过")]):e._e(),e._v(" "),3===t.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("审核未通过")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.approve(t.row.id,t.row.tid,2)}}},[e._v("审核通过")]):e._e(),e._v(" "),1===t.row.status?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.approve(t.row.id,t.row.tid,3)}}},[e._v("审核拒绝")]):e._e()]}}])})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]},l=a("VU/8")(r,i,!1,null,null,null);t.default=l.exports}});