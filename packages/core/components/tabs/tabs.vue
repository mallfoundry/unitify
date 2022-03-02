<template>
  <view class="unitify-tabs">
    <scroll-view
      scroll-x="true"
      scroll-with-animation
      :scroll-left="translateLeft"
      class="unitify-tabs--scroll"
    >
      <view
        class="unitify-tabs--scroll--cell"
        v-for="(item, index) in titles"
        :key="item.title"
        @click="activeClick(index)"
        >{{ item.title }}</view
      >
      <view
        class="unitify-tabs--scroll--line"
        :style="{
          left: translate + 'px',
          transform: ' translateX(-50%)',
          transition: isActive ? 'left 0.3s ease 0s' : '',
        }"
      ></view>
    </scroll-view>
    <swiper class="swiper" disable-touch :current="active" :interval="interval">
      <slot></slot>
    </swiper>
  </view>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  computed,
  onMounted,
  useSlots,
} from "vue";
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
    const navWidth = reactive({
      width: 0,
    });
    const slots = useSlots();
    const translate = ref(0);
    const isActive = ref(false);
    const translateLeft = ref(0);
    //computed
    const titles = computed(() => {
      return slots.default?.().map((item: any) => {
        return item.props;
      });
    });

    const interval = computed<number>(() => {
      return Math.floor(navWidth.width) / (titles.value as any[]).length;
    });
    //methods
    const calculateInterval = (num: number) => {
      return interval.value * (num + 1) - interval.value / 2;
    };
    //event
    const activeClick = (index: number) => {
      translate.value = calculateInterval(index);
      isActive.value = true;
      const toRight = useSelectorQuery(".unitify-tabs").width;
      const periphery =
        translate.value + useSelectorQuery(".unitify-tabs--scroll--cell").width;
      translateLeft.value = toRight < periphery ? toRight : 0;
      emit("update:active", index);
    };
    //Hooks
    onMounted(() => {
      navWidth.width =
        useSelectorQuery(".unitify-tabs--scroll--cell").width *
        (titles.value as any[]).length;
      translate.value = calculateInterval(active);
    });
    return {
      activeClick,
      titles,
      translate,
      interval,
      isActive,
      translateLeft,
    };
  },
});
</script>




<style lang="scss" scoped>
.unitify-tabs {
  &--scroll {
    width: 100%;
    height: 90rpx;
    overflow: hidden;
    white-space: nowrap;
    color: #646566;
    font-size: 26rpx;

    &--cell {
      display: inline-block;
      height: 90rpx;
      width: 25%;
      text-align: center;
      line-height: 90rpx;
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