<template>
  <div class="root">
    <div class="title">
      <div class="text">基本资料</div>
      <i class="iconfont icon-quxiao"></i>
    </div>
    <div class="option">
      <van-field
        v-model="value"
        label="昵称"
        placeholder="请填写昵称"
        input-align="right"
      />
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  position: relative;
  background-color: #eee;
  .title {
    padding: 40px 40px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;
    color: #fff;
    background-color: #3b5ad2;
    .text {
      padding-bottom: 5px;
      border-bottom: 3px solid #fff;
      font-size: 20px;
    }
    .icon-quxiao {
      position: absolute;
      top: 25px;
      right: 25px;
      font-weight: 700;
    }
  }
  .option {
    position: absolute;
    top: 120px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    width: 95%;
    background-color: #fff;
  }
}
</style>
