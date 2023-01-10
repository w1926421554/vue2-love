import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 清除默认样式
import "@/assets/css/reset.css";
import "@/assets/css/normalize.css";
// vant按需引入
import {
  Form,
  Field,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  DropdownMenu,
  DropdownItem,
  Tabbar,
  TabbarItem,
  Button,
  CountDown,
  RadioGroup,
  Radio,
  Cell,
  CellGroup,
  Tab,
  Tabs,
} from "vant";

Vue.use(DropdownMenu)
  .use(DropdownItem)
  .use(Field)
  .use(Form)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(Tabbar)
  .use(TabbarItem)
  .use(GridItem)
  .use(Button)
  .use(CountDown)
  .use(RadioGroup)
  .use(Radio)
  .use(Cell)
  .use(Tab)
  .use(Tabs)
  .use(CellGroup);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
