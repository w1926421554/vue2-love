<template>
  <div>
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

<style lang="scss" scoped></style>