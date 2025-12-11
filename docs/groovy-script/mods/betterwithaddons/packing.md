---
title: "Packing"
titleTemplate: "Better With Addons | CleanroomMC"
description: "Converts an input itemstack in the form of a EntityItems into an IBlockState after a piston extends if the piston and location the EntityItems are in are fully surrounded by solid blocks."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Packing.java"
---

# Packing (Better With Addons)

## Description

Converts an input itemstack in the form of a EntityItems into an IBlockState after a piston extends if the piston and location the EntityItems are in are fully surrounded by solid blocks.

## Identifier

The identifier `mods.betterwithaddons.packing` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.betterwithaddons.packing/* Used as page default */ // [!code focus]
mods.betterwithaddons.Packing
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.packing.add(PackingRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Packing also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.betterwithaddons.packing.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `IBlockState`. Sets the IBlockState that the input is compacted into. Requires not null.

    ```groovy:no-line-numbers
    compress(IBlockState)
    ```

- `ItemStack`. Sets output that appears in JEI, but has no bearing on the actual recipe. Requires not null. (Default `compress as ItemStack`).

    ```groovy:no-line-numbers
    jeiOutput(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.PackingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
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

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithaddons.packing.remove(PackingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithaddons.packing.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithaddons.packing.removeByOutput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithaddons.packing.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithaddons.packing.removeByInput(item('minecraft:clay_ball'))
mods.betterwithaddons.packing.removeByOutput(blockstate('minecraft:gravel'))
mods.betterwithaddons.packing.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithaddons.packing.streamRecipes()
    ```
