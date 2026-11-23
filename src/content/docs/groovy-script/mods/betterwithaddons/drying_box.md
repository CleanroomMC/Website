---
title: Drying Unit (Better With Addons)
description: Converts an input item into an output itemstack if placed within the appropriate multiblock. The multiblock is Sandstone directly below the Drying Box, 8 Sand around the Drying Box, and a Dead Bush placed on the Sand. Only functions in a non-snowy biome with sky access during the day, and functions twice as fast when in a hot biome.
sidebar:
  label: Drying Unit
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/DryingBox.java
---

## Description

Converts an input item into an output itemstack if placed within the appropriate multiblock. The multiblock is Sandstone directly below the Drying Box, 8 Sand around the Drying Box, and a Dead Bush placed on the Sand. Only functions in a non-snowy biome with sky access during the day, and functions twice as fast when in a hot biome.

## Identifier

The identifier `mods.betterwithaddons.drying_box` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.betterwithaddons.dryingbox
mods.betterwithaddons.dryingBox
mods.betterwithaddons.DryingBox
mods.betterwithaddons.drying_box/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithaddons.drying_box.add(CherryBoxRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Drying Unit also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithaddons.drying_box.recipeBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.CherryBoxRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.drying_box.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.drying_box.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithaddons.drying_box.remove(CherryBoxRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithaddons.drying_box.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithaddons.drying_box.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithaddons.drying_box.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.drying_box.removeByInput(item('betterwithaddons:japanmat:2'))
mods.betterwithaddons.drying_box.removeByOutput(item('minecraft:sponge'))
mods.betterwithaddons.drying_box.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithaddons.drying_box.streamRecipes()
    ```
