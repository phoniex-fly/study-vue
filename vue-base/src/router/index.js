import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import add from '../views/06vuex/add'
import sub from '../views/06vuex/sub'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add',
    name: 'add',
    component: add
  },
  {
    path: '/sub',
    name: 'sub',
    component: sub
  }
]

const router = new VueRouter({
  routes
})

export default router
