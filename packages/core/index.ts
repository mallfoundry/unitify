import { App } from "vue";
import { Button } from "./components/button";
import Avatar from "./components/avatar/avatar.vue";
import { Icon } from "./components/icon";
import { Tab, Tabs } from "./components/tabs";
import { Swiper, SwiperItem } from "./components/swiper";
import { FlexItem, Flex } from "./components/flex";
// 所有组件列表
const components = [
  Button,
  Avatar,
  Icon,
  Tab,
  Tabs,
  Swiper,
  SwiperItem,
  FlexItem,
  Flex,
];

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export { Button, Avatar, Icon, Tab, Tabs, Swiper, SwiperItem, FlexItem, Flex };

export default {
  install,
};
