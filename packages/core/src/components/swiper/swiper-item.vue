<template>
  <transition>
    <view class="unitify-swiper--item" v-if="itemKey === initial">
    {{ initial }}
    <slot></slot>
  </view>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  toRefs,
  inject,
} from "vue";

export default defineComponent({
  props: {
    key: String,
  },
  name: "Swiper-Item",
  setup(props, ctx) {
    const instance = getCurrentInstance();
    console.log(instance?.vnode.key);

    const initial = inject("initial");
    const state = reactive({
      itemKey: instance?.vnode.key,
    });

    onMounted(() => {});

    return {
      ...toRefs(state),
      initial,
    };
  },
});
</script>
<style lang="scss" scoped>
.unitify-swiper--item {
  width: 100%;
  height: 100%;

  image {
    display: block;
    width: 100%;
  }
}
.v-enter-active,
.v-leave-active {
  flex-shrink: 0;
  top: 0;
  transition: all 0.3s linear;
}

.v-enter-active {
  transform: translateX(100%);
}

.v-enter-to {
  transform: translateX(0);
}

.v-leave-active {
  transform: translateX(0);
}

.v-leave-to {
  transform: translateX(-100%);
}
</style>