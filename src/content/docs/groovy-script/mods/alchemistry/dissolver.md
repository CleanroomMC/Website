---
title: Chemical Dissolver (Alchemistry)
description: Converts an input itemstack into any number of output itemstacks, divided in any manner between different chances, with the ability to run multiple rolls to produce additional outputs.
sidebar:
  label: Chemical Dissolver
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Dissolver.java
---

## Description

Converts an input itemstack into any number of output itemstacks, divided in any manner between different chances, with the ability to run multiple rolls to produce additional outputs.

## Identifier

The identifier `mods.alchemistry.dissolver` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.alchemistry.dissolver/* Used as page default */
mods.alchemistry.Dissolver
mods.alchemistry.chemicaldissolver
mods.alchemistry.chemicalDissolver
mods.alchemistry.ChemicalDissolver
mods.alchemistry.chemical_dissolver
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.alchemistry.dissolver.add(DissolverRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Chemical Dissolver also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.alchemistry.dissolver.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the number of rolls to produce outputs. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    rolls(int)
    ```

- `boolean`. Sets if the recipe will also create a Chemical Combiner to invert the process. Only properly works on some recipes. (Default `false`).

    ```groovy
    reversible()
    reversible(boolean)
    ```

- `List<ProbabilityGroup>`. Sets the probability sets rolled to produce output. Requires greater than or equal to 1.

    ```groovy
    output(ItemStack) // 100% chance
    output(ItemStack...) // 100% chance
    output(Collection<ItemStack>) // 100% chance
    probabilityOutput(ItemStack...) // 100% chance
    probabilityOutput(double, ItemStack...)
    probabilityOutput(Collection<ItemStack>) // 100% chance
    probabilityOutput(double, Collection<ItemStack>)
    ```

- `boolean`. Sets if there is guaranteed to always be one and exactly one set output, or if each set is rolled individually. (Default `false`).

    ```groovy
    relativeProbability()
    relativeProbability(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.DissolverRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.dissolver.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .probabilityOutput(item('minecraft:clay'))
    .reversible()
    .rolls(1)
    .register()

mods.alchemistry.dissolver.recipeBuilder()
    .input(item('minecraft:diamond'))
    .probabilityOutput(30, item('minecraft:clay'))
    .probabilityOutput(30, item('minecraft:clay'))
    .probabilityOutput(30, item('minecraft:clay'))
    .rolls(10)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.alchemistry.dissolver.remove(DissolverRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.alchemistry.dissolver.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.alchemistry.dissolver.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.dissolver.removeByInput(item('alchemistry:compound:1'))
mods.alchemistry.dissolver.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.alchemistry.dissolver.streamRecipes()
    ```
