---
title: Health Processor (Calculator)
description: Converts an input itemstack into "Health Points", which charge a Health or Nutrition module and are converted into rapidly regenerating health.
sidebar:
  label: Health Processor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/calculator/HealthProcessor.java
---

## Description

Converts an input itemstack into \"Health Points\", which charge a Health or Nutrition module and are converted into rapidly regenerating health.

## Identifier

The identifier `mods.calculator.health_processor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.calculator.healthprocessor
mods.calculator.healthProcessor
mods.calculator.HealthProcessor
mods.calculator.health_processor/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.calculator.health_processor.add(DefaultSonarRecipe.Value)
    ```

### Recipe Builder

Just like other recipe types, the Health Processor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.calculator.health_processor.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the amount of "Health Points" gained. Requires greater than or equal to 1. (Default `0`).

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
mods.calculator.health_processor.recipeBuilder()
    .input(item('minecraft:clay'))
    .value(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.calculator.health_processor.remove(DefaultSonarRecipe.Value)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.calculator.health_processor.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.calculator.health_processor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.calculator.health_processor.removeByInput(item('minecraft:blaze_rod'))
mods.calculator.health_processor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.calculator.health_processor.streamRecipes()
    ```
