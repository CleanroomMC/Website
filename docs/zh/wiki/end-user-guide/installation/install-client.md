---
title: Client
---

# 客户端

## 如何在客户端安装 Cleanroom Loader

::: warning {id="warning"}
Cleanroom 对 macOS 的支持尚不完善，可能无法在您的设备上正常运行。
:::

### 关于启动器

运行 Cleanroom Loader 的推荐方式是使用 **基于 MultiMC 的启动器**，例如 **[Prism Launcher](https://prismlauncher.org/download/windows/  )** 或 **[PolyMC](https://polymc.org/download/  )**。  
这些启动器获得官方支持，因为其他启动器可能无法正确处理某些原版库文件的移除。

### 手动安装

::: info 注意 {id="note"}
导入 Cleanroom Loader 实例仅支持基于 MultiMC 的启动器。对于其他启动器，请使用installer jar 文件。
:::
步骤：

1. 将 [Fugue](https://www.curseforge.com/minecraft/mc-mods/fugue  ) 添加到您的模组文件夹中<br>
   *(它不会在 Forge 环境中加载)*
2. 将 [Scalar Legacy](https://www.curseforge.com/minecraft/mc-mods/scalar-legacy  ) 添加到您的模组文件夹中<br>
   *(它不会在 Forge 环境中加载)*
3. :warning: **警告：** 确保您的实例不包含有问题或已弃用的模组。<br>
   详见 [整合包迁移指南](/zh/wiki/end-user-guide/preparing-your-modpack) 以获取更多详情。
4. 从 [发布页面](https://github.com/CleanroomMC/Cleanroom/releases  ) 下载 `Cleanroom-MMC-instance` 压缩包。
5. 将其导入到您的启动器中。<br>
   *(或者，将补丁文件和 JSON 文件解压到现有的 1.12 实例中。)*
6. 在启动器中，选择您安装的 **Java 25** 的 `javaw.exe` 路径。（`javaw.exe` 不会产生任何命令行输出，是正常情况下应使用的版本；而 `java.exe` 会产生命令行输出）
7. *(可选)* 按照 [JVM 参数](/zh/wiki/end-user-guide/args) 部分所述添加 JVM 参数。
8. 将您整合包中的 `/.minecraft` 文件夹（也可以命名为 `/minecraft` 文件夹）复制到您的 Cleanroom 实例中。

### Cleanroom Relauncher

**Cleanroom Relauncher** 是一个 <ins>**仅客户端**</ins> 模组，允许您启动一个 Forge 1.12.2 实例并无缝切换到 Cleanroom Loader。<br>
这对于希望分发既兼容 Forge 又能运行于 Cleanroom 的整合包的 **整合包作者** 特别有用。<br>
它在基于 MultiMC 的启动器和标准启动器中均受支持。<br>
步骤：

1. 将 [Fugue](https://www.curseforge.com/minecraft/mc-mods/fugue  ) 添加到您的模组列表中<br>  
   *(它不会在 Forge 环境中加载)*
2. 将 [Scalar Legacy](https://www.curseforge.com/minecraft/mc-mods/scalar-legacy  ) 添加到您的模组列表中<br>  
   *(它不会在 Forge 环境中加载)*
3. :warning: **警告：** 确保您的实例不包含有问题或已弃用的模组。<br>  
   详见 [整合包迁移指南](/zh/wiki/end-user-guide/preparing-your-modpack) 以获取详情。
4. 将 [Cleanroom Relauncher](https://www.curseforge.com/minecraft/mc-mods/cleanroom-relauncher  ) 模组添加到您的模组列表中，并使用 **Java 8** 启动游戏。
5. 在 Cleanroom Relauncher 图形界面中，选择您安装的 **Java 25** 的 `javaw.exe` 路径。（`javaw.exe` 不会产生任何命令行输出，是正常情况下应使用的版本；而 `java.exe` 会产生命令行输出）
6. *(可选)* 从 [JVM 参数](/zh/wiki/end-user-guide/args) 部分添加 JVM 参数。
7. 点击 **Relaunch**（重新启动）。

## 注意事项

- 当使用新的 Java 程序时，笔记本电脑用户可能会遇到性能不佳的情况，这是因为 Windows 未将独立显卡分配给该 Java 程序。请确保将 Java 程序 (javaw.exe) 设置为高性能模式。
- Cleanroom Relauncher 的配置文件位于 `config/relauncher.cfg`。<br> 删除此文件将在下次启动时重新显示 GUI。<br>
  ::: info 注意 {id="note"}
  Cleanroom Relauncher 会检查 Cleanroom 更新。因此，当有更新发布时会再次显示 GUI。
  :::
- :warning: **警告：** 并非所有启动器都与 Cleanroom Loader 兼容。<br> 支持的启动器：
  - :white_check_mark: 基于 MultiMC 的启动器 (**Prism Launcher, PolyMC 等**)
  - :warning: CurseForge 启动器 *(有限支持)*
  - :warning: 官方 Minecraft 启动器 *(有限支持)*
