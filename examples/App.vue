<template>
  <div>组件示例</div>
  <div>{{ count }}</div>
  <u-button @click="handleClick">按钮</u-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleClick() {
      this.count++;
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: $font-size-titlel;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
