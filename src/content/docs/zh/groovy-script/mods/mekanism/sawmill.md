---
title: Sawmill (Mekanism)
description: Converts an input itemstack into an output itemstack, with an optional additional output.
sidebar:
  label: Sawmill
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Sawmill.java
---

## Description

Converts an input itemstack into an output itemstack, with an optional additional output.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mekanism.sawmill/* Used as page default */
mods.mekanism.Sawmill
```

## Adding Recipes

- Adds recipes in the format `ingredient`, `output`, `secondary`, `chance`:

    ```groovy
    mods.mekanism.sawmill.add(IIngredient, ItemStack, ItemStack, double)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.sawmill.add(item('minecraft:diamond_block'), item('minecraft:diamond') * 9, item('minecraft:clay_ball'), 0.7)
```

</details>

### Recipe Builder

Just like other recipe types, the Sawmill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mekanism.sawmill.recipeBuilder()</summary>

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

- `ItemStack`. Sets the extra itemstack produced by the recipe. (Default `ItemStack.EMPTY`).

    ```groovy
    ```

- `double`. Sets the chance the extra itemstack has to be produced. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0`).

    ```groovy
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.SawmillRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.sawmill.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:diamond') * 9)
    .extra(item('minecraft:clay_ball'))
    .register()
```

</details>

</details>

## Removing Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy
    mods.mekanism.sawmill.add(IIngredient, ItemStack)
    ```

- Adds recipes in the format `ingredient`, `output`, `secondary`:

    ```groovy
    mods.mekanism.sawmill.add(IIngredient, ItemStack, ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.sawmill.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.sawmill.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.sawmill.removeByInput(item('minecraft:ladder'))
mods.mekanism.sawmill.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.sawmill.streamRecipes()
    ```
