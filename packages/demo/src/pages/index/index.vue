<template>
  <view class="page">
    <view class="page-logo">
      <view class="page-logo-info">
        <image
          style="height: 60rpx; width: 60rpx"
          src="../../static/logo.png"
        ></image>
        <text>Unitify</text>
      </view>
      <view class="page-logo-desion"> 轻量、可靠的小程序端 Taro 组件库 </view>
    </view>
    <Card :subpackages="subpackages" />
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@/components/card/card.vue";
import subpackages from "../../subpackages";
export default defineComponent({
  components: { Card },
  setup() {
    return {
      subpackages,
    };
  },
});
</script>
<style lang="scss" scoped>
.page {
  padding: 15rpx;
  &-logo {
    padding: 0 50rpx;
    &-info {
      white-space: pre-line;
      line-height: 1;
      display: flex;
      align-items: center;
      font-size: 60rpx;
      image {
        margin-right: 30rpx;
      }
    }
    &-desion {
      padding: 20rpx 0;
      color: rgba(69, 90, 100, 0.6);
    }
  }
}
</style>