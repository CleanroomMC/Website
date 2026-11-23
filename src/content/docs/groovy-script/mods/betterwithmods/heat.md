---
title: Heat (Better With Mods)
description: Creates new levels or adds new blocks to old heat levels.
sidebar:
  label: Heat
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Heat.java
---

## Description

Creates new levels or adds new blocks to old heat levels.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Anything using heat levels will create a new JEI tab for each heat level it has recipes for. This will have a lang key name.

</details>

## Identifier

The identifier `mods.betterwithmods.heat` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithmods.heat/* Used as page default */
mods.betterwithmods.Heat
```

</details>

## Editing Values

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy
    mods.betterwithmods.heat.add(int, String)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy
    mods.betterwithmods.heat.add(int, ItemStack...)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy
    mods.betterwithmods.heat.add(int, IIngredient)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy
    mods.betterwithmods.heat.add(int, BlockIngredient)
    ```

- Adds new heat levels in the format `heat`, `ingredient`:

    ```groovy
    mods.betterwithmods.heat.add(int, List<ItemStack>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.heat.add(3, 'torch')
mods.betterwithmods.heat.add(4, item('minecraft:redstone_block'), item('minecraft:redstone_torch'))
```

</details>

## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithmods.heat.add(BWMHeatRegistry.HeatSource)
    ```

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithmods.heat.remove(BWMHeatRegistry.HeatSource)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithmods.heat.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.heat.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithmods.heat.streamRecipes()
    ```
