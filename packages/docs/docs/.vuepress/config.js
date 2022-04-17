module.exports = {
  
  title: "TypeScript4 文档",
  description: "TypeScript4 最新官方文档翻译",
  base: '/learn-typescript/',
  // theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Unitfy",
        items: [
          { text: "Github", link: "https://github.com/mallfoundry/unitify" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/1494936063324973/posts",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "必读",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "基础学习",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
  },
};
