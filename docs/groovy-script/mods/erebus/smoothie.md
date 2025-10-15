---
title: "Smoothie-matic"
titleTemplate: "The Erebus | CleanroomMC"
description: "Converts a container item, up to 4 input items, and up to 4 input fluidstacks into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/erebus/Smoothie.java"
---

# Smoothie-matic (The Erebus)

## Description

Converts a container item, up to 4 input items, and up to 4 input fluidstacks into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.erebus.smoothie/* Used as page default */ // [!code focus]
mods.erebus.Smoothie
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.erebus.smoothie.add(SmoothieMakerRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Smoothie-matic also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.erebus.smoothie.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 4.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0, less than or equal to 4, and no fluid inputs can have a duplicate fluid type.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `ItemStack`. Sets the container itemstack required. Requires not null.

    ```groovy:no-line-numbers
    container(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `erebus.recipes.SmoothieMakerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.erebus.smoothie.recipeBuilder()
    .container(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .register()

mods.erebus.smoothie.recipeBuilder()
    .container(item('minecraft:clay'))
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()

mods.erebus.smoothie.recipeBuilder()
    .container(item('minecraft:gold_block'))
    .fluidInput(fluid('water') * 5000)
    .output(item('minecraft:gold_ingot'))
    .register()

mods.erebus.smoothie.recipeBuilder()
    .container(item('minecraft:stone'))
    .input(item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'))
    .fluidInput(fluid('lava') * 500, fluid('formic_acid') * 500, fluid('honey') * 500, fluid('milk') * 500)
    .output(item('minecraft:clay') * 5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.erebus.smoothie.remove(SmoothieMakerRecipe)
    ```

- Removes all recipes matching the provided container:

    ```groovy:no-line-numbers
    mods.erebus.smoothie.removeByContainer(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.erebus.smoothie.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.erebus.smoothie.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.erebus.smoothie.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.erebus.smoothie.removeByContainer(item('minecraft:bucket'))
mods.erebus.smoothie.removeByInput(item('erebus:materials', 18))
mods.erebus.smoothie.removeByInput(fluid('honey'))
mods.erebus.smoothie.removeByOutput(item('erebus:materials', 21))
mods.erebus.smoothie.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.erebus.smoothie.streamRecipes()
    ```
