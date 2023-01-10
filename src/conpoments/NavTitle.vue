<template>
  <div>
    <div class="nav">
      <i class="iconfont icon-quxiao"></i>
      <div class="nav-title">登录恋爱吧</div>
      <div class="nav-text">
        <span>成为知心爱人</span>
        <span>共建心灵港湾</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 150px;
    background-color: #0084ff;
    .nav-title {
      line-height: 100px;
      text-align: center;
      font-size: 20px;
      color: #fff;
    }
    .icon-quxiao {
      position: absolute;
      top: 10%;
      right: 4%;
      color: #fff;
      font-weight: 700;
    }
    .nav-text {
      display: flex;
      justify-content: space-around;
      font-size: 18px;
      color: #fff;
    }
  }</style>
