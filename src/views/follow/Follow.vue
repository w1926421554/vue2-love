<template>
  <div>
    <van-tabs>
      <van-tab title="关注我的">
        <div class="tabItem">
            <div class="itemTop">
                <div class="topImg">
                    <img src="" alt="">
                </div>
                <div class="topText">
                    <div class="name">Tina</div>
                    <div class="data">21岁|广州|本科|学生|162cm</div>
                    <div class="time">于12:18关注</div>
                </div>
            </div>
            <div class="itemBtm">
                <div class="left">送礼物</div>
                <div class="right">聊聊天</div>
            </div>
        </div>
      </van-tab>
      <van-tab title="我关注的">内容2</van-tab>
      <van-tab title="谁看过我">内容3</van-tab>
      <van-tab title="我看过谁">内容4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { $_followList } from '@/apis/user';
export default {
  data() {
    return {
      tabsData: [
        {
          title: "关注我的",
        },
        {
          title: "我关注的",
        },
        {
          title: "谁看过我",
        },
        {
          title: "我看过谁",
        }
      ],
    };
  },
  async created() {
    let res =await $_followList({type:'3'})
    console.log(res);
  },
};
</script>

<style lang="scss" scoped>

.tabItem{
    background-color: pink;
    padding: 10px;
    .itemTop{
        display: flex;
        margin-bottom: 10px;
        .topImg{
            width: 80px;
            height: 80px;
            margin-right: 10px;
            background-color: aqua;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .topText{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: aquamarine;
        }
    }
    .itemBtm{
        display: flex;
        height: 36px;
        .left{
            flex: 1;
            // display: flex;
            background-color: blueviolet;
            color: #ccc;
            text-align: right;
            line-height: 36px;
            text-align: center;
        }
        .right{
            flex: 1;
            background-color: cadetblue;
            text-align: right;
            line-height: 36px;
            text-align: center;
        }
    }
}
</style>
