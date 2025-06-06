---
title: "Still"
titleTemplate: "Soot | CleanroomMC"
description: "The Still is a device that can be used to distill fluids. The Still requires a heat source to operate."
source_code_link: "https://github.com/Ender-Development/Soot-Extended-Life/blob/master/src/main/java/soot/compat/groovyscript/Still.java"
---

# Still (Soot)

## Description

The Still is a device that can be used to distill fluids. The Still requires a heat source to operate.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.soot.still/* Used as page default */ // [!code focus]
mods.soot.Still
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Still also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.soot.still.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets how many of the catalyst item is consumed in the recipe. Requires greater than or equal to 1 and less than or equal to 1000. (Default `1`).

    ```groovy:no-line-numbers
    catalystConsumed(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `soot.recipe.RecipeStill`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.soot.still.recipeBuilder()
    .fluidInput(fluid('water') * 10)
    .input(item('minecraft:iron_ingot'))
    .fluidOutput(fluid('lava') * 10)
    .catalystConsumed(10)
    .register()

mods.soot.still.recipeBuilder()
    .fluidInput(fluid('iron') * 10)
    .fluidOutput(fluid('copper') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.soot.still.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.soot.still.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.soot.still.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.soot.still.removeByInput(fluid('boiling_wort'))
mods.soot.still.removeByOutput(fluid('inner_fire'))
mods.soot.still.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.soot.still.streamRecipes()
    ```
