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
        <div class="my-img">
          <img :src="'/api' + userInfo.info.header" alt="" />
        </div>
        <div class="my-text">
          <div class="text-top">
            {{ userInfo.info.nickname }} ID:{{ userInfo.info.id }}
          </div>
          <div class="text-btm">2</div>
        </div>
      </div>
      <!-- 单元格 -->
      <div class="cell">
        <van-cell-group>
          <van-cell is-link to="index">
            <template #title>
              <span class="custom-title">签到</span>
              <span class="left-value" type="danger">连续签到7天可获得双倍积分</span>
            </template>
          </van-cell>
          <van-cell size="large" title="编辑资料" is-link to="/edit" />
          <van-cell title="关注我的" is-link to="/follow" />
          <van-cell title="我的相册" is-link to="/myphoto" />
          <van-cell title="鲜花礼物" is-link to="index" />
          <van-cell title="我要分享" is-link to="index" />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import local from '@/utlis/local'
export default {
  data() {
    return {
      userInfo: "",
    };
  },
  created() {
    if(local.get('userInfo')){
      this.userInfo = local.get('userInfo')
    }
    // this.userInfo = this.$store.state.userInfo;
    console.log(this.userInfo);
  },
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
      img {
        width: 100%;
        height: 100%;
      }
    }
    .my-text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .text-top {
        font-size: 18px;
        font-weight: 700;
      }
      .text-btm {
        color: #ccc;
      }
    }
  }
  .cell{
    .van-cell{
      padding: 16px 16px;
    }
  }
}

.custom-title {
    border: 2px solid #b9b9b9;
    padding: 2px;
}
.left-value {
  padding-left: 20px;
  color: #ccc;
}
</style>
