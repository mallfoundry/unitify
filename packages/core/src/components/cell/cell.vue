<template>
  <view
    class="unitify-cell"
    :class="[
      {
        'unitify-cell--active': clickable,
        'unitify-cell--large': size === 'large',
        'unitify-cell--disabled': disabled === true,
      },
    ]"
  >
    <Flex v-if="title !== undefined" :align="align">
      <FlexItem :span="labelWidth">
        <view class="unitify-cell--title">
          <Icon :name="icon" />
          <text>{{ title }}</text>
        </view>
        <view class="unitify-cell--label" v-if="title">{{ label }}</view>
      </FlexItem>
      <FlexItem :span="24 - Number(labelWidth) + ''">
        <view v-if="$slots.default" class="unitify-cell--value">
          <slot></slot>
          <Icon :name="rightIcon" />
        </view>
        <view v-else class="unitify-cell--value">
          <text>{{ value }}</text>
          <Icon :name="rightIcon" />
        </view>
      </FlexItem>
    </Flex>
    <Flex v-else :align="align">
      <FlexItem :span="labelWidth">
        <view class="unitify-cell--title">
          <Icon :name="icon" />
          <text><text class="unitify-cell--required">{{required?'*':''}}</text> {{ label }}</text>
        </view>
      </FlexItem>
      <FlexItem :span="24 - Number(labelWidth) + ''">
        <view class="unitify-cell--value">
          <slot></slot>
          <Icon :name="rightIcon" />
        </view>
        <slot name="error-message"></slot>
        <slot name="show-word-limit"></slot>
      </FlexItem>
      
    </Flex>
  </view>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import { Icon } from "../icon";
import { Flex, FlexItem } from "../flex";
export default defineComponent({
  name: "Cell",
  components: {
    Icon,
    Flex,
    FlexItem,
  },
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    rightIcon: {
      type: String,
    },
    clickable: {
      type: Boolean,
      default: false,
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
    labelWidth: {
      type: String,
      default: "12",
    },
  },
  setup(props, { emit }) {
    const disabled = inject("disabled");
    const required = inject("required");
    return { disabled, required };
  },
});
</script>

<style lang="scss" scoped>
@import "./cell.scss";
</style>
