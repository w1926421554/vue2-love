<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="box-color"></div>
    <div class="main">
      <!-- 宫格卡片 -->
      <van-grid :column-num="5">
        <van-grid-item icon="photo-o" text="高富帅" />
        <van-grid-item icon="photo-o" text="白富美" />
        <van-grid-item icon="photo-o" text="才俊" />
        <van-grid-item icon="photo-o" text="动态" />
        <van-grid-item icon="photo-o" text="编辑资料" />
      </van-grid>
      <!-- 个人卡片 -->
      <div class="my">
        <div class="my-img"></div>
        <div class="my-text">
          <div class="text-top">1</div>
          <div class="text-btm">2</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo:''
    }
  },
  created(){
    this.userInfo = this.$store.state.userInfo
    console.log(this.userInfo);
    
  }
};
</script>

<style lang="scss" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.box-color {
  height: 50px;
  background-color: #8051d6;
}
.main {
  height: 100%;
  padding: 0 15px;
  background-color: #f3f3ed;
  .my {
    display: flex;
    height: 120px;
    margin: 15px 0;
    padding: 10px;
    background-color: #8051d6;
    .my-img {
        width: 100px;
        height: 100px;
        background-color: aqua;
        margin-right: 15px;
    }
    .my-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .text-top{
            font-size: 18px;
            font-weight: 700;
        }
        .text-btm{
          color: #ccc;
        }
    }
  }
}
</style>
