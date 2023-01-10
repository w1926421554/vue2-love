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
      <div class="verify">
        <van-field
          class="psd"
          v-model="psd"
          type="password"
          placeholder="输入六位验证码"
        />
        <van-button plain type="primary" color="#000" size="mini" @click="getVerify">发送验证码</van-button>
      </div>
      <button class="btn">确定</button>
    </div>
  </div>
</template>

<script>
import { $_getVerify } from '@/apis/user';
export default {
  data() {
    return {
      tel: "13310885344",
      psd: "",
      value1: 0,
      option1: [
        { text: "+86", value: 0 },
        { text: "+16", value: 1 },
        { text: "+110", value: 2 },
      ],
    };
  },
  created() {},
  methods: {
    async getVerify(){
        let res = await $_getVerify({
            mobile:this.tel
        })
        console.log(res);
    }
  },
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
    .verify{
        display: flex;
        align-items: center;
        .psd {
            margin-right: 10px;
            flex: 0 0 70%;
          border-bottom: 1px solid #ccc;
        }
        .van-button--mini{
            flex: 1;
        }
    }
    .btn {
      margin: 20px 0;
      width: 100%;
      height: 50px;
      border-radius: 5px;
      background-color: #0084ff;
      color: #fff;
    }
  }
}
</style>
