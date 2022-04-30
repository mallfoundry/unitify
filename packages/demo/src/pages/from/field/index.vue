<template>
  <view class="swiper">
    <Pages>
      <Block title="基础使用">
        <CellGroup>

          <Field v-model="value" label="文本" placeholder="请输入用户名"/>
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
      value:"123"
    };
  },
});
</script>
<style lang="scss" scoped>
.block {
  width: 100%;

  padding: 0;
}
</style>