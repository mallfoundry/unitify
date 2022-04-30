interface Pages {
  title: string;
  name: string;
  path: string;
}
export interface subpackages {
  root: string;
  title: string;
  pages: Pages[];
}

export default [
  {
    root: "pages/basic",
    title: "基础组件",
    pages: [
      {
        title: "Cell 按钮",
        name: "Cell",
        path: "cell/index",
      },
      {
        title: "Button 按钮",
        name: "Button",
        path: "button/index",
      },
      {
        title: "Image 图片",
        name: "Image",
        path: "image/index",
      },
      {
        title: "Icon 图标",
        name: "Icon",
        path: "icon/index",
      },
      {
        title: "Flex 布局",
        name: "Flex",
        path: "flex/index",
      },
    ],
  },
  {
    root: "pages/display",
    title: "基础组件",
    pages: [
      {
        title: "Swiper 轮播图",
        name: "Button",
        path: "swiper/index",
      },

    ],
  },  {
    root: "pages/from",
    title: "表单组件",
    pages: [
      {
        title: "Field 输入框",
        name: "Field",
        path: "field/index",
      },
    ],
  },
  {
    root: "pages/navigation",
    title: "导航组件",
    pages: [
      {
        title: "Tabs 标签页",
        name: "Tabs",
        path: "tabs/index",
      },
    ],
  },
];
