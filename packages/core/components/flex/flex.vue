<template>
  <view
    class="unitify-flex"
    :class="[
      {
        'unitify-flex--row': direction === 'row',
        'unitify-flex--row-reverse': direction === 'row-reverse',
        'unitify-flex--column': direction === 'column',
        'unitify-flex--column-reverse': direction === 'column-reverse',
        'unitify-flex--nowrap': wrap === 'nowrap',
        'unitify-flex--wrap': wrap === 'wrap',
        'unitify-flex--wrap-reverse': wrap === 'wrap-reverse',
        'unitify-flex--justify-start': justify === 'start',
        'unitify-flex--justify-center': justify === 'center',
        'unitify-flex--justify-end': justify === 'end',
        'unitify-flex--justify-space-around': justify === 'pace-around',
        'unitify-flex--justify-space-between': justify === 'space-between',
        'unitify-flex--align-start': align === 'start',
        'unitify-flex--align-center': align === 'center',
        'unitify-flex--align-end': align === 'end',
        'unitify-flex--align-baseline': align === 'baseline',
        'unitify-flex--align-stretch': align === 'stretch',
      },
    ]"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { defineComponent, PropType, inject, provide } from "vue";

export default defineComponent({
  name: "Flex",
  props: {
    gutter: {
      type: String,
    },
    direction: {
      type: String,
      default: "row",
    },
    wrap: {
      type: String,
      default: "nowrap",
    },
    justify: {
      type: String,
      default: "start",
    },
    align: {
      type: String,
      default: "start",
    },
  },

  setup(props) {
    provide("gutter", props.gutter);
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "./flex.scss";
</style>