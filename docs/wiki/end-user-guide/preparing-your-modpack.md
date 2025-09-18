---
title: Preparing your modpack
---

# Preparing Your Modpack

## Overview

Cleanroom Loader is compatible with the vast majority of Forge mods and will usually run them without issue.  
However, some mods remain **deprecated, redundant, or outright incompatible**—either because they’ve been superseded by better alternatives or because they introduce critical problems.

To prepare your modpack for Cleanroom Loader, review the lists below and make replacements where necessary.

## Deprecated / Incompatible Mods

| Mod                             | Reason                                                      | Action                                                                                                                                                                                    |
|---------------------------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **AdvancedShader**              | Binary patching, incompatible.                              | 🚫 Remove                                                                                                                                                                                 |
| **Essential.gg**                | Patched but causes many issues.                             | ✅ Use **[Lan UPNP](https://www.curseforge.com/minecraft/mc-mods/lan-upnp)** (Non-Proxy option)or **[E4MC Retro](https://www.curseforge.com/minecraft/mc-mods/e4mc-retro)** (Proxy Option) |
| **FoamFix**                     | Outdated and prone to cause issues in Cleanroom Environment | ✅ Use **[VintageFix](https://www.curseforge.com/minecraft/mc-mods/vintagefix)**                                                                                                           |
| **Forgelin**                    | Outdated and blacklisted                                    | ✅ Use **[Forgelin-Continuous](https://www.curseforge.com/minecraft/mc-mods/forgelin-continuous)**                                                                                         |
| **Gnetum**                      | Prone to cause issues                                       | ✅ Use **[StellarCore](https://www.curseforge.com/minecraft/mc-mods/stellarcore)**                                                                                                         |
| **JustEnoughIDs (JEID) / NEID** | Incompatible                                                | ✅ Use **[RoughlyEnoughIDs (REID)](https://www.curseforge.com/minecraft/mc-mods/reid/files/6761278)**                                                                                      |
| **JustEnoughItems (JEI)**       | Incompatible                                                | ✅ Use **[HadEnoughItems (HEI)](https://www.curseforge.com/minecraft/mc-mods/had-enough-items)**                                                                                           |
| **LibrarianLib**                | *(May break Wizardry animations.)*                          | ✅ Use **[LibrarianLib-Continuous](https://www.curseforge.com/minecraft/mc-mods/librarianlib-continuous)**                                                                                 |
| **Modular Machinery**           | Incompatible                                                | ✅ Use **[Modular Machinery: Community Edition](https://www.curseforge.com/minecraft/mc-mods/modularmachinery-community-edition)**                                                         |
| **Mouse Tweaks**                | Outdated and prone to cause issues                          | ✅ Use **[Mouse Tweaks Unofficial](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks-unofficial)**                                                                                 |
| **Phosphor**                    | Incompatible                                                | ✅ Use **[Alfheim Lighting Engine](https://www.curseforge.com/minecraft/mc-mods/alfheim-lighting-engine)** / **[Hesperus](https://www.curseforge.com/minecraft/mc-mods/hesperus)**         |
| **Polyfrost series**            | Awaiting official fixes.                                    | —                                                                                                                                                                                         |
| **Raw Input**                   | Already included in Cleanroom.                              | 🚫 Remove                                                                                                                                                                                 |
| **SerializationIsBad**          | Redundant. Modern Java versions fix the issue this solves   | 🚫 Remove                                                                                                                                                                                 |
| **TexFix**                      | Merged and rewritten in CensoredASM                         | ✅ Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                                                                              |
| **VanillaFix**                  | Merged and improved in CensoredASM                          | ✅ Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                                                                              |

::: info Note {id="note"}
If your modpack uses **Bansoukou**, make sure to **run the instance at least once** before installing cleanroom loader so its patches are applied.
:::
## Performance / Memory optimisation mods
The most important optimisation mods for **Minecraft 1.12.2** can be summed up to the following list:
- **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)** : Huge optimizations that are targeted at Minecraft 1.12.2
- **[VintageFix](https://www.curseforge.com/minecraft/mc-mods/vintagefix)** : Load time and RAM use improvements for Minecraft 1.12.2
- **[Universal Tweaks](https://www.curseforge.com/minecraft/mc-mods/universal-tweaks)** : A community project to consolidate various bugfixes and tweaks into a single solution for Minecraft 1.12.2
- **[Stellar Core](https://www.curseforge.com/minecraft/mc-mods/stellarcore)** : Provides extensive bug fixes, performance improvements, and additional features across a wide range of mods
## Render Optimisation mods

The most prominent Render Optimisation mods for **Minecraft 1.12.2** are:

- **[Optifine](https://optifine.net/adloadx?f=preview_OptiFine_1.12.2_HD_U_G6_pre1.jar&x=c2f6)**
- **[Celeritas](https://github.com/kappa-maintainer/Celeritas-auto-build/releases)**
- **[Nothirium](https://www.curseforge.com/minecraft/mc-mods/nothirium)** (to use with **[Naughthirium](https://www.curseforge.com/minecraft/mc-mods/naughthirium)**)

::: info Note {id="note"}
**_Celeritas_** and **_Nothirium_** do decrease ram usage and footprint, While **_Optifine_** may increase ram usage and will lengthen load times. 
:::
### Stress Test Results
In a simulated heavy-base scenario, we benchmarked the aforementioned mods against each other, and therefore rank their performance according to which gpu is used: <br/>
- **NVIDIA GPUs** → `Nothirium > Optifine > Celeritas`
- **AMD GPUs** → `Celeritas > Optifine > Nothirium`
- **Intel Integrated Graphics** → `Celeritas | Optifine` <br/> <br/>
:warning: Performance varies depending on your hardware. Test all three mods to see which provides the best results for your system.

## Superceded mods 
::: info Note {id="note"}
These mods are not necessarily incompatible with Cleanroom loader, but have been superceded by newer forks or do not present any benefit, so we reccomend you use to follow the actions we reccomend
:::

| Mod                            | Reason                                                                                                 | Action                                                                                                                               |
|--------------------------------|--------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| **BetterFPS**                  | Breaks core functionality.                                                                             | 🚫 Remove                                                                                                                            |
| **Betterer Biome Blender**     | Minor fixes for an already useless mod.                                                                | 🚫 Remove                                                                                                                            |
| **Clumps**                     | Outdated                                                                                               | ✅ Use **Fixeroo**                                                                                                                    |
| **FastFurnace**                | Merged and Rewritten in CensoredASM                                                                    | ✅ Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                         |
| **FermiumASM**                 | CensoredASM fork, disables fixes with Dynamic Trees, depends on FermiumBooter.                         | ✅ Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                         |
| **FermiumBooter**              | Outdated fork of MixinBooter with no meaningful changes.                                               | ✅ Use **[MixinBooter](https://www.curseforge.com/minecraft/mc-mods/mixin-booter)**                                                   |
| **Noisethreader**              | Known to cause crashes.                                                                                | 🚫 Remove                                                                                                                            |
| **Normalasm**                  | Outdated fork of CensoredASM with no meaningful changes.                                               | ✅ Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                         |
| **Performant**                 | Empty jar, does nothing.                                                                               | 🚫 Remove                                                                                                                            |
| **redirectionor**              | Provides no real performance benefit.                                                                  | 🚫 Remove                                                                                                                            |
| **Relictium**                  | See [Performance Mods](#performance-mods).                                                             | —                                                                                                                                    |
| **SmoothFont**                 | Breaks some mods.                                                                                      | 🚫 Remove                                                                                                                            |
| **Spark / Spark Unforged**     | **Spark**: Outdated <br/> **Spark Unforged**: Backport of modern Spark with half the features removed. | ✅ Use **[Flare](https://www.curseforge.com/minecraft/mc-mods/flare)**                                                                |
| **Tinkers Construct**          | Outdated                                                                                               | ✅ Use **[Tinker's Antique](https://www.curseforge.com/minecraft/mc-mods/tinkers-antique)**                                           |
| **OpenBlocks**                 | Outdated                                                                                               | ✅ Use **[OpenBlocks Reopened](https://www.curseforge.com/minecraft/mc-mods/openblocks-reopened)**                                    |
| **Mutant Creatures**           | Outdated                                                                                               | ✅ Use **[Mutant Creatures Legacy](https://www.curseforge.com/minecraft/mc-mods/mutant-creatures-legacy)**                            |
| **Natura**                     | Outdated                                                                                               | ✅ Use **[Natura Legacy](https://www.curseforge.com/minecraft/mc-mods/natura-legacy)**                                                |
| **MrCrayfish's Furniture Mod** | Outdated                                                                                               | ✅ Use **[MrCrayfish's Furniture Mod (Legacy 1.12.2)](https://www.curseforge.com/minecraft/mc-mods/mrcrayfish-furniture-mod-legacy)** |
| **Mod Director**               | Outdated                                                                                               | ✅ Use **[FileDirector](https://www.curseforge.com/minecraft/mc-mods/filedirector)**                                                  |
| **Mo' Creatures**              | Outdated                                                                                               | ✅ Use **[Mo' Creatures: Extended](https://www.curseforge.com/minecraft/mc-mods/mo-creatures-extended)**                              |
| **Embers/Embers Rekindled**    | Outdated                                                                                               | ✅ Use **[Embers Unofficial Extended Life](https://www.curseforge.com/minecraft/mc-mods/embers-extended-life)**                       |
| **Soot**                       | Outdated                                                                                               | ✅ Use **[Soot Unofficial Extended Life](https://www.curseforge.com/minecraft/mc-mods/soot-extended-life)**                           |
| **Aetherworks**                | Outdated                                                                                               | ✅ Use **[Aetherworks Unofficial Extended Life](https://www.curseforge.com/minecraft/mc-mods/aetherworks-extended-life)**             |
| **Thaumic Wonders**            | Outdated                                                                                               | ✅ Use **[Thaumic Wonders Unofficial](https://www.curseforge.com/minecraft/mc-mods/thaumic-wonders-unofficial)**                      |
| **Nature's Aura**              | Outdated                                                                                               | ✅ Use **[Nature's Aura Simplified](https://www.curseforge.com/minecraft/mc-mods/natures-aura-simplified)**                           |
