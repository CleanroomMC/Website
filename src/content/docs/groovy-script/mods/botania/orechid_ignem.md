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

The identifier `mods.botania.orechid_ignem` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.botania.orechidignem
mods.botania.orechidIgnem
mods.botania.OrechidIgnem
mods.botania.orechid_ignem/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `output`, `weight`:

    ```groovy
    mods.botania.orechid_ignem.add(String, int)
    ```

- Adds recipes in the format `output`, `weight`:

    ```groovy
    mods.botania.orechid_ignem.add(OreDictIngredient, int)
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
    mods.botania.orechid_ignem.removeByOutput(String)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.orechid_ignem.removeByOutput(OreDictIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.orechid_ignem.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.orechid_ignem.removeByOutput('oreQuartz')
mods.botania.orechid_ignem.removeByOutput(ore('oreEmerald'))
mods.botania.orechid_ignem.removeByOutput(ore('oreQuartz'))
mods.botania.orechid_ignem.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.orechid_ignem.streamRecipes()
    ```
