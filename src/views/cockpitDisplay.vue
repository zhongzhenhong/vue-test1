<template>
  <div class="cockpitDisplay">
    <div id="chart" style="width: 600px; height: 400px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  beforeMount() {},
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('chart'))
      // 监听屏幕变化自动缩放图表
      window.addEventListener('resize', function () {
        myChart.resize()
      })
      // 绘制图表
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '第一个 ECharts 实例',
        },
        tooltip: {},
        legend: {
          data: ['销量'],
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped>
.cockpitDisplay {
  width: 100%;
  height: 100%;
}
</style>
