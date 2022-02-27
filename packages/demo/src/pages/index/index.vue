<template>
  <view class="pages">
    <!-- <view class="pages-item"> Button按钮 </view> -->
    <u-button type="primary"></u-button>
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.pages {
  padding: 30rpx;
  &-item {
    height: 80rpx;
    background: #f7f8fa;
    padding-left: 40rpx;
    border-radius:80rpx
  }
}
</style>