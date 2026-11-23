---
title: Treasure Chest (Actually Additions)
description: A weighted item, with a weight to obtain and a minimum and maximum amount. Obtained via right-clicking a Treasure Chest spawning randomly on the sea floor.
sidebar:
  label: Treasure Chest
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/TreasureChest.java
---

## Description

A weighted item, with a weight to obtain and a minimum and maximum amount. Obtained via right-clicking a Treasure Chest spawning randomly on the sea floor.

## Identifier

Refer to this via any of the following:

```groovy {5}
mods.aa.treasure_chest
mods.aa.treasurechest
mods.aa.treasureChest
mods.aa.TreasureChest
mods.actuallyadditions.treasure_chest/* Used as page default */
mods.actuallyadditions.treasurechest
mods.actuallyadditions.treasureChest
mods.actuallyadditions.TreasureChest
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Treasure Chest also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.actuallyadditions.treasure_chest.recipeBuilder()</summary>

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the maximum stack size given when rolled. Requires greater than or equal to 0 and greater than or equal to min. (Default `0`).

    ```groovy
    max(int)
    ```

- `int`. Sets the minimum stack size given when rolled. Requires greater than or equal to 0 and less than or equal to max. (Default `0`).

    ```groovy
    min(int)
    ```

- `int`. Sets how likely this loot is to be rolled. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    weight(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.TreasureChestLoot`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.treasure_chest.recipeBuilder()
    .output(item('minecraft:clay'))
    .weight(50)
    .min(16)
    .max(32)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.actuallyadditions.treasure_chest.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.actuallyadditions.treasure_chest.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.treasure_chest.removeByOutput(item('minecraft:iron_ingot'))
mods.actuallyadditions.treasure_chest.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.actuallyadditions.treasure_chest.streamRecipes()
    ```
