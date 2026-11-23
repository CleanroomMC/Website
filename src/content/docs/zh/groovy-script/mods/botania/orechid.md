---
title: Orechid (Botania)
description: Converts stone blocks into one of a few ore blocks at the cost of mana.
sidebar:
  label: Orechid
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Orechid.java
---

## Description

Converts stone blocks into one of a few ore blocks at the cost of mana.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.botania.orechid/* Used as page default */
mods.botania.Orechid
```

## Adding Recipes

- Adds recipes in the format `output`, `weight`:

    ```groovy
    mods.botania.orechid.add(OreDictIngredient, int)
    ```

- Adds recipes in the format `output`, `weight`:

    ```groovy
    mods.botania.orechid.add(String, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.orechid.add(ore('oreEmerald'), 1350)
mods.botania.orechid.add(ore('blockGold'), 1800)
```

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.orechid.removeByOutput(OreDictIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.orechid.removeByOutput(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.orechid.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.orechid.removeByOutput(ore('oreEmerald'))
mods.botania.orechid.removeByOutput(ore('oreQuartz'))
mods.botania.orechid.removeByOutput('oreCoal')
mods.botania.orechid.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.orechid.streamRecipes()
    ```
