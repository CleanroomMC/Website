---
title: Water Saw (Primal Tech)
description: Converts an input item into an output itemstack after a given amount of time. Requires the block below it to be a water source block, and the block below and behind it flowing water.
sidebar:
  label: Water Saw
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/primaltech/WaterSaw.java
---

## Description

Converts an input item into an output itemstack after a given amount of time. Requires the block below it to be a water source block, and the block below and behind it flowing water.

## Identifier

The identifier `mods.primal_tech.water_saw` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.primaltech.watersaw
mods.primaltech.waterSaw
mods.primaltech.WaterSaw
mods.primaltech.water_saw
mods.primal_tech.watersaw
mods.primal_tech.waterSaw
mods.primal_tech.WaterSaw
mods.primal_tech.water_saw/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.primal_tech.water_saw.add(WaterSawRecipes)
    ```

- Adds recipes in the format `output`, `input`, `choppingTime`:

    ```groovy
    mods.primal_tech.water_saw.add(ItemStack, IIngredient, int)
    ```

### Recipe Builder

Just like other recipe types, the Water Saw also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.primal_tech.water_saw.recipeBuilder()
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

- `int`. Sets the time in ticks for the recipe to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    choppingTime(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `primal_tech.recipes.WaterSawRecipes`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.primal_tech.water_saw.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .choppingTime(50)
    .register()

mods.primal_tech.water_saw.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 4)
    .choppingTime(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.primal_tech.water_saw.remove(WaterSawRecipes)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.primal_tech.water_saw.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.primal_tech.water_saw.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.primal_tech.water_saw.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.primal_tech.water_saw.removeByInput(item('minecraft:log'))
mods.primal_tech.water_saw.removeByOutput(item('minecraft:planks:1'))
mods.primal_tech.water_saw.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.primal_tech.water_saw.streamRecipes()
    ```
