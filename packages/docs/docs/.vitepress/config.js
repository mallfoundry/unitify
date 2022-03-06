export default {
  title: "VitePress App",
  description: "A VitePress site",
  port:8080,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Contact", link: "/contact/" },
    ],
    sidebar: [
      { text: "About", link: "/about/" },
      { text: "Contact", link: "/contact/" },
    ],
  },
};
