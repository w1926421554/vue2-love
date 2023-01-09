<template>
  <!-- <div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="mobile"
        name="mobile"
        label="用户名"
        placeholder="输入手机号"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div> -->
  
    <div class="root">
        <div class="header">
            <div></div>
            <div>登录 -- 恋爱吧</div>
            <i class="iconfont icon-quxiao"></i>
        </div>
        <div class="nav"></div>
        <div class="container"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        mobile: "13310885344",
      password: "123456",
    };
  },
  methods: {
    onSubmit(values) {
      console.log(values);
    },
  },
};
</script>

<style lang="scss" scoped>
.root{
    display: flex;
    flex-direction: column;
    .header{
        flex: 0 0 100px;
        background-color: #393a3f;
    }
    .nav{
        flex: 0 0 150px;
        background-color: #0084ff;
    }
    .container{ 
        flex:1;
        background-color: #000;
    }
}
</style>
