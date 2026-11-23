---
title: Squeezer (Immersive Engineering)
description: Converts an input itemstack into either an output itemstack, fluidstack, or both, using energy.
sidebar:
  label: Squeezer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Squeezer.java
---

## Description

Converts an input itemstack into either an output itemstack, fluidstack, or both, using energy.

## Identifier

The identifier `mods.immersiveengineering.squeezer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ie.squeezer
mods.ie.Squeezer
mods.immersiveengineering.squeezer/* Used as page default */
mods.immersiveengineering.Squeezer
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersiveengineering.squeezer.add(SqueezerRecipe)
    ```

- Adds recipes in the format `fluidOutput`, `itemOutput`, `input`, `energy`:

    ```groovy
    mods.immersiveengineering.squeezer.add(FluidStack, ItemStack, IIngredient, int)
    ```

### Recipe Builder

Just like other recipe types, the Squeezer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersiveengineering.squeezer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the amount of power consumed to complete the recipe. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.SqueezerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.squeezer.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .fluidOutput(fluid('lava'))
    .energy(100)
    .register()

mods.immersiveengineering.squeezer.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .energy(100)
    .register()

mods.immersiveengineering.squeezer.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('water'))
    .energy(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersiveengineering.squeezer.remove(SqueezerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.squeezer.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.squeezer.removeByOutput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.squeezer.removeByOutput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.squeezer.removeByOutput(FluidStack, ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.squeezer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.squeezer.removeByInput(item('minecraft:wheat_seeds'))
mods.immersiveengineering.squeezer.removeByOutput(item('immersiveengineering:material:18'))
mods.immersiveengineering.squeezer.removeByOutput(fluid('plantoil'))
mods.immersiveengineering.squeezer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.squeezer.streamRecipes()
    ```
