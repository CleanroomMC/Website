---
title: Porting Your Mod to Cleanroom
---

# Overview

1. Download repository zip of our [template](https://github.com/CleanroomMC/CleanroomModTemplate).
2. Update your project's Gradle script & configs with those from the templates. If you can't figure Gradle out, ask AI.
3. Update your template class path (check [blossom](https://github.com/KyoriPowered/blossom) readme).
4. Check following notable changes compare with Forge.

# Things that may need to be fixed

- Don't try to add URL to AppClassLoader by casting it, just call `Launch.classLoader.addURL();`
- Many `javax` classes are now moved to `jakarta`. If you can't find an old class, try to write it another way first before contact us.
- Calling `new ScriptEngineManager(null)` may crash the game, please call it with `Launch.classLoader`
- Java 8 consider some invalid UUIDs as valid, just regenerate them.
- `sun.reflect.Reflection` was gone, use `Thread.currentThread().getStackTrace()` to get caller.
- ASM visitors should use `Opcodes.ASM9` now.
- Setting or getting a final field with reflection is impossible now, use AT or `ReflectionHackery`.
- We forked an improved Mixin, check [template](https://github.com/CleanroomMC/CleanroomModTemplate) for how to use it. Old ways still works though.
- DO NOT call `org.lwjglx` classes, they are meant to be used in runtime.
- Guava changed some methods, you may need to add an extra `Runnable::run` as parameter
- Don't set your Fastutil set's load factor to 1, or it will crash

# Port a 2.11 Scala mods to 3

1. Use scala branch of the template.
2. Check [this page](https://docs.scala-lang.org/overviews/jdk-compatibility/overview.html) and set your Scala version to latest 2.12.x
3. It should compile. Now follow the compiler warnings to add explicit converts.
4. Switch to latest 2.13.x, also make sure it compiles.
5. Now you can switch to latest 3.x and use rewrite flags to update whole code base. Check [this](https://docs.scala-lang.org/scala3/guides/migration/tooling-migration-mode.html#) and [this](https://github.com/kappa-maintainer/MrTJPCore/blob/1.12.x/build.gradle#L161) for example.

### Port Kotlin mods

Just use new [Forgelin](https://github.com/ChAoSUnItY/Forgelin-Continuous) instead of the old one. Kotlin is more friendly in cross-version source code compatibility.