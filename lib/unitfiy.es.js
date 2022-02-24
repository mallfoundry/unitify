import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "u-button"
});
const _hoisted_1 = { class: "fancy-btn" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Button.install = (app) => {
  app.component(Button.name, Button);
};
const components = [Button];
const install = (app) => {
  components.map((component) => app.component(component.name, component));
};
var index = {
  install
};
export { Button as UButton, index as default };
