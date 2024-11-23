import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ros2-workspace",
  description: "Cygnomatic ros2-workspace docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "食用指南", link: "/start/concepts" }],

    sidebar: [
      {
        text: "开始食用",
        items: [
          { text: "概念", link: "/start/concepts" },
          { text: "快速开始", link: "/start/quick-start" },
        ],
      },
      {
        text: "开发指南",
        items: [{ text: "结构", link: "/develop/struct" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cygnomatic/ros2-workspace",
      },
    ],
  },
});
