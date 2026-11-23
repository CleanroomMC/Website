---
title: Lexicon Category (Botania)
description: Category creates a new entry on the front page of the Lexica Botania.
sidebar:
  label: Lexicon Category
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Lexicon.java
---

## Description

Category creates a new entry on the front page of the Lexica Botania.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.botania.category/* Used as page default */
mods.botania.Category
```

## Adding Entries

- Adds a Category to the Lexica Botania in the format `name`, `icon` and a priority of 5:

    ```groovy
    mods.botania.category.add(String, ResourceLocation)
    ```

- Adds a Category to the Lexica Botania in the format `name`, `icon`, `priority`:

    ```groovy
    mods.botania.category.add(String, ResourceLocation, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.category.add('test', resource('minecraft:textures/items/apple.png'))
mods.botania.category.add('first', resource('minecraft:textures/items/clay_ball.png'), 100)
```

</details>

## Removing Entries

- Removes a Category matching the given name:

    ```groovy
    mods.botania.category.remove(String)
    ```

- Removes a Category matching the given name:

    ```groovy
    mods.botania.category.removeCategory(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.category.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.category.remove('botania.category.alfhomancy')
mods.botania.category.removeCategory('botania.category.misc')
mods.botania.category.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.category.streamCategories()
    ```
