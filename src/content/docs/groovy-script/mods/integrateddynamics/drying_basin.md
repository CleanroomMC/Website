---
title: Drying Basin (Integrated Dynamics)
description: Takes either an item or fluid input and gives either an item or fluid output after a duration.
sidebar:
  label: Drying Basin
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/integrateddynamics/DryingBasin.java
---

## Description

Takes either an item or fluid input and gives either an item or fluid output after a duration.

## Identifier

The identifier `mods.integrateddynamics.drying_basin` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.id.dryingbasin
mods.id.dryingBasin
mods.id.DryingBasin
mods.id.drying_basin
mods.integrateddynamics.dryingbasin
mods.integrateddynamics.dryingBasin
mods.integrateddynamics.DryingBasin
mods.integrateddynamics.drying_basin/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.integrateddynamics.drying_basin.add(IRecipe<IngredientAndFluidStackRecipeComponent, IngredientAndFluidStackRecipeComponent, DurationRecipeProperties>)
    ```

### Recipe Builder

Just like other recipe types, the Drying Basin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.integrateddynamics.drying_basin.recipeBuilder()
    ```

---

- `boolean`. Sets if the recipe is added to the basic (Drying Basin) machine. (Default `true`).

    ```groovy
    basic()
    basic(boolean)
    ```

- `int`. Sets the time in ticks the recipe takes to process. (Default `10`).

    ```groovy
    duration(int)
    ```

- `boolean`. Sets if the recipe is added to the mechanical (Mechanical Drying Basin) machine. (Default `false`).

    ```groovy
    mechanical()
    mechanical(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.cyclops.cyclopscore.recipe.custom.api.IRecipe<org.cyclops.cyclopscore.recipe.custom.component.IngredientAndFluidStackRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.IngredientAndFluidStackRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.DurationRecipeProperties>`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.integrateddynamics.drying_basin.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .fluidInput(fluid('water') * 500)
    .fluidOutput(fluid('lava') * 2000)
    .mechanical()
    .duration(5)
    .register()

mods.integrateddynamics.drying_basin.recipeBuilder()
    .output(item('minecraft:clay'))
    .fluidInput(fluid('water') * 2000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.integrateddynamics.drying_basin.remove(IRecipe<IngredientAndFluidStackRecipeComponent, IngredientAndFluidStackRecipeComponent, DurationRecipeProperties>)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.integrateddynamics.drying_basin.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.integrateddynamics.drying_basin.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.integrateddynamics.drying_basin.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.integrateddynamics.drying_basin.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.integrateddynamics.drying_basin.streamRecipes()
    ```
