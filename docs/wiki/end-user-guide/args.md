---
title: JVM Arguments
---

# JVM Arguments

## Overview

JVM arguments were once crucial for performance optimization in Minecraft when running on older Java versions (such as Java 8).  
With modern JVMs (Java 17+), most of these optimizations are no longer necessary, as performance tuning is handled well out of the box.  
That said, a few arguments can still provide noticeable improvements.
Keep in mind that JVM tuning is **hardware-dependent**: an argument that helps on one system may not yield the same results on another.

## Useful Arguments

- `-XX:+UnlockExperimentalVMOptions -XX:+UseCompactObjectHeaders` <br/> *Introduced in Java 24.* <br/> Reduces the size of object headers in the JVM from 96–128 bits down to 64 bits, lowering heap usage and potentially improving performance. java 25 will make this a product feature ([See JEP 450](https://openjdk.org/jeps/450)) ([See JEP 519](https://openjdk.org/jeps/519)) 

- `-XX:+UseZGC` <br/> Enables the **Z Garbage Collector (ZGC)**, which provides very low latency garbage collection and can virtually eliminate GC pauses. 

## Notes
- The latest tested Java version for Cleanroom Loader is **Java 24**, it is recommended to use this version.
- On older CPUs, **ZGC** can be demanding: it increases RAM usage (since ZGC does not use compressed object pointers) and may reduce performance. <br/> <br/>  Test your game both **with** and **without ZGC**, and compare results. You can revert to Java 24’s default collector (**G1GC**) by removing `-XX:+UseZGC`.
- If using Java 21 or 22, the use of `-XX:+ZGenerational` is desired when using ZGC. (It is enabled by default in Java 23+)