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
      {
        text: "参考",
        items: [
          {
            text: "借助 Visual Studio Code 将 Docker 容器用作开发环境",
            link: "https://learn.microsoft.com/zh-cn/training/modules/use-docker-container-dev-env-vs-code/",
          },
          {
            text: "Developing inside a Container",
            link: "https://code.visualstudio.com/docs/devcontainers/containers",
          },
        ],
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
