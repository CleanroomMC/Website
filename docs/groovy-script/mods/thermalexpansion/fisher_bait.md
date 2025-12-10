---
title: "Aquatic Entangler Bait"
titleTemplate: "Thermal Expansion | CleanroomMC"
description: "Controls what items can be used in the bait slot of the Aquatic Entangler and how effective they are."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/FisherBait.java"
---

# Aquatic Entangler Bait (Thermal Expansion)

## Description

Controls what items can be used in the bait slot of the Aquatic Entangler and how effective they are.

## Identifier

The identifier `mods.thermalexpansion.fisher_bait` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.thermal.fisherbait
mods.thermal.fisherBait
mods.thermal.FisherBait
mods.thermal.fisher_bait
mods.thermalexpansion.fisherbait
mods.thermalexpansion.fisherBait
mods.thermalexpansion.FisherBait
mods.thermalexpansion.fisher_bait/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Entries

- Adds recipes in the format `stack`, `multiplier`:

    ```groovy:no-line-numbers
    mods.thermalexpansion.fisher_bait.add(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.fisher_bait.add(item('minecraft:clay'), 100)
```

::::::::::

## Removing Entries

- Removes the given IIngredient as a valid bait item:

    ```groovy:no-line-numbers
    mods.thermalexpansion.fisher_bait.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thermalexpansion.fisher_bait.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thermalexpansion.fisher_bait.remove(item('thermalfoundation:bait:2'))
mods.thermalexpansion.fisher_bait.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.thermalexpansion.fisher_bait.streamRecipes()
    ```
