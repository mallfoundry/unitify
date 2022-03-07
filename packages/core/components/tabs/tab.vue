<template>
  <transition>
      <view class="tab-item" v-if="active === value">
    <slot></slot>
  </view>
  </transition>

</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "Tab",
  props: {
    value: [Number, String],
  },
  setup(props) {
    const active = inject("active");
  

    return { active };
  },
});
</script>

<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active {
    position: absolute;
    top: 0;
    transition: all .3s linear;
  }

  .v-enter-active {
  
    transform: translateX(100%)
  }

  .v-enter-to {
    transform: translateX(0);
  }

  .v-leave-active {
    transform: translateX(0);
  }

  .v-leave-to {
    transform: translateX(-100%)
  }
 
</style>