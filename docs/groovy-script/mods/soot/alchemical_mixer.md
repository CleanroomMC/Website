---
title: "Alchemical Mixer"
titleTemplate: "Soot | CleanroomMC"
description: "The Alchemical Mixer is a device that can be used to mix fluids and ash to create new fluids. The Mixer requires a globe to be placed on top of it, and pedestals to be placed around it. The Mixer will then mix the fluids and ash in the pedestals to create new fluids."
source_code_link: "https://github.com/Ender-Development/Soot-Extended-Life/blob/master/src/main/java/soot/compat/groovyscript/AlchemicalMixer.java"
---

# Alchemical Mixer (Soot)

## Description

The Alchemical Mixer is a device that can be used to mix fluids and ash to create new fluids. The Mixer requires a globe to be placed on top of it, and pedestals to be placed around it. The Mixer will then mix the fluids and ash in the pedestals to create new fluids.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.soot.alchemical_mixer/* Used as page default */ // [!code focus]
mods.soot.alchemicalmixer
mods.soot.alchemicalMixer
mods.soot.AlchemicalMixer
```


## Adding Recipes

### Recipe Builder

Just like other recipe types, the Alchemical Mixer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details mods.soot.alchemical_mixer.recipeBuilder() {open id="abstract"}
- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 2 and less than or equal to 3.

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

- `AspectList.AspectRangeList`. Sets what aspects are part of the recipe and their minimum/maximum values. Requires not empty.

    ```groovy:no-line-numbers
    setAspect(String, int, int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `soot.recipe.RecipeAlchemicalMixer`).

    ```groovy:no-line-numbers
    register()
    ```

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.soot.alchemical_mixer.recipeBuilder()
    .fluidInput(fluid('water') * 10, fluid('lava') * 10, fluid('iron') * 16, fluid('gold') * 16)
    .fluidOutput(fluid('dawnstone') * 16)
    .setAspect('dawnstone', 1, 2)
    .setAspect('copper', 2, 3)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.soot.alchemical_mixer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.soot.alchemical_mixer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.soot.alchemical_mixer.removeByOutput(fluid('antimony'))
mods.soot.alchemical_mixer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.soot.alchemical_mixer.streamRecipes()
    ```
