import { App } from "vue";
import {Button} from "./components/button";
import Avatar from "./components/avatar/avatar.vue";
import {Icon} from "./components/icon";
// 所有组件列表
const components = [Button,Avatar,Icon];

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export { Button,Avatar,Icon };

export default {
  install,
};
