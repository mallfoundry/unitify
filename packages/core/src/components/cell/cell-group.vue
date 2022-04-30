<template>
  <view class="unitify-cell-group" :class="[{ 'unitify-cell-group--inser': inset },
  { 'unitify-cell-group--bordered': bordered }
  ]">
    <view class="unitify-cell-group--title" v-if="title">{{ title }}</view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "../icon";
export default defineComponent({
  name: "CellGroup",
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
    },
    inset: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
  },
  setup(props, { emit }) {
    return {};
  },
});
</script>




<style lang="scss" scoped>
@import "./cell-group.scss";
</style>