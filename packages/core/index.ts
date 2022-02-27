import { App } from "vue";
import UButton from "./components/u-button/u-button.vue";
import UAvatar from "./components/u-avatar/u-avatar.vue";
// 所有组件列表
const components = [UButton,UAvatar];

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export { UButton,UAvatar };

export default {
  install,
};
