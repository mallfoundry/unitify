<template>
  <span class="unitify-icon" :class="name"> </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  name: "Icon",
  props:{
    name:{
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