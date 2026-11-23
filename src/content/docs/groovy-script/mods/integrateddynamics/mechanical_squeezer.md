---
title: Mechanical Squeezer (Integrated Dynamics)
description: Takes an item and can give up to 3 chanced item outputs and a fluid.
sidebar:
  label: Mechanical Squeezer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/integrateddynamics/MechanicalSqueezer.java
---

## Description

Takes an item and can give up to 3 chanced item outputs and a fluid.

## Identifier

The identifier `mods.integrateddynamics.mechanical_squeezer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.id.mechanicalsqueezer
mods.id.mechanicalSqueezer
mods.id.MechanicalSqueezer
mods.id.mechanical_squeezer
mods.integrateddynamics.mechanicalsqueezer
mods.integrateddynamics.mechanicalSqueezer
mods.integrateddynamics.MechanicalSqueezer
mods.integrateddynamics.mechanical_squeezer/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.integrateddynamics.mechanical_squeezer.add(IRecipe<IngredientRecipeComponent, IngredientsAndFluidStackRecipeComponent, DurationRecipeProperties>)
    ```

### Recipe Builder

Just like other recipe types, the Mechanical Squeezer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.integrateddynamics.mechanical_squeezer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `boolean`. Sets if the recipe is added to the basic (Squeezer) machine. (Default `false`).

    ```groovy
    basic()
    basic(boolean)
    ```

- `List<IngredientRecipeComponent>`. Sets the possible item outputs and chance of those outputs being dropped. Requires greater than or equal to 0 and less than or equal to 3.

    ```groovy
    output(ItemStack)
    output(ItemStack, float)
    ```

- `int`. Sets the time in ticks the recipe takes to process in the Mechanical Squeezer, has no effect on the Squeezer. (Default `10`).

    ```groovy
    duration(int)
    ```

- `boolean`. Sets if the recipe is added to the mechanical (Mechanical Squeezer) machine. (Default `true`).

    ```groovy
    mechanical()
    mechanical(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.cyclops.cyclopscore.recipe.custom.api.IRecipe<org.cyclops.cyclopscore.recipe.custom.component.IngredientRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.IngredientsAndFluidStackRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.DummyPropertiesComponent>`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.integrateddynamics.mechanical_squeezer.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay') * 16, 0.9F)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.integrateddynamics.mechanical_squeezer.remove(IRecipe<IngredientRecipeComponent, IngredientsAndFluidStackRecipeComponent, DurationRecipeProperties>)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.integrateddynamics.mechanical_squeezer.removeByInput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.integrateddynamics.mechanical_squeezer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.integrateddynamics.mechanical_squeezer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.integrateddynamics.mechanical_squeezer.streamRecipes()
    ```
