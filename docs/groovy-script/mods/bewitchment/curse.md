---
title: "Curses"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Allows applying curses to a player to cause unique effects in the Brazier with a `bewitchment:taglock` targeting the desired player."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Curse.java"
---

# Curses (Bewitchment)

## Description

Allows applying curses to a player to cause unique effects in the Brazier with a `bewitchment:taglock` targeting the desired player.

## Identifier

The identifier `mods.bewitchment.curse` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.bewitchment.curse/* Used as page default */ // [!code focus]
mods.bewitchment.Curse
```

::::::::::

## Adding Entries

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.curse.add(Curse)
    ```

## Removing Entries

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.curse.remove(Curse)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.curse.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.curse.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.curse.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.curse.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.curse.remove(resource('bewitchment:berserker'))
mods.bewitchment.curse.removeByInput(item('minecraft:blaze_rod'))
mods.bewitchment.curse.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.curse.streamRecipes()
    ```
