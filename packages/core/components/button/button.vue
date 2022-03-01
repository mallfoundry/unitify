<template>
  <view
    :class="[
      {
        // Set variant style
        'unitify-button--text': variant === 'text',
        'unitify-button--contained': variant === 'contained',
        'unitify-button--outlined': variant === 'outlined',
        // Set shape style
        'unitify-button--round': shape === 'round',
        'unitify-button--square': shape === 'square',
        // Set size style
        'unitify-button--mini': size === 'mini',
        'unitify-button--small': size === 'small',
        'unitify-button--medium': size === 'medium',
        'unitify-button--large': size === 'large',
        // Set hairline style
        'unitify-button--hairline': hairline,
        'unitify-hairline--surround': hairline,
        'unitify-button--disabled': disabled,
        'unitify-button--loading': loading,
        'unitify-button--block': block,
      },
      // Set color style
      'unitify-button--' + color,
    ]"
    class="unitify-button"
  >
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import {
  ButtonFormType,
  ButtonVariant,
  ButtonSize,
  ButtonColor,
  ButtonShape,
} from "./button.shared";
export default defineComponent({
  name: "Button",
  props: {
    color: {
      type: String as PropType<ButtonColor>,
      default: "default",
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: "medium",
    },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: "contained",
    },
    shape: {
      type: String as PropType<ButtonShape>,
      default: "circle",
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    hairline: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "./button.scss";
</style>