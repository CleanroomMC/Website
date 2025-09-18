---
title: Client
---

# Client

## How to Install Cleanroom Loader on the Client

### About Launchers

The recommended way to run Cleanroom Loader is with a **MultiMC-based launcher**, such as **[Prism Launcher](https://prismlauncher.org/download/windows/)** or **[PolyMC](https://polymc.org/download/)**.  
These are officially supported because other launchers may not properly handle the removal of certain vanilla libraries.

### Manual Install

::: info Note {id="note"}
Manual installation of Cleanroom Loader is only supported on MultiMC-based launchers.
:::
Steps:
1. Add [Fugue](https://www.curseforge.com/minecraft/mc-mods/fugue) to your mod folder  
   *(it will not load in a Forge environment)*
2. Add [Scalar Legacy](https://www.curseforge.com/minecraft/mc-mods/scalar-legacy) to your mod folder  
   *(it will not load in a Forge environment)*
3. ⚠️ **Warning:** Make sure your instance does not include problematic or deprecated mods.  
   See [Preparing your modpack](/wiki/End-user-Guide/preparing-your-modpack) for more details.
4. Download the `Cleanroom-MMC-instance-` archive from the [Releases page](https://github.com/CleanroomMC/Cleanroom/releases).
5. Import it into your launcher.  
   *(Alternatively, unzip the patches and JSON files into an existing 1.12 instance.)*
6. In your launcher, select the `javaw.exe` path of your **Java 21+ installation**.
7. *(Optional)* Add JVM arguments as described in the [JVM Arguments](/wiki/End-user-Guide/args) section.

### Relauncher

**Relauncher** is a <ins>**Client-side**</ins> mod that allows you to start a Forge 1.12.2 instance and seamlessly switch to Cleanroom Loader.  
This is particularly useful for **modpack authors** who want to distribute Forge-compatible packs that can also run on Cleanroom.  
It is supported in both MultiMC-based launchers and standard launchers.

Steps:
1. Add [Fugue](https://www.curseforge.com/minecraft/mc-mods/fugue) to your modlist  
   *(it will not load in a Forge environment)*
2. Add [Scalar Legacy](https://www.curseforge.com/minecraft/mc-mods/scalar-legacy) to your modlist  
   *(it will not load in a Forge environment)*
3. ⚠️ **Warning:** Ensure your instance does not contain problematic or deprecated mods.  
   See [Preparing your modpack](/wiki/End-user-Guide/preparing-your-modpack) for details.
4. Add the [Relauncher](https://www.curseforge.com/minecraft/mc-mods/cleanroom-relauncher) mod to your modlist and launch the game with **Java 8**.
5. In the Relauncher GUI, select the `javaw.exe` path of your **Java 21+ installation**.
6. *(Optional)* Add JVM arguments from the [JVM Arguments](/wiki/End-user-Guide/args) section.
7. Click **Relaunch**.

## Notes

- Relauncher’s configuration file can be found at `config/relauncher.cfg`. <br/> Deleting this file will prompt the setup GUI on the next launch.
- ⚠️ **Warning:** Not all launchers are compatible with Cleanroom Loader. <br/> Supported launchers:
    - ✅ MultiMC-based launchers (**Prism Launcher, PolyMC, etc.**)
    - ⚠️ CurseForge Launcher *(limited support)*
    - ⚠️ Official Minecraft Launcher *(limited support)*
