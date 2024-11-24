# 高级设置

## Configurate USB passthrough (WSL Only)

若你需要在开发容器中使用 USB 设备（如工业相机、串口等），请进行以下操作。
Linux 系统不需要按照此部分操作。可直接使用 USB 设备。

> [!NOTE]  
> 需要更好的解决方案。Docker Desktop 运行于一个基于 Alpine 的 WSL 镜像 `docker-desktop`，而 usbipd-win 不支持直接 attach 到 `docker-desktop` 内。[此 issue](https://github.com/dorssel/usbipd-win/issues/669) 建议安装一个单独的 Ubuntu 22.04 镜像用于接入 USB。能用但不优雅。

1. 下载 usbipd-win >= 4.0

   ```
   winget install usbipd
   ```

> [!IMPORTANT]  
> 请确保你的 `usbipd-win` 版本 >= 4.0. 你可以手动从 [GitHub Release](https://github.com/dorssel/usbipd-win/releases) 安装最新版。

2. 安装 Ubuntu-22.04 WSL

   ```powershell
   wsl --install Ubuntu-22.04
   ```

   首次运行请等待安装完成。安装完成后会自动切入 WSL Ubuntu-22.04 系统内终端。  
   **保持此窗口在后台运行，直到完成此部分前不要关闭。**

3. 列出设备的 BUSID

   启动一个有管理员权限的新终端，运行：

   ```powershell
   usbipd list
   ```

   输出应当类似于：

   ```
   Connected:
   BUSID  VID:PID    DEVICE                     STATE
   1-3    27c6:589a  Goodix fingerprint         Not shared
   2-3    8087:0032  英特尔(R) 无线 Bluetooth(R)  Not shared
   3-1    2b7e:b557  XiaoMi USB 2.0 Webcam      Not shared

   Persisted:
   	GUID                                  DEVICE
   ```

   记住你期望在 Docker 中使用的设备的 BUSID。

4. 设置默认 WSL Distro

   ```powershell
   wsl --set-default Ubuntu-22.04
   ```

5. 配置待穿透设备
   ```powershell
   usbipd bind --busid=<BUSID>
   usbipd attach --wsl --busid=<BUSID>
   ```
   **将你需要在 Docker 环境中使用的设备 BUSID 替换掉命令中的 `<BUSID>`。**  
   例如在上述 `usbipd list` 的输出示例中，你希望将 XiaoMi USB 2.0 Webcam 映射到 Docker 中：
   ```powershell
   usbipd bind --busid=3-1
   ```

> [!TIP]  
> 每次重启宿主机，你需要重新运行第 5 步。

## Setup CUDA

Docker 镜像中已内置 CUDA。不需要进行任何手动配置。  
无需安装 CUDA for WSL2 或在 WSL 中安装 CUDA。
