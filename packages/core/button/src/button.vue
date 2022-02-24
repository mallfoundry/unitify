<template>
  <button class="fancy-btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "u-button",
});
</script>