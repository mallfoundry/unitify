import { App } from "vue";
import { Button } from "./src/components/button";
import Avatar from "./src/components/avatar/avatar.vue";
import { Icon } from "./src/components/icon";
import { Tab, Tabs } from "./src/components/tabs";
import { Swiper, SwiperItem } from "./src/components/swiper";
import { FlexItem, Flex } from "./src/components/flex";
import { Image } from "./src/components/image";
import { Cell, CellGroup } from "./src/components/cell";
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
  Image,
  Cell,
  CellGroup,
];

// 定义 install 方法， App 作为参数
const install = (app: App): void => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export {
  Button,
  Avatar,
  Icon,
  Tab,
  Tabs,
  Swiper,
  SwiperItem,
  FlexItem,
  Flex,
  Image,
  Cell,
  CellGroup,
};

export default {
  install,
};
