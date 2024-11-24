# 完整工作流程 (暂不对外开放)

> [!INFO]
> 以英雄车组举例

1. 首先在 CodeUp 上 fork [plain_workspace(暂不对外开放)](https://codeup.aliyun.com/cygnomatic/dev_ws/plain_workspace) 模版仓库为自己的仓库，例如 `hero_ws`。

2. 然后从[自瞄主仓库 auto_aim_2025_workspace](https://codeup.aliyun.com/cygnomatic/dev_ws/auto_aim_2025_workspace) 合并自瞄代码
   > [!TIP]
   > 建议使用 git subtree 合并代码，这样可以留下完整记录，如果你不会使用 git，~~那就等我来线下来找你真人快打(bushi)~~ 那还是直接复制粘贴吧
3. 合并其他代码，例如火控等

4. 进入 [codeup_circleci_pipeline](https://github.com/cygnomatic/codeup_circleci_pipeline) 配置文件仓库，参考 `.circleci` 目录下 `plain.yml` 新增一个配置文件，修改其中参数。

5. 在 CodeUp 的 设置 -> Webhooks 中增加一个由标签推送事件触发的 Webhook。

6. 进入 CircleCI，在 [CodeUp 项目](https://app.circleci.com/settings/project/circleci/17Q1ozw2K91TaCvtghpJuL/Vx7rcs2Lz2dB8uHjKYDeBb/triggers) 下新增一条 Trigger 指向上一步中新增的 Webhook。

7. 修改 Fork 项目内的 `.devcontainer/requirements/` 中的依赖。

8. 向 CodeUp 的 Fork 推送一个标签，触发 CircleCI 构建镜像并等待构建完成。

9. 修改 `.devcontainer/Dockerfile` 和 `.devcontainer/Dockerfile.l4t35` 中的基础镜像为 CircleCI 构建的镜像。

10. 执行 `Dev Containers: Rebuild and Reopen in Container`。
