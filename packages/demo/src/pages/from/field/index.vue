<template>
  <view class="swiper">
    <Pages>
      <Block title="基础使用">
        <CellGroup>

          <Field v-model="text" label="文本" placeholder="请输入文本" />
        </CellGroup>
      </Block>
      <Block title="自定义类型">
        <CellGroup>

          <Field v-model="text" label="文本" placeholder="请输入文本" />
          <!-- 输入手机号，调起手机号键盘 -->
          <Field v-model="tel" type="tel" label="手机号" placeholder="请输入手机号" />
          <!-- 允许输入正整数，调起纯数字键盘 -->
          <Field v-model="digit" type="digit" label="整数" placeholder="请输入整数" />
          <!-- 允许输入数字，调起带符号的纯数字键盘 -->
          <Field v-model="number" type="number" label="数字" placeholder="请输入数字(支持小数)" />
          <!-- 输入密码 -->
          <Field v-model="password" type="password" label="密码" placeholder="请输入密码" />

        </CellGroup>
      </Block>
      <Block title="禁用输入框">
        <CellGroup>
          <Field label="文本" model-value="输入框只读" readonly />
          <Field label="文本" model-value="输入框已禁用" disabled />
        </CellGroup>
      </Block>
      <Block title="基础使用">
        <CellGroup>
          <Field v-model="value1" label="文本" left-icon="smile-o" right-icon="warning-o" placeholder="显示图标" />
          <Field v-model="value2" clearable label="文本" left-icon="music-o" placeholder="显示清除图标" />

        </CellGroup>
      </Block>

    </Pages>
  </view>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Pages from "@/components/pages/pages.vue";
import Block from "@/components/block/block.vue";

export default defineComponent({
  components: { Pages, Block },
  setup() {
    const tel = ref('');
    const text = ref('');
    const digit = ref('');
    const number = ref('');
    const password = ref('');
    const value2 = ref('11')
    const value1 = ref('11')

    const handlerBulr = (e: any) => {
      console.log(value1.value, value2.value);

    }
    return { tel, text, digit, number, value2, value1, password, handlerBulr };
  },
});
</script>
<style lang="scss" scoped>
.block {
  width: 100%;

  padding: 0;
}
</style>