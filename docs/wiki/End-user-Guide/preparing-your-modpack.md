---
title: Preparing your modpack
---

# Preparing Your Modpack

## Overview

Cleanroom Loader is compatible with the vast majority of Forge mods and will usually run them without issue.  
However, some mods remain **deprecated, redundant, or outright incompatible**—either because they’ve been superseded by better alternatives or because they introduce critical problems.

To prepare your modpack for Cleanroom Loader, review the lists below and make replacements where necessary.

---

## Deprecated / Incompatible Mods

- **FermiumBooter** → Outdated fork of MixinBooter with no meaningful changes.  
  ✅ Use **MixinBooter** instead.

- **normalasm** → Outdated fork of CensoredASM with no meaningful changes.  
  ✅ Use **CensoredASM** instead.

- **redirectionor** → Provides no real performance benefit.  
  🚫 Recommended to remove.

- **Noisethreader** → Known to cause crashes.  
  🚫 Recommended to remove.

- **Betterer Biome Blender** → Minor fixes for an already useless mod.  
  🚫 Recommended to remove.

- **FermiumASM** → CensoredASM fork, disables fixes when Dynamic Trees is loaded, and depends on FermiumBooter.  
  ✅ Use **CensoredASM** instead.

- **Spark Unforged** → Backport of Spark with half the features removed.  
  ✅ Use **Flare** instead.

- **SpongeForge** →  
  ✅ Use **SpongeForge LTS**.

- **Phosphor** →  
  ✅ Use **Hesperus** or **Alfheim Lighting Engine**.

- **Forgelin** →  
  ✅ Use **Forgelin-Continuous**.

- **LibrarianLib** →  
  ✅ Use **LibrarianLib-Continuous**. *(May break Wizardry animations.)*

- **JustEnoughIDs (JEID)** →  
  ✅ Use **RoughlyEnoughIDs (REID)** instead.

- **JustEnoughItems (JEI)** →  
  ✅ Use **HadEnoughItems (HEI)** instead.

- **AdvancedShader** → Binary patching, incompatible.  
  🚫 Recommended to remove.

- **Polyfrost series** → Awaiting official fixes.

- **Essential.gg** → Patched but causes many issues.  
  ✅ Use **E4MC Retro** instead.

- **Mouse Tweaks** →  
  ✅ Use **Mouse Tweaks Unofficial**.

- **TexFix** →  
  ✅ Use **VintageFix** instead.

- **VanillaFix** →  
  ✅ Use **CensoredASM** instead.

- **FoamFix** →  
  ✅ Use **VintageFix** instead.

- **BetterFPS** → Breaks core functionality.  
  🚫 Recommended to remove.

- **Performant** → Empty jar, does nothing.  
  🚫 Do not use.

- **FastFurnace** →  
  ✅ Use **CensoredASM** instead.

- **Clumps** →  
  ✅ Use **Fixeroo** instead.

- **Gnetum** →  
  ✅ Use **StellarCore** instead.

- **Modular Machinery** →  
  ✅ Use **Modular Machinery: Community Edition**.

- **Serialisation is Bad** → Redundant.  
  🚫 Recommended to remove.

- **SmoothFont** → Breaks some mods.  
  🚫 Recommended to remove.

- **Raw Input** → Already included in Cleanroom.  
  🚫 Recommended to remove.

- **Relictium** → See [Performance Mods](#performance-mods).

---

## Notes

- If your modpack uses **Bansoukou**, make sure to **run the instance at least once** so its patches are applied.

---

## Performance Mods

The most prominent performance mods for **Minecraft 1.12.2** are:

- **Optifine**
- **Celeritas**
- **Nothirium**

### Stress Test Results
In a simulated heavy-base scenario:

- **NVIDIA GPUs** → `Nothirium > Optifine > Celeritas`
- **AMD GPUs** → `Celeritas > Optifine > Nothirium`

⚠️ Performance varies depending on your hardware. Test all three mods to see which provides the best results for your system.
