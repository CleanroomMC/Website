---
title: "Squeezer"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts an input itemstack into either an output itemstack, fluidstack, or both, using energy."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Squeezer.java"
---

# Squeezer (Immersive Engineering)

## Description

Converts an input itemstack into either an output itemstack, fluidstack, or both, using energy.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.ie.squeezer
mods.ie.Squeezer
mods.immersiveengineering.squeezer/* Used as page default */ // [!code focus]
mods.immersiveengineering.Squeezer
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.add(SqueezerRecipe)
    ```

- Adds recipes in the format `fluidOutput`, `itemOutput`, `input`, `energy`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.add(FluidStack, ItemStack, IIngredient, int)
    ```


### Recipe Builder

Just like other recipe types, the Squeezer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the amount of power consumed to complete the recipe. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.SqueezerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.squeezer.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .fluidOutput(fluid('lava'))
    .energy(100)
    .register()

mods.immersiveengineering.squeezer.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .energy(100)
    .register()

mods.immersiveengineering.squeezer.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('water'))
    .energy(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.remove(SqueezerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.removeByOutput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.removeByOutput(FluidStack, ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.squeezer.removeByInput(item('minecraft:wheat_seeds'))
mods.immersiveengineering.squeezer.removeByOutput(fluid('plantoil'))
mods.immersiveengineering.squeezer.removeByOutput(item('immersiveengineering:material:18'))
mods.immersiveengineering.squeezer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.squeezer.streamRecipes()
    ```
