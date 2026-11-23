---
title: Enchanter (Ender IO)
description: Convert an input itemstack, player xp, and either a written book and lapis or a custom alternative into an enchanted book.
sidebar:
  label: Enchanter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/Enchanter.java
---

## Description

Convert an input itemstack, player xp, and either a written book and lapis or a custom alternative into an enchanted book.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.enderio.enchanter/* Used as page default */
mods.enderio.Enchanter
mods.eio.enchanter
mods.eio.Enchanter
```

## Adding Recipes

- Adds recipes in the format `enchantment`, `input`:

    ```groovy
    mods.enderio.enchanter.add(Enchantment, IIngredient)
    ```

### Recipe Builder

Just like other recipe types, the Enchanter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.enderio.enchanter.recipeBuilder()</summary>

- `IIngredient`. Sets the item used in the book slot. Requires not null. (Default `item('minecraft:writable_book')`).

    ```groovy
    customBook(IIngredient)
    ```

- `IIngredient`. Sets the key item to create the enchantment. Requires not null.

    ```groovy
    input(IIngredient)
    ```

- `IIngredient`. Sets the item used in the lapis slot. Requires not null. (Default `ore('gemLapis')`).

    ```groovy
    customLapis(IIngredient)
    ```

- `int`. Sets the amount of the input item used to create a single level of enchantment. Requires greater than 0. (Default `0`).

    ```groovy
    amountPerLevel(int)
    ```

- `Enchantment`. Sets the enchantment applied to the output book. Requires not null.

    ```groovy
    enchantment(Enchantment)
    ```

- `double`. Sets the experience cost multiplier per enchantment level created. (Default `1`).

    ```groovy
    xpCostMultiplier(double)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `crazypants.enderio.base.recipe.enchanter.EnchanterRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.enchanter.recipeBuilder()
    .enchantment(enchantment('minecraft:unbreaking'))
    .input(item('minecraft:diamond'))
    .register()

mods.enderio.enchanter.recipeBuilder()
    .enchantment(enchantment('minecraft:sharpness'))
    .input(item('minecraft:clay'))
    .amountPerLevel(3)
    .xpCostMultiplier(2)
    .customBook(item('minecraft:book'))
    .customLapis(item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes entries by enchantment:

    ```groovy
    mods.enderio.enchanter.remove(Enchantment)
    ```

- Removes all registered recipes:

    ```groovy
    mods.enderio.enchanter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.enchanter.remove(enchantment('minecraft:mending'))
mods.enderio.enchanter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.enderio.enchanter.streamRecipes()
    ```
