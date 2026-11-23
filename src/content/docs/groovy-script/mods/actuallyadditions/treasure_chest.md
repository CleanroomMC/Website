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

The identifier `mods.actuallyadditions.treasure_chest` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.aa.treasurechest
mods.aa.treasureChest
mods.aa.TreasureChest
mods.aa.treasure_chest
mods.actuallyadditions.treasurechest
mods.actuallyadditions.treasureChest
mods.actuallyadditions.TreasureChest
mods.actuallyadditions.treasure_chest/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.actuallyadditions.treasure_chest.add(TreasureChestLoot)
    ```

### Recipe Builder

Just like other recipe types, the Treasure Chest also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.actuallyadditions.treasure_chest.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the maximum stack size given when rolled. Requires greater than or equal to 0 and greater than or equal to the size of min. (Default `0`).

    ```groovy
    max(int)
    ```

- `int`. Sets the minimum stack size given when rolled. Requires greater than or equal to 0 and less than or equal to the size of max. (Default `0`).

    ```groovy
    min(int)
    ```

- `int`. Sets how likely this loot is to be rolled. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    weight(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.TreasureChestLoot`).

    ```groovy
    register()
    ```

---

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

- Removes the given recipe from the recipe list:

    ```groovy
    mods.actuallyadditions.treasure_chest.remove(TreasureChestLoot)
    ```

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
