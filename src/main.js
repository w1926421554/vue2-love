import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button,Form,Field,Swipe, SwipeItem,Grid, GridItem } from 'vant';
Vue.config.productionTip = false

Vue.use(Button).use(Form).use(Field).use(Swipe).use(SwipeItem).use(Grid).use(GridItem);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
