import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ros2-workspace",
  description: "Cygnomatic ros2-workspace docs",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "食用指南", link: "/start/concepts", activeMatch: "/start" }],

    sidebar: [
      {
        text: "开始食用",
        items: [
          { text: "概念", link: "/start/concepts" },
          { text: "快速开始", link: "/start/quick-start" },
          { text: "如何使用", link: "/start/usage" },
          { text: "高级设置", link: "/start/advanced-settings" },
        ],
      },
      {
        text: "开发指南",
        items: [
          { text: "分层设计", link: "/develop/design" },
          { text: "仓库结构", link: "/develop/struct" },
          { text: "完整工作流程", link: "/develop/pipeline" },
        ],
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
          {
            text: "ros2-workspace README.md",
            link: "https://github.com/cygnomatic/ros2-workspace/blob/main/README.md",
          },
          {
            text: "athackst/vscode_ros2_workspace",
            link: "https://github.com/athackst/vscode_ros2_workspace",
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

    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith("packages/")) {
          return `https://github.com/cygnomatic/ros2-workspace-docs/edit/main/${filePath}`;
        } else {
          return `https://github.com/cygnomatic/ros2-workspace-docs/edit/main/docs/${filePath}`;
        }
      },
    },

    search: {
      provider: "local",
    },

    logo: {
      light: "/cyg_logo_dark_large.svg",
      dark: "/cyg_logo_light_large.svg",
    },
  },
  lastUpdated: true,
});
