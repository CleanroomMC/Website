---
title: Compost (The Betweenlands)
description: Converts an input itemstack into an amount of compost.
sidebar:
  label: Compost
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/Compost.java
---

## Description

Converts an input itemstack into an amount of compost.

## Identifier

The identifier `mods.thebetweenlands.compost` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.betweenlands.compost
mods.betweenlands.Compost
mods.thebetweenlands.compost/* Used as page default */
mods.thebetweenlands.Compost
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.thebetweenlands.compost.add(ICompostBinRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Compost also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thebetweenlands.compost.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the time the recipe takes in ticks. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the amount of compost output. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    amount(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.ICompostBinRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.compost.recipeBuilder()
    .input(item('minecraft:clay'))
    .amount(20)
    .time(30)
    .register()

mods.thebetweenlands.compost.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .amount(1)
    .time(5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.thebetweenlands.compost.remove(ICompostBinRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thebetweenlands.compost.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thebetweenlands.compost.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.compost.removeByInput(item('thebetweenlands:items_misc:13'))
mods.thebetweenlands.compost.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thebetweenlands.compost.streamRecipes()
    ```
