<template>
  <view class="unitify-cell" :class="[
    {
      'unitify-cell--active': clickable,
      'unitify-cell--large': size === 'large',
    },
  ]">
    <Flex v-if="title !== undefined" :align="align">
      <FlexItem span="12">
        <view class="unitify-cell--title">
          <Icon :name="icon" />
          <text>{{ title }}</text>
        </view>
        <view class="unitify-cell--label">{{ label }}</view>
      </FlexItem>
      <FlexItem span="12">
        <view class="unitify-cell--value">
          <text>{{ value }}</text><Icon :name="rightIcon"/>
        </view>
      </FlexItem>

    </Flex>
    <view v-else class="unitify-cell--title">
      {{ value }}
    </view>

  </view>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "../icon";
import { Flex, FlexItem } from "../flex"
export default defineComponent({

  name: "Cell",
  components: {
    Icon, Flex, FlexItem
  },
  props: {
    title: {
      type: String,
    },
    value: {
      type: String,
    },
    label: {
      type: String
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
    underline: {
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