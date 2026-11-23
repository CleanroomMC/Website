---
title: Arc Furnace (Immersive Engineering)
description: Converts 1 input itemstack with up to 4 additional inputs into an output itemstack and an optional 'slag' itemstack, taking time and using rf power.
sidebar:
  label: Arc Furnace
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/ArcFurnace.java
---

## Description

Converts 1 input itemstack with up to 4 additional inputs into an output itemstack and an optional 'slag' itemstack, taking time and using rf power.

## Identifier

Refer to this via any of the following:

```groovy {5}
mods.ie.arc_furnace
mods.ie.arcfurnace
mods.ie.arcFurnace
mods.ie.ArcFurnace
mods.immersiveengineering.arc_furnace/* Used as page default */
mods.immersiveengineering.arcfurnace
mods.immersiveengineering.arcFurnace
mods.immersiveengineering.ArcFurnace
```

## Adding Recipes

- Adds recipes in the format `output`, `input`, `additives`, `slag`, `time`, `energyPerTick`:

    ```groovy
    mods.immersiveengineering.arc_furnace.add(ItemStack, IIngredient, List<IIngredient>, ItemStack, int, int)
    ```

### Recipe Builder

Just like other recipe types, the Arc Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.immersiveengineering.arc_furnace.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 5.

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

- `ItemStack`. Sets the item output as slag. Requires not null.

    ```groovy
    slag(ItemStack)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `IIngredient`. Sets the item input. Requires not null.

    ```groovy
    mainInput(IIngredient)
    ```

- `int`. Sets the amount of power consumed per tick. Requires greater than 0. (Default `0`).

    ```groovy
    energyPerTick(int)
    ```

- `String`. Sets the special recipe type. Default options are `Alloying`, `Ores`, and `Recycling`.

    ```groovy
    ores()
    alloying()
    recycling()
    specialRecipeType(String)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.ArcFurnaceRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.arc_furnace.recipeBuilder()
    .mainInput(item('minecraft:diamond'))
    .input(item('minecraft:diamond'), ore('ingotGold'))
    .output(item('minecraft:clay'))
    .time(100)
    .energyPerTick(100)
    .slag(item('minecraft:gold_nugget'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.arc_furnace.removeByInput(IIngredient, List<IIngredient>)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.arc_furnace.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.arc_furnace.removeByInput(List<IIngredient>)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.arc_furnace.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.arc_furnace.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.arc_furnace.removeByInput(item('immersiveengineering:metal:18'), item('immersiveengineering:material:17'))
mods.immersiveengineering.arc_furnace.removeByOutput(item('immersiveengineering:metal:7'))
mods.immersiveengineering.arc_furnace.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.arc_furnace.streamRecipes()
    ```
