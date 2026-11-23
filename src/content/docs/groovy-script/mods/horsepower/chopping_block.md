---
title: Horse Chopping Block (Horse Power)
description: Converts an itemstack input into an itemstack output, with the chance of an additional output after a configurable amount of processing has been done. Depending on if the config option `Separate Chopping Recipes` is true, this may affect both Horse and Hand Chopping Blocks. Only the Horse Chopping Block can produce secondary outputs.
sidebar:
  label: Horse Chopping Block
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/horsepower/ChoppingBlock.java
---

## Description

Converts an itemstack input into an itemstack output, with the chance of an additional output after a configurable amount of processing has been done. Depending on if the config option `Separate Chopping Recipes` is true, this may affect both Horse and Hand Chopping Blocks. Only the Horse Chopping Block can produce secondary outputs.

## Identifier

The identifier `mods.horsepower.chopping_block` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.horsepower.choppingblock
mods.horsepower.choppingBlock
mods.horsepower.ChoppingBlock
mods.horsepower.chopping_block/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.horsepower.chopping_block.add(ChoppingBlockRecipe)
    ```

- Adds recipes in the format `input`, `output`, `time`:

    ```groovy
    mods.horsepower.chopping_block.add(IIngredient, ItemStack, int)
    ```

- Adds recipes in the format `input`, `output`, `secondary`, `chance`, `time`:

    ```groovy
    mods.horsepower.chopping_block.add(IIngredient, ItemStack, ItemStack, int, int)
    ```

### Recipe Builder

Just like other recipe types, the Horse Chopping Block also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.horsepower.chopping_block.recipeBuilder()
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

- `int`. Sets the time in laps the horse has to take to complete the recipe. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the chance that the secondary output will be created if the secondary output exists. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy
    chance(int)
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
mods.horsepower.chopping_block.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 5)
    .time(5)
    .register()

mods.horsepower.chopping_block.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .time(1)
    .register()

mods.horsepower.chopping_block.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'), item('minecraft:diamond'))
    .chance(50)
    .time(2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.horsepower.chopping_block.remove(ChoppingBlockRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.horsepower.chopping_block.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.horsepower.chopping_block.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.horsepower.chopping_block.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.horsepower.chopping_block.removeByInput(item('minecraft:log:3'))
mods.horsepower.chopping_block.removeByOutput(item('minecraft:planks:4'))
mods.horsepower.chopping_block.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.horsepower.chopping_block.streamRecipes()
    ```
