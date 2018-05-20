<template>
  <el-dialog
    title="会员列表"
    :close-on-click-modal="false"
    :visible.sync="visible"
    width="60%">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
      <el-form-item>
        <el-input v-model="dataForm.nickName" placeholder="会员昵称" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      height="460"
      @cell-mouse-enter="handleMouseEnter"
      @cell-mouse-leave="handleMouseOut"
      style="width: 100%;">
      <el-table-column
        prop="happyId"
        header-align="center"
        align="center"
        label="id">
      </el-table-column>
      <el-table-column
        prop="nickName"
        header-align="center"
        align="center"
        label="会员昵称">
      </el-table-column>

      <el-table-column
        prop="totalAmount"
        header-align="center"
        align="center"
        label="余额">
        <template slot-scope="scope">
          <span v-if="!scope.row.editFlag">{{ scope.row.totalAmount | filterPrice }}</span>
          <span v-if="scope.row.editFlag" class="cell-edit-input"><el-input v-model="updateAmount" placeholder="金额"></el-input></span>
          <span v-if="!scope.row.editFlag" style="margin-left:10px;" class="cell-icon"  @click="handleEdit(scope.row)">  <i class="el-icon-edit"></i> </span>
          <span v-if="scope.row.editFlag"  style="margin-left:10px;"  class="cell-icon"  @click="handleSave(scope.row)">  <i class="el-icon-document"></i> </span>
        </template>
      </el-table-column>

    </el-table>
    <el-pagination
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      :current-page="pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSize"
      :total="totalPage"
      layout="total, sizes, prev, pager, next, jumper">
    </el-pagination>
  </el-dialog>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          happyId: '',
          nickName: '',
          tid: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        updateAmount: 0
      }
    },
    methods: {
      init (tid) {
        this.dataForm.tid = tid
        this.visible = true
        this.$nextTick(() => {
          this.getDataList(tid)
        })
      },
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        var params = {
          page: this.pageIndex,
          limit: this.pageSize,
          tid: this.dataForm.tid,
          happyId: this.dataForm.happyId,
          nickName: this.dataForm.nickName
        }
        API.member.list(params).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.page.list
            this.totalPage = data.page.totalCount
          } else {
            this.dataList = []
            this.totalPage = 0
          }
          this.dataListLoading = false
        })
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      handleEdit: function (row) {
        this.dataList.forEach(e => {
          if (e.happyId === row.happyId) {
            e.editFlag = true
          }
        })
        // 遍历数组改变editeFlag
      },
      handleSave: function (row) {
        this.updateMemberAmount(row.tid, row.happyId, this.updateAmount)
        // 保存数据，向后台取数据
      },
      handleMouseEnter: function (row, column, cell, event) {
        cell.children[0].children[1].style.color = 'black'
      },
      handleMouseOut: function (row, column, cell, event) {
        cell.children[0].children[1].style.color = '#ffffff'
      },
      updateMemberAmount: function (tid, happyId, amount) {
        this.$confirm(`确定修改?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var params = {
            'tid': tid,
            'happyId': happyId,
            'updateAmount': amount * 100
          }
          API.member.updateAmount(params).then(({data}) => {
            if (data && data.code === 0) {
              this.$message({
                message: '操作成功',
                type: 'success',
                duration: 1500,
                onClose: () => {
                  this.getDataList(tid)
                }
              })
            } else {
              this.$message.error(data.msg)
            }
          })
        })
      }
    }
  }
</script>

<style>
  .cell-edit-input .el-input, .el-input__inner {
    width:100px;
  }
  .cell-icon{
    cursor:pointer;
    color:#fff;
  }
</style>
