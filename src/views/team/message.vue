<template>
  <el-dialog
    :title="'发送消息'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()"
             label-width="120px" size="small" inline="true">
      <el-input
        type="textarea"
        :rows="7"
        placeholder="请输入内容"
        v-model="dataForm.message">
    </el-input>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>


<script type="es6">
  import API from '@/api'

  export default {
    data() {
      return {
        visible: false,
        dataForm: {
          tid: "",
          message:""
        },
        dataRule: {

          message: [
            {required: true, message: '不能为空', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      init(tid) {
        this.dataForm.tid = tid
        this.visible = true
    },
      // 表单提交
      dataFormSubmit() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params = this.dataForm
            API.team.sendMessage(params).then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '发送成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }

    }
  }
</script>
