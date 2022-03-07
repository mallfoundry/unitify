<template>
  <Pages class="button">
    <Block title="基本使用" class="block">
      <Flex>
        <Flex-Item span="8"><view class="item"> span: 8 </view></Flex-Item>
        <Flex-Item span="8"><view class="item"> span: 8 </view></Flex-Item>
        <Flex-Item span="8">
          <view class="item"> span: 8 </view>
        </Flex-Item>
      </Flex>
    </Block>
    <Block title="间距" class="block">
      <Flex>
        <Flex-Item span="6" offset="2">
          <view class="item"> span: 8 </view>
        </Flex-Item>
        <Flex-Item span="6" offset="2"
          ><view class="item"> span: 8 </view></Flex-Item
        >
        <Flex-Item span="6" offset="2"
          ><view class="item"> span: 8 </view></Flex-Item
        >
      </Flex>
    </Block>
    <Block title="设置列元素间距" class="block">
      <Flex gutter="6">
        <Flex-Item span="8"><view class="item"> span: 8 </view></Flex-Item>
        <Flex-Item span="8"><view class="item"> span: 8 </view></Flex-Item>
        <Flex-Item span="8"><view class="item"> span: 8 </view></Flex-Item>
      </Flex>
    </Block>
    <Block title="居中">
      <!-- 居中 -->
      <Flex justify="center">
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
      </Flex>
    </Block>
    <Block title="右对齐">
      <!-- 居中 -->
      <Flex justify="end">
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
      </Flex>
    </Block>
    <Block title="两端对齐">
      <!-- 居中 -->
      <Flex justify="space-between">
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
        <Flex-Item span="6"><view class="item"> span: 6 </view></Flex-Item>
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
    return {};
  },
});
</script>
<style lang="scss" scoped>
.unitify-flex-item{
  
.item {
  height: 50rpx;
  text-align: center;
  color: #fff;
  line-height: 50rpx;

  &:nth-child(odd) {
    background: #66c6f2;
  }
  &:nth-child(even) {
    background: #39a9ed;
  }
  background-clip: content-box;
}
}
</style>