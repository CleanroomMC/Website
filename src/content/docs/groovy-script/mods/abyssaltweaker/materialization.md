---
title: Materialization (Abyssal Tweaker)
description: Turns Crystals from a Crystal Bag into an output item.
sidebar:
  label: Materialization
source_code_link: https://github.com/TeamDimensional/AbyssalTweaker/blob/master/src/main/java/com/teamdimensional/abyssaltweaker/compat/groovyscript/RegistryMaterialization.java
---

## Description

Turns Crystals from a Crystal Bag into an output item.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The Materializer compatibility requires that all input items are Abyssalcraft crystals. This is checked via looking at the first entry of getMatchingStacks, which is then used as the input item. This means the IIngredient used should be obtained via the item Object Mapper.

</details>

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.abyssaltweaker.materialization/* Used as page default */
mods.abyssaltweaker.Materialization
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Materialization also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.abyssaltweaker.materialization.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shinoow.abyssalcraft.api.recipe.Materialization`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.abyssaltweaker.materialization.recipeBuilder()
    .input(item('abyssalcraft:coralium_crystal'))
    .output(item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.abyssaltweaker.materialization.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.abyssaltweaker.materialization.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.abyssaltweaker.materialization.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.abyssaltweaker.materialization.removeByInput(item('abyssalcraft:phosphorus_crystal'))
mods.abyssaltweaker.materialization.removeByOutput(item('minecraft:bone'))
mods.abyssaltweaker.materialization.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.abyssaltweaker.materialization.streamRecipes()
    ```
