<template>

    <swiper-item style="height: 100%;">
      <slot></slot>
    </swiper-item>
 
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Tab",
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
</style>