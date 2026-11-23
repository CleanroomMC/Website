---
title: Compost (Actually Additions)
description: Converts an input item into an output item after 150 seconds. Requires an input and output display blockstate.
sidebar:
  label: Compost
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/Compost.java
---

## Description

Converts an input item into an output item after 150 seconds. Requires an input and output display blockstate.

## Identifier

Refer to this via any of the following:

```groovy {3}
mods.aa.compost
mods.aa.Compost
mods.actuallyadditions.compost/* Used as page default */
mods.actuallyadditions.Compost
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Compost also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.actuallyadditions.compost.recipeBuilder()</summary>

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

- `IBlockState`. Sets the texture rendering inside the Compost Bin in-world while the given recipe is being processed. Requires not null.

    ```groovy
    inputDisplay(IBlockState)
    ```

- `IBlockState`. Sets the texture rendering inside the Compost Bin in-world while the given recipe has been completed but has not yet been extracted. Requires not null.

    ```groovy
    outputDisplay(IBlockState)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.CompostRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.compost.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .inputDisplay(blockstate('minecraft:clay'))
    .outputDisplay(blockstate('minecraft:diamond_block'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.actuallyadditions.compost.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.actuallyadditions.compost.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.actuallyadditions.compost.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.compost.removeByInput(item('actuallyadditions:item_canola_seed'))
mods.actuallyadditions.compost.removeByOutput(item('actuallyadditions:item_fertilizer'))
mods.actuallyadditions.compost.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.actuallyadditions.compost.streamRecipes()
    ```
