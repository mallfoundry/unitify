<template>
  <view class="icon">
    <Tabs v-model:active="active">
      <Tab title="标签 1">
        <view
          class="card-item"
          :name="item"
          :key="index"
          v-for="(item, index) in icons.basic"
        >
          <Icon :name="item" />
          {{ item }}
        </view>
      </Tab>
      <Tab title="基础">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.basic"
          >
            <Icon :name="item" />
            {{ item }}
          </view>
        </view>
      </Tab>
      <Tab title="线框风格">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.outline"
          >
            <Icon :name="item" />
            {{ item }}
          </view>
        </view>
      </Tab>
      <Tab title="实底风格">
        <view class="card">
          <view
            class="card-item"
            :name="item"
            :key="index"
            v-for="(item, index) in icons.filled"
          >
            <Icon :name="item" />
            {{ item }}
          </view>
        </view>
      </Tab>
    </Tabs>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from "vue";
import config from "../../../../../core/components/icon/icons/src/config";
console.log(config);
const icons = ref(config);
const active = ref(0);
</script>

<style lang="scss" scoped>
.icon {
  .card {
    display: flex;
    flex-wrap: wrap;
    margin: 30rpx;
    &-item {
      .unitify-icon {
        font-size: 40rpx;
      }
      flex-shrink: 0;
      width: 25%;
      height: 150rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>