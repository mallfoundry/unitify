<template>
  <Pages class="image">
    <Block title="基本使用" class="block">
      <Image
        height="100px"
        width="100px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </Block>
    <Block title="填充模式" class="block">
      <Flex wrap="wrap" justify="space-between">
        <Flex-Item span="8" v-for="mode in modes" :key="mode">
          <view class="image-item">
            <Image
              height="100px"
              width="100px"
              :mode="mode"
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <text>{{ mode }}</text>
          </view>
        </Flex-Item>
      </Flex>
    </Block>
    <Block title="圆形模式" class="block">
      <Flex wrap="wrap" justify="space-between">
        <Flex-Item span="8" v-for="mode in modes" :key="mode">
          <view class="image-item">
            <Image
              height="100px"
              width="100px"
              :mode="mode"
              round
              src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
            <text>{{ mode }}</text>
          </view>
        </Flex-Item>
      </Flex>
    </Block>
    <Block title="加载提示" class="block">
      <Flex wrap="wrap">
        <Flex-Item span="8">
          <view class="image-item">
            <Image height="100px" width="100px" src="https://seopic.699pic.com/photo/50059/7773.jpg_wh1200.jpg" />
            <text>默认提示</text>
          </view>
        </Flex-Item>
        <Flex-Item span="8">
          <view class="image-item">
            <Image height="100px" lazy-load width="100px" src="https://seopic.699pic.com/photo/50059/7773.jpg_wh1200.jpg" placeholder="垃圾网络"/>
            <text>自定义提示</text>
          </view>
        </Flex-Item>
      </Flex>
    </Block>
    <Block title="加载失败提示" class="block">
      <Flex wrap="wrap">
        <Flex-Item span="8">
          <view class="image-item">
            <Image height="100px" width="100px" src="error" />
            <text>默认提示</text>
          </view>
        </Flex-Item>
        <Flex-Item span="8">
          <view class="image-item">
            <Image height="100px" width="100px" src="error" fallback="失败" />
            <text>自定义提示</text>
          </view>
        </Flex-Item>
      </Flex>
    </Block>
  </Pages>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Pages from "@/components/pages/pages.vue";
import Block from "@/components/block/block.vue";
export default defineComponent({
  components: {
    Pages,
    Block,
  },

  setup() {
    return {
      modes: [
        "scaleToFill",
        "aspectFit",
        "aspectFill",
        "widthFix",
        "heightFix",
        "top",
        "bottom",
        "center",
        "left",
        "right",
        "top left",
        "top right",
        "bottom left",
        "bottom right",
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
.image {
  background: #fff;
}
.image-box {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-around;
}
.image-item {
  margin: 10rpx 0;
  text-align: center;
  font-size: 26rpx;
}
</style>