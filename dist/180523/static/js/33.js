webpackJsonp([33],{Tg2t:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t("gyMJ");var o={data:function(){var a=this;return{visible:!1,roleList:[],dataForm:{id:0,userName:"",password:"",comfirmPassword:"",salt:"",email:"",mobile:"",roleIdList:[],status:1},dataRule:{userName:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{validator:function(e,t,r){a.dataForm.id||/\S/.test(t)?r():r(new Error("密码不能为空"))},trigger:"blur"}],comfirmPassword:[{validator:function(e,t,r){a.dataForm.id||/\S/.test(t)?a.dataForm.password!==t?r(new Error("确认密码与密码输入不一致")):r():r(new Error("确认密码不能为空"))},trigger:"blur"}],email:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{validator:function(a,e,t){/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(e)?t():t(new Error("邮箱格式错误"))},trigger:"blur"}],mobile:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:function(a,e,t){/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/.test(e)?t():t(new Error("手机号格式错误"))},trigger:"blur"}]}}},methods:{init:function(a){var e=this;this.dataForm.id=a||0,r.a.role.select().then(function(a){var t=a.data;e.roleList=t&&0===t.code?t.list:[]}).then(function(){e.visible=!0,e.$nextTick(function(){e.$refs.dataForm.resetFields()})}).then(function(){e.dataForm.id&&r.a.user.info(e.dataForm.id).then(function(a){var t=a.data;t&&0===t.code&&(e.dataForm.userName=t.user.username,e.dataForm.salt=t.user.salt,e.dataForm.email=t.user.email,e.dataForm.mobile=t.user.mobile,e.dataForm.roleIdList=t.user.roleIdList,e.dataForm.status=t.user.status)})})},dataFormSubmit:function(){var a=this;this.$refs.dataForm.validate(function(e){if(e){var t={userId:a.dataForm.id||void 0,username:a.dataForm.userName,password:a.dataForm.password,salt:a.dataForm.salt,email:a.dataForm.email,mobile:a.dataForm.mobile,status:a.dataForm.status,roleIdList:a.dataForm.roleIdList};(a.dataForm.id?r.a.user.update(t):r.a.user.add(t)).then(function(e){var t=e.data;t&&0===t.code?a.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){a.visible=!1,a.$emit("refreshDataList")}}):a.$message.error(t.msg)})}})}}},s={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("el-dialog",{attrs:{title:a.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:a.visible},on:{"update:visible":function(e){a.visible=e}}},[t("el-form",{ref:"dataForm",attrs:{model:a.dataForm,rules:a.dataRule,"label-width":"80px"},nativeOn:{keyup:function(e){if(!("button"in e)&&a._k(e.keyCode,"enter",13,e.key))return null;a.dataFormSubmit()}}},[t("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[t("el-input",{attrs:{placeholder:"登录帐号"},model:{value:a.dataForm.userName,callback:function(e){a.$set(a.dataForm,"userName",e)},expression:"dataForm.userName"}})],1),a._v(" "),t("el-form-item",{class:{"is-required":!a.dataForm.id},attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:a.dataForm.password,callback:function(e){a.$set(a.dataForm,"password",e)},expression:"dataForm.password"}})],1),a._v(" "),t("el-form-item",{class:{"is-required":!a.dataForm.id},attrs:{label:"确认密码",prop:"comfirmPassword"}},[t("el-input",{attrs:{type:"password",placeholder:"确认密码"},model:{value:a.dataForm.comfirmPassword,callback:function(e){a.$set(a.dataForm,"comfirmPassword",e)},expression:"dataForm.comfirmPassword"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{placeholder:"邮箱"},model:{value:a.dataForm.email,callback:function(e){a.$set(a.dataForm,"email",e)},expression:"dataForm.email"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[t("el-input",{attrs:{placeholder:"手机号"},model:{value:a.dataForm.mobile,callback:function(e){a.$set(a.dataForm,"mobile",e)},expression:"dataForm.mobile"}})],1),a._v(" "),t("el-form-item",{attrs:{label:"角色",size:"mini",prop:"roleIdList"}},[t("el-checkbox-group",{model:{value:a.dataForm.roleIdList,callback:function(e){a.$set(a.dataForm,"roleIdList",e)},expression:"dataForm.roleIdList"}},a._l(a.roleList,function(e){return t("el-checkbox",{key:e.roleId,attrs:{label:e.roleId}},[a._v(a._s(e.roleName))])}))],1),a._v(" "),t("el-form-item",{attrs:{label:"状态",size:"mini",prop:"status"}},[t("el-radio-group",{model:{value:a.dataForm.status,callback:function(e){a.$set(a.dataForm,"status",e)},expression:"dataForm.status"}},[t("el-radio",{attrs:{label:0}},[a._v("禁用")]),a._v(" "),t("el-radio",{attrs:{label:1}},[a._v("正常")])],1)],1)],1),a._v(" "),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(e){a.visible=!1}}},[a._v("取消")]),a._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(e){a.dataFormSubmit()}}},[a._v("确定")])],1)],1)},staticRenderFns:[]},l=t("VU/8")(o,s,!1,null,null,null);e.default=l.exports}});