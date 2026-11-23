---
title: Manual Chopping Block (Horse Power)
description: Converts an itemstack input into an itemstack output after a configurable amount of processing has been done. Depending on if the config option `Separate Chopping Recipes` is true, this may affect both Horse and Hand Chopping Blocks.
sidebar:
  label: Manual Chopping Block
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/horsepower/ManualChoppingBlock.java
---

## Description

Converts an itemstack input into an itemstack output after a configurable amount of processing has been done. Depending on if the config option `Separate Chopping Recipes` is true, this may affect both Horse and Hand Chopping Blocks.

## Identifier

The identifier `mods.horsepower.manual_chopping_block` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.horsepower.manualchoppingblock
mods.horsepower.manualChoppingBlock
mods.horsepower.ManualChoppingBlock
mods.horsepower.manual_chopping_block/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.horsepower.manual_chopping_block.add(ChoppingBlockRecipe)
    ```

- Adds recipes in the format `input`, `output`, `time`:

    ```groovy
    mods.horsepower.manual_chopping_block.add(IIngredient, ItemStack, int)
    ```

### Recipe Builder

Just like other recipe types, the Manual Chopping Block also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.horsepower.manual_chopping_block.recipeBuilder()
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

- `int`. Sets the amount of chops the player has to make to complete the recipe. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `se.gory_moon.horsepower.recipes.ChoppingBlockRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.horsepower.manual_chopping_block.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 5)
    .time(5)
    .register()

mods.horsepower.manual_chopping_block.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .time(1)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.horsepower.manual_chopping_block.remove(ChoppingBlockRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.horsepower.manual_chopping_block.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.horsepower.manual_chopping_block.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.horsepower.manual_chopping_block.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.horsepower.manual_chopping_block.removeByInput(item('minecraft:log:3'))
mods.horsepower.manual_chopping_block.removeByOutput(item('minecraft:planks:4'))
mods.horsepower.manual_chopping_block.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.horsepower.manual_chopping_block.streamRecipes()
    ```
