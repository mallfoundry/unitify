<template>
  <view
    class="unitify-cell"
    :class="[
      {
        'unitify-cell--active': clickable,
        'unitify-cell--large': size === 'large',
      },
    ]"
  >
    <view class="unitify-cell--content">
      <view class="unitify-cell--content--left">
        <view class="unitify-cell--content--left--title">
          <Icon :name="icon"></Icon>
          {{ title }}
          <slot v-if="!title"></slot>
        </view>
        <view class="unitify-cell--content--left--brief">{{ brief }}</view>
      </view>
      <view class="unitify-cell--content--right" v-if="title" :style="{justifyContent:align}">
        <view>
          <text class="unitify-cell--content--right--text"><slot></slot></text>
          <Icon :name="rightIcon" />
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "../icon";
export default defineComponent({
  name: "Cell",
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
    },
    rightIcon: {
      type: String,
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    brief: {
      type: String,
    },
    size: {
      type: String,
    },
    icon: {
      type: String,
    },
    align: {
      type: String,
    },
    underline:{
      type: Boolean,
    }
  },
  setup(props, { emit }) {
    return {};
  },
});
</script>




<style lang="scss" scoped>
@import "./cell.scss";
</style>