---
title: "Brew Recipe"
titleTemplate: "Botania | CleanroomMC"
description: "Converts a non-infused Managlass Vial, Alfglass Flask, Incense Stick, or Tainted Blood Pendant into one infused to hold the given brew at the cost of item inputs and mana."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/BrewRecipe.java"
---

# Brew Recipe (Botania)

## Description

Converts a non-infused Managlass Vial, Alfglass Flask, Incense Stick, or Tainted Blood Pendant into one infused to hold the given brew at the cost of item inputs and mana.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.brew_recipe/* Used as page default */ // [!code focus]
mods.botania.brewrecipe
mods.botania.brewRecipe
mods.botania.BrewRecipe
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.add(RecipeBrew)
    ```


### Recipe Builder

Just like other recipe types, the Brew Recipe also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `Brew`. Sets the brew the recipe is being created for. Requires not null.

    ```groovy:no-line-numbers
    brew(Brew)
    output(Brew)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeBrew`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.brew_recipe.recipeBuilder()
    .input(item('minecraft:clay'), ore('ingotGold'), ore('gemDiamond'))
    .brew(brew('absorption'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.remove(RecipeBrew)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.removeByInputs(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.removeByOutput(Brew)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.removeByOutput(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.brew_recipe.removeByInput(item('minecraft:iron_ingot'))
mods.botania.brew_recipe.removeByOutput(brew('allure'))
mods.botania.brew_recipe.removeByOutput('speed')
mods.botania.brew_recipe.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania.brew_recipe.streamRecipes()
    ```
