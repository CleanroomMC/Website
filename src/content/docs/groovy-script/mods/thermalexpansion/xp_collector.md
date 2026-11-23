---
title: Insightful Condenser (Thermal Expansion)
description: Collects experience orbs nearby, with the ability to increase the XP gained via catalyst itemstacks.
sidebar:
  label: Insightful Condenser
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/XpCollector.java
---

## Description

Collects experience orbs nearby, with the ability to increase the XP gained via catalyst itemstacks.

## Identifier

The identifier `mods.thermalexpansion.xp_collector` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.thermal.xpcollector
mods.thermal.xpCollector
mods.thermal.XpCollector
mods.thermal.xp_collector
mods.thermalexpansion.xpcollector
mods.thermalexpansion.xpCollector
mods.thermalexpansion.XpCollector
mods.thermalexpansion.xp_collector/* Used as page default */
```

</details>

## Adding Entries

- Adds recipes in the format `catalyst`, `xp`, `factor`:

    ```groovy
    mods.thermalexpansion.xp_collector.add(ItemStack, int, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.xp_collector.add(item('minecraft:clay'), 100, 30)
```

</details>

## Removing Entries

- Removes the given ItemStack as a valid catalyst item:

    ```groovy
    mods.thermalexpansion.xp_collector.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.xp_collector.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.xp_collector.remove(item('minecraft:soul_sand'))
mods.thermalexpansion.xp_collector.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.xp_collector.streamRecipes()
    ```
