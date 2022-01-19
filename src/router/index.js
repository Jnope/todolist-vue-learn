import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 按需引入
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
