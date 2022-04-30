<template>
  <Cell title="单元格"></Cell>
</template>

<script lang="ts">
import { Cell } from "../cell"
import { defineComponent } from "vue";
export default defineComponent({
  name: "Field",
  components: { Cell }
});
</script>

<style lang="scss" scoped>
</style>