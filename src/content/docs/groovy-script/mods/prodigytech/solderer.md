---
title: Solderer (Prodigy Tech)
description: Performs recipes using Gold Dust, has a recipe catalyst, and uses up Circuit Boards and an optional extra input for each recipe.
sidebar:
  label: Solderer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/Solderer.java
---

## Description

Performs recipes using Gold Dust, has a recipe catalyst, and uses up Circuit Boards and an optional extra input for each recipe.

## Identifier

The identifier `mods.prodigytech.solderer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.prodigytech.solderer/* Used as page default */
mods.prodigytech.Solderer
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Solderer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.prodigytech.solderer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

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

- `int`. Sets the number of Tiny Gold Dusts needed for the recipe (9 equals 1 ingot). Requires greater than or equal to 1. (Default `0`).

    ```groovy
    gold(int)
    ```

- `int`. Sets the time needed to perform the recipe, in ticks. Will run faster than this number when heated over 125 C. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    time(int)
    ```

- `IIngredient`. The pattern used by the recipe, will not be consumed. Requires exactly 1.

    ```groovy
    pattern(IIngredient)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.SoldererManager$SoldererRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.solderer.recipeBuilder()
    .pattern(item('minecraft:clay'))
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .gold(5)
    .time(100)
    .register()

mods.prodigytech.solderer.recipeBuilder()
    .pattern(item('minecraft:coal_block'))
    .output(item('minecraft:nether_star'))
    .gold(75)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.prodigytech.solderer.removeByOutput(IIngredient)
    ```

- Removes the recipes using the given pattern:

    ```groovy
    mods.prodigytech.solderer.removeByPattern(IIngredient)
    ```

- Removes the recipes using the given additive:

    ```groovy
    mods.prodigytech.solderer.removeByAdditive(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.prodigytech.solderer.removeAll()
    ```

- Removes all recipes not using additives:

    ```groovy
    mods.prodigytech.solderer.removeWithoutAdditive()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.solderer.removeByOutput(item('prodigytech:circuit_refined'))
mods.prodigytech.solderer.removeByPattern(item('prodigytech:pattern_circuit_refined'))
mods.prodigytech.solderer.removeByAdditive(item('minecraft:iron_ingot'))
mods.prodigytech.solderer.removeAll()
mods.prodigytech.solderer.removeWithoutAdditive()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.prodigytech.solderer.streamRecipes()
    ```
