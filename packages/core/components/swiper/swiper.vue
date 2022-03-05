<template>
  <view
    class="swiper-wrap"
    :style="{
      borderRadius: `${borderRadius}rpx`,
    }"
  >
    <swiper
      :current="elCurrent"
      @change="change"
      @animationfinish="animationfinish"
      :interval="interval"
      :circular="circular"
      :duration="duration"
      :autoplay="autoplay"
      :previous-margin="effect3d ? effect3dPreviousMargin + 'rpx' : '0'"
      :next-margin="effect3d ? effect3dPreviousMargin + 'rpx' : '0'"
      :style="{
        height: height + 'rpx',
        backgroundColor: bgColor,
      }"
    >
      <swiper-item
        class="swiper-item"
        v-for="(item, index) in list"
        :key="index"
      >
        <view
          class="list-image-wrap"
          @tap.stop.prevent="listClick(index)"
          :class="[uCurrent != index ? 'list-scale' : '']"
          :style="{
            borderRadius: `${borderRadius}rpx`,
            transform:
              effect3d && uCurrent != index ? 'scaleY(0.9)' : 'scaleY(1)',
            margin: effect3d && uCurrent != index ? '0 20rpx' : 0,
          }"
        >
          <image
            class="swiper-image"
            :src="item.name || item"
            :mode="imgMode"
          ></image>
          <view
            v-if="title && item.title"
            class="swiper-title line-1"
            :style="{ 'padding-bottom': titlePaddingBottom, ...titleStyle }"
          >
            {{ item.title }}
          </view>
        </view>
      </swiper-item>
    </swiper>
    <view
      class="swiper-indicator"
      :style="{
        top:
          indicatorPos == 'topLeft' ||
          indicatorPos == 'topCenter' ||
          indicatorPos == 'topRight'
            ? '12rpx'
            : 'auto',
        bottom:
          indicatorPos == 'bottomLeft' ||
          indicatorPos == 'bottomCenter' ||
          indicatorPos == 'bottomRight'
            ? '12rpx'
            : 'auto',
        justifyContent: justifyContent,
        padding: `0 ${effect3d ? '74rpx' : '24rpx'}`,
      }"
    >
      <block v-if="mode == 'rect'">
        <view
          class="indicator-item-rect"
          :class="{ 'indicator-item-rect-active': index == uCurrent }"
          v-for="(item, index) in list"
          :key="index"
        ></view>
      </block>
      <block v-if="mode == 'dot'">
        <view
          class="indicator-item-dot"
          :class="{ 'indicator-item-dot-active': index == uCurrent }"
          v-for="(item, index) in list"
          :key="index"
        ></view>
      </block>
      <block v-if="mode == 'round'">
        <view
          class="indicator-item-round"
          :class="{ 'indicator-item-round-active': index == uCurrent }"
          v-for="(item, index) in list"
          :key="index"
        ></view>
      </block>
      <block v-if="mode == 'number'">
        <view class="indicator-item-number"
          >{{ uCurrent + 1 }}/{{ list.length }}</view
        >
      </block>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, watch, reactive, computed, toRef, toRefs } from "vue";
/**
 * swiper 轮播图
 * @description 该组件一般用于导航轮播，广告展示等场景,可开箱即用
 * @tutorial https://www.uviewui.com/components/swiper.html
 * @property {Array} list 轮播图数据，见官网"基本使用"说明
 * @property {Boolean} title 是否显示标题文字，需要配合list参数，见官网说明（默认false）
 * @property {String} mode 指示器模式，见官网说明（默认round）
 * @property {String Number} height 轮播图组件高度，单位rpx（默认250）
 * @property {String} indicator-pos 指示器的位置（默认bottomCenter）
 * @property {Boolean} effect3d 是否开启3D效果（默认false）
 * @property {Boolean} autoplay 是否自动播放（默认true）
 * @property {String Number} interval 自动轮播时间间隔，单位ms（默认2500）
 * @property {Boolean} circular 是否衔接播放，见官网说明（默认true）
 * @property {String} bg-color 背景颜色（默认#f3f4f6）
 * @property {String Number} border-radius 轮播图圆角值，单位rpx（默认8）
 * @property {Object} title-style 自定义标题样式
 * @property {String Number} effect3d-previous-margin mode = true模式的情况下，激活项与前后项之间的距离，单位rpx（默认50）
 * @property {String} img-mode 图片的裁剪模式，详见image组件裁剪模式（默认aspectFill）
 * @event {Function} click 点击轮播图时触发
 * @example <swiper :list="list" mode="dot" indicator-pos="bottomRight"></swiper>
 */
