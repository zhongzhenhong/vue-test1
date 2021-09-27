import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/layout/init.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/home.vue'),
      },
      {
        path: '/cockpitDisplay',
        name: 'CockpitDisplay',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/cockpitDisplay.vue'),
      },
      {
        path: '/cockpitManage',
        name: 'CockpitManage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/cockpitManage.vue'),
      },
      {
        path: '/exampleManage',
        name: 'ExampleManage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/exampleManage.vue'),
      },
      {
        path: '/examplePanel',
        name: 'ExamplePanel',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/panel/examplePanel.vue'
          ),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
