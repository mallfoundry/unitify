<template>
  <Pages class="button">
    <Block title="基本使用" class="block">
      <Button color="primary">主要按钮</Button>
      <Button color="info">信息按钮</Button>
      <Button color="success">成功按钮</Button>
      <Button color="warning">警告按钮</Button>
      <Button color="danger">危险按钮</Button>
      <Button color="default">默认按钮</Button>
    </Block>
  </Pages>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pages from "@/components/pages/pages.vue";
import Block from "@/components/block/block.vue";
export default defineComponent({
  components: {
    Pages,
    Block,
  },

  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.block {
  ::v-deep .block-content {
    flex-wrap: wrap;
    .unitify-button {
      margin: 10rpx;
    }
  }
}
</style>