<template>
  <div>
    <!-- 路由出口 -->
    <router-view></router-view>
    <!-- 底部导航 -->
    <van-tabbar route v-if="this.$route.path !== '/'">
      <van-tabbar-item replace to="/home" icon="friends">征婚</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
