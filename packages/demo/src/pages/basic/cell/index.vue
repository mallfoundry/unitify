<template>
  <Pages class="cell">
    <Block title="基本使用">
      <CellGroup>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </CellGroup>
    </Block>
    <Block title="卡片">
      <CellGroup inset>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </CellGroup>
    </Block>

    <Block title="单元格大小">
      <Cell title="单元格" value="内容">内容</Cell>
      <Cell title="单元格" label="描述信息" size="large">内容</Cell>
    </Block>
    <Block title="只设置 value">
      <Cell value="内容"></Cell>
    </Block>
    <Block title="展示图标">
      <Cell icon="location-o" title="单元格">内容</Cell>
    </Block>
    <Block title="箭头展示">
      <Cell title="单元格" rightIcon="arrow" clickable />
      <Cell title="单元格" rightIcon="arrow" clickable value="内容"></Cell>
      <Cell title="单元格" rightIcon="arrow-down" clickable value="内容"></Cell>
    </Block>

    <Block title="分组">
      <CellGroup  title="分组 1">
        <Cell title="单元格" value="内容"></Cell>
      </CellGroup>
      <CellGroup title="分组 2">
        <Cell title="单元格" value="内容"></Cell>
      </CellGroup>

    </Block>
  
    <Block title="垂直居中">
      <Cell title="单元格" label="详细内容" value="内容" align="center"></Cell>

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