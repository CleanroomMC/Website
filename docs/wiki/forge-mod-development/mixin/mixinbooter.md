---
title: MixinBooter
---

# MixinBooter

## Allows any mixins that work on mods to work effortlessly on 1.8 - 1.12.2

- Current Mixin Version: [CleanMix 0.2.9, forked by CleanroomMC, derived from SpongePowered/Fabric Mixin 0.8.7](https://github.com/CleanroomMC/CleanMix)

- Current MixinExtra Version: [0.5.4](https://github.com/LlamaLad7/MixinExtras)

## For Developers

- Add CleanroomMC's repository and depend on MixinBooter's maven entry:

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

    // RetroFuturaGradle-specific setup for refmap generation:
    modUtils.enableMixins(mixin)
    // modUtils.enableMixins(mixin, 'mod_id.mixins.refmap.json') // Optional: specify a custom refmap name
}
```

- Choose how to register your mixin configurations. Starting from 11.0, the early/late loader distinction is no longer used, so `IEarlyMixinLoader` / `ILateMixinLoader` are no longer the recommended approach.

1. Use the `MixinConfigs` manifest attribute
   Add a space-separated list of mixin configuration files to your jar manifest; MixinBooter will read and register them directly.

```groovy
jar {
    manifest {
        attributes(
            'MixinConfigs': 'mixins.mymod.json'
        )
    }
}
```

2. Use the `MixinConnector` manifest attribute
   Point it to a class implementing `org.spongepowered.asm.mixin.connect.IMixinConnector`. In its `connect()` method, call `Mixins.addConfiguration(...)` to register your configs.

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
        // You can check whether the mod is loaded with: zone.rong.mixinbooter.service.ModDiscoverer.isModPresent(String modId)
        Mixins.addConfiguration("mixins.mymod.json");
    }
}
```

## Pseudo-Changelog

- As of 4.2, MixinBooter's API has changed and **_all mods_** that uses mixins are encouraged to depend on MixinBooter, even those that mixin into vanilla/forge/library classes. To avoid mixin version mismatches with mods crashing trying to implement modded mixins (looking at you VanillaFix). Thanks to [@embeddedt](https://github.com/embeddedt) recommending and helping me introduce this change!

- As of 5.0, [MixinExtras by @LlamaLad7](https://github.com/LlamaLad7/MixinExtras) is shaded. Available for developers to use.

- As of 8.0, MixinBooter will now work from 1.8 - 1.12.2. One single build works with all these versions! (TODO: LiteLoader support?)

- As of 8.4, MixinBooter actively attempts to be compatible with [SpongeForge](https://github.com/SpongePowered/SpongeForge)

- As of 9.2, MixinBooter reinstates the older `@MixinLoader` annotation for 1.8.x usages.

- As of 10.0, MixinBooter follows Mixin 0.8.7.

- As of 11.0, MixinBooter is built on top of CleanMix, as an effort to create an unified backend with Cleanroom:
  - No extra `annotationProcessor` declarations are needed in the build script beyond MixinBooter itself
  - Added `config/mixinbooter.cfg` for mixin config blacklist management and debug options
  - Added `logs/mixinbooter.log`, with ability to trace class-loading for precise debugging
  - Allows the classic `MixinConfigs` and `MixinConnector` manifest attribute entries to be fully involved in the ecosystem
  - Improved mod discovery so mixin ownership is reported more accurately (instead of everything being `unknown-owner`), and better `isModLoaded` checks
  - Suppresses Forge's _corrupt ZIP_ warnings;
  - Phased out mixin "phases", so you no longer need to distinguish early/late mixins and handle them separately.

## Before 11.0

Before 11.0, if you wanted to mixin vanilla, Forge, or other classes that are loaded very early by the class loader (for example Guava), refer to the early loader guidance. Starting from 11.0, this is no longer necessary and the related interfaces are deprecated.

- Consult `IEarlyMixinLoader` for mixins that affects vanilla, forge, or any classes that is passed to the classloader extremely early (e.g. Guava).
- Consult `ILateMixinLoader` for mixins that affects mods.
- `@MixinLoader` annotation is, as of 4.2, deprecated. The functionality is akin to `ILateMixinLoader`.

::: info About log readability
Because of Mixin and Bytecode intricacies, MixinBooter tries to allow both the developers and the users to understand crashes and logs better, but it is still being improved on. Please direct any feedback [here](https://github.com/CleanroomMC/MixinBooter/issues)!
:::
