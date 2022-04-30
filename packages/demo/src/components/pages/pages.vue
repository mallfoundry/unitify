<template>
  <view class="pages">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pages",

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.pages {
  background: #f7f8fa;
  min-height: 100vh;
  padding: 30rpx;
}
</style>