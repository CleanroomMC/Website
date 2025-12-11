---
title: "Mechanical Drying Basin"
titleTemplate: "Integrated Dynamics | CleanroomMC"
description: "Takes either an item or fluid input and gives either an item or fluid output after a duration."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/integrateddynamics/MechanicalDryingBasin.java"
---

# Mechanical Drying Basin (Integrated Dynamics)

## Description

Takes either an item or fluid input and gives either an item or fluid output after a duration.

## Identifier

The identifier `mods.integrateddynamics.mechanical_drying_basin` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.id.mechanicaldryingbasin
mods.id.mechanicalDryingBasin
mods.id.MechanicalDryingBasin
mods.id.mechanical_drying_basin
mods.integrateddynamics.mechanicaldryingbasin
mods.integrateddynamics.mechanicalDryingBasin
mods.integrateddynamics.MechanicalDryingBasin
mods.integrateddynamics.mechanical_drying_basin/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.integrateddynamics.mechanical_drying_basin.add(IRecipe<IngredientAndFluidStackRecipeComponent, IngredientAndFluidStackRecipeComponent, DurationRecipeProperties>)
    ```

### Recipe Builder

Just like other recipe types, the Mechanical Drying Basin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.integrateddynamics.mechanical_drying_basin.recipeBuilder()
    ```

---

- `boolean`. Sets if the recipe is added to the basic (Drying Basin) machine. (Default `false`).

    ```groovy:no-line-numbers
    basic()
    basic(boolean)
    ```

- `int`. Sets the time in ticks the recipe takes to process. (Default `10`).

    ```groovy:no-line-numbers
    duration(int)
    ```

- `boolean`. Sets if the recipe is added to the mechanical (Mechanical Drying Basin) machine. (Default `true`).

    ```groovy:no-line-numbers
    mechanical()
    mechanical(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.cyclops.cyclopscore.recipe.custom.api.IRecipe<org.cyclops.cyclopscore.recipe.custom.component.IngredientAndFluidStackRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.IngredientAndFluidStackRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.DurationRecipeProperties>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.integrateddynamics.mechanical_drying_basin.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('water') * 50)
    .fluidOutput(fluid('lava') * 20000)
    .duration(300)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.integrateddynamics.mechanical_drying_basin.remove(IRecipe<IngredientAndFluidStackRecipeComponent, IngredientAndFluidStackRecipeComponent, DurationRecipeProperties>)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.integrateddynamics.mechanical_drying_basin.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.integrateddynamics.mechanical_drying_basin.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.integrateddynamics.mechanical_drying_basin.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.integrateddynamics.mechanical_drying_basin.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.integrateddynamics.mechanical_drying_basin.streamRecipes()
    ```
