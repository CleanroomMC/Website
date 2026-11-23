---
title: Grindstone (Astral Sorcery)
description: Converts an item into an itemstack with a chance of getting twice the amount after right clicking the grindstone based on weight.
sidebar:
  label: Grindstone
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/Grindstone.java
---

## Description

Converts an item into an itemstack with a chance of getting twice the amount after right clicking the grindstone based on weight.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.astralsorcery.grindstone/* Used as page default */
mods.astralsorcery.Grindstone
mods.astral.grindstone
mods.astral.Grindstone
```

## Adding Recipes

- Adds a recipe in the format of `input`, `output`, `weight`, with the `secondaryChance` being 0:

    ```groovy
    mods.astralsorcery.grindstone.add(ItemHandle, ItemStack, int)
    ```

- Adds a recipe in the format of `input`, `output`, `weight`, `secondaryChance`:

    ```groovy
    mods.astralsorcery.grindstone.add(ItemHandle, ItemStack, int, float)
    ```

### Recipe Builder

Just like other recipe types, the Grindstone also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.astralsorcery.grindstone.recipeBuilder()</summary>

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

- `int`. Sets how many interactions it takes to process the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    weight(int)
    ```

- `float`. Sets the chance of an additional output. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    secondaryChance(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.grindstone.GrindstoneRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.grindstone.recipeBuilder()
    .input(ore('blockDiamond'))
    .output(item('minecraft:clay'))
    .weight(1)
    .secondaryChance(1.0F)
    .register()

mods.astralsorcery.grindstone.recipeBuilder()
    .input(item('minecraft:stone'))
    .output(item('minecraft:cobblestone'))
    .weight(5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.astralsorcery.grindstone.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.astralsorcery.grindstone.removeByOutput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.astralsorcery.grindstone.removeByOutput(OreDictIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.astralsorcery.grindstone.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.grindstone.removeByInput(item('minecraft:redstone_ore'))
mods.astralsorcery.grindstone.removeByOutput(ore('dustIron'))
mods.astralsorcery.grindstone.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.astralsorcery.grindstone.streamRecipes()
    ```
