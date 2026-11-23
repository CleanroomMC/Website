---
title: Packing (Better With Addons)
description: Converts an input itemstack in the form of a EntityItems into an IBlockState after a piston extends if the piston and location the EntityItems are in are fully surrounded by solid blocks.
sidebar:
  label: Packing
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Packing.java
---

## Description

Converts an input itemstack in the form of a EntityItems into an IBlockState after a piston extends if the piston and location the EntityItems are in are fully surrounded by solid blocks.

## Identifier

The identifier `mods.betterwithaddons.packing` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithaddons.packing/* Used as page default */
mods.betterwithaddons.Packing
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithaddons.packing.add(PackingRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Packing also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithaddons.packing.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `IBlockState`. Sets the IBlockState that the input is compacted into. Requires not null.

    ```groovy
    compress(IBlockState)
    ```

- `ItemStack`. Sets output that appears in JEI, but has no bearing on the actual recipe. Requires not null. (Default `compress as ItemStack`).

    ```groovy
    jeiOutput(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.PackingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.packing.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .compress(blockstate('minecraft:clay'))
    .register()

mods.betterwithaddons.packing.recipeBuilder()
    .input(item('minecraft:clay') * 10)
    .compress(blockstate('minecraft:diamond_block'))
    .register()

mods.betterwithaddons.packing.recipeBuilder()
    .input(item('minecraft:diamond'))
    .compress(blockstate('minecraft:dirt'))
    .jeiOutput(item('minecraft:diamond') * 64)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithaddons.packing.remove(PackingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithaddons.packing.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithaddons.packing.removeByOutput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithaddons.packing.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.packing.removeByInput(item('minecraft:clay_ball'))
mods.betterwithaddons.packing.removeByOutput(blockstate('minecraft:gravel'))
mods.betterwithaddons.packing.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithaddons.packing.streamRecipes()
    ```
