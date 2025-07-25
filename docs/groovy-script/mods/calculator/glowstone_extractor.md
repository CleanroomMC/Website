---
title: "Glowstone Extractor"
titleTemplate: "Calculator | CleanroomMC"
description: "Converts an input itemstack into power, at the cost of a burnable fuel."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/GlowstoneExtractor.java"
---

# Glowstone Extractor (Calculator)

## Description

Converts an input itemstack into power, at the cost of a burnable fuel.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.calculator.glowstone_extractor/* Used as page default */ // [!code focus]
mods.calculator.glowstoneextractor
mods.calculator.glowstoneExtractor
mods.calculator.GlowstoneExtractor
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.calculator.glowstone_extractor.add(DefaultSonarRecipe.Value)
    ```


### Recipe Builder

Just like other recipe types, the Glowstone Extractor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.calculator.glowstone_extractor.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the duration in ticks that power will be produced. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    value(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `sonar.core.recipes.DefaultSonarRecipe$Value`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.glowstone_extractor.recipeBuilder()
    .input(item('minecraft:clay'))
    .value(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.calculator.glowstone_extractor.remove(DefaultSonarRecipe.Value)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.calculator.glowstone_extractor.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.calculator.glowstone_extractor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.calculator.glowstone_extractor.removeByInput(item('minecraft:glowstone'))
mods.calculator.glowstone_extractor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.calculator.glowstone_extractor.streamRecipes()
    ```
