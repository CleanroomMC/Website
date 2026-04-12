---
title: "Terrestrial Agglomeration Plate"
titleTemplate: "Botania CEu | CleanroomMC"
description: "Transforms any number of items put on top of a Terrestrial Agglomeration Plate into another item with a mana cost. Requires a specific layout of the 3x3 blocks underneath the plate, and can optionally transform them."
source_code_link: "https://github.com/TeamDimensional/Botania-CEu/blob/1.12/src/main/java/vazkii/botania/client/integration/groovyscript/TerrestrialAgglomerationPlate.java"
---

# Terrestrial Agglomeration Plate (Botania)

## Description

Transforms any number of items put on top of a Terrestrial Agglomeration Plate into another item with a mana cost. Requires a specific layout of the 3x3 blocks underneath the plate, and can optionally transform them.

## Identifier

The identifier `mods.botania.terrestrial_agglomeration_plate` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.Botania.terrestrialagglomerationplate
mods.Botania.terrestrialAgglomerationPlate
mods.Botania.TerrestrialAgglomerationPlate
mods.botania.terrestrialagglomerationplate
mods.botania.terrestrialAgglomerationPlate
mods.botania.TerrestrialAgglomerationPlate
mods.Botania.terrestrial_agglomeration_plate
mods.botania.terrestrial_agglomeration_plate/* Used as page default */ // [!code focus]
mods.botania_ceu.terrestrialagglomerationplate
mods.botania_ceu.terrestrialAgglomerationPlate
mods.botania_ceu.TerrestrialAgglomerationPlate
mods.botania_ceu.terrestrial_agglomeration_plate
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

  ```groovy:no-line-numbers
  mods.botania.terrestrial_agglomeration_plate.add(RecipeTerrestrialAgglomeration)
  ```

### Recipe Builder

Just like other recipe types, the Terrestrial Agglomeration Plate also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

  ```groovy:no-line-numbers
  mods.botania.terrestrial_agglomeration_plate.recipeBuilder()
  ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

  ```groovy:no-line-numbers
  input(IIngredient)
  input(IIngredient...)
  input(Collection<IIngredient>)
  ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

  ```groovy:no-line-numbers
  output(ItemStack)
  output(ItemStack...)
  output(Collection<ItemStack>)
  ```

- `int`. Mana cost of the recipe. 1 mana pool is 1 million. Requires greater than or equal to 1. (Default `0`).

  ```groovy:no-line-numbers
  mana(int)
  ```

- `IBlockState[]`. Blocks required underneath the plate, or blocks that will be created under the plate when the recipe is done. The replacement blocks may be `null`, which makes the recipe keep that block intact.

  ```groovy:no-line-numbers
  edgeBlock(IBlockState)
  centerBlock(IBlockState)
  cornerBlock(IBlockState)
  edgeBlockReplacement(IBlockState)
  centerBlockReplacement(IBlockState)
  cornerBlockReplacement(IBlockState)
  ```

- `int`. Starting color of the particles displayed when executing the recipe. (Default `0x0000FF`).

  ```groovy:no-line-numbers
  colorStart(int)
  ```

- `int`. Ending color of the particles displayed when executing the recipe. (Default `0x00FF00`).

  ```groovy:no-line-numbers
  colorEnd(int)
  ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeTerrestrialAgglomeration`).

  ```groovy:no-line-numbers
  register()
  ```

---

::::::::: details Example {open id="example"}

```groovy:no-line-numbers
mods.botania.terrestrial_agglomeration_plate.recipeBuilder()
    .input(item('minecraft:iron_ingot'), ore('ingotManasteel'), item('minecraft:stone') * 2)
    .output(item('minecraft:diamond'))
    .mana(150000)
    .colorStart(0xFF0000)
    .colorEnd(0xFFFF00)
    .register()

mods.botania.terrestrial_agglomeration_plate.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:dirt'))
    .mana(1000000)
    .centerBlock(blockstate('minecraft:dirt'))
    .centerBlockReplacement(blockstate('minecraft:diamond_block'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

  ```groovy:no-line-numbers
  mods.botania.terrestrial_agglomeration_plate.remove(RecipeTerrestrialAgglomeration)
  ```

- Removes all recipes that match the given output:

  ```groovy:no-line-numbers
  mods.botania.terrestrial_agglomeration_plate.removeByOutput(IIngredient)
  ```

- Removes all registered recipes:

  ```groovy:no-line-numbers
  mods.botania.terrestrial_agglomeration_plate.removeAll()
  ```

:::::::::: details Example {open id="example"}

```groovy:no-line-numbers
mods.botania.terrestrial_agglomeration_plate.removeByOutput(item('botania:manaresource', 4))
mods.botania.terrestrial_agglomeration_plate.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

  ```groovy:no-line-numbers
  mods.botania.terrestrial_agglomeration_plate.streamRecipes()
  ```
