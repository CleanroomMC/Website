---
title: Agglomeration Plate (Botania Tweaks)
description: Converts any number of input itemstacks into an item output, consuming mana to do so. Occurs in-world above a Terrestrial Agglomeration Plate place on top of a small 3x3 multiblock, of which the center, sides, and corners may be set to require specific blockstates. While the recipe is running, particles will gradually change color until the recipe is finished. Upon finishing the recipe, the center, sides, and corners can each be converted into a replacement blockstate, if a replacement blockstate was set.
sidebar:
  label: Agglomeration Plate
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botaniatweaks/AgglomerationPlate.java
---

## Description

Converts any number of input itemstacks into an item output, consuming mana to do so. Occurs in-world above a Terrestrial Agglomeration Plate place on top of a small 3x3 multiblock, of which the center, sides, and corners may be set to require specific blockstates. While the recipe is running, particles will gradually change color until the recipe is finished. Upon finishing the recipe, the center, sides, and corners can each be converted into a replacement blockstate, if a replacement blockstate was set.

## Identifier

The identifier `mods.botania_tweaks.agglomeration_plate` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.botania_tweaks.agglomerationplate
mods.botania_tweaks.agglomerationPlate
mods.botania_tweaks.AgglomerationPlate
mods.botania_tweaks.agglomeration_plate/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.add(AgglomerationRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Agglomeration Plate also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

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

- `IBlockState`. Sets the IBlockState of the edges of the structure. Requires not null.

    ```groovy
    edge(IBlockState)
    baseStructure() // Makes the structure the default, with livingrock and lapis blocks
    ```

- `int`. Sets the mana cost of processing the recipe. Requires greater than or equal to 1. (Default `500,000`).

    ```groovy
    mana(int)
    ```

- `IBlockState`. Sets the IBlockState of the center of the structure. Requires not null.

    ```groovy
    center(IBlockState)
    baseStructure() // Makes the structure the default, with livingrock and lapis blocks
    ```

- `IBlockState`. Sets the IBlockState of the corners of the structure. Requires not null.

    ```groovy
    corner(IBlockState)
    baseStructure() // Makes the structure the default, with livingrock and lapis blocks
    ```

- `int`. Sets the color hex code at the end of the recipe. (Default `0`).

    ```groovy
    color(int, int)
    colorEnd(int)
    ```

- `int`. Sets the color hex code at the start of the recipe. (Default `0`).

    ```groovy
    color(int, int)
    colorStart(int)
    ```

- `IBlockState`. Sets the IBlockState the edges will be replaced with, if not null.

    ```groovy
    edgeReplacement(IBlockState)
    ```

- `IBlockState`. Sets the IBlockState the center will be replaced with, if not null.

    ```groovy
    centerReplacement(IBlockState)
    ```

- `IBlockState`. Sets the IBlockState the corners will be replaced with, if not null.

    ```groovy
    cornerReplacement(IBlockState)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `quaternary.botaniatweaks.modules.botania.recipe.AgglomerationRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 3)
    .baseStructure()
    .mana(100000)
    .color(0xff00ff, 0x00ffff)
    .register()

mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:gold_ingot'), item('minecraft:gold_block'))
    .output(item('minecraft:clay') * 32)
    .colorStart(0x000000)
    .colorEnd(0x0000ff)
    .center(blockstate('minecraft:gold_block'))
    .edge(blockstate('botania:livingwood:variant=glimmering'))
    .corner(blockstate('botania:livingwood:variant=glimmering'))
    .register()

mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .mana(50000)
    .baseStructure()
    .center(blockstate('minecraft:diamond_block'))
    .centerReplacement(blockstate('minecraft:clay'))
    .edgeReplacement(blockstate('botania:livingrock:variant=default'))
    .cornerReplacement(blockstate('minecraft:lapis_block'))
    .register()

mods.botania_tweaks.agglomeration_plate.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:clay'))
    .mana(1000)
    .center(blockstate('minecraft:clay'))
    .edge(blockstate('botania:livingrock:variant=default'))
    .corner(blockstate('minecraft:lapis_block'))
    .centerReplacement(blockstate('minecraft:diamond_block'))
    .edgeReplacement(blockstate('minecraft:lapis_block'))
    .cornerReplacement(blockstate('botania:livingrock:variant=default'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.remove(AgglomerationRecipe)
    ```

- Removes all recipes with the given edge IBlockState:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.removeByEdge(IBlockState)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.removeByInput(IIngredient)
    ```

- Removes all recipes with the given center IBlockState:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.removeByCenter(IBlockState)
    ```

- Removes all recipes with the given corner IBlockState:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.removeByCorner(IBlockState)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania_tweaks.agglomeration_plate.removeByEdge(blockstate('minecraft:lapis_block'))
mods.botania_tweaks.agglomeration_plate.removeByInput(item('botania:manaresource:2'))
mods.botania_tweaks.agglomeration_plate.removeByCenter(blockstate('botania:livingrock'))
mods.botania_tweaks.agglomeration_plate.removeByCorner(blockstate('botania:livingrock'))
mods.botania_tweaks.agglomeration_plate.removeByOutput(item('botania:manaresource:4'))
mods.botania_tweaks.agglomeration_plate.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania_tweaks.agglomeration_plate.streamRecipes()
    ```
