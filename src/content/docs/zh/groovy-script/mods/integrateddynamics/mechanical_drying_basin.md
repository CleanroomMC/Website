---
title: Mechanical Drying Basin (Integrated Dynamics)
description: Takes either an item or fluid input and gives either an item or fluid output after a duration.
sidebar:
  label: Mechanical Drying Basin
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/integrateddynamics/MechanicalDryingBasin.java
---

## Description

Takes either an item or fluid input and gives either an item or fluid output after a duration.

## Identifier

Refer to this via any of the following:

```groovy {5}
mods.id.mechanical_drying_basin
mods.id.mechanicaldryingbasin
mods.id.mechanicalDryingBasin
mods.id.MechanicalDryingBasin
mods.integrateddynamics.mechanical_drying_basin/* Used as page default */
mods.integrateddynamics.mechanicaldryingbasin
mods.integrateddynamics.mechanicalDryingBasin
mods.integrateddynamics.MechanicalDryingBasin
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Mechanical Drying Basin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.integrateddynamics.mechanical_drying_basin.recipeBuilder()</summary>

- `boolean`. Sets if the recipe is added to the basic (Drying Basin) machine. (Default `false`).

    ```groovy
    basic()
    basic(boolean)
    ```

- `int`. Sets the time in ticks the recipe takes to process. (Default `10`).

    ```groovy
    duration(int)
    ```

- `boolean`. Sets if the recipe is added to the mechanical (Mechanical Drying Basin) machine. (Default `true`).

    ```groovy
    mechanical()
    mechanical(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.cyclops.cyclopscore.recipe.custom.api.IRecipe<org.cyclops.cyclopscore.recipe.custom.component.IngredientAndFluidStackRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.IngredientAndFluidStackRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.DurationRecipeProperties>`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.integrateddynamics.mechanical_drying_basin.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('water') * 50)
    .fluidOutput(fluid('lava') * 20000)
    .duration(300)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.integrateddynamics.mechanical_drying_basin.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.integrateddynamics.mechanical_drying_basin.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.integrateddynamics.mechanical_drying_basin.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.integrateddynamics.mechanical_drying_basin.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.integrateddynamics.mechanical_drying_basin.streamRecipes()
    ```
