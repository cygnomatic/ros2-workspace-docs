# 快速开始

This template will get you set up using ROS2 with VSCode as your IDE.

A fork of [athackst/vscode_ros2_workspace](https://github.com/athackst/vscode_ros2_workspace) with better wsl2 support.

## Prerequisite

1. **系统盘下至少有 5G 的空余空间**。否则可能安装失败。
2. 由于网络原因，可能需要提前配置好系统代理。

## Setup docker

#### Windows - WSL2

1. 使用管理员权限打开终端

2. 在打开的终端中运行：

   ```powershell
   wsl --install
   ```

3. 安装 Docker Desktop。

   ```powershell
   winget install Docker.DockerDesktop
   ```

4. 打开 Docker Desktop，跳过登录和那些麻烦的选择。

> [!TIP]  
> Docker 服务会随 Docker Desktop 启动。启动完毕后可关闭 Docker Desktop，保留 Docker 服务在后台即可。

#### Linux

See [docker docs](https://docs.docker.com/engine/install/).

#### MacOS

推荐使用 [OrbStack](https://orbstack.dev) 代替 Docker Desktop。

你可以在官网下载，也可以使用 homewbrew 安装：

```bash
brew install orbstack
```

> [!TIP]
> orbstack 的使用与 docker desktop 类似，需要注意的是如果你同时安装了 docker desktop，docker daemon 是不同步的，需要手动在 orbstack 中迁移。`OrbStack -> File -> Migrate Docker Data...`

## Open the repo in vscode

1. 使用 vscode 打开本项目目录

   Now that you've cloned your repo onto your computer, you can open it in VSCode (File->Open Folder).

2. 安装 vscode 插件 `Dev Container`

   按下快捷键 `Ctrl+P` 调出 Vscode Quick Open，输入：

   ```
   ext install ms-vscode-remote.remote-containers
   ```

3. 启动 DevContainer

   按下快捷键 `Ctrl+Shift+P`，输入 `rebuild`，选择 `Dev Containers: Rebuild and Reopen in Container`

> [!NOTE]  
> 请在打开 DevContainer 时关闭代理软件的 TUN 模式。否则会导致 vscode 插件无法自动安装。

4. 等待启动。第一次启动需要构筑镜像，可能会花费长达 10 分钟。

If you open a terminal inside VSCode (Terminal->New Terminal), you should see that your username has been changed to `ros`, and the bottom left green corner should say "Dev Container"

![template_container](https://user-images.githubusercontent.com/6098197/91332895-adbf1500-e781-11ea-8afc-7a22a5340d4a.png)

> [!TIP]
> 你可以会遇到下面的错误
>
> ```tasks
> 错误: 不存在已注册的任务类型“ament”。是否已错过安装提供相应任务提供程序的扩展?
> 错误: 不存在已注册的任务类型“ament”。是否已错过安装提供相应任务提供程序的扩展?
> 错误: 不存在已注册的任务类型“ament”。是否已错过安装提供相应任务提供程序的扩展?
> 错误: 不存在已注册的任务类型“ament”。是否已错过安装提供相应任务提供程序的扩展?
> 错误: 不存在已注册的任务类型“ament”。是否已错过安装提供相应任务提供程序的扩展?
> 错误: 不存在已注册的任务类型“ament”。是否已错过安装提供相应任务提供程序的扩展?
> ```
>
> 无需理会，不影响使用

Enjoy your ROS2 development environment!☝️🤓
