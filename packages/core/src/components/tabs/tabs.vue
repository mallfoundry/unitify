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
        :class="ellipsis ? 'unitify-tabs--scroll--ellipsis' : ''"
        v-for="(item, index) in titles"
        :key="item.title"
        @click="activeClick(index, item.title)"
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
    <view class="unitify-tabs--content">
      <slot></slot>
    </view>
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
  PropType,
  provide,
  toRef,
} from "vue";
import { useSelectorQuery } from "../utils";
export default defineComponent({
  name: "Tabs",
  props: {
    active: {
      type: Number,
      default: 0,
    },
    ellipsis: {
      type: Boolean as PropType<Boolean>,
      default: false,
    },
  },
  setup(props, { emit }) {
    // vue data
    const active: any = toRef(props, "active");
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
    const calculateInterval = (num: any) => {
      return interval.value * (num + 1 || num.value + 1) - interval.value / 2;
    };
    provide("active", active);
    //event
    const activeClick = (index: number, title: string) => {
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

      translate.value = calculateInterval(active?.value);
    });
    return {
      activeClick,
      titles,
      translate,
      interval,
      isActive,
      translateLeft,
      active,
    };
  },
});
</script>




<style lang="scss" scoped>
@import "./tabs.scss"
</style>