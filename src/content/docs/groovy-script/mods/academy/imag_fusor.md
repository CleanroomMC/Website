---
title: Imag Fusor (AcademyCraft)
description: Converts one item and defined amount of Imag Phase Liquid into one item.
sidebar:
  label: Imag Fusor
source_code_link: https://github.com/yor42/AcademyCraft/blob/master/src/main/java/cn/academy/support/groovyscript/modules/ImagFusor.java
---

## Description

Converts one item and defined amount of Imag Phase Liquid into one item.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.academy.imag_fusor/* Used as page default */
mods.academy.imagfusor
mods.academy.imagFusor
mods.academy.ImagFusor
```

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.academy.imag_fusor.add(ImagFusorRecipes.IFRecipe)
    ```

- Adds recipes in the format `output`, `input`, `amount of Imag Phase Liquid`:

    ```groovy
    mods.academy.imag_fusor.addRecipe(ItemStack, IIngredient, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.academy.imag_fusor.addRecipe(item('academy:crystal_normal'), item('academy:crystal_low'), 3000)
```

</details>

### Recipe Builder

Just like other recipe types, the Imag Fusor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.academy.imag_fusor.recipeBuilder()</summary>

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

- `int`. Amount of Imag Phase Liquid consumed for this recipe. Requires greater than 0. (Default `1000`).

    ```groovy
    fluid(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cn.academy.crafting.ImagFusorRecipes$IFRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.academy.imag_fusor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .fluid(1000)
    .register()

mods.academy.imag_fusor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .fluid(3000)
    .register()

mods.academy.imag_fusor.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.academy.imag_fusor.remove(ImagFusorRecipes.IFRecipe)
    ```

- Removes an entry matching the given `ItemStack`:

    ```groovy
    mods.academy.imag_fusor.removeByInput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.academy.imag_fusor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.academy.imag_fusor.removeByInput(item('academy:crystal_normal'))
mods.academy.imag_fusor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.academy.imag_fusor.streamRecipes()
    ```
