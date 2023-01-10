import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{}
  },
  getters: {
  },
  mutations: {
    // 将存入的token赋值给库
    SET_TOKEN(state,data){
      state.userInfo = data
    }
  },
  actions: {
  },
  modules: {
  }
})
