---
title: Coke Oven (Immersive Engineering)
description: Converts an input itemstack into an output itemstack over time, producing a given amount of creosote oil.
sidebar:
  label: Coke Oven
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/CokeOven.java
---

## Description

Converts an input itemstack into an output itemstack over time, producing a given amount of creosote oil.

## Identifier

Refer to this via any of the following:

```groovy {5}
mods.ie.coke_oven
mods.ie.cokeoven
mods.ie.cokeOven
mods.ie.CokeOven
mods.immersiveengineering.coke_oven/* Used as page default */
mods.immersiveengineering.cokeoven
mods.immersiveengineering.cokeOven
mods.immersiveengineering.CokeOven
```

## Adding Recipes

- Adds recipes in the format `output`, `input`, `time`, `creosoteOutput`:

    ```groovy
    mods.immersiveengineering.coke_oven.add(ItemStack, IIngredient, int, int)
    ```

### Recipe Builder

Just like other recipe types, the Coke Oven also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.immersiveengineering.coke_oven.recipeBuilder()</summary>

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

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the amount of Creosote Oil output. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    creosote(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.CokeOvenRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.coke_oven.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .time(100)
    .creosote(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.coke_oven.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.coke_oven.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.coke_oven.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.coke_oven.removeByInput(item('minecraft:log'))
mods.immersiveengineering.coke_oven.removeByOutput(item('immersiveengineering:material:6'))
mods.immersiveengineering.coke_oven.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.coke_oven.streamRecipes()
    ```
