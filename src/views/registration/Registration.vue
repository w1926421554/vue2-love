<template>
  <!-- 用户名输入 密码输入 -->
  <div>
    <Nav-Title></Nav-Title>
    <div class="container">
      <van-field v-model="obj.name" type="name" placeholder="输入名字" />
      <van-field v-model="obj.psd" type="password" placeholder="输入密码" />
      <van-field v-model="obj.copyPsd" type="password" placeholder="重输密码" />
      <p class="title" v-if="show">密码不一致</p>
      <van-button type="info" @click="success">确认</van-button>
    </div>
  </div>
</template>

<script>
import NavTitle from "@/conpoments/NavTitle.vue";
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      obj: {
        name: "",
        psd: "",
        copyPsd: "",
      },
      show: false,
    };
  },
  methods: {
    success() {
      if (
        this.obj.name !== "" &&
        this.obj.psd !== "" &&
        this.obj.copyPsd !== "" &&
        this.obj.psd === this.obj.copyPsd
      ) {
        this.$store.commit("SET_PASSWORD",this.obj)
        this.$router.push('/successVerify');
      } else {
        this.show = true;
        (this.psd = ""), (this.copyPsd = "");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 50px 10px;
  .van-cell {
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
  }
  .title {
    margin-top: 10px;
    color: red;
  }
  .van-button--normal {
    margin-top: 50px;
    width: 100%;
  }
}
</style>
