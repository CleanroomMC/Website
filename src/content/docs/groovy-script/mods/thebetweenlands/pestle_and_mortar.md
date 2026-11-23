---
title: Pestle And Mortar (The Betweenlands)
description: Converts an input item into an output itemstack in a Pestle and Mortar by using a Pestle tool in the Mortar.
sidebar:
  label: Pestle And Mortar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/PestleAndMortar.java
---

## Description

Converts an input item into an output itemstack in a Pestle and Mortar by using a Pestle tool in the Mortar.

## Identifier

The identifier `mods.thebetweenlands.pestle_and_mortar` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.betweenlands.pestleandmortar
mods.betweenlands.pestleAndMortar
mods.betweenlands.PestleAndMortar
mods.betweenlands.pestle_and_mortar
mods.thebetweenlands.pestleandmortar
mods.thebetweenlands.pestleAndMortar
mods.thebetweenlands.PestleAndMortar
mods.thebetweenlands.pestle_and_mortar/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.thebetweenlands.pestle_and_mortar.add(IPestleAndMortarRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Pestle And Mortar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thebetweenlands.pestle_and_mortar.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.IPestleAndMortarRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.pestle_and_mortar.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.pestle_and_mortar.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.thebetweenlands.pestle_and_mortar.remove(IPestleAndMortarRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thebetweenlands.pestle_and_mortar.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thebetweenlands.pestle_and_mortar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thebetweenlands.pestle_and_mortar.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.pestle_and_mortar.removeByInput(item('thebetweenlands:limestone'))
mods.thebetweenlands.pestle_and_mortar.removeByOutput(item('thebetweenlands:fish_bait'))
mods.thebetweenlands.pestle_and_mortar.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thebetweenlands.pestle_and_mortar.streamRecipes()
    ```
