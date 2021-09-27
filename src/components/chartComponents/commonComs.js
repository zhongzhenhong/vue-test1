import Vue from 'vue'

const Coms = [
  {
    name: 'barCom',
    component: () => import('./bar/main.vue'),
  },
  {
    name: 'mapCom',
    component: () => import('./map/main.vue'),
  },
  {
    name: 'pieCom',
    component: () => import('./pie/main.vue'),
  },
  {
    name: 'lineCom',
    component: () => import('./line/main.vue'),
  },
  {
    name: 'scatterCom',
    component: () => import('./scatter/main.vue'),
  },
]

const vueComs = () => {
  Coms.forEach((item) => {
    return Vue.component(item.name, item.component)
  })
}
export default vueComs
