import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/views/List'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/Submit',
    name: 'Submit',
    component: () => import(/* webpackChunkName: "Submit" */ '@/views/Submit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
