# 仓库结构

```
.
├── .devcontainer
│   ├── Dockerfile // 用于启动开发容器或部署环境的 Dockerfile
│   ├── Dockerfile.l4t.35 // 用于启动部署环境的 Dockerfiles
│   ├── devcontainer.json
│   ├── docker-compose.gpu-disable.yaml
│   ├── docker-compose.gpu-enable.yaml
│   ├── docker-compose.gpu-tegra.yaml
│   ├── docker-compose.gpu.yaml
│   ├── docker-compose.os-unix.yaml
│   ├── docker-compose.os-win.yaml
│   ├── docker-compose.os.yaml
│   ├── docker-compose.yaml
│   └── setup_container.sh // 根据系统修改 docker-compose.yaml 具体配置
├── .dockerignore
├── .env
├── .git
├── .gitattributes
├── .gitignore
├── .gitmodules
├── .vscode
│   ├── c_cpp_properties.json
│   ├── launch.json
│   ├── settings.json
│   └── tasks.json // vscode tasks，包括 build、clean、test 等常用操作，你可以在此添加自定义任务
├── .workspace
│   ├── dockerfiles // 存放第二层 Dockerfile, 用于安装依赖
│   │   ├── deploy.Dockerfile
│   │   ├── deploy.l4t.35.Dockerfile
│   │   ├── devel.Dockerfile
│   │   └── devel.l4t.35.Dockerfile
│   ├── host
│   │   ├── setup_jetson_clock.bash
│   │   ├── setup_udev.sh
│   │   └── udev
│   ├── requirements // 你可以在此添加依赖
│   │   ├── apt_packages.txt
│   │   ├── pip_requirements.txt
│   │   └── ros_packages.txt
│   ├── scripts // 用到的脚本
│   │   ├── deployment_ros_entrypoint.sh
│   │   └── install_ros_packages.bash
│   └── tasks // Tasks 用到的脚本
│       ├── build.sh
│       ├── setup.sh
│       ├── sync_upstream.sh
│       └── test.sh
├── LICENSE
├── README.md
├── data
│   └── .gitkeep
└── src // 存放主要代码，包括 ros2 各种 node 和驱动
    ├── hik_camera
    ├── opt_camera
    └── ros_tcp_endpoint
```
