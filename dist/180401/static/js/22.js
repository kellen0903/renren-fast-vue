webpackJsonp([22],{GpWj:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("gyMJ"),l={data:function(){return{visible:!1,url:"",num:0,successNum:0,fileList:[]}},methods:{init:function(e){this.url=s.a.oss.upload(this.$cookie.get("token")),this.visible=!0},beforeUploadHandle:function(e){if("image/jpg"!==e.type&&"image/jpeg"!==e.type&&"image/png"!==e.type&&"image/gif"!==e.type)return this.$message.error("只支持jpg、png、gif格式的图片！"),!1;this.num++},successHandle:function(e,t,i){var s=this;this.fileList=i,this.successNum++,e&&0===e.code?this.num===this.successNum&&this.$confirm("操作成功, 是否继续操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch(function(){s.visible=!1}):this.$message.error(e.msg)},closeHandle:function(){this.fileList=[],this.$emit("refreshDataList")}}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{title:"上传文件","close-on-click-modal":!1,visible:e.visible},on:{close:e.closeHandle,"update:visible":function(t){e.visible=t}}},[i("el-upload",{staticStyle:{"text-align":"center"},attrs:{drag:"",action:e.url,"before-upload":e.beforeUploadHandle,"on-success":e.successHandle,multiple:"","file-list":e.fileList}},[i("i",{staticClass:"el-icon-upload"}),e._v(" "),i("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),i("em",[e._v("点击上传")])]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只支持jpg、png、gif格式的图片！")])])],1)},staticRenderFns:[]},a=i("VU/8")(l,n,!1,null,null,null);t.default=a.exports}});