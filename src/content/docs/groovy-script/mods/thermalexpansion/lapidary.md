---
title: Numismatic Dynamo - Lapidary Calibration (Thermal Expansion)
description: Converts an input itemstack into power, taking time based on the power.
sidebar:
  label: Numismatic Dynamo - Lapidary Calibration
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Lapidary.java
---

## Description

Converts an input itemstack into power, taking time based on the power.

## Identifier

The identifier `mods.thermalexpansion.lapidary` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.lapidary
mods.thermal.Lapidary
mods.thermalexpansion.lapidary/* Used as page default */
mods.thermalexpansion.Lapidary
```

</details>

## Adding Recipes

- Adds recipes in the format `itemStack`, `energy`:

    ```groovy
    mods.thermalexpansion.lapidary.add(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.lapidary.add(item('minecraft:clay'), 1000)
```

</details>

## Removing Recipes

- Removes all recipes with given IIngredient:

    ```groovy
    mods.thermalexpansion.lapidary.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.lapidary.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.lapidary.removeByInput(item('minecraft:diamond'))
mods.thermalexpansion.lapidary.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.lapidary.streamRecipes()
    ```
