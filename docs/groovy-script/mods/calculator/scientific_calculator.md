---
title: "Scientific Calculator"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts two input itemstacks into one output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/ScientificCalculator.java"
---

# Scientific Calculator (Calculator)

## Description

Converts two input itemstacks into one output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.scientific_calculator/* Used as page default */ // [!code focus]
mods.calculator.scientificcalculator
mods.calculator.scientificCalculator
mods.calculator.ScientificCalculator
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.calculator.scientific_calculator.add(CalculatorRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Scientific Calculator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.calculator.scientific_calculator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.calculator.mod.common.recipes.CalculatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.scientific_calculator.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.calculator.scientific_calculator.remove(CalculatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.scientific_calculator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.calculator.scientific_calculator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.scientific_calculator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.scientific_calculator.removeByInput(item('calculator:smallamethyst'))
mods.calculator.scientific_calculator.removeByOutput(item('calculator:redstoneingot'))
mods.calculator.scientific_calculator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.scientific_calculator.streamRecipes()
    ```
