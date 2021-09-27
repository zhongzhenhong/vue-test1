<template>
  <v-chart id="myChart" :option="option" />
</template>

<script>
import { THEME_KEY } from 'vue-echarts'
export default {
  components: {},
  provide: {
    [THEME_KEY]: 'white',
  },
  data() {
    return {
      option: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart()
    })
  },
  methods: {
    drawChart() {
      // 绘制图表
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: '饼图',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
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
          orient: 'vertical',
          left: 'left',
          data: [
            'Direct',
            'Email',
            'Ad Networks',
            'Video Ads',
            'Search Engines',
          ],
        },
        series: [
          {
            name: 'Traffic Sources',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: 'Direct' },
              { value: 310, name: 'Email' },
              { value: 234, name: 'Ad Networks' },
              { value: 135, name: 'Video Ads' },
              { value: 1548, name: 'Search Engines' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      this.option = option
    },
  },
}
</script>

<style scoped>
#myChart {
  width: 100%;
  height: 100%;
}
</style>
