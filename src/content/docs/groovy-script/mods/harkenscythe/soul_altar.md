---
title: "Altar of Souls (Harken Scythe: Resharpened)"
description: Converts an item into another item by using soul essence as fuel.
sidebar:
  label: Altar of Souls
source_code_link: https://github.com/Elite-Modding-Team/HarkenScytheResharpened/blob/main/src/main/java/mod/emt/harkenscythe/compat/groovyscript/HSGroovyScriptSoulAltarRecipes.java
---

## Description

Converts an item into another item by using soul essence as fuel.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.harkenscythe.soul_altar/* Used as page default */
mods.harkenscythe.soulaltar
mods.harkenscythe.soulAltar
mods.harkenscythe.SoulAltar
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Altar of Souls also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.harkenscythe.soul_altar.recipeBuilder()</summary>

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

- `int`. Required souls. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    requiredSouls(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mod.emt.harkenscythe.recipe.HSRecipeSoulAltar`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.harkenscythe.soul_altar.recipeBuilder()
    .input(item('minecraft:gravel'))
    .output(item('minecraft:sand'))
    .requiredSouls(69)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.harkenscythe.soul_altar.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.harkenscythe.soul_altar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.harkenscythe.soul_altar.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.harkenscythe.soul_altar.removeByInput(item('minecraft:cookie'))
mods.harkenscythe.soul_altar.removeByOutput(item('harkenscythe:soul_cake'))
mods.harkenscythe.soul_altar.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.harkenscythe.soul_altar.streamRecipes()
    ```
