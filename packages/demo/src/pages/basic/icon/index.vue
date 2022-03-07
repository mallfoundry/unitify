<template>
  <view class="icon">
    <Tabs v-model:active="active">
      <Tab title="基础" :value="0">
        <view class="basecard">
          <Block title="基础用法">
            <Icon name="chat-o" size="60rpx" style="margin-right:60rpx"/>
            <Icon name="chat-o" size="60rpx" />
          </Block>
          <Block title="颜色用法">
            <Icon name="cart-o" color="#1989fa" style="margin-right:60rpx" size="60rpx"/>
            <Icon name="fire-o" color="#ee0a24" size="60rpx"/>
          </Block>
          <Block title="图标大小">
            <Icon name="star-o" size="40px" style="margin-right:60rpx" />
            <Icon name="star-o" size="3rem" />
          </Block>
        </view>
      </Tab>
      <Tab title="基础" :value="1">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.basic"
            @click="copyRight(item)"
          >
            <Icon :name="item" />
            <text>{{ item }}</text>
          </view>
        </view>
      </Tab>
      <Tab title="线框风格" :value="2">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.outline"
            @click="copyRight(item)"
          >
            <Icon :name="item" />
            <text>{{ item }}</text>
          </view>
        </view>
      </Tab>
      <Tab title="实底风格" :value="3">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.filled"
            @click="copyRight(item)"
          >
            <Icon :name="item" />
            <text>{{ item }}</text>
          </view>
        </view>
      </Tab>
    </Tabs>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from "vue";
import config from "../../../../../core/components/icon/icons/src/config";
import Block from "../../../components/block/block.vue";

const icons = ref(config);
const active = ref(0);
const copyRight = (text: string) => {
  uni.setClipboardData({
    data: text,
  });
};
</script>

<style lang="scss" scoped>
.icon {
  background: #f7f8fa;
  padding: 30rpx;
  .basecard {
    background: #fff;
    border-radius: 10rpx;
    margin-top: 20rpx;
    padding: 30rpx;
  }
  .card {
    background: #fff;
    border-radius: 10rpx;
    margin-top: 20rpx;
    display: flex;
    flex-wrap: wrap;

    &-item {
      border-radius: 5rpx;
      &:active {
        background: #999;
      }
      .unitify-icon {
        font-size: 40rpx;
        margin-bottom: 20rpx;
      }

      width: 25%;
      height: 170rpx;
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 20rpx;
      box-sizing: border-box;
      text {
        font-size: 24rpx;
      }
    }
  }
}
</style>