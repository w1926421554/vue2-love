<template>
    <div class="root">
        <div class="header">
            <div></div>
            <div>登录 -- 恋爱吧</div>
            <i class="iconfont icon-quxiao"></i>
        </div>
        <div class="nav"></div>
        <div class="container"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.root{
    display: flex;
    flex-direction: column;
    .header{
        flex: 0 0 100px;
        background-color: #393a3f;
    }
    .nav{
        flex: 0 0 150px;
        background-color: #0084ff;
    }
    .container{ 
        flex:1;
        background-color: #000;
    }
}
</style>