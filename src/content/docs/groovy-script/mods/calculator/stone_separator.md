---
title: Stone Separator (Calculator)
description: Converts an input itemstack into two output itemstacks.
sidebar:
  label: Stone Separator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/StoneSeparator.java
---

## Description

Converts an input itemstack into two output itemstacks.

## Identifier

The identifier `mods.calculator.stone_separator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.calculator.stoneseparator
mods.calculator.stoneSeparator
mods.calculator.StoneSeparator
mods.calculator.stone_separator/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.calculator.stone_separator.add(CalculatorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Stone Separator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.calculator.stone_separator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 2.

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
mods.calculator.stone_separator.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'), item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.calculator.stone_separator.remove(CalculatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.calculator.stone_separator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.calculator.stone_separator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.calculator.stone_separator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.stone_separator.removeByInput(item('minecraft:gold_ore'))
mods.calculator.stone_separator.removeByOutput(item('calculator:reinforcedironingot'))
mods.calculator.stone_separator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.calculator.stone_separator.streamRecipes()
    ```
