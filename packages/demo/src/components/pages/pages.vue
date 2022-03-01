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
}
</style>