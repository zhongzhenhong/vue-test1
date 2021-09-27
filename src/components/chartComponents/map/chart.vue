<template>
  <div style="width: 620px; height: 280px; position: relative;">
    <v-chart id="myChart" :option="option" @globalout="onClick" />
    <div class="tipBox" v-show="showTips">
      <span>景区名称：demo</span>
      <span>销售额：{{ info.value }}</span>
    </div>
  </div>
</template>

<script>
// import responseData from './response.js'
export default {
  data() {
    return {
      option: null,
      showTips: false,
      info: {
        value: 10,
      },
      mapStyle1: {
        style: 'dark',
      },
      mapStyle2: {
        style: 'pink',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart()
    })
  },
  methods: {
    drawChart() {
      let demopoint = [
        [116.403931, 39.91328, 1000],
        [116.403161, 39.927608, 990],
        [116.407503, 39.924813, 980],
        [116.400029, 39.925698, 970],
        [116.391333, 39.9478, 960],
        [116.39622, 39.933195, 950],
        [116.343328, 39.948021, 940],
        [116.46061, 39.94094, 930],
        [116.367295, 39.934744, 920],
        [116.385692, 39.923678, 910],
        [116.370744, 39.928105, 900],
        [116.368157, 39.934744, 890],
        [116.369307, 39.93231, 880],
        [116.367295, 39.931646, 870],
        [116.394603, 39.909511, 860],
        [116.404377, 39.923014, 500],
        [116.404377, 39.926998, 540],
        [116.415013, 39.927884, 600],
        [116.409263, 39.945366, 530],
        [116.391728, 39.948021, 500],
        [116.391441, 39.945808, 490],
        [116.410701, 39.941604, 480],
        [116.427373, 39.920358, 470],
        [116.390866, 39.936293, 460],
        [116.390866, 39.936293, 450],
        [116.405814, 39.934744, 400],
        [116.391728, 39.941604, 430],
        [116.402652, 39.924342, 200],
        [116.405167, 39.925892, 190],
        [116.400999, 39.926224, 180],
        [116.401143, 39.925338, 170],
        [116.400999, 39.924453, 160],
        [116.40143, 39.926445, 150],
        [116.406173, 39.925006, 140],
        [116.404592, 39.925781, 130],
        [116.403586, 39.926334, 120],
        [116.402149, 39.926888, 110],
        [116.400711, 39.926113, 100],
        [116.400568, 39.926334, 90],
        [116.403155, 39.92556, 80],
        [116.403442, 39.920358, 60],
        [116.402724, 39.923236, 50],
        [116.405886, 39.922793, 30],
        [116.406892, 39.923789, 20],
        [116.407323, 39.924785, 10],
        [116.400137, 39.924785, 300],
        [116.407036, 39.922904, 230],
        [116.400424, 39.923789, 220],
        [116.407036, 39.923568, 210],
        [116.400137, 39.925117, 200],
        [116.406173, 39.924342, 630],
        [116.400711, 39.925117, 620],
        [116.406461, 39.923457, 610],
        [116.403586, 39.919805, 600],
        [116.403874, 39.919694, 5],
      ]
      let maxValue = demopoint[0][2]
      let minValue = demopoint[demopoint.length - 1][2]
      // 绘制图表
      // 指定图表的配置项和数据
      let option = {
        animation: false,
        // toolbox: {
        //   feature: {
        //     saveAsImage: {},
        //   },
        // },
        // tooltip: {
        //   triggerOn: 'click', //触发方式
        //   enterable: true, // 鼠标可移入tooltip中
        //   formatter: function () {
        //     console.log('ppp')
        //     return '<span onclick="myClick">这是显示的文本</span>' // 记得要加css样式pointer-events: all
        //   },
        // },

        bmap: {
          center: [116.403414, 39.924091],
          // center: [120.14322240845, 30.236064370321],
          zoom: 13,
          roam: false,
          mapOptions: {
            enableMapClick: false,
          },
          mapStyle: this.mapStyle2,
          // setMapStyle(this.mapStyle2)
        },
        visualMap: {
          show: false,
          top: 'top',
          min: minValue,
          max: maxValue,
          seriesIndex: 0,
          calculable: true,
          inRange: { color: ['blue', 'blue', 'green', 'yellow', 'red'] },
        },
        series: [
          {
            type: 'heatmap',
            coordinateSystem: 'bmap',
            data: demopoint,
            pointSize: 10,
            blurSize: 10,
          },
          // {
          //   name: 'Top 5',
          //   type: 'effectScatter',
          //   coordinateSystem: 'bmap',
          //   data: demopoint,
          //   symbolSize: function (val) {
          //     return val[2] / 10
          //   },
          //   showEffectOn: 'render',
          //   rippleEffect: {
          //     brushType: 'stroke',
          //   },
          //   hoverAnimation: true,
          //   encode: {
          //     value: 2,
          //   },
          //   label: {
          //     formatter: '{c}',
          //     position: 'right',
          //     show: false,
          //   },
          //   emphasis: {
          //     label: {
          //       show: true,
          //     },
          //   },
          // },
        ],
      }
      this.option = option
    },
    onClick(params) {
      // alert('000')
      // console.log(params)
      console.log(params.data.customParam1)
      // this.showTips = true
      // this.info.value = value.console.log(value)
    },
  },
}
</script>

<style lang="scss" scoped>
#myChart {
  width: 100%;
  height: 100%;
}
// #myChart {
//   width: 620px;
//   height: 280px;
// }
.tipBox {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
