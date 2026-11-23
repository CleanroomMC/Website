---
title: Conductor Mast (Calculator)
description: Converts an input itemstack into an output itemstack, costing a configurable amount of power. This power can only be gained via the Conductor Mast's semi-regular generation of lightning strikes.
sidebar:
  label: Conductor Mast
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/ConductorMast.java
---

## Description

Converts an input itemstack into an output itemstack, costing a configurable amount of power. This power can only be gained via the Conductor Mast's semi-regular generation of lightning strikes.

## Identifier

The identifier `mods.calculator.conductor_mast` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.calculator.conductormast
mods.calculator.conductorMast
mods.calculator.ConductorMast
mods.calculator.conductor_mast/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.calculator.conductor_mast.add(DefaultSonarRecipe.Value)
    ```

### Recipe Builder

Just like other recipe types, the Conductor Mast also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.calculator.conductor_mast.recipeBuilder()
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

- `int`. Sets the amount of power required to make the conversion. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    value(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.core.recipes.DefaultSonarRecipe$Value`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.conductor_mast.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .value(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.calculator.conductor_mast.remove(DefaultSonarRecipe.Value)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.calculator.conductor_mast.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.calculator.conductor_mast.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.calculator.conductor_mast.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.conductor_mast.removeByInput(item('calculator:firediamond'))
mods.calculator.conductor_mast.removeByOutput(item('calculator:material:7'))
mods.calculator.conductor_mast.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.calculator.conductor_mast.streamRecipes()
    ```
