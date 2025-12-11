---
title: "Mineralis Ritual Registry"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Using a mineralis ritual will convert nearby stone blocks into random ores."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/OreChance.java"
---

# Mineralis Ritual Registry (Astral Sorcery)

## Description

Using a mineralis ritual will convert nearby stone blocks into random ores.

## Identifier

The identifier `mods.astralsorcery.mineralis_ritual_registry` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.astral.mineralisritualregistry
mods.astral.mineralisRitualRegistry
mods.astral.MineralisRitualRegistry
mods.astral.mineralis_ritual_registry
mods.astralsorcery.mineralisritualregistry
mods.astralsorcery.mineralisRitualRegistry
mods.astralsorcery.MineralisRitualRegistry
mods.astralsorcery.mineralis_ritual_registry/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Entries

- Adds entries in the format `ore`, `weight`:

    ```groovy:no-line-numbers
    mods.astralsorcery.mineralis_ritual_registry.add(String, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.mineralis_ritual_registry.add(ore('blockDiamond'), 10000)
```

::::::::::

## Removing Entries

- Removes entries of the given ore:

    ```groovy:no-line-numbers
    mods.astralsorcery.mineralis_ritual_registry.remove(String)
    ```

- Removes entries of the given ore:

    ```groovy:no-line-numbers
    mods.astralsorcery.mineralis_ritual_registry.remove(OreDictIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.astralsorcery.mineralis_ritual_registry.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.mineralis_ritual_registry.remove(ore('oreDiamond'))
mods.astralsorcery.mineralis_ritual_registry.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.astralsorcery.mineralis_ritual_registry.streamRecipes()
    ```
