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
        <!--  -->
      <van-grid :column-num="5">
        <van-grid-item icon="photo-o" text="高富帅" />
        <van-grid-item icon="photo-o" text="白富美" />
        <van-grid-item icon="photo-o" text="才俊" />
        <van-grid-item icon="photo-o" text="动态" />
        <van-grid-item icon="photo-o" text="编辑资料" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {};
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
.main{
    // position: absolute;
    padding: 0 15px;
}
</style>
