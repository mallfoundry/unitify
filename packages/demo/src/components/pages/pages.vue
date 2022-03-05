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
  padding: 30rpx;
  background: #F7F8FA;
  height:100vh
}
</style>