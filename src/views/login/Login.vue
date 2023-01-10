<template>
  <div class="root">
    <div class="nav">
      <i class="iconfont icon-quxiao"></i>
      <div class="nav-title">登录恋爱吧</div>
      <div class="nav-text">
        <span>成为知心爱人</span>
        <span>共建心灵港湾</span>
      </div>
    </div>
    <div class="container">
      <div class="container-tel">
        <van-dropdown-menu :overlay="false">
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <i class="iconfont icon-vertical_line"></i>
        <van-field v-model="tel" type="tel" placeholder="输入手机号" />
      </div>
      <van-field class="psd" v-model="psd" type="password" placeholder="请输入密码" />
      <div class="register">
        <span>手机注册</span>
        <span>忘记密码</span>
      </div>
      <button class="btn" @click="uLogin">登录</button>
    </div>
  </div>
</template>

<script>
import {userLogin} from "@/apis/user"
export default {
  data() {
    return {
      tel: "13310885344",
      psd:'123456',
      value1: 0,
      option1: [
        { text: "+86", value: 0 },
        { text: "+16", value: 1 },
        { text: "+110", value: 2 },
      ],
    };
  },
  created(){
  },
  methods:{
    async uLogin(){
        let res = await userLogin({
            mobile:this.tel,
            password:this.psd
        })
        if(res.data.code === 0){
            localStorage.setItem('token',res.data.data.token)
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  .nav {
    display: flex;
    position: relative;
    flex-direction: column;
    flex: 0 0 150px;
    background-color: #0084ff;
    .nav-title {
      line-height: 100px;
      text-align: center;
      font-size: 20px;
      color: #fff;
    }
    .icon-quxiao {
      position: absolute;
      top: 10%;
      right: 4%;
      color: #fff;
      font-weight: 700;
    }
    .nav-text {
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      color: #fff;
    }
  }
  .container {
    padding: 20px;
    flex: 1;
    ::v-deep .van-dropdown-menu {
      width: 70px;
      .van-dropdown-menu__bar {
        display: flex;
        justify-content: start;
        box-shadow: none;
      }
      .van-popup--top {
        width: 27%;
      }
    }
    .container-tel {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      .icon-vertical_line {
        font-size: 20px;
      }
    }
    .psd{
        border-bottom: 1px solid #ccc;
    }
    .register{
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        color: #230fe9;
        font-size: 12px;
    }
    .btn{
        width: 100%;
        height: 50px;
        background-color: #0084ff;
        color: #fff;
    }
  }
}
</style>
