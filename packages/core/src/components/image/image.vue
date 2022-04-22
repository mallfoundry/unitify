<template>
  <view class="unitify-image">
    <image
      @error="handleError"
      :class="round ? 'unitify-image--round' : ''"
      :src="src"
      draggable
      webp
      :show-menu-by-longpress="showMenuByLongpress"
      :style="{ width, height }"
      lazy-load
      @load="handleLoad"
      :mode="mode"
      v-show="load"
    />
    <view
      class="unitify-image--content"
      v-if="!load"
      :style="{ width, height, lineHeight: height }"
    >
      <view>
        <Icon
          v-if="isPlaceholder"
          class="unitify-image--content--icon"
          :name="placeholders"
        />
        <text v-else>{{ placeholders }}</text>
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Icon } from "../icon";
import { isIconOf } from "../utils";
export default defineComponent({
  name: "Image",
  components: {
    Icon,
  },
  props: {
    src: {
      type: String,
    },
    style: {
      type: String,
    },
    mode: {
      type: String,
      defalut: "scaleToFill",
    },
    round: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "photo",
    },
    fallback: {
      type: String,
      default: "photo-fail",
    },
    "lazy-load": {
      type: Boolean,
      default: false,
    },
    showMenuByLongpress: {
      type: Boolean,
      default: false,
    },
    draggable: {
      type: Boolean,
      default: false,
    },
    webp: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const error = ref(false);

    const load = ref(null);
    const isPlaceholder = ref();

    const placeholders = ref(props.placeholder);

    isPlaceholder.value = isIconOf(props.placeholder);
    const handleError = (err: any) => {
      error.value = true;
      placeholders.value = props.fallback;
      console.log(placeholders.value);

      isPlaceholder.value = isIconOf(placeholders.value);
      console.log(isPlaceholder.value);

      emit("error", err);
    };
    const handleLoad = (data: any) => {
      load.value = data;
      emit("load", data);
    };
    return {
      handleError,
      error,
      handleLoad,
      load,
      placeholders,
      isPlaceholder,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "./image.scss";
</style>