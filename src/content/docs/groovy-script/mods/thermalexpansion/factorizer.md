---
title: Factorizer (Thermal Expansion)
description: Converts an input itemstack into an output itemstack, with the ability to undo the the recipe. Mainly used for compressing ingots into blocks and splitting blocks into ingots.
sidebar:
  label: Factorizer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Factorizer.java
---

## Description

Converts an input itemstack into an output itemstack, with the ability to undo the the recipe. Mainly used for compressing ingots into blocks and splitting blocks into ingots.

## Identifier

The identifier `mods.thermalexpansion.factorizer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.factorizer
mods.thermal.Factorizer
mods.thermalexpansion.factorizer/* Used as page default */
mods.thermalexpansion.Factorizer
```

</details>

## Adding Recipes

- Adds recipes in the format `combine`, `split`, `input`, `output`:

    ```groovy
    mods.thermalexpansion.factorizer.add(boolean, boolean, IIngredient, ItemStack)
    ```

### Recipe Builder

Just like other recipe types, the Factorizer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.factorizer.recipeBuilder()
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

- `boolean`. Sets the recipe to have an inverted version (input is output, output is input) in the split mode. (Default `false`).

    ```groovy
    split()
    split(boolean)
    ```

- `boolean`. Sets the recipe to have a version in the combine mode. (Default `false`).

    ```groovy
    combine()
    combine(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.device.FactorizerManager$FactorizerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.factorizer.recipeBuilder()
    .input(item('minecraft:clay') * 7)
    .output(item('minecraft:book') * 2)
    .combine()
    .split()
    .register()

mods.thermalexpansion.factorizer.recipeBuilder()
    .input(item('minecraft:planks:*') * 4)
    .output(item('minecraft:crafting_table'))
    .combine()
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes in the given mode, with `true` indicating split recipes, and `false` indicating combine recipes:

    ```groovy
    mods.thermalexpansion.factorizer.removeByType(boolean)
    ```

- Removes all recipes with the given IIngredient input for the given mode, with `true` indicating split recipes and `false` indicating combine recipes:

    ```groovy
    mods.thermalexpansion.factorizer.removeByInput(IIngredient)
    ```

- Removes all recipes with the given IIngredient input for the given mode, with `true` indicating split recipes and `false` indicating combine recipes:

    ```groovy
    mods.thermalexpansion.factorizer.removeByInput(boolean, IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.factorizer.removeByOutput(IIngredient)
    ```

- Removes all recipes with the given IIngredient output for the given mode, with `true` indicating split recipes and `false` indicating combine recipes:

    ```groovy
    mods.thermalexpansion.factorizer.removeByOutput(boolean, IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.factorizer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.factorizer.removeByType(true)
mods.thermalexpansion.factorizer.removeByInput(item('minecraft:coal:1'))
mods.thermalexpansion.factorizer.removeByInput(false, item('minecraft:diamond'))
mods.thermalexpansion.factorizer.removeByOutput(item('minecraft:emerald_block'))
mods.thermalexpansion.factorizer.removeByOutput(false, item('minecraft:coal:1'))
mods.thermalexpansion.factorizer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.factorizer.streamRecipes()
    ```
