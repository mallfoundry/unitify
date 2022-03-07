<template>
  <span class="unitify-icon" :class="name" :style="{color:color,fontSize:size}"> </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  name: "Icon",
  props:{
    name:{
      type:String
    },
    color:{
      type:String
    },
    size:{
      type:String
    }
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
@import "./icons/src/index.scss";
</style>