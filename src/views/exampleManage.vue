<template>
  <div class="exampleManage">
    <el-table :data="list" border style="width: 100%;">
      <el-table-column fixed prop="exampleId" label="实例Id" width="150">
      </el-table-column>
      <el-table-column prop="exampleName" label="实例名称"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { exampleId: 1, exampleType: 'barCom', exampleName: '柱状图' },
        // { exampleId: 2, exampleName: '饼图' },
        // { exampleId: 3, exampleName: '地图' },
        { exampleId: 2, exampleType: 'mapCom', exampleName: '热力图' },
        { exampleId: 3, exampleType: 'pieCom', exampleName: '饼图' },
        { exampleId: 4, exampleType: 'lineCom', exampleName: '折线图' },
        { exampleId: 5, exampleType: 'scatterCom', exampleName: '散点图' },
      ],
    }
  },
  mounted() {},
  methods: {
    handleClick(row) {
      console.log(row)
      this.$router.push({
        path: '/examplePanel',
        query: { exampleType: row.exampleType },
      })
    },
  },
}
</script>
<style lang="scss" scoped></style>
