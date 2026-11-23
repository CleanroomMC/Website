---
title: Melting Crucible (Immersive Technology)
description: Converts an input itemstack into an output fluidstack after a given amount of time and energy in a multiblock structure.
sidebar:
  label: Melting Crucible
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/MeltingCrucible.java
---

## Description

Converts an input itemstack into an output fluidstack after a given amount of time and energy in a multiblock structure.

## Identifier

The identifier `mods.immersivetech.melting_crucible` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.immersivetech.meltingcrucible
mods.immersivetech.meltingCrucible
mods.immersivetech.MeltingCrucible
mods.immersivetech.melting_crucible/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivetech.melting_crucible.add(MeltingCrucibleRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Melting Crucible also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivetech.melting_crucible.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the energy used in total IF consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.MeltingCrucibleRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.melting_crucible.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidOutput(fluid('hot_spring_water'))
    .time(100)
    .register()

mods.immersivetech.melting_crucible.recipeBuilder()
    .input(item('minecraft:clay') * 8)
    .fluidOutput(fluid('lava') * 50)
    .time(50)
    .energy(5000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivetech.melting_crucible.remove(MeltingCrucibleRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivetech.melting_crucible.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersivetech.melting_crucible.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivetech.melting_crucible.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.melting_crucible.removeByInput(item('minecraft:cobblestone'))
mods.immersivetech.melting_crucible.removeByOutput(fluid('moltensalt'))
mods.immersivetech.melting_crucible.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivetech.melting_crucible.streamRecipes()
    ```
