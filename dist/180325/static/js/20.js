webpackJsonp([20],{"0icb":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("gyMJ"),o=a("0xDb"),i={data:function(){return{visible:!1,menuList:[],menuListTreeProps:{label:"name",children:"children"},dataForm:{id:0,roleName:"",remark:""},dataRule:{roleName:[{required:!0,message:"角色名称不能为空",trigger:"blur"}]},tempKey:-666666}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,r.a.menu.list().then(function(e){var a=e.data;t.menuList=Object(o.d)(a,"menuId")}).then(function(){t.visible=!0,t.$nextTick(function(){t.$refs.dataForm.resetFields(),t.$refs.menuListTree.setCheckedKeys([])})}).then(function(){t.dataForm.id&&r.a.role.info(t.dataForm.id).then(function(e){var a=e.data;if(a&&0===a.code){t.dataForm.roleName=a.role.roleName,t.dataForm.remark=a.role.remark;var r=a.role.menuIdList.indexOf(t.tempKey);-1!==r&&a.role.menuIdList.splice(r,a.role.menuIdList.length-r),t.$refs.menuListTree.setCheckedKeys(a.role.menuIdList)}})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){var a={roleId:e.dataForm.id||void 0,roleName:e.dataForm.roleName,remark:e.dataForm.remark,menuIdList:[].concat(e.$refs.menuListTree.getCheckedKeys(),[e.tempKey],e.$refs.menuListTree.getHalfCheckedKeys())};(e.dataForm.id?r.a.role.update(a):r.a.role.add(a)).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})}})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[a("el-input",{attrs:{placeholder:"角色名称"},model:{value:e.dataForm.roleName,callback:function(t){e.$set(e.dataForm,"roleName",t)},expression:"dataForm.roleName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.remark,callback:function(t){e.$set(e.dataForm,"remark",t)},expression:"dataForm.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{size:"mini",label:"授权"}},[a("el-tree",{ref:"menuListTree",attrs:{data:e.menuList,props:e.menuListTreeProps,"node-key":"menuId","default-expand-all":!0,"show-checkbox":""}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},l=a("VU/8")(i,n,!1,null,null,null);t.default=l.exports}});