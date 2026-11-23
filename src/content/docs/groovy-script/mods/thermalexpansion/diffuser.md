---
title: Decorative Diffuser (Thermal Expansion)
description: Controls what items can be used in to boost the potion time and level in the Decorative Diffuser.
sidebar:
  label: Decorative Diffuser
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Diffuser.java
---

## Description

Controls what items can be used in to boost the potion time and level in the Decorative Diffuser.

## Identifier

The identifier `mods.thermalexpansion.diffuser` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.diffuser
mods.thermal.Diffuser
mods.thermalexpansion.diffuser/* Used as page default */
mods.thermalexpansion.Diffuser
```

</details>

## Adding Entries

- Adds recipes in the format `energy`, `input`, `fluidOutput`:

    ```groovy
    mods.thermalexpansion.diffuser.add(ItemStack, int, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.diffuser.add(item('minecraft:clay'), 2, 30)
```

</details>

## Removing Entries

- Removes the given ItemStack as a catalyst item in the Decorative Diffuser:

    ```groovy
    mods.thermalexpansion.diffuser.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.diffuser.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.diffuser.remove(item('minecraft:redstone'))
mods.thermalexpansion.diffuser.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.diffuser.streamRecipes()
    ```
