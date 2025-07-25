---
title: "Squeezer"
titleTemplate: "Integrated Dynamics | CleanroomMC"
description: "Takes an item and can give up to 3 chanced item outputs and a fluid."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/integrateddynamics/Squeezer.java"
---

# Squeezer (Integrated Dynamics)

## Description

Takes an item and can give up to 3 chanced item outputs and a fluid.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.id.squeezer
mods.id.Squeezer
mods.integrateddynamics.squeezer/* Used as page default */ // [!code focus]
mods.integrateddynamics.Squeezer
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.integrateddynamics.squeezer.add(IRecipe<IngredientRecipeComponent, IngredientsAndFluidStackRecipeComponent, DummyPropertiesComponent>)
    ```


### Recipe Builder

Just like other recipe types, the Squeezer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.integrateddynamics.squeezer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `boolean`. Sets if the recipe is added to the basic (Squeezer) machine. (Default `true`).

    ```groovy:no-line-numbers
    basic()
    basic(boolean)
    ```

- `List<IngredientRecipeComponent>`. Sets the possible item outputs and chance of those outputs being dropped. Requires greater than or equal to 0 and less than or equal to 3.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack, float)
    ```

- `int`. Sets the time in ticks the recipe takes to process in the Mechanical Squeezer, has no effect on the Squeezer. (Default `10`).

    ```groovy:no-line-numbers
    duration(int)
    ```

- `boolean`. Sets if the recipe is added to the mechanical (Mechanical Squeezer) machine. (Default `false`).

    ```groovy:no-line-numbers
    mechanical()
    mechanical(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.cyclops.cyclopscore.recipe.custom.api.IRecipe<org.cyclops.cyclopscore.recipe.custom.component.IngredientRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.IngredientsAndFluidStackRecipeComponent, org.cyclops.cyclopscore.recipe.custom.component.DummyPropertiesComponent>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.integrateddynamics.squeezer.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:clay_ball'), 1F)
    .output(item('minecraft:clay_ball') * 2, 0.7F)
    .output(item('minecraft:clay_ball') * 10, 0.2F)
    .fluidOutput(fluid('lava') * 2000)
    .mechanical()
    .duration(5)
    .register()

mods.integrateddynamics.squeezer.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'), 0.5F)
    .register()

mods.integrateddynamics.squeezer.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidOutput(fluid('lava') * 10)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.integrateddynamics.squeezer.remove(IRecipe<IngredientRecipeComponent, IngredientsAndFluidStackRecipeComponent, DummyPropertiesComponent>)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.integrateddynamics.squeezer.removeByInput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.integrateddynamics.squeezer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.integrateddynamics.squeezer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.integrateddynamics.squeezer.streamRecipes()
    ```
