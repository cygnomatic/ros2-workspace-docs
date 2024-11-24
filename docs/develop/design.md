# 分层设计

ros2-workspace 被分层设计为多个镜像
| 名称 | 描述 |
|------|------|
| 根镜像 | 来自 NVIDIA 官方或 althack/ros2 |
| [ros2-workspace-base (暂为不对外开放)](https://github.com/cygnomatic/ros2-workspace-base) | 安装常用软件及依赖，不轻易修改 |
| [devel.Dockerfile](https://github.com/cygnomatic/ros2-workspace/tree/main/.workspace/dockerfiles) | 可以根据需求自由添加依赖 |
| [.devcontainer](https://github.com/cygnomatic/ros2-workspace/blob/main/.devcontainer) | 根据系统修改 Dockerfile 具体配置 |
