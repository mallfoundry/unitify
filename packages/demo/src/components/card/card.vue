<template>
  <view class="pages">
    <view class="pages-card" v-for="item in subpackages" :key="item.root">
      <view class="pages-card-title">{{ item.title }}</view>
      <view class="pages-card-item" @click="jumpComponent(item.root, items.path)" v-for="items in item.pages"
        :key="items.title">
        {{ items.title }}
        
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { subpackages } from "../../subpackages";

export default defineComponent({
  name: "Card",
  props: {
    subpackages: {
      type: Array as PropType<subpackages[]>,
      default: [],
    },
  },
  setup() {
    const jumpComponent = (root: string, path: string) => {
      const url = "/" + root + "/" + path;
      console.log(url)
      uni.navigateTo({
        url,
      });
    };
    return {
      jumpComponent,
    };
  },
});
</script>
<style lang="scss" scoped>
.pages {
  padding: 30rpx;

  &-logo {
    padding: 0 50rpx;

    &-info {
      white-space: pre-line;
      line-height: 1;
      display: flex;
      align-items: center;
      font-size: 60rpx;

      image {
        margin-right: 30rpx;
      }
    }

    &-desion {
      padding: 20rpx 0;
      color: rgba(69, 90, 100, 0.6);
    }
  }

  &-card {

    &-title {
      margin: 30rpx;
      color: rgba(69, 90, 100, 0.6);
    }

    &-item {
      margin-bottom: 30rpx;
      height: 80rpx;
      background: #f7f8fa;
      padding-left: 40rpx;
      border-radius: 80rpx;
      line-height: 80rpx;
      transition: background 0.3s;

      &:hover {
        background: #ccc;
        transition: background 0.3s;
      }
    }
  }
}
</style>