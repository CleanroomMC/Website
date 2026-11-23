---
title: Combination Crafting (Extended Crafting)
description: Converts one main item and any number of additional items into an output itemstack, with a configurable rf cost and consumption per tick amount.
sidebar:
  label: Combination Crafting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extendedcrafting/CombinationCrafting.java
---

## Description

Converts one main item and any number of additional items into an output itemstack, with a configurable rf cost and consumption per tick amount.

:::note[Info]
By default, there are no Combination recipes
:::

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.extendedcrafting.combination_crafting/* Used as page default */
mods.extendedcrafting.combinationcrafting
mods.extendedcrafting.combinationCrafting
mods.extendedcrafting.CombinationCrafting
mods.extendedcrafting.combination
mods.extendedcrafting.Combination
```

## Adding Recipes

- Adds recipes in the format `output`, `cost`, `input`, `pedestals`:

    ```groovy
    mods.extendedcrafting.combination_crafting.add(ItemStack, long, Ingredient, NonNullList<Ingredient>)
    ```

- Adds recipes in the format `output`, `cost`, `perTick`, `input`, `pedestals`:

    ```groovy
    mods.extendedcrafting.combination_crafting.add(ItemStack, long, int, Ingredient, NonNullList<Ingredient>)
    ```

### Recipe Builder

Just like other recipe types, the Combination Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.extendedcrafting.combination_crafting.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `long`. Sets the amount of RF required to complete the craft. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    cost(long)
    totalCost(long)
    ```

- `int`. Sets the maximum amount of RF consumed per tick until the entire cost is paid. Requires greater than or equal to 0. (Default `ModConfig.confCraftingCoreRFRate`).

    ```groovy
    perTick(int)
    costPerTick(int)
    ```

- `NonNullList<IIngredient>`. Sets the required items on nearby pedestals.

    ```groovy
    pedestals(IIngredient)
    pedestals(IIngredient...)
    pedestals(Collection<IIngredient>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.blakebr0.extendedcrafting.crafting.CombinationRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extendedcrafting.combination_crafting.recipeBuilder()
    .input(item('minecraft:pumpkin'))
    .pedestals(item('minecraft:pumpkin') * 8)
    .output(item('minecraft:diamond') * 2)
    .cost(100)
    .perTick(100)
    .register()

mods.extendedcrafting.combination_crafting.recipeBuilder()
    .input(item('minecraft:pumpkin'))
    .pedestals(item('minecraft:pumpkin'), item('minecraft:clay'), item('minecraft:clay'), item('minecraft:pumpkin'))
    .output(item('minecraft:gold_ingot') * 2)
    .cost(10000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.extendedcrafting.combination_crafting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.extendedcrafting.combination_crafting.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.extendedcrafting.combination_crafting.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.extendedcrafting.combination_crafting.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extendedcrafting.combination_crafting.removeByInput(item('minecraft:pumpkin'))
mods.extendedcrafting.combination_crafting.removeByOutput(item('minecraft:gold_ingot'))
mods.extendedcrafting.combination_crafting.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.extendedcrafting.combination_crafting.streamRecipes()
    ```
