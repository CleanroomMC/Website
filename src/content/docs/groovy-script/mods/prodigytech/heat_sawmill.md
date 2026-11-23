---
title: Heat Sawmill (Prodigy Tech)
description: Wood processing machine with 1 input, 2 outputs and an optional chance for the 2nd output.
sidebar:
  label: Heat Sawmill
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/SimpleRecipeHandlerSecondaryOutput.java
---

## Description

Wood processing machine with 1 input, 2 outputs and an optional chance for the 2nd output.

## Identifier

The identifier `mods.prodigytech.heat_sawmill` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.prodigytech.heatsawmill
mods.prodigytech.heatSawmill
mods.prodigytech.HeatSawmill
mods.prodigytech.heat_sawmill/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Heat Sawmill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.prodigytech.heat_sawmill.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. The time needed to perform the recipe, in ticks. Will run faster than this number when heated over 80 C. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    time(int)
    ```

- `float`. Sets the chance to get the 2nd output. Requires less than or equal to 1. (Default `1.0f`).

    ```groovy
    secondaryChance(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.SimpleRecipeSecondaryOutput`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.heat_sawmill.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .time(50)
    .register()

mods.prodigytech.heat_sawmill.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:coal'))
    .register()

mods.prodigytech.heat_sawmill.recipeBuilder()
    .input(item('minecraft:iron_block'))
    .output(item('minecraft:emerald'), item('minecraft:clay'))
    .register()

mods.prodigytech.heat_sawmill.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:emerald'), item('minecraft:nether_star'))
    .secondaryChance(0.25)
    .time(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.prodigytech.heat_sawmill.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.prodigytech.heat_sawmill.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.heat_sawmill.removeByInput(ore('plankWood'))
mods.prodigytech.heat_sawmill.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.prodigytech.heat_sawmill.streamRecipes()
    ```
