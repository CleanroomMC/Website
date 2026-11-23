---
title: Blast Furnace Fuel (Immersive Engineering)
description: Allows an item to be used in the Blast Furnace as a fuel for the given number of ticks.
sidebar:
  label: Blast Furnace Fuel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/BlastFurnaceFuel.java
---

## Description

Allows an item to be used in the Blast Furnace as a fuel for the given number of ticks.

## Identifier

The identifier `mods.immersiveengineering.blast_furnace_fuel` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ie.blastfurnacefuel
mods.ie.blastFurnaceFuel
mods.ie.BlastFurnaceFuel
mods.ie.blast_furnace_fuel
mods.immersiveengineering.blastfurnacefuel
mods.immersiveengineering.blastFurnaceFuel
mods.immersiveengineering.BlastFurnaceFuel
mods.immersiveengineering.blast_furnace_fuel/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersiveengineering.blast_furnace_fuel.add(BlastFurnaceRecipe.BlastFurnaceFuel)
    ```

- Adds recipes in the format `input`, `time`:

    ```groovy
    mods.immersiveengineering.blast_furnace_fuel.add(IIngredient, int)
    ```

### Recipe Builder

Just like other recipe types, the Blast Furnace Fuel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersiveengineering.blast_furnace_fuel.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.BlastFurnaceRecipe$BlastFurnaceFuel`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.blast_furnace_fuel.recipeBuilder()
    .input(item('minecraft:clay'))
    .time(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersiveengineering.blast_furnace_fuel.remove(BlastFurnaceRecipe.BlastFurnaceFuel)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.blast_furnace_fuel.removeByInput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.blast_furnace_fuel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.blast_furnace_fuel.removeByInput(item('immersiveengineering:material:6'))
mods.immersiveengineering.blast_furnace_fuel.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.blast_furnace_fuel.streamRecipes()
    ```
