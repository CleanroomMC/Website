---
title: Metal Former (AcademyCraft)
description: Converts an item into another item, according to the mode of the machine.
sidebar:
  label: Metal Former
source_code_link: https://github.com/yor42/AcademyCraft/blob/master/src/main/java/cn/academy/support/groovyscript/modules/MetalFormer.java
---

## Description

Converts an item into another item, according to the mode of the machine.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.academy.metal_former/* Used as page default */
mods.academy.metalformer
mods.academy.metalFormer
mods.academy.MetalFormer
```

## Adding Recipes

- Adds etching recipes in the format `input`, `output`:

    ```groovy
    mods.academy.metal_former.addEtchRecipe(IIngredient, ItemStack)
    ```

- Adds incising recipes in the format `input`, `output`:

    ```groovy
    mods.academy.metal_former.addInciseRecipe(IIngredient, ItemStack)
    ```

- Adds plating recipes in the format `input`, `output`:

    ```groovy
    mods.academy.metal_former.addPlateRecipe(IIngredient, ItemStack)
    ```

- Adds refining recipes in the format `input`, `output`:

    ```groovy
    mods.academy.metal_former.addRefineRecipe(IIngredient, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.academy.metal_former.addEtchRecipe(item('minecraft:stonebrick'), item('minecraft:stonebrick', 3))
mods.academy.metal_former.addInciseRecipe(item('minecraft:cobblestone'), item('minecraft:stone_slab', 3))
mods.academy.metal_former.addPlateRecipe(ore('ingotIron'), item('academy:reinforced_iron_plate'))
mods.academy.metal_former.addRefineRecipe(ore('oreDiamond'), item('minecraft:diamond') * 64)
```

</details>

### Recipe Builder

Just like other recipe types, the Metal Former also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.academy.metal_former.recipeBuilder()</summary>

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

- `TileMetalFormer.Mode`. Working mode of Metal former required for this recipe. Requires not null. (Default `ETCH`).

    ```groovy
    etch()
    plate()
    incise()
    refine()
    mode(TileMetalFormer.Mode)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cn.academy.crafting.MetalFormerRecipes$RecipeObject`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.academy.metal_former.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .refine()
    .register()

mods.academy.metal_former.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .incise()
    .register()

mods.academy.metal_former.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.academy.metal_former.remove(MetalFormerRecipes.RecipeObject)
    ```

- Removes an entry matching the given `ItemStack` from etching recipes:

    ```groovy
    mods.academy.metal_former.removeEtchByInput(IIngredient)
    ```

- Removes an entry matching the given `ItemStack` from incise recipes:

    ```groovy
    mods.academy.metal_former.removeInciseByInput(IIngredient)
    ```

- Removes an entry matching the given `ItemStack` from plate recipes:

    ```groovy
    mods.academy.metal_former.removePlateByInput(IIngredient)
    ```

- Removes an entry matching the given `ItemStack` from refine recipes:

    ```groovy
    mods.academy.metal_former.removeRefineByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.academy.metal_former.removeAll()
    ```

- Removes all etching entry of metal former:

    ```groovy
    mods.academy.metal_former.removeAllEtch()
    ```

- Removes all incising entry of metal former:

    ```groovy
    mods.academy.metal_former.removeAllIncise()
    ```

- Removes all plating entry of metal former:

    ```groovy
    mods.academy.metal_former.removeAllPlate()
    ```

- Removes all refining entry of metal former:

    ```groovy
    mods.academy.metal_former.removeAllRefine()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.academy.metal_former.removeEtchByInput(ore('oreDiamond'))
mods.academy.metal_former.removeInciseByInput(ore('oreDiamond'))
mods.academy.metal_former.removePlateByInput(ore('oreDiamond'))
mods.academy.metal_former.removeRefineByInput(ore('oreDiamond'))
mods.academy.metal_former.removeAll()
mods.academy.metal_former.removeAllEtch()
mods.academy.metal_former.removeAllIncise()
mods.academy.metal_former.removeAllPlate()
mods.academy.metal_former.removeAllRefine()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.academy.metal_former.streamRecipes()
    ```
