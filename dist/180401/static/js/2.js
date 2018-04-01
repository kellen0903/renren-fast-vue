webpackJsonp([2,15,16,17],{"+HSp":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=t("gyMJ"),n={data:function(){return{visible:!1,dataForm:{tid:""},dataRule:{playMinNum:[{required:!0,message:"投注最小值不能为空",trigger:"blur"}],playMaxNum:[{required:!0,message:"投注最大值不能为空",trigger:"blur"}],singleDoubleOdds:[{required:!0,message:"单双赔率不能为空",trigger:"blur"}],bigSmallOdds:[{required:!0,message:"大小赔率不能为空",trigger:"blur"}],dragonTigerOdds:[{required:!0,message:"投注最小值不能为空",trigger:"blur"}],codeOdds:[{required:!0,message:"特码赔率不能为空",trigger:"blur"}],champAndSecondSingleOdds:[{required:!0,message:"冠亚和单赔率不能为空",trigger:"blur"}],champAndSecondDoubleOdds:[{required:!0,message:"冠亚和双赔率不能为空",trigger:"blur"}],champAndSecondBigOdds:[{required:!0,message:"冠亚和大赔率不能为空",trigger:"blur"}],champAndSecondSmallOdds:[{required:!0,message:"冠亚和小赔率不能为空",trigger:"blur"}],champAndSecondValue3Odds:[{required:!0,message:"冠亚和3赔率不能为空",trigger:"blur"}],champAndSecondValue4Odds:[{required:!0,message:"冠亚和4赔率不能为空",trigger:"blur"}],champAndSecondValue5Odds:[{required:!0,message:"冠亚和5赔率不能为空",trigger:"blur"}],champAndSecondValue6Odds:[{required:!0,message:"冠亚和6赔率不能为空",trigger:"blur"}],champAndSecondValue7Odds:[{required:!0,message:"冠亚和7赔率不能为空",trigger:"blur"}],champAndSecondValue8Odds:[{required:!0,message:"冠亚和8赔率不能为空",trigger:"blur"}],champAndSecondValue9Odds:[{required:!0,message:"冠亚和9赔率不能为空",trigger:"blur"}],champAndSecondValue10Odds:[{required:!0,message:"冠亚和10赔率不能为空",trigger:"blur"}],champAndSecondValue11Odds:[{required:!0,message:"冠亚和11赔率不能为空",trigger:"blur"}],champAndSecondValue12Odds:[{required:!0,message:"冠亚和12赔率不能为空",trigger:"blur"}],champAndSecondValue13Odds:[{required:!0,message:"冠亚和13赔率不能为空",trigger:"blur"}],champAndSecondValue14Odds:[{required:!0,message:"冠亚和14赔率不能为空",trigger:"blur"}],champAndSecondValue15Odds:[{required:!0,message:"冠亚和15赔率不能为空",trigger:"blur"}],champAndSecondValue16Odds:[{required:!0,message:"冠亚和16赔率不能为空",trigger:"blur"}],champAndSecondValue17Odds:[{required:!0,message:"冠亚和17赔率不能为空",trigger:"blur"}],champAndSecondValue18Odds:[{required:!0,message:"冠亚和18赔率不能为空",trigger:"blur"}],champAndSecondValue19Odds:[{required:!0,message:"冠亚和19赔率不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.tid=e,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.tid&&d.a.pk10.info(a.dataForm.tid).then(function(e){var t=e.data;t&&0===t.code&&t.pk10Config.tid&&(a.dataForm=t.pk10Config)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t=e.dataForm;d.a.pk10.save(t).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:"配置pk10","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px",size:"small",inline:"true"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"投注最小值",prop:"playMinNum"}},[t("el-input",{model:{value:e.dataForm.playMinNum,callback:function(a){e.$set(e.dataForm,"playMinNum",a)},expression:"dataForm.playMinNum"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"投注最大值",prop:"playMaxNum"}},[t("el-input",{model:{value:e.dataForm.playMaxNum,callback:function(a){e.$set(e.dataForm,"playMaxNum",a)},expression:"dataForm.playMaxNum"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"单双赔率",prop:"singleDoubleOdds"}},[t("el-input",{model:{value:e.dataForm.singleDoubleOdds,callback:function(a){e.$set(e.dataForm,"singleDoubleOdds",a)},expression:"dataForm.singleDoubleOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"大小赔率",prop:"bigSmallOdds"}},[t("el-input",{model:{value:e.dataForm.bigSmallOdds,callback:function(a){e.$set(e.dataForm,"bigSmallOdds",a)},expression:"dataForm.bigSmallOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"龙虎赔率",prop:"dragonTigerOdds"}},[t("el-input",{model:{value:e.dataForm.dragonTigerOdds,callback:function(a){e.$set(e.dataForm,"dragonTigerOdds",a)},expression:"dataForm.dragonTigerOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"特码赔率",prop:"codeOdds"}},[t("el-input",{model:{value:e.dataForm.codeOdds,callback:function(a){e.$set(e.dataForm,"codeOdds",a)},expression:"dataForm.codeOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和单赔率",prop:"champAndSecondSingleOdds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondSingleOdds,callback:function(a){e.$set(e.dataForm,"champAndSecondSingleOdds",a)},expression:"dataForm.champAndSecondSingleOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和双赔率",prop:"champAndSecondDoubleOdds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondDoubleOdds,callback:function(a){e.$set(e.dataForm,"champAndSecondDoubleOdds",a)},expression:"dataForm.champAndSecondDoubleOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和大赔率",prop:"champAndSecondBigOdds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondBigOdds,callback:function(a){e.$set(e.dataForm,"champAndSecondBigOdds",a)},expression:"dataForm.champAndSecondBigOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和小赔率",prop:"champAndSecondSmallOdds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondSmallOdds,callback:function(a){e.$set(e.dataForm,"champAndSecondSmallOdds",a)},expression:"dataForm.champAndSecondSmallOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和3赔率",prop:"champAndSecondValue3Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue3Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue3Odds",a)},expression:"dataForm.champAndSecondValue3Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和4赔率",prop:"champAndSecondValue4Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue4Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue4Odds",a)},expression:"dataForm.champAndSecondValue4Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和5赔率",prop:"champAndSecondValue5Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue5Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue5Odds",a)},expression:"dataForm.champAndSecondValue5Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和6赔率",prop:"champAndSecondValue6Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue6Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue6Odds",a)},expression:"dataForm.champAndSecondValue6Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和7赔率",prop:"champAndSecondValue7Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue7Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue7Odds",a)},expression:"dataForm.champAndSecondValue7Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和8赔率",prop:"champAndSecondValue8Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue8Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue8Odds",a)},expression:"dataForm.champAndSecondValue8Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和9赔率",prop:"champAndSecondValue9Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue9Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue9Odds",a)},expression:"dataForm.champAndSecondValue9Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和10赔率",prop:"champAndSecondValue10Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue10Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue10Odds",a)},expression:"dataForm.champAndSecondValue10Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和11赔率",prop:"champAndSecondValue11Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue11Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue11Odds",a)},expression:"dataForm.champAndSecondValue11Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和12赔率",prop:"champAndSecondValue12Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue12Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue12Odds",a)},expression:"dataForm.champAndSecondValue12Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和13赔率",prop:"champAndSecondValue13Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue13Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue13Odds",a)},expression:"dataForm.champAndSecondValue13Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和14赔率",prop:"champAndSecondValue14Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue14Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue14Odds",a)},expression:"dataForm.champAndSecondValue14Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和15赔率",prop:"champAndSecondValue15Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue15Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue15Odds",a)},expression:"dataForm.champAndSecondValue15Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和16赔率",prop:"champAndSecondValue16Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue16Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue16Odds",a)},expression:"dataForm.champAndSecondValue16Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和17赔率",prop:"champAndSecondValue17Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue17Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue17Odds",a)},expression:"dataForm.champAndSecondValue17Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和18赔率",prop:"champAndSecondValue18Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue18Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue18Odds",a)},expression:"dataForm.champAndSecondValue18Odds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"冠亚和19赔率",prop:"champAndSecondValue19Odds"}},[t("el-input",{model:{value:e.dataForm.champAndSecondValue19Odds,callback:function(a){e.$set(e.dataForm,"champAndSecondValue19Odds",a)},expression:"dataForm.champAndSecondValue19Odds"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=t("VU/8")(n,l,!1,null,null,null);a.default=r.exports},JoaB:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=t("gyMJ"),n=t("+HSp"),l=t("jnUM"),r=t("zfT2"),o={data:function(){return{dataForm:{teamName:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1,pk10ConfigVisible:!1,cqsscConfigVisible:!1,orderVisible:!1}},components:{pk10Config:n.default,cqsscConfig:l.default,order:r.default},activated:function(){this.getDataList()},methods:{getDataList:function(){var e=this;this.dataListLoading=!0;var a={page:this.pageIndex,limit:this.pageSize,username:this.dataForm.userName};d.a.team.list(a).then(function(a){var t=a.data;t&&0===t.code?(e.dataList=t.page.list,e.totalPage=t.page.totalCount):(e.dataList=[],e.totalPage=0),e.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()},selectionChangeHandle:function(e){this.dataListSelections=e},gameConfigHandle:function(e,a){var t=this;1===a?(this.pk10ConfigVisible=!0,this.$nextTick(function(){t.$refs.pk10Config.init(e)})):(this.cqsscConfigVisible=!0,this.$nextTick(function(){t.$refs.cqsscConfig.init(e)}))},bindRobot:function(e){var a=this;this.$confirm("确定绑定机器人?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={tid:e};d.a.team.bindRobot(t).then(function(e){var t=e.data;t&&0===t.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.getDataList()}}):a.$message.error(t.msg)})})},updateGame:function(e,a,t){var n=this;this.$confirm("确定更改游戏","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var l={tid:e,status:a,lotteryType:t};d.a.team.updateGame(l).then(function(e){var a=e.data;a&&0===a.code?n.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){n.getDataList()}}):n.$message.error(a.msg)})})},orderHandle:function(e){var a=this;this.orderVisible=!0,this.$nextTick(function(){a.$refs.order.init(e)})}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mod-user"},[t("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.getDataList()}}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"群名称",clearable:""},model:{value:e.dataForm.name,callback:function(a){e.$set(e.dataForm,"name",a)},expression:"dataForm.name"}})],1),e._v(" "),t("el-form-item",[t("el-button",{on:{click:function(a){e.getDataList()}}},[e._v("查询")])],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:""},on:{"selection-change":e.selectionChangeHandle}},[t("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",width:"100",label:"ID"}}),e._v(" "),t("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"群名称"}},[e._v("s\n    ")]),e._v(" "),t("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"是否开启"},scopedSlots:e._u([{key:"default",fn:function(a){return[1===a.row.status?t("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("未开启")]):t("el-tag",{attrs:{size:"small",type:"success"}},[e._v("已开启")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"是否绑定机器人"},scopedSlots:e._u([{key:"default",fn:function(a){return[1===a.row.isBindRobot?t("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("未绑定")]):t("el-tag",{attrs:{size:"small",type:"success"}},[e._v("已绑定")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"lotteryType","header-align":"center",align:"center",label:"游戏类型"},scopedSlots:e._u([{key:"default",fn:function(a){return["1"==a.row.lotteryType?t("el-tag",{attrs:{size:"small"}},[e._v("pk赛车")]):t("el-tag",{attrs:{size:"small"}},[e._v("重庆时时彩")])]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",width:"180",label:"创建时间"}}),e._v(" "),t("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"200",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[1===a.row.isBindRobot?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.bindRobot(a.row.id)}}},[e._v("\n          绑定机器人\n        ")]):e._e(),e._v(" "),"1"==a.row.lotteryType?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.gameConfigHandle(a.row.id,1)}}},[e._v("pk10配置\n        ")]):e._e(),e._v(" "),"2"==a.row.lotteryType?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.gameConfigHandle(a.row.id,2)}}},[e._v("时时彩配置\n        ")]):e._e(),e._v(" "),1===a.row.status?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.updateGame(a.row.id,2,"")}}},[e._v("\n          开启游戏\n        ")]):e._e(),e._v(" "),2===a.row.status?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.updateGame(a.row.id,1,"")}}},[e._v("\n          关闭游戏\n        ")]):e._e(),e._v(" "),"1"==a.row.lotteryType?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.updateGame(a.row.id,"",2)}}},[e._v("\n          切换至时时彩\n        ")]):e._e(),e._v(" "),"2"==a.row.lotteryType?t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.updateGame(a.row.id,"",1)}}},[e._v("\n          切换至pk10\n        ")]):e._e(),e._v(" "),t("el-button",{attrs:{type:"text",size:"small"},on:{click:function(t){e.orderHandle(a.row.id)}}},[e._v("\n          投注列表\n        ")])]}}])})],1),e._v(" "),t("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}}),e._v(" "),e.pk10ConfigVisible?t("pk10Config",{ref:"pk10Config",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.cqsscConfigVisible?t("cqsscConfig",{ref:"cqsscConfig",on:{refreshDataList:e.getDataList}}):e._e(),e._v(" "),e.orderVisible?t("order",{ref:"order",on:{refreshDataList:e.getDataList}}):e._e()],1)},staticRenderFns:[]},i=t("VU/8")(o,s,!1,null,null,null);a.default=i.exports},jnUM:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=t("gyMJ"),n={data:function(){return{visible:!1,dataForm:{tid:""},dataRule:{playMinNum:[{required:!0,message:"投注最小值不能为空",trigger:"blur"}],playMaxNum:[{required:!0,message:"投注最大值不能为空",trigger:"blur"}],singleDoubleOdds:[{required:!0,message:"单双赔率不能为空",trigger:"blur"}],bigSmallOdds:[{required:!0,message:"大小赔率不能为空",trigger:"blur"}],dragonTigerOdds:[{required:!0,message:"龙虎赔率不能为空",trigger:"blur"}],codeOdds:[{required:!0,message:"特码赔率不能为空",trigger:"blur"}],sumSingleDoubleOdds:[{required:!0,message:"总单双赔率不能为空",trigger:"blur"}],sumBigSmallOdds:[{required:!0,message:"总大小赔率不能为空",trigger:"blur"}],sumOdds:[{required:!0,message:"总合赔率不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.tid=e,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.tid&&d.a.cqssc.info(a.dataForm.tid).then(function(e){var t=e.data;t&&0===t.code&&t.cqsscConfig.tid&&(a.dataForm=t.cqsscConfig)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t=e.dataForm;d.a.cqssc.save(t).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:"配置重庆时时彩","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px",size:"small",inline:"true"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"投注最小值",prop:"playMinNum"}},[t("el-input",{model:{value:e.dataForm.playMinNum,callback:function(a){e.$set(e.dataForm,"playMinNum",a)},expression:"dataForm.playMinNum"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"投注最大值",prop:"playMaxNum"}},[t("el-input",{model:{value:e.dataForm.playMaxNum,callback:function(a){e.$set(e.dataForm,"playMaxNum",a)},expression:"dataForm.playMaxNum"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"单双赔率",prop:"singleDoubleOdds"}},[t("el-input",{model:{value:e.dataForm.singleDoubleOdds,callback:function(a){e.$set(e.dataForm,"singleDoubleOdds",a)},expression:"dataForm.singleDoubleOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"大小赔率",prop:"bigSmallOdds"}},[t("el-input",{model:{value:e.dataForm.bigSmallOdds,callback:function(a){e.$set(e.dataForm,"bigSmallOdds",a)},expression:"dataForm.bigSmallOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"龙虎赔率",prop:"dragonTigerOdds"}},[t("el-input",{model:{value:e.dataForm.dragonTigerOdds,callback:function(a){e.$set(e.dataForm,"dragonTigerOdds",a)},expression:"dataForm.dragonTigerOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"特码赔率",prop:"codeOdds"}},[t("el-input",{model:{value:e.dataForm.codeOdds,callback:function(a){e.$set(e.dataForm,"codeOdds",a)},expression:"dataForm.codeOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"总单双赔率",prop:"sumSingleDoubleOdds"}},[t("el-input",{model:{value:e.dataForm.sumSingleDoubleOdds,callback:function(a){e.$set(e.dataForm,"sumSingleDoubleOdds",a)},expression:"dataForm.sumSingleDoubleOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"总大小赔率",prop:"sumBigSmallOdds"}},[t("el-input",{model:{value:e.dataForm.sumBigSmallOdds,callback:function(a){e.$set(e.dataForm,"sumBigSmallOdds",a)},expression:"dataForm.sumBigSmallOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"总合赔率",prop:"sumOdds"}},[t("el-input",{model:{value:e.dataForm.sumOdds,callback:function(a){e.$set(e.dataForm,"sumOdds",a)},expression:"dataForm.sumOdds"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},r=t("VU/8")(n,l,!1,null,null,null);a.default=r.exports},zfT2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var d=t("gyMJ"),n={data:function(){return{visible:!1,dataForm:{happyId:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,tid:""}},methods:{init:function(e){this.visible=!0,this.getDataList(e),this.tid=e},getDataList:function(e){var a=this;this.dataListLoading=!0;var t={page:this.pageIndex,limit:this.pageSize,tid:this.tid,happyId:this.happyId};d.a.order.list(t).then(function(e){var t=e.data;t&&0===t.code?(a.dataList=t.page.list,a.totalPage=t.page.totalCount):(a.dataList=[],a.totalPage=0),a.dataListLoading=!1})},sizeChangeHandle:function(e){this.pageSize=e,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(e){this.pageIndex=e,this.getDataList()}}},l={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:"投注订单列表","close-on-click-modal":!1,visible:e.visible,width:"80%"},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{attrs:{inline:!0,model:e.dataForm},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.getDataList()}}},[t("el-form-item",[t("el-input",{attrs:{placeholder:"环聊ID",clearable:""},model:{value:e.dataForm.happyId,callback:function(a){e.$set(e.dataForm,"happyId",a)},expression:"dataForm.happyId"}})],1),e._v(" "),t("el-form-item",[t("el-button",{on:{click:function(a){e.getDataList()}}},[e._v("查询")])],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",height:"460"}},[t("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",width:"100",label:"订单编号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"happyId","header-align":"center",align:"center",width:"100",label:"欢聊id"}}),e._v(" "),t("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"游戏名称"},scopedSlots:e._u([{key:"default",fn:function(a){return["1"==a.row.lotteryType?t("el-tag",{attrs:{size:"small"}},[e._v("北京pk10")]):e._e(),e._v(" "),"2"==a.row.lotteryType?t("el-tag",{attrs:{size:"small"}},[e._v("时时彩")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"period","header-align":"center",align:"center",label:"投注期号"}}),e._v(" "),t("el-table-column",{attrs:{prop:"content","header-align":"center",align:"center",label:"投注内容"}}),e._v(" "),t("el-table-column",{attrs:{prop:"amount","header-align":"center",align:"center",label:"投注金额"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n        "+e._s(e._f("filterPrice")(a.row.amount))+"\n      ")]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"openCode","header-align":"center",align:"center",label:"开奖号码"}}),e._v(" "),t("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"订单状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[0===a.row.status?t("el-tag",{attrs:{size:"small"}},[e._v("待确认")]):e._e(),e._v(" "),1===a.row.status?t("el-tag",{attrs:{size:"small"}},[e._v("待开奖")]):e._e(),e._v(" "),2===a.row.status?t("el-tag",{attrs:{size:"small",type:"success"}},[e._v("已开奖")]):e._e(),e._v(" "),3===a.row.status?t("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("已取消")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"投注时间"}}),e._v(" "),t("el-table-column",{attrs:{prop:"isWin","header-align":"center",align:"center",label:"是否中奖"},scopedSlots:e._u([{key:"default",fn:function(a){return[0===a.row.isWin?t("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("未中奖")]):e._e(),e._v(" "),1===a.row.isWin?t("el-tag",{attrs:{size:"small",type:"success"}},[e._v("中奖")]):e._e()]}}])}),e._v(" "),t("el-table-column",{attrs:{prop:"awardAmount","header-align":"center",align:"center",label:"中奖金额"},scopedSlots:e._u([{key:"default",fn:function(a){return[e._v("\n        "+e._s(e._f("filterPrice")(a.row.awardAmount))+"\n      ")]}}])},[e._v("s\n    ")])],1),e._v(" "),t("el-pagination",{attrs:{"current-page":e.pageIndex,"page-sizes":[10,20,50,100],"page-size":e.pageSize,total:e.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.sizeChangeHandle,"current-change":e.currentChangeHandle}})],1)},staticRenderFns:[]},r=t("VU/8")(n,l,!1,null,null,null);a.default=r.exports}});