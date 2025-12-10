---
title: "Bioreactor"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts an input item into Biofuel, with the amount of Biofuel generated being based on the number of concurrent conversion processes inside the Bioreactor."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/BioReactor.java"
---

# Bioreactor (Industrial Foregoing)

## Description

Converts an input item into Biofuel, with the amount of Biofuel generated being based on the number of concurrent conversion processes inside the Bioreactor.

## Identifier

The identifier `mods.industrialforegoing.bio_reactor` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.industrialforegoing.bioreactor
mods.industrialforegoing.bioReactor
mods.industrialforegoing.BioReactor
mods.industrialforegoing.bio_reactor/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.bio_reactor.add(IReactorEntry)
    ```

- Adds a Bioreactor recipe in the format `input`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.bio_reactor.add(ItemStack)
    ```

- Adds a Bioreactor recipe in the format `input`, `nbtCheck`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.bio_reactor.add(ItemStack, Predicate<NBTTagCompound>)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.bio_reactor.add(item('minecraft:clay'))
```

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.bio_reactor.remove(IReactorEntry)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.bio_reactor.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.bio_reactor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.bio_reactor.removeByInput(item('minecraft:wheat_seeds'))
mods.industrialforegoing.bio_reactor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.bio_reactor.streamRecipes()
    ```
