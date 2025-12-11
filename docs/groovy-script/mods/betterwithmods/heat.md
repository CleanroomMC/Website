---
title: "Heat"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Creates new levels or adds new blocks to old heat levels."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Heat.java"
---

# Heat (Better With Mods)

## Description

Creates new levels or adds new blocks to old heat levels.

:::::::::: details Note {open id="note"}
Anything using heat levels will create a new JEI tab for each heat level it has recipes for. This will have a lang key name.
::::::::::

## Identifier

The identifier `mods.betterwithmods.heat` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.betterwithmods.heat/* Used as page default */ // [!code focus]
mods.betterwithmods.Heat
```

::::::::::

## Editing Values

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, String)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, ItemStack...)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, IIngredient)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, BlockIngredient)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(int, List<ItemStack>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.heat.add(3, 'torch')
mods.betterwithmods.heat.add(4, item('minecraft:redstone_block'), item('minecraft:redstone_torch'))
```

::::::::::

## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.add(BWMHeatRegistry.HeatSource)
    ```

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.remove(BWMHeatRegistry.HeatSource)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.heat.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.heat.streamRecipes()
    ```
