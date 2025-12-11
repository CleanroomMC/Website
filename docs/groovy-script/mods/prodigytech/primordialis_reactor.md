---
title: "Primordialis Reactor"
titleTemplate: "Prodigy Tech | CleanroomMC"
description: "Turns organic matter into Primordium."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/PrimordialisReactor.java"
---

# Primordialis Reactor (Prodigy Tech)

## Description

Turns organic matter into Primordium.

## Identifier

The identifier `mods.prodigytech.primordialis_reactor` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.prodigytech.primordialisreactor
mods.prodigytech.primordialisReactor
mods.prodigytech.PrimordialisReactor
mods.prodigytech.primordialis_reactor/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Entries

- Adds an item that can be converted:

    ```groovy:no-line-numbers
    mods.prodigytech.primordialis_reactor.add(IIngredient)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.primordialis_reactor.add(item('minecraft:diamond'))
```

::::::::::

## Removing Entries

- Removes an item that can be converted:

    ```groovy:no-line-numbers
    mods.prodigytech.primordialis_reactor.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.prodigytech.primordialis_reactor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.prodigytech.primordialis_reactor.remove(ore('sugarcane'))
mods.prodigytech.primordialis_reactor.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.prodigytech.primordialis_reactor.streamRecipes()
    ```
