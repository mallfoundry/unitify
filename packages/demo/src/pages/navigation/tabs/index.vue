<template>
  <view class="tabs">
    <Tabs v-model:active="active">
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
      <Tab title="标签 5">内容 5</Tab>
    </Tabs>
  </view>
</template>

<script lang="ts" setup>
import { ref, defineComponent } from "vue";

const active = ref(2);
</script>

<style lang="scss" scoped>
</style>