---
title: Orechid Ignem (Botania)
description: Converts netherrack blocks into one of a few ore blocks at the cost of mana.
sidebar:
  label: Orechid Ignem
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/OrechidIgnem.java
---

## Description

Converts netherrack blocks into one of a few ore blocks at the cost of mana.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.botania.orechid_ignem/* Used as page default */
mods.botania.orechidignem
mods.botania.orechidIgnem
mods.botania.OrechidIgnem
```

## Adding Recipes

- Adds recipes in the format `output`, `weight`:

    ```groovy
    mods.botania.orechid_ignem.add(OreDictIngredient, int)
    ```

- Adds recipes in the format `output`, `weight`:

    ```groovy
    mods.botania.orechid_ignem.add(String, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.orechid_ignem.add(ore('oreEmerald'), 1350)
mods.botania.orechid_ignem.add(ore('blockGold'), 1800)
```

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.orechid_ignem.removeByOutput(OreDictIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.orechid_ignem.removeByOutput(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.orechid_ignem.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.orechid_ignem.removeByOutput(ore('oreEmerald'))
mods.botania.orechid_ignem.removeByOutput(ore('oreQuartz'))
mods.botania.orechid_ignem.removeByOutput('oreQuartz')
mods.botania.orechid_ignem.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.orechid_ignem.streamRecipes()
    ```
