---
title: "Insightful Condenser"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Collects experience orbs nearby, with the ability to increase the XP gained via catalyst itemstacks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/XpCollector.java"
---

# Insightful Condenser (Thermal Expansion)

## Description

Collects experience orbs nearby, with the ability to increase the XP gained via catalyst itemstacks.

## Identifier

The identifier `mods.thermalexpansion.xp_collector` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.thermal.xpcollector
mods.thermal.xpCollector
mods.thermal.XpCollector
mods.thermal.xp_collector
mods.thermalexpansion.xpcollector
mods.thermalexpansion.xpCollector
mods.thermalexpansion.XpCollector
mods.thermalexpansion.xp_collector/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Entries

- Adds recipes in the format `catalyst`, `xp`, `factor`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.xp_collector.add(ItemStack, int, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.xp_collector.add(item('minecraft:clay'), 100, 30)
```

::::::::::

## Removing Entries

- Removes the given ItemStack as a valid catalyst item:

    ```groovy:no-line-numbers
    mods.thermalexpansion.xp_collector.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.xp_collector.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.xp_collector.remove(item('minecraft:soul_sand'))
mods.thermalexpansion.xp_collector.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.xp_collector.streamRecipes()
    ```
