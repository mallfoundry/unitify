<template>
  <view class="swiper">
    <Pages>
      <Block title="基础使用">
        <Swiper :list="list1"> </Swiper>
      </Block>
    </Pages>
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
      list2: [
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper2.png",
          title: "昨夜星辰昨夜风，画楼西畔桂堂东",
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper1.png",
          title: "身无彩凤双飞翼，心有灵犀一点通",
        },
        {
          image: "https://cdn.uviewui.com/uview/swiper/swiper3.png",
          title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
        },
      ],
      list3: [
        "https://cdn.uviewui.com/uview/swiper/swiper3.png",
        "https://cdn.uviewui.com/uview/swiper/swiper2.png",
        "https://cdn.uviewui.com/uview/swiper/swiper1.png",
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.block {
  width: 100%;

  &-content {
    display: block !important;
  }
}
</style>