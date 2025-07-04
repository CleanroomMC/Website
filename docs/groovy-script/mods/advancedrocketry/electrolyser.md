---
title: "Electrolyser"
titleTemplate: "Advanced Rocketry | CleanroomMC"
description: "Converts an input fluid into up to 2 output fluids, consuming RF."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/advancedrocketry/Electrolyser.java"
---

# Electrolyser (Advanced Rocketry)

## Description

Converts an input fluid into up to 2 output fluids, consuming RF.

:::::::::: details Warning {open id="warning"}
The 'chances' used with the recipe outputs are actually output weights. For example, setting 'chance' to 0.1 will set the output's chance to 1, unless other outputs add up to the weight of 0.9. The output chances will also not do anything unless 'outputSize' is set to a number greater than 0.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.advancedrocketry.electrolyser/* Used as page default */ // [!code focus]
mods.advancedrocketry.Electrolyser
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.advancedrocketry.electrolyser.add(R)
    ```


### Recipe Builder

Just like other recipe types, the Electrolyser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.advancedrocketry.electrolyser.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time needed to perform the recipe in ticks. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Sets the power consumed by the recipe in RF/t. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    power(int)
    ```

- `int`. Sets the maximum amount of outputs produced by each recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    outputSize(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `zmaster587.libVulpes.interfaces.IRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.advancedrocketry.electrolyser.recipeBuilder()
    .fluidInput(fluid('lava') * 10)
    .fluidOutput(fluid('nitrogen') * 50)
    .power(50)
    .time(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.advancedrocketry.electrolyser.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.advancedrocketry.electrolyser.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.advancedrocketry.electrolyser.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.advancedrocketry.electrolyser.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.advancedrocketry.electrolyser.removeByInput(fluid('water'))
mods.advancedrocketry.electrolyser.removeByOutput(fluid('oxygen'))
mods.advancedrocketry.electrolyser.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.advancedrocketry.electrolyser.streamRecipes()
    ```
