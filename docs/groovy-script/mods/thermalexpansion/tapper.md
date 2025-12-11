---
title: "Arboreal Extractor"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Controls what items and blocks can be turned into what fluids. Output can be boosted via Fertilizer items."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Tapper.java"
---

# Arboreal Extractor (Thermal Expansion)

## Description

Controls what items and blocks can be turned into what fluids. Output can be boosted via Fertilizer items.

:::::::::: details Note {open id="note"}
The Item map also controls the Resin Funnel augment for the Sawmill.
::::::::::

## Identifier

The identifier `mods.thermalexpansion.tapper` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {3}
mods.thermal.tapper
mods.thermal.Tapper
mods.thermalexpansion.tapper/* Used as page default */ // [!code focus]
mods.thermalexpansion.Tapper
```

::::::::::

## Adding Recipes

- Adds recipes to the item map in the format `itemStack`, `fluidStack`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.addItem(ItemStack, FluidStack)
    ```

- Adds recipes to the block map in the format `itemStack`, `fluidStack`, but only if `itemStack` is an `ItemBlock`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.addBlock(ItemStack, FluidStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.tapper.addItem(item('minecraft:clay'), fluid('lava') * 300)
mods.thermalexpansion.tapper.addBlock(item('minecraft:clay'), fluid('lava') * 150)
```

::::::::::

## Removing Recipes

- Removes all entries with the IIngredient input from the item map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.removeItemByInput(IIngredient)
    ```

- Removes all entries with the IIngredient input from block map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.removeBlockByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.removeAll()
    ```

- Removes all entries in the item map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.removeAllItems()
    ```

- Removes all entries in the block map:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.removeAllBlocks()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.tapper.removeItemByInput(item('minecraft:log:1'))
mods.thermalexpansion.tapper.removeBlockByInput(item('minecraft:log'))
mods.thermalexpansion.tapper.removeAll()
mods.thermalexpansion.tapper.removeAllItems()
mods.thermalexpansion.tapper.removeAllBlocks()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.streamRecipes()
    ```

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.tapper.streamBlockRecipes()
    ```
