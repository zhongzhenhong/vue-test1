<template>
  <v-chart id="myChart" :option="option" />
</template>

<script>
import { THEME_KEY } from 'vue-echarts'
import responseData from './response.js'
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
        // backgroundColor: new window.Echarts.graphic.RadialGradient(
        //   0.3,
        //   0.3,
        //   0.8,
        //   [
        //     {
        //       offset: 0,
        //       color: '#f7f8fa',
        //     },
        //     {
        //       offset: 1,
        //       color: '#cdd0d5',
        //     },
        //   ]
        // ),
        title: {
          text: '1990 与 2015 年各国家人均寿命与 GDP',
          left: '5%',
          top: '3%',
        },
        legend: {
          right: '10%',
          top: '3%',
          data: ['1990', '2015'],
        },
        grid: {
          left: '8%',
          top: '10%',
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed',
            },
          },
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed',
            },
          },
          scale: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        series: [
          {
            name: '1990',
            data: responseData[0],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3]
                },
                position: 'top',
              },
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(120, 36, 50, 0.5)',
              shadowOffsetY: 5,
              // color: new window.Echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              //   {
              //     offset: 0,
              //     color: 'rgb(251, 118, 123)',
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgb(204, 46, 72)',
              //   },
              // ]),
            },
          },
          {
            name: '2015',
            data: responseData[1],
            type: 'scatter',
            symbolSize: function (data) {
              return Math.sqrt(data[2]) / 5e2
            },
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3]
                },
                position: 'top',
              },
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(25, 100, 150, 0.5)',
              shadowOffsetY: 5,
              // color: new window.Echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              //   {
              //     offset: 0,
              //     color: 'rgb(129, 227, 238)',
              //   },
              //   {
              //     offset: 1,
              //     color: 'rgb(25, 183, 207)',
              //   },
              // ]),
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
