---
title: Water Net (Better With Addons)
description: Converts an input item into any number of output itemstacks if placed within the appropriate multiblock. The multiblock is a Water Block directly below the Netted Screen, 8 Sakura Planks around the Water Block, and 8 Slat Blocks placed around the Netted Screen.
sidebar:
  label: Water Net
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/WaterNet.java
---

## Description

Converts an input item into any number of output itemstacks if placed within the appropriate multiblock. The multiblock is a Water Block directly below the Netted Screen, 8 Sakura Planks around the Water Block, and 8 Slat Blocks placed around the Netted Screen.

## Identifier

The identifier `mods.betterwithaddons.water_net` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.betterwithaddons.waternet
mods.betterwithaddons.waterNet
mods.betterwithaddons.WaterNet
mods.betterwithaddons.water_net/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithaddons.water_net.add(NetRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Water Net also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithaddons.water_net.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.NetRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.water_net.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.water_net.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4, item('minecraft:diamond'), item('minecraft:diamond') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithaddons.water_net.remove(NetRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithaddons.water_net.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithaddons.water_net.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithaddons.water_net.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.water_net.removeByInput(item('betterwithaddons:iron_sand'))
mods.betterwithaddons.water_net.removeByOutput(item('betterwithaddons:food_sashimi'))
mods.betterwithaddons.water_net.removeByOutput(item('betterwithaddons:food_fugu_sac'))
mods.betterwithaddons.water_net.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithaddons.water_net.streamRecipes()
    ```
