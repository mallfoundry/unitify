<template>
  <Pages class="cell">
    <Block title="基本使用">
      <Cell title="单元格">内容</Cell>
      <Cell title="单元格" brief="描述信息">内容</Cell>
    </Block>
    <Block title="单元格大小">
      <Cell title="单元格">内容</Cell>
      <Cell title="单元格" brief="描述信息" size="large">内容</Cell>
    </Block>
    <Block title="只设置 value">
      <Cell>内容</Cell>
    </Block>
    <Block title="展示图标">
      <Cell icon="location-o" title="单元格">内容</Cell>
    </Block>
    <Block title="箭头展示">
      <Cell title="单元格" rightIcon="arrow" clickable />
      <Cell title="单元格" rightIcon="arrow" clickable>内容</Cell>
      <Cell title="单元格" rightIcon="arrow-down" clickable>内容</Cell>
    </Block>
    <Block title="分组">
      <Cell-Group inset title="分组 1">
        <Cell title="单元格">内容</Cell>
      </Cell-Group>
      <Cell-Group title="分组 2">
        <Cell title="单元格">内容</Cell>
      </Cell-Group>
    </Block>
    <Block title="对齐方式">
      <Cell title="单元格" brief="align start" size="large" align="start">内容</Cell>
      <Cell title="单元格" brief="align center" size="large" align="center">内容</Cell>
      <Cell title="单元格" brief="align end" size="large" align="end">内容</Cell>
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
.unitify-cell {
  .block-content {
    padding: 0;
  }
}
</style>