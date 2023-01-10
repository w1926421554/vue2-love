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
              @click="radio = item.name"
            >
              <template #right-icon>
                <van-radio :name="item.name" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
        <van-field v-model="tel" type="tel" placeholder="上面都不是我自己输入" />
      </div>
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
      radio: [],
      list: [
        { text: "征婚 寻找知心爱人", name: 1 },
        { text: "学习 成为知心知情知意的人", name: 2 },
        { text: "谈心 找知音说说心中的话", name: 3 },
        { text: "解惑 找专家导师解决心中的困扰", name: 4 },
      ],
    };
  },
  created() {
    console.log(this.$route);
  },
  methods: {},
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
