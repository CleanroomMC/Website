---
title: MixinBooter
---

# MixinBooter

## 跨 1.8 - 1.12.2 运行 Mixin，不再是难事

- 当前 Mixin 版本：[CleanMix 0.2.9，由 CleanroomMC fork 而出，源分支为 SpongePowered/Fabric Mixin 的 0.8.7 分支](https://github.com/CleanroomMC/CleanMix)
- 当前 MixinExtra 版本：[0.5.4](https://github.com/LlamaLad7/MixinExtras)

## 开发者操作

- 添加 CleanroomMC 的仓库至 repositories 中，再将 MixinBooter 添加为依赖：

```groovy
repositories {
    maven {
        url 'https://maven.cleanroommc.com'
    }
}

dependencies {
    def mixin = 'zone.rong:mixinbooter:11.0'

    implementation(mixin) { transitive = false }
    annotationProcessor(mixin)

    // RetroFuturaGradle 专属配置，用于 refmap 生成：
    modUtils.enableMixins(mixin)
    // modUtils.enableMixins(mixin, 'mod_id.mixins.refmap.json') // 可选：指定 refmap 名称
}
```

- 选择 Mixin 配置注册方式。自 11.0 起，早期/晚期加载器已不再区分，因此 `IEarlyMixinLoader` / `ILateMixinLoader` 不再是推荐方式。

1. 使用 `MixinConfigs` 清单属性
  在 jar 的 manifest 中加入以空格分隔的 Mixin 配置文件名，MixinBooter 会直接读取并注册它们。

```groovy
jar {
    manifest {
        attributes(
            'MixinConfigs': 'mixins.mymod.json'
        )
    }
}
```

2. 使用 `MixinConnector` 清单属性
  需要指向一个实现了 `org.spongepowered.asm.mixin.connect.IMixinConnector` 的类。在 `connect()` 方法中调用 `Mixins.addConfiguration(...)` 完成注册。

```groovy
jar {
    manifest {
        attributes(
            'MixinConnector': 'com.example.mymod.MyMixinConnector'
        )
    }
}
```

```java
public class MyMixinConnector implements IMixinConnector {
    @Override
    public void connect() {
        // 可用 zone.rong.mixinbooter.service.ModDiscoverer.isModPresent(String modId) 检查模组是否已加载
        Mixins.addConfiguration("mixins.mymod.json");
    }
}
```

## 历程摘要

- 自 4.2，MixinBooter 的 API 有了改动，我们希望**任何**使用了 Mixin 的模组都将 MixinBooter 添加为依赖，哪怕这些模组的 Mixin 对象为原版/forge/库类。因为这可以避免因模组间混用不同版本 Mixin 而导致的崩溃问题（VanillaFix 就是个典型例子）。感谢[@embeddedt](https://github.com/embeddedt)在这一更改中所提出的建议！

- 自 5.0，MixinBooter 内置了由 [@LlamaLad7 编写的 MixinExtras](https://github.com/LlamaLad7/MixinExtras)，开发者可直接调用相关的内容。

- 自 8.0，MixinBooter 可跨版本运行于 1.8 - 1.12.2。一次构建，多版本通用！（TODO：支持 LiteLoader？）

- 自 8.4，MixinBooter 开始尝试与 [SpongeForge](https://github.com/SpongePowered/SpongeForge) 兼容。

- 自 9.2，MixinBooter 为 1.8.x 用户重新引入了旧版 `MixinLoader` 注解。

- 自 10.0，MixinBooter 跟进 Mixin 0.8.7。

- 自 11.0，MixinBooter 基于 CleanMix 构建，统一了后端：
  - 构建脚本中不再需要非 MixinBooter 自身的 `annotationProcessor` 声明；
  - 新增配置文件 `config/mixinbooter.cfg`，用于 mixin 配置的黑名单管理与调试选项；
  - 新增日志文件 `logs/mixinbooter.log`，支持精确追踪类加载过程；
  - 支持经典的 `MixinConfigs` 与 `MixinConnector` manifest 条目；
  - 改进了模组发现，从而能提供准确的 mixin 来源（而非清一色的 `unknown-owner`）与 `isModLoaded` 检查；
  - 抑制了 Forge 的损坏 ZIP 警告；
  - 淘汰了 mixin “phase” 概念，不再需要分出早期/晚期 mixin 并分别处理。

## 11.0 之前的用法

在 11.0 之前，若你想对原版、Forge 或其他在类加载器（ClassLoader）极早期就已被加载的对象（例如 Guava）进行 Mixin，请参考相关的早期/晚期加载说明；自 11.0 起，这一分层已不再需要，相关接口已被弃用。

- 若你想 Mixin 那些原版、forge或是其他的一些在类加载器（classloader）运行极为早期便已传入的对象（例如 Guava），你可以查看 `IEarlyMixinLoader` 的相关内容。
- 若你想 Mixin 模组对象，你可以查看 `ILateMixinLoader` 的相关内容。
- `@MixinLoader` 注解自 4.2 开始废弃不用。相关功能已由 `ILateMixinLoader` 接手。

::: info 关于日志可读性
MixinBooter 虽致力于令崩溃以及日志相关的信息输出尽量可读，降低开发者以及用户的阅读成本，但由于 Mixin 以及字节码内部错综复杂，目前相关特性仍有较大的进步空间。若是你在使用过程中有相关的反馈以及意见建议，请将其发送到[MixinBooter 的问题追踪器上](https://github.com/CleanroomMC/MixinBooter/issues)。
:::
