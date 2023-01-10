import Vue from 'vue'
import VueRouter from 'vue-router'
//登录页
// import Login from '@/views/login/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path:'/mine',
    name:'mine',
    component: () => import('@/views/mine/Mine.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
