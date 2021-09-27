import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import * as echarts from 'echarts' // echarts暂时屏蔽
import '@/assets/css/reset.css'
import '@/components/chartComponents/global.js'
import axios from 'axios'
import Echarts from 'vue-echarts'
import vueComs from '@/components/chartComponents/commonComs.js' //注入公共组件
// 手动引入 ECharts 各模块来减小打包体积
// import { CanvasRenderer } from 'echarts/renderers'
// import { BarChart } from 'echarts/charts'
// import { GridComponent, TooltipComponent } from 'echarts/components'
import 'echarts'
import 'echarts/extension/bmap/bmap'

vueComs() //调用方法
// Vue.use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])
Vue.use(ElementUI)
// Vue.prototype.$echarts = echarts // echarts暂时屏蔽
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// 注册组件后即可使用
Vue.component('v-chart', Echarts)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
