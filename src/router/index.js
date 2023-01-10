import Vue from "vue";
import VueRouter from "vue-router";
//登录页
// import Login from '@/views/login/Login'

Vue.use(VueRouter);

const routes = [
  // 登录页
  {
    path: "/",
    name: "login",
    component: () => import("@/views/login/Login.vue"),
  },
  // 首页
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/Home.vue"),
  },
  // 编辑资料
  {
    path: "/edit",
    name: "edit",
    component: () => import("@/views/edit/Edit.vue")
  },
  // 我的
  {
    path:'/mine',
    name:'mine',
    component: () => import('@/views/mine/Mine.vue')
  },
  // 手机注册
  {
    path:'/phoneVerify',
    name:'phoneVerify',
    component:() => import('@/views/phoneVerify/PhoneVerify.vue')
  },
  // 关注我的
  {
    path:'/follow',
    name:'follow',
    component:() => import('@/views/follow/Follow.vue')
  },
    // 我的相册
    {
      path:'/myphoto',
      name:'myphoto',
      component:() => import('@/views/myPhoto/MyPhoto.vue')
    }
];


const router = new VueRouter({
  routes,
});

export default router;
