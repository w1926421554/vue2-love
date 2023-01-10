<template>
    <!-- 手机注册 -->
  <div class="root">
    <Nav-Title></Nav-Title>
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
          v-model="verify"
          type="password"
          :placeholder="msg"
        />
        <div class="verify-get">
          <van-button
            v-if="show"
            plain
            type="primary"
            color="#000"
            size="mini"
            @click="getVerify"
            >发送验证码</van-button
          >
          <van-count-down
            class="time"
            v-else
            :time="time"
            format="ss秒"
            @finish="timer"
          />
        </div>
      </div>
      <button class="btn" @click="success">确定</button>
    </div>
  </div>
</template>

<script>
import NavTitle from '@/conpoments/NavTitle.vue'
import { $_getVerify, $_checkCode } from "@/apis/user";
export default {
    components:{
        NavTitle
    },
  data() {
    return {
      tel: "13310885344",
      verify: "",
      msg:'',
      time: 60 * 1000,
      show: true,
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
    async getVerify() {
      let res = await $_getVerify({
        mobile: this.tel,
      });
      console.log(res);
      if (res.data.data.code === undefined) {
        this.msg = "获取验证码失败";
      } else {
        this.verify = res.data.data.code;
      }
      this.show = false;
    },
    // 验证码倒计时
    timer() {
      this.show = true;
    },
    // 校验跳转
    async success() {
      let res = await $_checkCode({
        mobile: this.tel,
        code: this.verify,
      });
      if(res.data.code === 0){
        this.$router.push('/registration')
      }else{
        this.msg = '请填写验证码'
      }
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
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
    .verify {
      display: flex;
      align-items: center;
      //   justify-content: center;
      .psd {
        margin-right: 10px;
        flex: 0 0 70%;
        border-bottom: 1px solid #ccc;
      }
      .van-button--mini {
        flex: 1;
      }
      .verify-get {
        text-align: center;
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
