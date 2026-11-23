---
title: Fortune (Bewitchment)
description: Modifies potential Fortunes, with a random one being selected from the list when interacting with a Crystal Ball. Some amount of time will pass before the Fortune occurs, whereupon a customizable effect will happen.
sidebar:
  label: Fortune
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Fortune.java
---

## Description

Modifies potential Fortunes, with a random one being selected from the list when interacting with a Crystal Ball. Some amount of time will pass before the Fortune occurs, whereupon a customizable effect will happen.

## Identifier

The identifier `mods.bewitchment.fortune` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.fortune/* Used as page default */
mods.bewitchment.Fortune
```

</details>

## Adding Entries

- Adds the recipe:

    ```groovy
    mods.bewitchment.fortune.add(Fortune)
    ```

## Removing Entries

- Removes the recipe:

    ```groovy
    mods.bewitchment.fortune.remove(Fortune)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.fortune.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.fortune.remove(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.fortune.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.fortune.remove(resource('bewitchment:cornucopia'))
mods.bewitchment.fortune.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.fortune.streamRecipes()
    ```
