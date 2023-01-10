<template>
  <div class="app">
    <!-- 顶部轮播图 -->
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="@/assets/imgs/swiper1.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/imgs/swiper2.png" alt="">
        </van-swipe-item>        <van-swipe-item>
          <img src="@/assets/imgs/swiper3.png" alt="">
        </van-swipe-item>        <van-swipe-item>
          <img src="@/assets/imgs/swiper4.png" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 紫色盒子 -->
    <div class="box-color"></div>
    <!-- 主体内容 -->
    <div class="main">
      <!-- 宫格卡片 -->
      <van-grid :column-num="5">
        <van-grid-item v-for="item in gridItem" :key="item.text">
          <img class="item-img" :src="item.img" alt="" />
          <div class="item-text">{{ item.text }}</div>
        </van-grid-item>
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
          <div class="text-btm">内心独白:窈窕淑女,君子好逑</div>
        </div>
      </div>
      <!-- 单元格导航 -->
      <div class="cell">
        <van-cell-group>
          <van-cell center is-link to="/signin">
            <template #title>
              <img class="cell-img" src="@/assets/imgs/编辑资料.png" alt="" />
              <span class="custom-title">签到</span>
              <span class="left-value">连续签到7天即可获得双倍积分</span>
            </template>
          </van-cell>
          <van-cell center is-link v-for="item in cellItem" :key="item.path" :to="item.path">
            <template #title>
              <img class="cell-img" :src="item.url" alt="" />
              <span>{{item.title}}</span>
            </template>
          </van-cell>
          <!-- <van-cell title="编辑资料" is-link to="/edit" />
          <van-cell title="关注我的" is-link to="/follow" />
          <van-cell title="我的相册" is-link to="/myphoto" />
          <van-cell title="鲜花礼物" is-link to="/gift" />
          <van-cell title="我要分享" is-link to="/share" /> -->
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import local from "@/utlis/local";
export default {
  data() {
    return {
      userInfo: "",
      // 宫格数据
      gridItem: [
        {
          text: "高富帅",
          img: require("@/assets/imgs/man.png"),
        },
        {
          text: "白富美",
          img: require("@/assets/imgs/women.png"),
        },
        {
          text: "才俊",
          img: require("@/assets/imgs/talented.png"),
        },
        {
          text: "动态",
          img: require("@/assets/imgs/dynamic.png"),
        },
        {
          text: "编辑资料",
          img: require("@/assets/imgs/data.png"),
        },
      ],
      // 单元格数据
      cellItem: [
        {
          path: "/edit",
          title: "编辑资料",
          url:require('@/assets/imgs/编辑资料.png'),
        },
        {
          path: "/follow",
          title: "关注我的",
          url:require('@/assets/imgs/关注我的.png'),
        },
        {
          path: "/myphoto",
          title: "我的相册",
          url:require('@/assets/imgs/我的相册.png'),
        },
        {
          path: "/gift",
          title: "鲜花礼物",
          url:require('@/assets/imgs/鲜花礼物.png'),
        },
        {
          path: "/share",
          title: "我要分享",
          url:require('@/assets/imgs/我要分享.png'),
        },

      ],
    };
  },
  created() {
    if (local.get("userInfo")) {
      this.userInfo = local.get("userInfo");
    }
    // this.userInfo = this.$store.state.userInfo;
    console.log(this.userInfo);
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
}
.my-swipe .van-swipe-item {
  height: 150px;
  width: 100%;
  img{
    width: 100%;
    height: 100%;
  }
}
.box-color {
  flex: 0 0 50px;
  background-color: #8051d6;
}
.main {
  padding: 0 15px;
  flex: 1;
  background-color: #f3f3ed;
  .item-img {
    width: 100%;
    height: 100%;
  }
  .item-text {
    padding-top: 6px;
    font-size: 14px;
  }
  .van-grid {
    top: -8px;
  }
  .my {
    display: flex;
    height: 120px;
    margin: 7px 0 15px 0;
    padding: 10px;
    background-color: #fff;
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
        font-size: 12px;
        font-weight: 700;
      }
    }
  }
  .cell {
    padding-bottom: 55px;
    .van-cell__title,
    .van-cell__value {
      display: flex;
      align-items: center;
    }
    .cell-img {
      width: 26px;
      height: 26px;
      margin-right: 10px;
    }
    .van-cell {
      padding: 18px 16px;
    }
  }
}

.custom-title {
  border: 1px solid #b9b9b9;
  padding: 0 2px;
}
.left-value {
  padding-left: 20px;
  color: #ccc;
}
</style>
