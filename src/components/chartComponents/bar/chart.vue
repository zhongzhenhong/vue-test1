<template>
  <v-chart id="myChart" :option="option" />
</template>

<script>
export default {
  data() {
    return {
      option: null,
    }
  },
  beforeMount() {},
  mounted() {
    this.drawChart()
  },
  methods: {
    drawChart() {
      // 绘制图表
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '柱状图',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}',
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
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
      this.option = option
    },
  },
}
</script>

<style lang="scss" scoped>
#myChart {
  width: 100%;
  height: 100%;
}
</style>
