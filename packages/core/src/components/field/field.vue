<template>
  <Cell :label="label" :icon="leftIcon" :rightIcon="clearable ? '' : rightIcon" labelWidth="10" :disabled="disabled">
    <input @blur="filedBlur" @focus="fileFocus" :type="type" :disabled="disabled || readonly" v-model="value"
      :class="disabled ? 'unitify-field--disabled' : null" class="unitify-field"
      placeholder-style="color:#c8c9cc;font-size:28rpx" :placeholder="placeholder">
    <span class="unitify-field--clearable">
      <Icon v-if="clearableShow" name="clear" @click="handleClear" />
    </span>
  </Cell>
</template>

<script lang="ts">
import { Cell } from "../cell"
import { Icon } from "../icon"
import { defineComponent, ref, toRefs, watch } from "vue";
export default defineComponent({
  name: "Field",
  components: { Cell, Icon },
  emits: ["update:modelValue", "blur", "focus"],
  props: {
    modelValue: {
      type: String
    },
    placeholder: {
      type: String
    },
    label: {
      type: String
    },
    type: {
      type: String
    },
    readonly: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    leftIcon: {
      type: String
    },
    rightIcon: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: false,
    }
  },

  setup(props, { emit }) {

    const value = ref(props.modelValue)
    watch(
      () => value.value,
      (data) => emit("update:modelValue", data)
    )

    const { clearable } = props
    const clearableShow = ref(false)
    const filedBlur = (e: FocusEvent) => {
      emit("blur", e)
      if (clearable) {
        setTimeout(function () { clearableShow.value = false }, 100);
      }
    }
    const handleClear = () => {
      value.value = ''
      emit('update:modelValue', value)
    }
    const fileFocus = (e: FocusEvent) => {
      emit("focus", e)
      if (clearable) {
        clearableShow.value = true
      }
    }

    return {
      filedBlur,
      fileFocus,
      handleClear,
      clearableShow,
      value
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./field.scss";
</style>