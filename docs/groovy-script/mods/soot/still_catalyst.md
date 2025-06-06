---
title: "Still Catalyst"
titleTemplate: "Soot | CleanroomMC"
description: "Tweak the values of various Catalysts used in the Still. If a catalyst is not defined, it will have a default value of 1000."
source_code_link: "https://github.com/Ender-Development/Soot-Extended-Life/blob/master/src/main/java/soot/compat/groovyscript/StillCatalyst.java"
---

# Still Catalyst (Soot)

## Description

Tweak the values of various Catalysts used in the Still. If a catalyst is not defined, it will have a default value of 1000.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.soot.still_catalyst/* Used as page default */ // [!code focus]
mods.soot.stillcatalyst
mods.soot.stillCatalyst
mods.soot.StillCatalyst
```


## Editing Values

- Return the amount of value that is removed from the catalyst:

    ```groovy:no-line-numbers
    mods.soot.still_catalyst.getAmount(IIngredient)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.soot.still_catalyst.getAmount(item('minecraft:snowball'))
```

::::::::::

## Adding Recipes

- Adds a new catalyst with the specified amount:

    ```groovy:no-line-numbers
    mods.soot.still_catalyst.addCatalyst(IIngredient, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.soot.still_catalyst.addCatalyst(item('minecraft:iron_ingot'), 600)
mods.soot.still_catalyst.addCatalyst(item('minecraft:glass'), 50)
```

::::::::::

## Removing Recipes

- Removes the specified value from the catalyst. Recipes with this Catalyst won't be removed. Instead the Catalyst will have the default value of 1000:

    ```groovy:no-line-numbers
    mods.soot.still_catalyst.removeCatalyst(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.soot.still_catalyst.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.soot.still_catalyst.removeCatalyst(ore('logWood'))
mods.soot.still_catalyst.removeAll()
```

::::::::::

## Getting the value of recipes

- Returns a stream of all specified Catalysts:

    ```groovy:no-line-numbers
    mods.soot.still_catalyst.streamCatalysts()
    ```
