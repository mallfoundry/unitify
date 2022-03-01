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
        title: "Button 按钮",
        name: "Button",
        path: "button/index",
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
