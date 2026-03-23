---
title: Server
---

# 服务器

## 如何在服务器上安装 Cleanroom Loader

### 步骤

1. 删除服务器目录中的 `libraries` 文件夹。
2. :warning: **警告：** 确保您的服务器模组列表不包含有问题或已弃用的模组。<br>
   详见 [准备您的整合包](/wiki/end-user-guide/preparing-your-modpack) 以获取更多详情。
3. 从 [发布页面](https://github.com/CleanroomMC/Cleanroom/releases  ) 下载最新的 `cleanroom-x.x.x-installer.jar` 并运行它。
4. 在安装程序图形界面中，选择 **Install server**（安装服务器）并选择您的服务器目录。
   ::: info 注意 {id="note"}
   或者，您可以在 bat 或 sh 脚本文件中运行 `java -jar installerName.jar --installServer`。
   :::
5. 将 [Fugue](https://www.curseforge.com/minecraft/mc-mods/fugue) 添加到您的模组文件夹中<br>
   *(它不会在 Forge 环境中加载)*
6. 将 [Scalar Legacy](https://www.curseforge.com/minecraft/mc-mods/scalar-legacy) 添加到您的模组文件夹中<br>
   *(它不会在 Forge 环境中加载)*
7. *(可选)* 按照 [JVM 参数](/wiki/end-user-guide/args) 部分所述，将 JVM 参数添加到服务器的启动文件中。

## 注意事项

- 在 Windows 上，您可以通过更新 **环境变量**，或在启动 bat 文件中使用双引号指定现代 Java 可执行文件的完整路径来指向它，例如：  
  `"C:/Program Files/.../bin/java.exe"`
- 在 Linux 上，您可以使用 `SDKMAN!` 来管理您的 Java 版本。