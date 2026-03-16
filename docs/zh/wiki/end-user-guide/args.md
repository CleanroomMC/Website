---
title: JVM Arguments
---

# JVM 参数

## 概述

在旧版 Java（如 Java 8）上运行 Minecraft 时，JVM 参数对于性能优化至关重要。<br>
而在现代 JVM（Java 17+）中，由于性能调优已在开箱即用的情况下得到良好处理，大多数此类优化已不再必要。<br>
话虽如此，仍有少数参数能带来显著的性能提升。<br>
请记住，JVM 调优是**依赖于硬件的**：在一个系统上有效的参数，在另一个系统上可能不会产生相同的结果。<br>

## 关于发行版

GraalVM 已停止维护，转而推荐使用 OpenJDK。我们建议使用 [Zulu](https://www.azul.com/downloads/  ) 或 [Temurin](https://adoptium.net/temurin/releases?version=25&mode=filter&os=any&arch=any  )。<br>

## 实用参数

::: info 注意 {id="note"}
请确保 `-Xms` 和 `-Xmx` 的值相同。这可以防止 JVM 动态调整堆大小，并有助于避免内存溢出（OOM）崩溃。（如果您使用的是启动器，请确保“最大内存”与“最小内存”设置相等）<br>
:::

- `-XX:+UseCompactObjectHeaders` <br> 将 JVM 中的对象头大小从 96–128 位减少到 64 位，从而降低堆内存使用量并可能提升性能。_Java 25_ 已将其作为正式功能引入 ([参见 JEP 450](https://openjdk.org/jeps/450  )) ([参见 JEP 519](https://openjdk.org/jeps/519  )) 

- `-XX:+UseZGC` <br> 启用 **ZGC**，它提供极低延迟的垃圾回收，几乎可以消除 GC 停顿。

## 注意事项

- Cleanroom Loader 最新测试通过的 Java 版本是 **Java 25**，建议使用此版本，并始终优先选择 LTS（长期支持）版本。
- 在较旧的 CPU 上，**ZGC** 可能会消耗较多资源：它会增加 RAM 使用量（因为 ZGC 不使用压缩对象指针），并可能降低性能。<br> <br> 请分别在**启用**和**禁用 ZGC** 的情况下测试您的游戏，并对比结果。您可以通过移除 `-XX:+UseZGC` 参数回退到 Java 25 的默认回收器 (**G1GC**)。
- 使用 ZGC 时，无需手动添加 `-XX:+ZGenerational` 参数。（它在 Java 25 中默认启用）
- 只有 **ZGC** 才能正确处理大堆内存。如果使用 **G1GC**，请确保设置合理的堆大小（不应超过 11-12GB 内存）。