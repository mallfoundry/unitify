<template>
  <Cell :label="label" titleWidth="4" >
    <input type="text" class="unitify-field" :placeholder="placeholder">
  </Cell>
</template>

<script lang="ts">
import { Cell } from "../cell"
import { defineComponent } from "vue";
export default defineComponent({
  name: "Field",
  components: { Cell },
  props:{
    placeholder:{
      type:String
    },
    label:{
      type:String
    },
  }
});
</script>

<style lang="scss" scoped>
@import "./field.scss";
</style>