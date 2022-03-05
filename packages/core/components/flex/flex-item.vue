<template>
  <view
    class="unitify-flex-item"
    :class="[
      {
        ['unitify-flex-item-' + span]: span !== undefined,
        ['unitify-flex-item-offset-' + offset]: offset !== undefined,
      },
    ]"
    :style="{ paddingLeft: gutter + 'px', paddingRight: gutter + 'px' }"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from "vue";

export default defineComponent({
  name: "Flex-Item",
  components: {},
  props: {
    span: {
      type: String,
    },
    offset: {
      type: String,
    },
  },
  setup(props) {
    const gutter = inject("gutter");
    return { gutter };
  },
});
</script>
<style lang="scss" scoped>
@import "./flex-item.scss";
</style>