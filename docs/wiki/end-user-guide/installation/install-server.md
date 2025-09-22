---
title: Server
---

# Server

## How to Install Cleanroom Loader on a Server

### Steps

1. Delete the `libraries` folder inside your server directory.<br/>
2. :warning: **Warning:** Ensure your server modlist does not include problematic or deprecated mods.<br/>
   See [Preparing your modpack](/wiki/End-user-Guide/preparing-your-modpack) for more details.<br/>
3. Download the latest `cleanroom-x.x.x-installer.jar` from the [Releases page](https://github.com/CleanroomMC/Cleanroom/releases) and run it.<br/>
4. In the installer GUI, select **Install server** and choose your server’s directory.<br/>
5. Add [Fugue](https://www.curseforge.com/minecraft/mc-mods/fugue) to your mod folder<br/>
   *(it will not load in a Forge environment)*<br/>
6. Add [Scalar Legacy](https://www.curseforge.com/minecraft/mc-mods/scalar-legacy) to your mod folder<br/>
   *(it will not load in a Forge environment)*<br/>
7. *(Optional)* Add JVM arguments to your server’s launch file as described in the [JVM Arguments](/wiki/End-user-Guide/args) section.<br/>

## Notes

- On Windows, you can point to modern Java executables either by updating your **Environment Variables** or by specifying the full path between double quotes in the Launch bat, e.g.:  
  `"C:/Program Files/.../bin/javaw.exe"`<br/>
- On Linux, you can use `SDKMAN!` to manage your java versions.<br/>
