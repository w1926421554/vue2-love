<template>
  <!-- 注册页面 -->
  <div class="root">
    <Nav-Title></Nav-Title>
    <div class="container">
      <div class="goal">请选择登录目的</div>
      <div class="option">
        <van-radio-group v-model="radio">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in list"
              :key="index"
              :title="item.text"
              clickable
              @click="select(item.text)"
            >
              <template #right-icon>
                <van-radio :name="item.name" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-field
          v-model="text"
          type="tel"
          placeholder="上面都不是我自己输入"
        />
      </div>
      <van-button type="info" @click="success">确认</van-button>
    </div>
  </div>
</template>

<script>
import NavTitle from "@/conpoments/NavTitle.vue";
import { $_successRegister } from "@/apis/user";
import local from '@/utlis/local'
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      radio: "",
      text: "",
      str: "",
      list: [
        { text: "征婚 寻找知心爱人", name: 1 },
        { text: "学习 成为知心知情知意的人", name: 2 },
        { text: "谈心 找知音说说心中的话", name: 3 },
        { text: "解惑 找专家导师解决心中的困扰", name: 4 },
      ],
    };
  },
  created() {
  },
  methods: {
    // 选中项
    select(str) {
      this.str = str;
    },
    // 注册账号
    async success() {
      let res = await $_successRegister({
        mobile: Number(this.uphone.tel),
        code: this.uphone.verify,
        nickname: this.password.name,
        password: this.password.psd,
        purpose: this.str || this.text,
      });
      if(res.data.code === 0){
        this.$router.push('/')
      }
    },
  },
  computed: {
    // 验证码
    uphone() {
      return this.$store.getters.Phone;
    },
    // 密码 用户名
    password() {
      return this.$store.getters.password;
    },
  },
};
</script>

<style lang="scss" scoped>
.root {
  .container {
    padding: 20px 10px;
    .goal {
      line-height: 60px;
      border-bottom: 1px solid #ccc;
      color: #4077be;
    }
    .option {
      padding: 0 10px;
      .van-cell {
        border-bottom: 1px solid #ccc;
      }
    }
    .van-button--normal {
      margin-top: 50px;
      width: 100%;
    }
  }
}
</style>
