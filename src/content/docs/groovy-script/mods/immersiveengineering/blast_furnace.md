---
title: Blast Furnace (Immersive Engineering)
description: Converts an input itemstack into an output itemstack and an optional 'slag' itemstack, taking time and consuming fuel (based on Blast Furnace Fuels).
sidebar:
  label: Blast Furnace
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/BlastFurnace.java
---

## Description

Converts an input itemstack into an output itemstack and an optional 'slag' itemstack, taking time and consuming fuel (based on Blast Furnace Fuels).

## Identifier

The identifier `mods.immersiveengineering.blast_furnace` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ie.blastfurnace
mods.ie.blastFurnace
mods.ie.BlastFurnace
mods.ie.blast_furnace
mods.immersiveengineering.blastfurnace
mods.immersiveengineering.blastFurnace
mods.immersiveengineering.BlastFurnace
mods.immersiveengineering.blast_furnace/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersiveengineering.blast_furnace.add(BlastFurnaceRecipe)
    ```

- Adds recipes in the format `output`, `input`, `time`, `slag`:

    ```groovy
    mods.immersiveengineering.blast_furnace.add(ItemStack, IIngredient, int, ItemStack)
    ```

### Recipe Builder

Just like other recipe types, the Blast Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersiveengineering.blast_furnace.recipeBuilder()
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

- `ItemStack`. Sets the item output as slag.

    ```groovy
    slag(ItemStack)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.BlastFurnaceRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.blast_furnace.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .time(100)
    .slag(item('minecraft:gold_nugget'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersiveengineering.blast_furnace.remove(BlastFurnaceRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.blast_furnace.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.blast_furnace.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.blast_furnace.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.blast_furnace.removeByInput(item('minecraft:iron_block'))
mods.immersiveengineering.blast_furnace.removeByOutput(item('immersiveengineering:metal:8'))
mods.immersiveengineering.blast_furnace.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.blast_furnace.streamRecipes()
    ```
