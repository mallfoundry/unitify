<template>
  <view class="swiper">
    <Pages>
      <Block title="基础使用">
        <CellGroup >
          <Field />

          <Field />
        </CellGroup>
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