---
title: Arboreal Extractor Fertilizer (Thermal Expansion)
description: Controls what items can be used in the fertilizer slot of the Arboreal Extractor Fertilizer and how effective they are.
sidebar:
  label: Arboreal Extractor Fertilizer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/TapperFertilizer.java
---

## Description

Controls what items can be used in the fertilizer slot of the Arboreal Extractor Fertilizer and how effective they are.

## Identifier

The identifier `mods.thermalexpansion.tapper_fertilizer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.thermal.tapperfertilizer
mods.thermal.tapperFertilizer
mods.thermal.TapperFertilizer
mods.thermal.tapper_fertilizer
mods.thermalexpansion.tapperfertilizer
mods.thermalexpansion.tapperFertilizer
mods.thermalexpansion.TapperFertilizer
mods.thermalexpansion.tapper_fertilizer/* Used as page default */
```

</details>

## Adding Entries

- Adds recipes in the format `stack`, `multiplier`:

    ```groovy
    mods.thermalexpansion.tapper_fertilizer.add(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.tapper_fertilizer.add(item('minecraft:clay'), 1000)
```

</details>

## Removing Entries

- Removes the given IIngredient as a valid fertilizer item:

    ```groovy
    mods.thermalexpansion.tapper_fertilizer.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.tapper_fertilizer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.tapper_fertilizer.remove(item('thermalfoundation:fertilizer:2'))
mods.thermalexpansion.tapper_fertilizer.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.tapper_fertilizer.streamRecipes()
    ```
