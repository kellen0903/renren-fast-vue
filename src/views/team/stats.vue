<template>
  <el-dialog
    title="盈亏统计"
    :close-on-click-modal="false"
    :visible.sync="visible"
    width="60%">
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
        label="欢聊id">
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
        label="当日盈亏">
      </el-table-column>

        <el-table-column
          prop="waterAmount"
          header-align="center"
          align="center"
          label="当日流水">
      </el-table-column>

    </el-table>
  </el-dialog>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          happyId: ''
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
        this.getDataList(tid)
        this.tid = tid
      },
      // 获取数据列表
      getDataList (tid) {
        this.dataListLoading = true
        var params = {
          tid: tid
        }
        API.member.staticAccount(params).then(({data}) => {
          if (data && data.code === 0) {
            this.dataList = data.statList
            this.teamGainAndLossAmount = data.teamGainAndLossAmount
            this.teamWater = data.teamWater
          }
          this.dataListLoading = false
        })
      },

      getSummaries (param) {
        const {columns, data} = param
        const sums = []
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总计'
            return
          }
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
            sums[index]++
          } else {
            sums[index] = 'N/A'
          }
        })
        debugger
        return sums
      }

    }
  }
</script>
