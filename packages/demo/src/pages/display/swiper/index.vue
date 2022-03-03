<template>
  <view class="swiper">
    <Swiper :list="list1"> </Swiper>
  </view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pages from "@/components/pages/pages.vue";
import Block from "@/components/block/block.vue";
export default defineComponent({
  components: { Pages, Block },
  setup() {
    return {
      list1: [
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.block {
  width: 100%;
}
</style>