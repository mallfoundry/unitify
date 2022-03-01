<template>
  <view class="unitify-tabs">
    <view class="unitify-tabs--nav" ref="nav">
      <view
        class="unitify-tabs--nav--title"
        v-for="(item, index) in titles"
        :key="item.title"
        @click="activeClick(index)"
      >
        {{ item.title }}
      </view>

      <view
        class="unitify-tabs--nav--line"
        :style="{
          left: translate + 'px',
          transform:   ' translateX(-50%)',
          transition: isActive?'left 0.3s ease 0s':'',
        }"
      ></view>
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted, useSlots, nextTick } from "vue";
import { useSelectorQuery } from "../utils";
export default defineComponent({
  name: "Tabs",
  props: {
    active: {
      type: Number,
      default: 0,
    },
  },
  setup(props, { emit }) {
    // vue data
    const { active } = props;
    let navWidth = 0;
    const slots = useSlots();
    const translate = ref(0);
    const isActive = ref(false)
    //computed
    const titles = computed(() => {
      return slots.default?.().map((item: any) => {
        return item.props;
      });
    });

    const interval = computed<number>(() => {
      const titleNumber = titles.value;
      return Math.floor(navWidth) / (titleNumber ? titleNumber.length : 1);
    });
    //methods
    const calculateInterval = (num: number) => {
      return interval.value * (num + 1) - interval.value / 2;
    };
    //event
    const activeClick = (index: number) => {
      translate.value = calculateInterval(index);
         isActive.value = true
      emit("update:active", index);
    };
    //Hooks
    onMounted(() => {
      navWidth = useSelectorQuery(".unitify-tabs--nav").width;
      translate.value = calculateInterval(active);

    });

    return {
      activeClick,
      titles,
      translate,
      interval,
      isActive
    };
  },
});
</script>




<style lang="scss" scoped>
.unitify-tabs {
  &--nav {
    position: relative;
    display: flex;
    height: 90rpx;
    &--title {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
    &--line {
      position: absolute;
      width: 60rpx;
      height: 6rpx;
      background: #ee0a24;
      bottom: 0;
      border-radius: 3rpx;
    }
  }
}
</style>