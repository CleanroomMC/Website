---
title: Curses (Bewitchment)
description: Allows applying curses to a player to cause unique effects in the Brazier with a `bewitchment:taglock` targeting the desired player.
sidebar:
  label: Curses
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Curse.java
---

## Description

Allows applying curses to a player to cause unique effects in the Brazier with a `bewitchment:taglock` targeting the desired player.

## Identifier

The identifier `mods.bewitchment.curse` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.curse/* Used as page default */
mods.bewitchment.Curse
```

</details>

## Adding Entries

- Adds the recipe:

    ```groovy
    mods.bewitchment.curse.add(Curse)
    ```

## Removing Entries

- Removes the recipe:

    ```groovy
    mods.bewitchment.curse.remove(Curse)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.curse.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.curse.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.curse.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.curse.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.curse.remove(resource('bewitchment:berserker'))
mods.bewitchment.curse.removeByInput(item('minecraft:blaze_rod'))
mods.bewitchment.curse.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.curse.streamRecipes()
    ```
