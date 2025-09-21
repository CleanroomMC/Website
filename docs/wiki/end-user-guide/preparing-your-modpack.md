---
title: Preparing your modpack
---

# Preparing Your Modpack
## Overview
Cleanroom Loader is compatible with the vast majority of Forge mods and will usually run them without issue.<br/>  
However, some mods remain **deprecated, redundant, or outright incompatible**—either because they’ve been superseded by better alternatives or because they introduce critical problems.<br/>
To prepare your modpack for Cleanroom Loader, review the lists below and make replacements where necessary.<br/>

## Incompatible / Problematic Mods

| Mod                             | Reason                                                      | Action                                                                                                                                                                                                      |
|---------------------------------|-------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **AdvancedShader**              | Binary patching, incompatible.                              | :no_entry_sign: Remove                                                                                                                                                                                      |
| **Essential.gg**                | Patched but causes many issues.                             | :white_check_mark: Use **[Lan UPNP](https://www.curseforge.com/minecraft/mc-mods/lan-upnp)** (Non-Proxy option) or **[E4MC Retro](https://www.curseforge.com/minecraft/mc-mods/e4mc-retro)** (Proxy Option) |
| **FoamFix**                     | Outdated and prone to cause issues in Cleanroom Environment | :white_check_mark: Use **[VintageFix](https://www.curseforge.com/minecraft/mc-mods/vintagefix)**                                                                                                            |
| **Forgelin**                    | Outdated and blacklisted                                    | :white_check_mark: Use **[Forgelin-Continuous](https://www.curseforge.com/minecraft/mc-mods/forgelin-continuous)**                                                                                          |
| **Gnetum**                      | Prone to cause issues                                       | :white_check_mark: Use **[StellarCore](https://www.curseforge.com/minecraft/mc-mods/stellarcore)**                                                                                                          |
| **LibrarianLib**                | Will not work correctly with Forgelin-Continuous            | :white_check_mark: Use **[LibrarianLib-Continuous](https://www.curseforge.com/minecraft/mc-mods/librarianlib-continuous)** (May break Wizardry Animations)                                                  |
| **Mouse Tweaks**                | Outdated and prone to cause issues                          | :white_check_mark: Use **[Mouse Tweaks Unofficial](https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks-unofficial)**                                                                                  |
| **Phosphor**                    | Incompatible                                                | :white_check_mark: Use **[Alfheim Lighting Engine](https://www.curseforge.com/minecraft/mc-mods/alfheim-lighting-engine)** / **[Hesperus](https://www.curseforge.com/minecraft/mc-mods/hesperus)**          |
| **Polyfrost series**            | Awaiting official fixes.                                    | —                                                                                                                                                                                                           |
| **Raw Input**                   | Already included in Cleanroom.                              | :no_entry_sign: Remove                                                                                                                                                                                      |
| **SerializationIsBad**          | Redundant. Modern Java versions fix the issue this solves   | :no_entry_sign: Remove                                                                                                                                                                                      |
| **TexFix**                      | Merged and rewritten in CensoredASM                         | :white_check_mark: Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                                                                               |
| **VanillaFix**                  | Merged and improved in CensoredASM                          | :white_check_mark: Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                                                                               |
| **Secret Rooms**                | Has an issue with updater                                   | :no_entry_sign: Disable the update checker in config file                                                                                                                                                   |

::: info Note {id="note"}
If your modpack uses **Bansoukou**, make sure to **run the instance at least once** before installing cleanroom loader so its patches are applied.
:::
## Performance / Memory optimisation mods
The most important optimisation mods for **Minecraft 1.12.2** can be summed up to the following list:
- **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)** : Huge optimizations that are targeted at Minecraft 1.12.2<br/>
- **[VintageFix](https://www.curseforge.com/minecraft/mc-mods/vintagefix)** : Load time and RAM use improvements for Minecraft 1.12.2<br/>
- **[Universal Tweaks](https://www.curseforge.com/minecraft/mc-mods/universal-tweaks)** : A community project to consolidate various bugfixes and tweaks into a single solution for Minecraft 1.12.2<br/>
- **[Stellar Core](https://www.curseforge.com/minecraft/mc-mods/stellarcore)** : Provides extensive bug fixes, performance improvements, and additional features across a wide range of mods<br/>
::: info Note {id="note"}
Universal Tweaks supersedes a lot of mods which will not be mentioned here. This can be observed via an in-game warning or by looking at the incompatible mods list [**Here**](https://legacy.curseforge.com/minecraft/mc-mods/universal-tweaks/files/6953147). 
:::
## Render Optimisation mods

The most prominent Render Optimisation mods for **Minecraft 1.12.2** are:

- **[Optifine](https://optifine.net/adloadx?f=preview_OptiFine_1.12.2_HD_U_G6_pre1.jar&x=c2f6)**<br/>
- **[Celeritas](https://github.com/kappa-maintainer/Celeritas-auto-build/releases)**<br/>
- **[Nothirium](https://www.curseforge.com/minecraft/mc-mods/nothirium)** (Also requires **[Naughthirium](https://www.curseforge.com/minecraft/mc-mods/naughthirium)**)<br/>

::: info Note {id="note"}
**_Celeritas_** and **_Nothirium_** do decrease ram usage and footprint, while **_Optifine_** may increase ram usage and will lengthen load times. 
:::
### Stress Test Results
In a simulated heavy-base scenario, we benchmarked the aforementioned mods against each other, and therefore rank their performance according to which gpu is used: <br/>
- **NVIDIA GPUs** → `Nothirium > Optifine > Celeritas`
- **AMD GPUs** → `Celeritas > Optifine > Nothirium`
- **Intel Integrated Graphics** → `Celeritas | Optifine` <br/> <br/>
:warning: Performance varies depending on your hardware and drivers. Test all three mods to see which provides the best results for your system.<br/>

## Superseded mods 
::: info Note {id="note"}
These mods are not necessarily incompatible with Cleanroom loader, but have been superseded by newer forks or do not present any benefit, so we recommend you use to follow the actions we recommend
:::

| Mod                                            | Reason                                                                                                 | Recommended Action                                                                                                                                 |
|------------------------------------------------|--------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **BetterFPS**                                  | Breaks core functionality.                                                                             | :no_entry_sign: Remove                                                                                                                             |
| **Betterer Biome Blender**                     | Minor fixes for an already useless mod.                                                                | :no_entry_sign: Remove                                                                                                                             |
| **Clumps**                                     | Outdated                                                                                               | :white_check_mark: Use **[Fixeroo](https://www.curseforge.com/minecraft/mc-mods/xp-orb-clump)**                                                    |
| **JustEnoughIDs (JEID) / NotEnoughIDs (NEID)** | Outdated                                                                                               | :white_check_mark: Use **[RoughlyEnoughIDs (REID)](https://www.curseforge.com/minecraft/mc-mods/reid/files/6761278)**                              |
| **JustEnoughItems (JEI)**                      | Outdated                                                                                               | :white_check_mark: Use **[HadEnoughItems (HEI)](https://www.curseforge.com/minecraft/mc-mods/had-enough-items)**                                   |
| **Modular Machinery**                          | Outdated                                                                                               | :white_check_mark: Use **[Modular Machinery: Community Edition](https://www.curseforge.com/minecraft/mc-mods/modularmachinery-community-edition)** |
| **FastFurnace**                                | Merged and Rewritten in CensoredASM                                                                    | :white_check_mark: Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                      |
| **FermiumASM**                                 | CensoredASM fork, disables fixes with Dynamic Trees, depends on FermiumBooter.                         | :white_check_mark: Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                      |
| **FermiumBooter**                              | Outdated fork of MixinBooter with no meaningful changes.                                               | :white_check_mark: Use **[MixinBooter](https://www.curseforge.com/minecraft/mc-mods/mixin-booter)**                                                |
| **Noisethreader**                              | Known to cause crashes and mismatched registries.                                                      | :no_entry_sign: Remove                                                                                                                             |
| **Multithreaded Noise**                        | Known to cause crashes.                                                                                | :no_entry_sign: Remove                                                                                                                             |
| **NormalASM**                                  | Outdated fork of CensoredASM with no meaningful changes.                                               | :white_check_mark: Use **[CensoredASM](https://www.curseforge.com/minecraft/mc-mods/lolasm)**                                                      |
| **Performant**                                 | Empty jar, does nothing.                                                                               | :no_entry_sign: Remove                                                                                                                             |
| **Redirectionor**                              | Provides no real performance benefit.                                                                  | :no_entry_sign: Remove                                                                                                                             |
| **Relictium**                                  | See [Performance Mods](#performance-mods).                                                             | —                                                                                                                                                  |
| **SmoothFont**                                 | Breaks some mods.                                                                                      | :no_entry_sign: Remove                                                                                                                             |
| **Spark / Spark Unforged**                     | **Spark**: Outdated <br/> **Spark Unforged**: Backport of modern Spark with half the features removed. | :white_check_mark: Use **[Flare](https://www.curseforge.com/minecraft/mc-mods/flare)**                                                             |
| **Tinkers Construct**                          | Outdated                                                                                               | :white_check_mark: Use **[Tinker's Antique](https://www.curseforge.com/minecraft/mc-mods/tinkers-antique)**                                        |
| **OpenBlocks**                                 | Outdated                                                                                               | :white_check_mark: Use **[OpenBlocks Reopened](https://www.curseforge.com/minecraft/mc-mods/openblocks-reopened)**                                 |
| **Mod Director**                               | Outdated                                                                                               | :white_check_mark: Use **[FileDirector](https://www.curseforge.com/minecraft/mc-mods/filedirector)**                                               |
| **Embers/Embers Rekindled**                    | Outdated, May cause issue                                                                              | :white_check_mark: Use **[Embers Unofficial Extended Life](https://www.curseforge.com/minecraft/mc-mods/embers-extended-life)**                    |
| **Thaumic Wonders**                            | Outdated                                                                                               | :white_check_mark: Use **[Thaumic Wonders Unofficial](https://www.curseforge.com/minecraft/mc-mods/thaumic-wonders-unofficial)**                   |
| **ThaumTweaks**                                | Outdated and problematic mod, will cause incompats with other mods                                     | :white_check_mark: Use **[Thaumic Tweaker](https://www.curseforge.com/minecraft/mc-mods/thaumic-tweaker)**                                         |
| **Tough Expansion**                            | has an RCE exploit                                                                                     | :white_check_mark: Use **[Survival Tools](https://www.curseforge.com/minecraft/mc-mods/survival-tools)**                                           |
| **Davinci Vessels**                            | Outdated                                                                                               | :white_check_mark: Use **[Valkyrien Skies](https://www.curseforge.com/minecraft/mc-mods/valkyrien-skies)**                                         |
