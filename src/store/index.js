import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{},
    userPassword:{},
    userPhone:{}
  },
  getters: {
    // 手机号码 验证码
    Phone(state){
      return state.userPhone
    },
    password(state){
      return state.userPassword
    }
  },
  mutations: {
    // 将存入的token赋值给库
    SET_TOKEN(state,data){
      state.userInfo = data
    },
    // 将注册用户名 密码保存
    SET_PASSWORD(state,data){
      state.userPassword = data
    }, 
    // 获取用户手机号 验证码
    SET_PHONE(state,data){
      state.userPhone = data
    }
  },
  actions: {
  },
  modules: {
  }
})
