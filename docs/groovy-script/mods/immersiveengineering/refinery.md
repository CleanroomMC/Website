---
title: "Refinery"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts 2 input fluidstacks into an output fluidstack, consuming power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Refinery.java"
---

# Refinery (Immersive Engineering)

## Description

Converts 2 input fluidstacks into an output fluidstack, consuming power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.ie.refinery
mods.ie.Refinery
mods.immersiveengineering.refinery/* Used as page default */ // [!code focus]
mods.immersiveengineering.Refinery
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersiveengineering.refinery.add(RefineryRecipe)
    ```

- Adds recipes in the format `output`, `input0`, `input1`, `energy`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.refinery.add(FluidStack, FluidStack, FluidStack, int)
    ```


### Recipe Builder

Just like other recipe types, the Refinery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.immersiveengineering.refinery.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 2.

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

- `int`. Sets the amount of power consumed to complete the recipe. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.RefineryRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.refinery.recipeBuilder()
    .fluidInput(fluid('water'), fluid('water'))
    .fluidOutput(fluid('lava'))
    .energy(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersiveengineering.refinery.remove(RefineryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.refinery.removeByInput(FluidStack, FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.refinery.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.refinery.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.refinery.removeByInput(fluid('plantoil'), fluid('ethanol'))
mods.immersiveengineering.refinery.removeByOutput(fluid('biodiesel'))
mods.immersiveengineering.refinery.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.refinery.streamRecipes()
    ```
