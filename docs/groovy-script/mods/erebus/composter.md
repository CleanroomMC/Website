---
title: "Organic Composter"
titleTemplate: "The Erebus | CleanroomMC"
description: "Converts valid items into compost. The Blacklist blocks all ItemStacks on it from being used, the Material list allows any Blocks using the valid Materials to be converted, and the Registry contains any valid ItemStacks. The conversion takes 10 seconds, and is fueled by erebus wall plants."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/erebus/Composter.java"
---

# Organic Composter (The Erebus)

## Description

Converts valid items into compost. The Blacklist blocks all ItemStacks on it from being used, the Material list allows any Blocks using the valid Materials to be converted, and the Registry contains any valid ItemStacks. The conversion takes 10 seconds, and is fueled by erebus wall plants.

:::::::::: details Bug {open id="bug"}
The Blacklist is supposed to have 2 entries by default - `erebus:wall_plants@1` and `erebus:wall_plants_cultivated@1` - however it is initialized prior to blocks or items being registered, and so contains two empty itemstacks instead. Furthermore, it is likely that using the metadata **1** is also a bug, as only metadata **7** is used as fuel.
::::::::::

:::::::::: details Note {open id="note"}
Items extending `ItemFood` and `ItemSeed` will always be valid items unless added to the blacklist.
::::::::::

## Identifier

The identifier `mods.erebus.composter` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.erebus.composter/* Used as page default */ // [!code focus]
mods.erebus.Composter
```

::::::::::

## Adding Entries

- Add the given Material to the Composter Material list:

    ```groovy:no-line-numbers
    mods.erebus.composter.addMaterial(Material)
    ```

- Add the given ItemStack to the Composter Registry:

    ```groovy:no-line-numbers
    mods.erebus.composter.addRegistry(ItemStack)
    ```

- Add the given ItemStack to the Composter Blacklist:

    ```groovy:no-line-numbers
    mods.erebus.composter.addBlacklist(ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.erebus.composter.addMaterial(blockmaterial('tnt'))
mods.erebus.composter.addRegistry(item('minecraft:gold_ingot'))
mods.erebus.composter.addBlacklist(item('erebus:wall_plants', 7))
mods.erebus.composter.addBlacklist(item('erebus:wall_plants_cultivated', 7))
```

::::::::::

## Removing Entries

- Removes the provided Material from the Material list:

    ```groovy:no-line-numbers
    mods.erebus.composter.removeFromMaterial(Material)
    ```

- Removes all matching ItemStacks from the Registry:

    ```groovy:no-line-numbers
    mods.erebus.composter.removeFromRegistry(IIngredient)
    ```

- Removes all matching ItemStacks from the Blacklist:

    ```groovy:no-line-numbers
    mods.erebus.composter.removeFromBlacklist(IIngredient)
    ```

- Removes all entries from the Material list:

    ```groovy:no-line-numbers
    mods.erebus.composter.removeAllFromMaterial()
    ```

- Removes all entries from the Registry:

    ```groovy:no-line-numbers
    mods.erebus.composter.removeAllFromRegistry()
    ```

- Removes all entries from the Blacklist:

    ```groovy:no-line-numbers
    mods.erebus.composter.removeAllFromBlacklist()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.erebus.composter.removeFromMaterial(blockmaterial('sponge'))
mods.erebus.composter.removeFromRegistry(item('minecraft:stick'))
mods.erebus.composter.removeFromBlacklist(item('erebus:wall_plants', 1))
mods.erebus.composter.removeAllFromMaterial()
mods.erebus.composter.removeAllFromRegistry()
mods.erebus.composter.removeAllFromBlacklist()
```

::::::::::
