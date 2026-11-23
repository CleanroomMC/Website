---
title: Atomic Calculator (Calculator)
description: Converts three input itemstacks into one output itemstack.
sidebar:
  label: Atomic Calculator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/AtomicCalculator.java
---

## Description

Converts three input itemstacks into one output itemstack.

## Identifier

The identifier `mods.calculator.atomic_calculator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.calculator.atomiccalculator
mods.calculator.atomicCalculator
mods.calculator.AtomicCalculator
mods.calculator.atomic_calculator/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.calculator.atomic_calculator.add(CalculatorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Atomic Calculator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.calculator.atomic_calculator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 3.

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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.CalculatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.atomic_calculator.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.calculator.atomic_calculator.remove(CalculatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.calculator.atomic_calculator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.calculator.atomic_calculator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.calculator.atomic_calculator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.atomic_calculator.removeByInput(item('minecraft:end_stone'))
mods.calculator.atomic_calculator.removeByOutput(item('calculator:firediamond'))
mods.calculator.atomic_calculator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.calculator.atomic_calculator.streamRecipes()
    ```
