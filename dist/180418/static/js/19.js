webpackJsonp([19],{jnUM:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t("gyMJ"),r={data:function(){return{visible:!1,dataForm:{tid:""},dataRule:{playMinNum:[{required:!0,message:"投注最小值不能为空",trigger:"blur"}],playMaxNum:[{required:!0,message:"投注最大值不能为空",trigger:"blur"}],singleDoubleOdds:[{required:!0,message:"单双赔率不能为空",trigger:"blur"}],bigSmallOdds:[{required:!0,message:"大小赔率不能为空",trigger:"blur"}],dragonTigerOdds:[{required:!0,message:"龙虎赔率不能为空",trigger:"blur"}],codeOdds:[{required:!0,message:"特码赔率不能为空",trigger:"blur"}],sumSingleDoubleOdds:[{required:!0,message:"总单双赔率不能为空",trigger:"blur"}],sumBigSmallOdds:[{required:!0,message:"总大小赔率不能为空",trigger:"blur"}],sumOdds:[{required:!0,message:"总合赔率不能为空",trigger:"blur"}]}}},methods:{init:function(e){var a=this;this.dataForm.tid=e,this.visible=!0,this.$nextTick(function(){a.$refs.dataForm.resetFields(),a.dataForm.tid&&l.a.cqssc.info(a.dataForm.tid).then(function(e){var t=e.data;t&&0===t.code&&t.cqsscConfig.tid&&(a.dataForm=t.cqsscConfig)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(a){if(a){var t=e.dataForm;l.a.cqssc.save(t).then(function(a){var t=a.data;t&&0===t.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(t.msg)})}})}}},s={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-dialog",{attrs:{title:"配置重庆时时彩","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(a){e.visible=a}}},[t("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px",size:"small",inline:"true"},nativeOn:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"投注最小值",prop:"playMinNum"}},[t("el-input",{model:{value:e.dataForm.playMinNum,callback:function(a){e.$set(e.dataForm,"playMinNum",a)},expression:"dataForm.playMinNum"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"投注最大值",prop:"playMaxNum"}},[t("el-input",{model:{value:e.dataForm.playMaxNum,callback:function(a){e.$set(e.dataForm,"playMaxNum",a)},expression:"dataForm.playMaxNum"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"单双赔率",prop:"singleDoubleOdds"}},[t("el-input",{model:{value:e.dataForm.singleDoubleOdds,callback:function(a){e.$set(e.dataForm,"singleDoubleOdds",a)},expression:"dataForm.singleDoubleOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"大小赔率",prop:"bigSmallOdds"}},[t("el-input",{model:{value:e.dataForm.bigSmallOdds,callback:function(a){e.$set(e.dataForm,"bigSmallOdds",a)},expression:"dataForm.bigSmallOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"龙虎赔率",prop:"dragonTigerOdds"}},[t("el-input",{model:{value:e.dataForm.dragonTigerOdds,callback:function(a){e.$set(e.dataForm,"dragonTigerOdds",a)},expression:"dataForm.dragonTigerOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"特码赔率",prop:"codeOdds"}},[t("el-input",{model:{value:e.dataForm.codeOdds,callback:function(a){e.$set(e.dataForm,"codeOdds",a)},expression:"dataForm.codeOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"总单双赔率",prop:"sumSingleDoubleOdds"}},[t("el-input",{model:{value:e.dataForm.sumSingleDoubleOdds,callback:function(a){e.$set(e.dataForm,"sumSingleDoubleOdds",a)},expression:"dataForm.sumSingleDoubleOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"总大小赔率",prop:"sumBigSmallOdds"}},[t("el-input",{model:{value:e.dataForm.sumBigSmallOdds,callback:function(a){e.$set(e.dataForm,"sumBigSmallOdds",a)},expression:"dataForm.sumBigSmallOdds"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"总合赔率",prop:"sumOdds"}},[t("el-input",{model:{value:e.dataForm.sumOdds,callback:function(a){e.$set(e.dataForm,"sumOdds",a)},expression:"dataForm.sumOdds"}})],1)],1),e._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.visible=!1}}},[e._v("取消")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(a){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},d=t("VU/8")(r,s,!1,null,null,null);a.default=d.exports}});