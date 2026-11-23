---
title: Crusher (Immersive Engineering)
description: Converts an input itemstack into an output itemstack, consuming energy.
sidebar:
  label: Crusher
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Crusher.java
---

## Description

Converts an input itemstack into an output itemstack, consuming energy.

## Identifier

Refer to this via any of the following:

```groovy {3}
mods.ie.crusher
mods.ie.Crusher
mods.immersiveengineering.crusher/* Used as page default */
mods.immersiveengineering.Crusher
```

## Adding Recipes

- Adds recipes in the format `output`, `input`, `energy`:

    ```groovy
    mods.immersiveengineering.crusher.add(ItemStack, IIngredient, int)
    ```

### Recipe Builder

Just like other recipe types, the Crusher also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.immersiveengineering.crusher.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the amount of power consumed to complete the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    energy(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.CrusherRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.crusher.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .energy(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.crusher.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.crusher.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.crusher.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.crusher.removeByInput(item('immersiveengineering:material:7'))
mods.immersiveengineering.crusher.removeByOutput(item('minecraft:sand'))
mods.immersiveengineering.crusher.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.crusher.streamRecipes()
    ```