export default defineComponent({
  name: "Swiper",
  emits: ["click", "change"],
  props: {
    // 轮播图的数据,格式如：[{image: 'xxxx', title: 'xxxx'}，{image: 'yyyy', title: 'yyyy'}]，其中title字段可选
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    // 是否显示title标题
    title: {
      type: Boolean,
      default: false,
    },
    // 用户自定义的指示器的样式
    indicator: {
      type: Object,
      default() {
        return {};
      },
    },
    // 圆角值
    borderRadius: {
      type: [Number, String],
      default: 8,
    },
    // 隔多久自动切换
    interval: {
      type: [String, Number],
      default: 3000,
    },
    // 指示器的模式，rect|dot|number|round
    mode: {
      type: String,
      default: "round",
    },
    // list的高度，单位rpx
    height: {
      type: [Number, String],
      default: 250,
    },
    // 指示器的位置，topLeft|topCenter|topRight|bottomLeft|bottomCenter|bottomRight
    indicatorPos: {
      type: String,
      default: "bottomCenter",
    },
    // 是否开启缩放效果
    effect3d: {
      type: Boolean,
      default: false,
    },
    // 3D模式的情况下，激活item与前后item之间的距离，单位rpx
    effect3dPreviousMargin: {
      type: [Number, String],
      default: 50,
    },
    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: true,
    },
    // 自动轮播时间间隔，单位ms
    duration: {
      type: [Number, String],
      default: 500,
    },
    // 是否衔接滑动，即到最后一张时接着滑动，是否自动切换到第一张
    circular: {
      type: Boolean,
      default: true,
    },
    // 图片的裁剪模式
    imgMode: {
      type: String,
      default: "aspectFill",
    },
    // 从list数组中读取的图片的属性名
    name: {
      type: String,
      default: "image",
    },
    // 背景颜色
    bgColor: {
      type: String,
      default: "#f3f4f6",
    },
    // 初始化时，默认显示第几项
    current: {
      type: [Number, String],
      default: 0,
    },
    // 标题的样式，对象形式
    titleStyle: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props, { emit }) {
    const {
      list,
      current,
      indicatorPos,
      title,
      mode,
      imgMode,
      titleStyle,
      bgColor,
      interval,
      height,
      circular,
      duration,
      borderRadius,
      autoplay,
      effect3dPreviousMargin,
      effect3d,
    }: any = props;
    const state = reactive({
      uCurrent: current,
    });
    watch(list, (nVal, oVal) => {
      if (nVal.length !== oVal.length) state.uCurrent = 0;
    });
    watch(current, (n) => {
      state.uCurrent = n;
    });
    const justifyContent = computed(() => {
      if (indicatorPos == "topLeft" || indicatorPos == "bottomLeft")
        return "flex-start";
      if (indicatorPos == "topCenter" || indicatorPos == "bottomCenter")
        return "center";
      if (indicatorPos == "topRight" || indicatorPos == "bottomRight")
        return "flex-end";
    });
    const titlePaddingBottom = computed(() => {
      let tmp: number | string = 0;
      if (mode == "none") return "12rpx";
      if (
        ["bottomLeft", "bottomCenter", "bottomRight"].indexOf(indicatorPos) >=
          0 &&
        mode == "number"
      ) {
        tmp = "60rpx";
      } else if (
        ["bottomLeft", "bottomCenter", "bottomRight"].indexOf(indicatorPos) >=
          0 &&
        mode != "number"
      ) {
        tmp = "40rpx";
      } else {
        tmp = "12rpx";
      }
      return tmp;
    });
    const elCurrent = computed(() => {
      return Number(current);
    });
    const listClick = (index: any) => {
      emit("click", index);
    };
    const change = (e: any) => {
      let current = e.detail.current;
      state.uCurrent = current;
      // 发出change事件，表示当前自动切换的index，从0开始
      emit("change", current);
    };
    const animationfinish = (e: any) => {
      // #ifndef MP-TOUTIAO
      // this.uCurrent = e.detail.current;
      // #endif
    };
    return {
      ...toRefs(state),
      justifyContent,
      change,
      listClick,
      elCurrent,
      titlePaddingBottom,
      mode,
      animationfinish,
      indicatorPos,
      list,
      interval,
      circular,
      duration,
      borderRadius,
      autoplay,
      effect3dPreviousMargin,
      effect3d,
      height,
      bgColor,
      imgMode,
      title,
      titleStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin vue-flex($direction: row) {
  /* #ifndef APP-NVUE */
  display: flex;
  flex-direction: $direction;
  /* #endif */
}

.swiper-wrap {
  position: relative;
  overflow: hidden;
  transform: translateY(0);
}

.swiper-image {
  width: 100%;
  will-change: transform;
  height: 100%;
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  /* #ifdef H5 */
  pointer-events: none;
  /* #endif */
}

.swiper-indicator {
  padding: 0 24rpx;
  position: absolute;
  @include vue-flex;
  width: 100%;
  z-index: 1;
}

.indicator-item-rect {
  width: 26rpx;
  height: 8rpx;
  margin: 0 6rpx;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.3);
}

.indicator-item-rect-active {
  background-color: rgba(255, 255, 255, 0.8);
}

.indicator-item-dot {
  width: 14rpx;
  height: 14rpx;
  margin: 0 6rpx;
  border-radius: 20rpx;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.3);
}

.indicator-item-dot-active {
  background-color: rgba(255, 255, 255, 0.8);
}

.indicator-item-round {
  width: 14rpx;
  height: 14rpx;
  margin: 0 6rpx;
  border-radius: 20rpx;
  transition: all 0.5s;
  background-color: rgba(0, 0, 0, 0.3);
}

.indicator-item-round-active {
  width: 34rpx;
  background-color: rgba(255, 255, 255, 0.8);
}

.indicator-item-number {
  padding: 6rpx 16rpx;
  line-height: 1;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 100rpx;
  font-size: 26rpx;
  color: rgba(255, 255, 255, 0.8);
}

.list-scale {
  transform-origin: center center;
}

.list-image-wrap {
  width: 100%;
  height: 100%;
  flex: 1;
  transition: all 0.5s;
  overflow: hidden;
  box-sizing: content-box;
  position: relative;
}

.swiper-title {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 28rpx;
  padding: 12rpx 24rpx;
  color: rgba(255, 255, 255, 0.9);
}

.swiper-item {
  @include vue-flex;
  overflow: hidden;
  align-items: center;
}
</style>