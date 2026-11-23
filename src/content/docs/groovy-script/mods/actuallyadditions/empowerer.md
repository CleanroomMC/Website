---
title: Empowerer (Actually Additions)
description: Turns 5 input items into an output item at the cost of power and time. Has a configurable color.
sidebar:
  label: Empowerer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/Empowerer.java
---

## Description

Turns 5 input items into an output item at the cost of power and time. Has a configurable color.

## Identifier

The identifier `mods.actuallyadditions.empowerer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.aa.empowerer
mods.aa.Empowerer
mods.actuallyadditions.empowerer/* Used as page default */
mods.actuallyadditions.Empowerer
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.actuallyadditions.empowerer.add(EmpowererRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Empowerer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.actuallyadditions.empowerer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 4 and less than or equal to 5.

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

- `float`. Sets the red color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    red(float)
    color(int) // Sets the color via standardized hex code
    color(float, float, float) // red, green, blue
    particleColor(int) // Sets the color via standardized hex code
    particleColor(float, float, float) // red, green, blue
    ```

- `float`. Sets the blue color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    blue(float)
    color(int) // Sets the color via standardized hex code
    color(float, float, float) // red, green, blue
    particleColor(int) // Sets the color via standardized hex code
    particleColor(float, float, float) // red, green, blue
    ```

- `int`. Sets the amount of time the recipe takes to complete. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `float`. Sets the green color. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    green(float)
    color(int) // Sets the color via standardized hex code
    color(float, float, float) // red, green, blue
    particleColor(int) // Sets the color via standardized hex code
    particleColor(float, float, float) // red, green, blue
    ```

- `IIngredient`. Sets the center IIngredient if the input only has 4 entries.

    ```groovy
    mainInput(IIngredient)
    ```

- `int`. Sets the amount of energy each stand must consume to process the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    energy(int)
    energyPerStand(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.EmpowererRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.empowerer.recipeBuilder()
    .mainInput(item('minecraft:clay'))
    .input(item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .time(50)
    .energy(1000)
    .red(0.5)
    .green(0.3)
    .blue(0.2)
    .register()

mods.actuallyadditions.empowerer.recipeBuilder()
    .mainInput(item('minecraft:clay'))
    .input(item('minecraft:diamond'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .time(50)
    .color(0.5, 0.3, 0.2)
    .register()

mods.actuallyadditions.empowerer.recipeBuilder()
    .mainInput(item('minecraft:diamond'))
    .input(item('minecraft:diamond'),item('minecraft:gold_ingot'),item('minecraft:diamond'),item('minecraft:gold_ingot'))
    .output(item('minecraft:dirt') * 8)
    .time(50)
    .particleColor(0x00FF88)
    .register()

mods.actuallyadditions.empowerer.recipeBuilder()
    .input(item('minecraft:gold_ingot'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'),item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .time(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.actuallyadditions.empowerer.remove(EmpowererRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.actuallyadditions.empowerer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.actuallyadditions.empowerer.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.actuallyadditions.empowerer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.empowerer.removeByInput(item('actuallyadditions:item_crystal'))
mods.actuallyadditions.empowerer.removeByOutput(item('actuallyadditions:item_misc:24'))
mods.actuallyadditions.empowerer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.actuallyadditions.empowerer.streamRecipes()
    ```
