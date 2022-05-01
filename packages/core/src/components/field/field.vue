<template>
  <Cell
    :label="label"
    :icon="leftIcon"
    :rightIcon="clearable ? '' : rightIcon"
    labelWidth="6"
    :align="$slots.button ? 'center' : ''"
  >
    <input
      v-bind="$attrs"
      v-if="!autosize && type != 'textarea'"
      @blur="filedBlur"
      @focus="fileFocus"
      :password="type == 'password' ? 'password' : null"
      :type="type"
      :disabled="disabled || readonly"
      v-model="value"
      :style="{ color: error ? '#ee0a24' : '' }"
      :class="disabled ? 'unitify-field--disabled' : null"
      class="unitify-field"
      :placeholder-style="{
        color: error ? '#ee0a24' : '#c8c9cc',
        fontSize: '28rpx',
      }"
      :placeholder="placeholder"
    />
    <textarea
      v-else
      :class="disabled ? 'unitify-field--disabled' : null"
      class="unitify-field"
      auto-height
      :disabled="disabled"
      v-bind="$attrs"
      v-model="value"
      :maxlength="maxlength"
    ></textarea>
    <view class="unitify-field--clearable">
      <slot name="button">
        <Icon v-if="clearableShow" name="clear" @click="handleClear" />
      </slot>
    </view>
    <template v-slot:error-message>
      <view class="unitify-field--error-message">{{ errorMessage }}</view>
    </template>
    <template v-if="maxlength" v-slot:show-word-limit>
      <view class="unitify-field--show-word-limit">{{
        value?.length + "/" + maxlength
      }}</view>
    </template>
  </Cell>
</template>

<script lang="ts">
import { Cell } from "../cell";
import { Icon } from "../icon";
import { defineComponent, ref, watch, provide } from "vue";
export default defineComponent({
  name: "Field",
  components: { Cell, Icon },
  emits: ["update:modelValue", "blur", "focus"],
  props: {
    modelValue: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
    },
    readonly: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    leftIcon: {
      type: String,
    },
    rightIcon: {
      type: String,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
    },
    error: {
      type: Boolean,
      default: false,
    },
    autosize: {
      type: Boolean,
      default: false,
    },
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
    },
  },

  setup(props, { emit, attrs }) {
    console.log(attrs);

    provide("required", props.required);
    provide("disabled", props.disabled);

    const value = ref(props.modelValue);
    watch(
      () => value.value,
      (data) => emit("update:modelValue", data)
    );

    const { clearable } = props;
    const clearableShow = ref(false);
    const filedBlur = (e: FocusEvent) => {
      emit("blur", e);
      if (clearable) {
        setTimeout(function () {
          clearableShow.value = false;
        }, 100);
      }
    };
    const handleClear = () => {
      value.value = "";
      emit("update:modelValue", value);
    };
    const fileFocus = (e: FocusEvent) => {
      emit("focus", e);
      if (clearable) {
        clearableShow.value = true;
      }
    };

    return {
      filedBlur,
      fileFocus,
      handleClear,
      clearableShow,
      value,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "./field.scss";
</style>
