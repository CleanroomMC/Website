---
title: Arboreal Extractor (Thermal Expansion)
description: Controls what items and blocks can be turned into what fluids. Output can be boosted via Fertilizer items.
sidebar:
  label: Arboreal Extractor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Tapper.java
---

## Description

Controls what items and blocks can be turned into what fluids. Output can be boosted via Fertilizer items.

<details class="cr-block cr-note" open>
<summary>Note</summary>

The Item map also controls the Resin Funnel augment for the Sawmill.

</details>

## Identifier

The identifier `mods.thermalexpansion.tapper` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.tapper
mods.thermal.Tapper
mods.thermalexpansion.tapper/* Used as page default */
mods.thermalexpansion.Tapper
```

</details>

## Adding Recipes

- Adds recipes to the item map in the format `itemStack`, `fluidStack`:

    ```groovy
    mods.thermalexpansion.tapper.addItem(ItemStack, FluidStack)
    ```

- Adds recipes to the block map in the format `itemStack`, `fluidStack`, but only if `itemStack` is an `ItemBlock`:

    ```groovy
    mods.thermalexpansion.tapper.addBlock(ItemStack, FluidStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.tapper.addItem(item('minecraft:clay'), fluid('lava') * 300)
mods.thermalexpansion.tapper.addBlock(item('minecraft:clay'), fluid('lava') * 150)
```

</details>

## Removing Recipes

- Removes all entries with the IIngredient input from the item map:

    ```groovy
    mods.thermalexpansion.tapper.removeItemByInput(IIngredient)
    ```

- Removes all entries with the IIngredient input from block map:

    ```groovy
    mods.thermalexpansion.tapper.removeBlockByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.tapper.removeAll()
    ```

- Removes all entries in the item map:

    ```groovy
    mods.thermalexpansion.tapper.removeAllItems()
    ```

- Removes all entries in the block map:

    ```groovy
    mods.thermalexpansion.tapper.removeAllBlocks()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.tapper.removeItemByInput(item('minecraft:log:1'))
mods.thermalexpansion.tapper.removeBlockByInput(item('minecraft:log'))
mods.thermalexpansion.tapper.removeAll()
mods.thermalexpansion.tapper.removeAllItems()
mods.thermalexpansion.tapper.removeAllBlocks()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.tapper.streamRecipes()
    ```

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.tapper.streamBlockRecipes()
    ```
