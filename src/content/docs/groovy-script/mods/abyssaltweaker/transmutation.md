---
title: Transmutation (Abyssal Tweaker)
description: Turns an input ItemStack into an output ItemStack.
sidebar:
  label: Transmutation
source_code_link: https://github.com/TeamDimensional/AbyssalTweaker/blob/master/src/main/java/com/teamdimensional/abyssaltweaker/compat/groovyscript/RegistryTransmutation.java
---

## Description

Turns an input ItemStack into an output ItemStack.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.abyssaltweaker.transmutation/* Used as page default */
mods.abyssaltweaker.Transmutation
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Transmutation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.abyssaltweaker.transmutation.recipeBuilder()</summary>

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

- `float`. Sets the XP amount output that is given out when the recipe is executed. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy
    xp(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shinoow.abyssalcraft.api.recipe.Transmutation`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.abyssaltweaker.transmutation.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .xp(0.5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.abyssaltweaker.transmutation.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.abyssaltweaker.transmutation.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.abyssaltweaker.transmutation.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.abyssaltweaker.transmutation.removeByInput(item('minecraft:diamond'))
mods.abyssaltweaker.transmutation.removeByOutput(item('minecraft:flint'))
mods.abyssaltweaker.transmutation.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.abyssaltweaker.transmutation.streamRecipes()
    ```
