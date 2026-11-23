---
title: Compressor (Avaritia)
description: Converts any number of a single item into an output itemstack.
sidebar:
  label: Compressor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/avaritia/Compressor.java
---

## Description

Converts any number of a single item into an output itemstack.

## Identifier

The identifier `mods.avaritia.compressor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.avaritia.compressor/* Used as page default */
mods.avaritia.Compressor
```

</details>

## Adding Recipes

- Adds recipes in the format `output`, `input`, `cost`:

    ```groovy
    mods.avaritia.compressor.add(ItemStack, IIngredient, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.avaritia.compressor.add(item('minecraft:nether_star'), item('minecraft:clay_ball'), 100)
```

</details>

### Recipe Builder

Just like other recipe types, the Compressor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.avaritia.compressor.recipeBuilder()
    ```

---

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

- `int`. Sets the amount of items required to convert. (Default `300`).

    ```groovy
    input(IIngredient)
    inputCount(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `morph.avaritia.recipe.compressor.ICompressorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.avaritia.compressor.recipeBuilder()
    .input(item('minecraft:clay_ball') * 100)
    .output(item('minecraft:nether_star'))
    .inputCount(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.avaritia.compressor.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.avaritia.compressor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.avaritia.compressor.removeByOutput(item('avaritia:singularity', 0))
mods.avaritia.compressor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.avaritia.compressor.streamRecipes()
    ```
