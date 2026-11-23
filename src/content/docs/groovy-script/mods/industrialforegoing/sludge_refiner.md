---
title: Sludge Refiner (Industrial Foregoing)
description: Converts 1000mb of Sludge into a random itemstack based on the weight of the given itemstack.
sidebar:
  label: Sludge Refiner
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/SludgeRefiner.java
---

## Description

Converts 1000mb of Sludge into a random itemstack based on the weight of the given itemstack.

## Identifier

The identifier `mods.industrialforegoing.sludge_refiner` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.industrialforegoing.sludgerefiner
mods.industrialforegoing.sludgeRefiner
mods.industrialforegoing.SludgeRefiner
mods.industrialforegoing.sludge_refiner/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.industrialforegoing.sludge_refiner.add(SludgeEntry)
    ```

- Adds a Protein Reactor recipe in the format `output`, `weight`:

    ```groovy
    mods.industrialforegoing.sludge_refiner.add(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.sludge_refiner.add(item('minecraft:gold_ingot'), 5)
```

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.industrialforegoing.sludge_refiner.remove(SludgeEntry)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.industrialforegoing.sludge_refiner.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.sludge_refiner.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.sludge_refiner.removeByOutput(item('minecraft:clay_ball'))
mods.industrialforegoing.sludge_refiner.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.sludge_refiner.streamRecipes()
    ```
