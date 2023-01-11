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
      <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="地区"
        placeholder="不限"
        @click="show = true"
      />
      <van-popup v-model="show" round position="bottom">
        <van-cascader
          v-model="cascaderValue"
          title="请选择所在地区"
          :options="options"
          @close="show = false"
          @finish="onFinish"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      radio: 1,
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
  },

};
</script>

<style lang="scss" scoped>
.root {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #eee;
  .title {
    padding: 40px 40px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 150px;
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
    flex:1;
    margin:  0 auto;
    position: relative;
    top: -10px;
    padding: 10px;
    width: 95%;
    background-color: #fff;
    ::v-deep .van-radio--horizontal{
      margin-right: 0;
      margin-left: 5px;
    }
    ::v-deep .van-field__control--custom {
      justify-content: flex-end;
    }
    ::v-deep .van-field__body{
      .van-field__control{
        text-align: right;
      }
    }
    ::v-deep .van-cell__right-icon{
      display: none;
    }
  }
}
</style>
