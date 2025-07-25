---
title: "Melting"
titleTemplate: "Tinkers' Construct | CleanroomMC"
description: "Modifies what items can be melted down in the Smeltery."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/Melting.java"
---

# Melting (Tinkers' Construct)

## Description

Modifies what items can be melted down in the Smeltery.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.tconstruct.melting/* Used as page default */ // [!code focus]
mods.tconstruct.Melting
mods.tinkersconstruct.melting
mods.tinkersconstruct.Melting
mods.ticon.melting
mods.ticon.Melting
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.tconstruct.melting.add(MeltingRecipe)
    ```

- Adds a new recipe in the format `input`, `output`, `time`:

    ```groovy:no-line-numbers
    mods.tconstruct.melting.add(IIngredient, FluidStack, int)
    ```


### Recipe Builder

Just like other recipe types, the Melting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.tconstruct.melting.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Required temperature for melting. Also determines the speed of the melt. Requires greater than or equal to 1. (Default `300`).

    ```groovy:no-line-numbers
    time(int)
    temperature(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `slimeknights.tconstruct.library.smeltery.MeltingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.melting.recipeBuilder()
    .input(item('minecraft:gravel'))
    .fluidOutput(fluid('lava') * 25)
    .time(80)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.tconstruct.melting.remove(MeltingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.tconstruct.melting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given input and the given output:

    ```groovy:no-line-numbers
    mods.tconstruct.melting.removeByInputAndOutput(IIngredient, FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.tconstruct.melting.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.tconstruct.melting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.tconstruct.melting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.tconstruct.melting.streamRecipes()
    ```
