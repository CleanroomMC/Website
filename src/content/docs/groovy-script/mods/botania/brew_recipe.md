---
title: Brew Recipe (Botania)
description: Converts a non-infused Managlass Vial, Alfglass Flask, Incense Stick, or Tainted Blood Pendant into one infused to hold the given brew at the cost of item inputs and mana.
sidebar:
  label: Brew Recipe
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/BrewRecipe.java
---

## Description

Converts a non-infused Managlass Vial, Alfglass Flask, Incense Stick, or Tainted Blood Pendant into one infused to hold the given brew at the cost of item inputs and mana.

## Identifier

The identifier `mods.botania.brew_recipe` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.botania.brewrecipe
mods.botania.brewRecipe
mods.botania.BrewRecipe
mods.botania.brew_recipe/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.botania.brew_recipe.add(RecipeBrew)
    ```

### Recipe Builder

Just like other recipe types, the Brew Recipe also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.botania.brew_recipe.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `Brew`. Sets the brew the recipe is being created for. Requires not null.

    ```groovy
    brew(Brew)
    output(Brew)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeBrew`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.brew_recipe.recipeBuilder()
    .input(item('minecraft:clay'), ore('ingotGold'), ore('gemDiamond'))
    .brew(brew('absorption'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.botania.brew_recipe.remove(RecipeBrew)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.brew_recipe.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.brew_recipe.removeByInputs(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.brew_recipe.removeByOutput(Brew)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.brew_recipe.removeByOutput(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.brew_recipe.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.brew_recipe.removeByInput(item('minecraft:iron_ingot'))
mods.botania.brew_recipe.removeByOutput(brew('allure'))
mods.botania.brew_recipe.removeByOutput('speed')
mods.botania.brew_recipe.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.brew_recipe.streamRecipes()
    ```
