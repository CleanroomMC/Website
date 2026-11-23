---
title: Redstone Furnace - Pyrolytic Conversion (Thermal Expansion)
description: Converts an input itemstack into an output itemstack and creosote amount, costing power and taking time based on the power cost.
sidebar:
  label: Redstone Furnace - Pyrolytic Conversion
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/FurnacePyrolysis.java
---

## Description

Converts an input itemstack into an output itemstack and creosote amount, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.furnace_pyrolysis` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.thermal.furnacepyrolysis
mods.thermal.furnacePyrolysis
mods.thermal.FurnacePyrolysis
mods.thermal.furnace_pyrolysis
mods.thermalexpansion.furnacepyrolysis
mods.thermalexpansion.furnacePyrolysis
mods.thermalexpansion.FurnacePyrolysis
mods.thermalexpansion.furnace_pyrolysis/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input`, `output`, `creosote`:

    ```groovy
    mods.thermalexpansion.furnace_pyrolysis.add(int, IIngredient, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.furnace_pyrolysis.add(1000, item('minecraft:obsidian') * 2, item('minecraft:clay'), 1000)
```

</details>

### Recipe Builder

Just like other recipe types, the Redstone Furnace - Pyrolytic Conversion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.furnace_pyrolysis.recipeBuilder()
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

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `FurnaceManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

- `int`. Sets the amount of creosote fluid output by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    creosote(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.FurnaceManager$FurnaceRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.furnace_pyrolysis.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .creosote(100)
    .register()

mods.thermalexpansion.furnace_pyrolysis.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay'))
    .creosote(1000)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.furnace_pyrolysis.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.furnace_pyrolysis.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.furnace_pyrolysis.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.furnace_pyrolysis.removeByInput(item('minecraft:cactus:*'))
mods.thermalexpansion.furnace_pyrolysis.removeByOutput(item('thermalfoundation:storage_resource:1'))
mods.thermalexpansion.furnace_pyrolysis.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.furnace_pyrolysis.streamRecipes()
    ```
