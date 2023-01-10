import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 清除默认样式
import "@/assets/css/reset.css"
import "@/assets/css/normalize.css"

// vant按需引入
import { DropdownMenu, DropdownItem } from 'vant';
import { Field } from 'vant';
Vue.use(DropdownMenu).use(DropdownItem).use(Field)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
