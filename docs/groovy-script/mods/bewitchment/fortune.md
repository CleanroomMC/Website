---
title: "Fortune"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Modifies potential Fortunes, with a random one being selected from the list when interacting with a Crystal Ball. Some amount of time will pass before the Fortune occurs, whereupon a customizable effect will happen."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Fortune.java"
---

# Fortune (Bewitchment)

## Description

Modifies potential Fortunes, with a random one being selected from the list when interacting with a Crystal Ball. Some amount of time will pass before the Fortune occurs, whereupon a customizable effect will happen.

## Identifier

The identifier `mods.bewitchment.fortune` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.bewitchment.fortune/* Used as page default */ // [!code focus]
mods.bewitchment.Fortune
```

::::::::::

## Adding Entries

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.fortune.add(Fortune)
    ```

## Removing Entries

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.fortune.remove(Fortune)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.fortune.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.fortune.remove(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.fortune.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.fortune.remove(resource('bewitchment:cornucopia'))
mods.bewitchment.fortune.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.fortune.streamRecipes()
    ```
