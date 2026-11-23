---
title: Gaia Plate (Botanic Additions)
description: Converts an number of input items into an output itemstack, consuming a given amount of mana when dropped in-world atop a Gaia Agglomeration Plate as part of a multiblock structure.
sidebar:
  label: Gaia Plate
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botanicadditions/GaiaPlate.java
---

## Description

Converts an number of input items into an output itemstack, consuming a given amount of mana when dropped in-world atop a Gaia Agglomeration Plate as part of a multiblock structure.

## Identifier

The identifier `mods.botanicadds.gaia_plate` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.botanicadds.gaiaplate
mods.botanicadds.gaiaPlate
mods.botanicadds.GaiaPlate
mods.botanicadds.gaia_plate/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.botanicadds.gaia_plate.add(GaiaPlateRecipes.RecipeGaiaPlate)
    ```

### Recipe Builder

Just like other recipe types, the Gaia Plate also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.botanicadds.gaia_plate.recipeBuilder()
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

- `int`. Sets the mana cost of processing the recipe. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    mana(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `tk.zeitheron.botanicadds.api.GaiaPlateRecipes$RecipeGaiaPlate`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botanicadds.gaia_plate.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot') * 16)
    .mana(1000)
    .register()

mods.botanicadds.gaia_plate.recipeBuilder()
    .input(item('minecraft:diamond_block'), item('minecraft:gold_block'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .mana(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.botanicadds.gaia_plate.remove(GaiaPlateRecipes.RecipeGaiaPlate)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botanicadds.gaia_plate.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botanicadds.gaia_plate.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botanicadds.gaia_plate.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botanicadds.gaia_plate.removeByInput(item('botania:manaresource'))
mods.botanicadds.gaia_plate.removeByOutput(item('botanicadds:gaiasteel_ingot'))
mods.botanicadds.gaia_plate.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botanicadds.gaia_plate.streamRecipes()
    ```
