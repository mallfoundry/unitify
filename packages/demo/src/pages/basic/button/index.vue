<template>
  <Pages class="button">
    <Block title="基本使用" class="block">
      <Button color="primary">主要按钮</Button>
      <Button color="info">信息按钮</Button>
      <Button color="success">成功按钮</Button>
      <Button color="warning">警告按钮</Button>
      <Button color="danger">危险按钮</Button>
      <Button color="default">默认按钮</Button>
    </Block>
    <Block title="文本按钮" class="block">
      <Button variant="text" color="primary">主要按钮</Button>
      <Button variant="text" color="info">信息按钮</Button>
      <Button variant="text" color="success">成功按钮</Button>
      <Button variant="text" color="warning">警告按钮</Button>
      <Button variant="text" color="danger">危险按钮</Button>
      <Button variant="text" color="default">默认按钮</Button>
    </Block>
    <Block title="轮廓按钮" class="block">
      <Button variant="outlined" color="primary">主要按钮</Button>
      <Button variant="outlined" color="info">信息按钮</Button>
      <Button variant="outlined" color="success">成功按钮</Button>
      <Button variant="outlined" color="warning">警告按钮</Button>
      <Button variant="outlined" color="danger">危险按钮</Button>
      <Button variant="outlined" color="default">默认按钮</Button>
    </Block>
    <!-- <Block title="细边框" class="block">
      <Button variant="outlined" color="primary" hairline>主要按钮</Button>
      <Button variant="outlined" color="info" hairline>信息按钮</Button>
      <Button variant="outlined" color="success" hairline>成功按钮</Button>
      <Button variant="outlined" color="warning" hairline>警告按钮</Button>
      <Button variant="outlined" color="danger" hairline>危险按钮</Button>
      <Button variant="outlined" color="default" hairline>默认按钮</Button>
    </Block> -->
    <Block title="禁用按钮" class="block">
      <Button variant="contained" color="primary" disabled>主要按钮</Button>
      <Button variant="contained" color="info" disabled>信息按钮</Button>
      <Button variant="contained" color="success" disabled>成功按钮</Button>
      <Button variant="contained" color="warning" disabled>警告按钮</Button>
      <Button variant="contained" color="danger" disabled>危险按钮</Button>
      <Button variant="contained" color="default" disabled>默认按钮</Button>
    </Block>
    <Block title="图标按钮" class="block">
      <Button variant="contained" color="primary" icon="star-o" />
      <Button variant="contained" color="primary" icon="star-o"
        >主要按钮</Button
      >
      <Button variant="outlined" color="primary" icon="star-o">轮廓按钮</Button>
    </Block>
    <Block title="按钮形状" class="block">
      <Button variant="contained" color="primary" shape="square"
        >方形按钮</Button
      >
      <Button variant="contained" color="primary" shape="round"
        >圆形按钮</Button
      >
    </Block>
    <Block title="按钮尺寸" class="block">
      <Button color="primary" size="large">大号按钮</Button>
      <Button color="primary" size="medium">普通按钮</Button>
      <Button color="primary" size="small">小型按钮</Button>
      <Button color="primary" size="mini">迷你按钮</Button>
    </Block>
    <Block title="块级按钮" class="block">
      <Button color="primary" block>块级按钮</Button>
    </Block>
    <Block title="自定义颜色" class="block">
      <Button :style="{ backgroundColor: '#7232dd', color: '#fff' }"
        >单色按钮</Button
      >
      <Button :style="{ borderColor: '#7232dd', color: '#7232dd' }"
        >单色按钮</Button
      >
      <Button
        :style="{
          background: 'linear-gradient(to right, #ff6034, #ee0a24)',
          color: '#fff',
        }"
        >渐变色按钮</Button
      >
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
.block {
  ::v-deep .block-content {
    flex-wrap: wrap;
    .unitify-button {
      margin: 10rpx;
    }
  }
}
</style>