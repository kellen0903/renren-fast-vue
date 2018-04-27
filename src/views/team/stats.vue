<template>
  <el-dialog
    title="盈亏统计"
    :close-on-click-modal="false"
    :visible.sync="visible"
    width="60%">
    <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
        <el-date-picker
          v-model="dataForm.startTime"
          type="datetime"
          @input="logTimeChangeStart"
          placeholder="开始时间">
          value-format="yyyy-MM-dd HH:mm:ss"
        </el-date-picker>
        <el-date-picker
          v-model="dataForm.endTime"
          type="datetime"
          @input="logTimeChangeEnd"
          placeholder="结束时间">
          value-format="yyyy-MM-dd HH:mm:ss"
        </el-date-picker>
      <el-form-item>
        <el-button @click="getDataList()">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      border
      v-loading="dataListLoading"
      show-summary
    >
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
        prop="gainAndLossAmount"
        header-align="center"
        align="center"
        label="盈亏">
      </el-table-column>

      <el-table-column
        prop="waterAmount"
        header-align="center"
        align="center"
        label="流水">
      </el-table-column>

    </el-table>
  </el-dialog>
</template>

<script>
  import API from '@/api'
  import moment from 'moment'

  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          happyId: '',
          startTime: '',
          endTime: '',
          tid: ''
        },
        dataList: [],
        dataListLoading: false,
        tid: '',
        teamGainAndLossAmount: 0,
        teamWater: 0
      }
    },
    methods: {
      init (tid) {
        this.visible = true
        this.dataForm.tid = tid
        this.getDataList()
      },

      logTimeChangeStart (time) {
        console.log(time)
        this.dataForm.startTime = moment(time).format('YYYY-MM-DD HH:mm:ss')
      },
      logTimeChangeEnd (time) {
        this.dataForm.endTime = moment(time).format('YYYY-MM-DD HH:mm:ss')
      },
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        var params = {
          tid: this.dataForm.tid,
          startTime: this.dataForm.startTime,
          endTime: this.dataForm.endTime
        }
        API.member.staticAccount(params).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.statList
            this.teamGainAndLossAmount = data.teamGainAndLossAmount
            this.teamWater = data.teamWater
          }
          this.dataListLoading = false
        })
      }

    }
  }
</script>
