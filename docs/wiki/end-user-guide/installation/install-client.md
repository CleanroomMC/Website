---
title: Client
---

# Client

## How to Install Cleanroom Loader on the Client

::: warning {id="warning"}
macOS is not well-supported by Cleanroom, and may or may not work for you
:::

### About Launchers

The recommended way to run Cleanroom Loader is with a **MultiMC-based launcher**, such as **[Prism Launcher](https://prismlauncher.org/download/windows/)** or **[PolyMC](https://polymc.org/download/)**.<br/>  
These are officially supported because other launchers may not properly handle the removal of certain vanilla libraries.<br/>

### Manual Install

::: info Note {id="note"}
Importing Cleanroom Loader instance is only supported on MultiMC-based launchers. For other launchers, use the installer jar.
:::
Steps:
1. Add [Fugue](https://www.curseforge.com/minecraft/mc-mods/fugue) to your mod folder<br/>
   *(it will not load in a Forge environment)*<br/>
2. Add [Scalar Legacy](https://www.curseforge.com/minecraft/mc-mods/scalar-legacy) to your mod folder<br/>
   *(it will not load in a Forge environment)*<br/>
3. :warning: **Warning:** Make sure your instance does not include problematic or deprecated mods.<br/>
   See [Preparing your modpack](/wiki/end-user-guide/preparing-your-modpack) for more details.<br/>
4. Download the `Cleanroom-MMC-instance-` archive from the [Releases page](https://github.com/CleanroomMC/Cleanroom/releases).<br/>
5. Import it into your launcher.<br/>
   *(Alternatively, unzip the patches and JSON files into an existing 1.12 instance.)*<br/>
6. In your launcher, select the `javaw.exe` path of your **Java 25 installation**. (`javaw.exe` will not produce any command-line output and it the one that should be used in normal cases, while `java.exe` will produce a command-line output)<br/>
7. *(Optional)* Add JVM arguments as described in the [JVM Arguments](/wiki/end-user-guide/args) section.<br/>

### Cleanroom Relauncher

**Cleanroom Relauncher** is a <ins>**Client-side**</ins> mod that allows you to start a Forge 1.12.2 instance and seamlessly switch to Cleanroom Loader.<br/>  
This is particularly useful for **modpack authors** who want to distribute Forge-compatible packs that can also run on Cleanroom.<br/>
It is supported in both MultiMC-based launchers and standard launchers.<br/>
Steps:
1. Add [Fugue](https://www.curseforge.com/minecraft/mc-mods/fugue) to your modlist<br/>  
   *(it will not load in a Forge environment)*<br/>
2. Add [Scalar Legacy](https://www.curseforge.com/minecraft/mc-mods/scalar-legacy) to your modlist<br/>  
   *(it will not load in a Forge environment)*<br/>
3. :warning: **Warning:** Ensure your instance does not contain problematic or deprecated mods.<br/>  
   See [Preparing your modpack](/wiki/end-user-guide/preparing-your-modpack) for details.<br/>
4. Add the [Cleanroom Relauncher](https://www.curseforge.com/minecraft/mc-mods/cleanroom-relauncher) mod to your modlist and launch the game with **Java 8**.<br/>
5. In the Cleanroom Relauncher GUI, select the `javaw.exe` path of your **Java 25 installation**. (`javaw.exe` will not produce any command-line output and it the one that should be used in normal cases, while `java.exe` will produce a command-line output)<br/>
6. *(Optional)* Add JVM arguments from the [JVM Arguments](/wiki/end-user-guide/args) section.<br/>
7. Click **Relaunch**.<br/>

## Notes

- Cleanroom Relauncher’s configuration file can be found at `config/relauncher.cfg`. <br/> Deleting this file will prompt the setup GUI on the next launch.<br/>
  ::: info Note {id="note"}
  Cleanroom Relauncher will check for cleanroom updates. Therefore, the UI will launch when an update rolls out.
  :::
- :warning: **Warning:** Not all launchers are compatible with Cleanroom Loader. <br/> Supported launchers:
    - :white_check_mark: MultiMC-based launchers (**Prism Launcher, PolyMC, etc.**)<br/>
    - :warning: CurseForge Launcher *(limited support)*<br/>
    - :warning: Official Minecraft Launcher *(limited support)*<br/>
