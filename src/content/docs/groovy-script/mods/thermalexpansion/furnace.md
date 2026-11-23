---
title: Redstone Furnace (Thermal Expansion)
description: Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost.
sidebar:
  label: Redstone Furnace
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Furnace.java
---

## Description

Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.furnace` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.furnace
mods.thermal.Furnace
mods.thermalexpansion.furnace/* Used as page default */
mods.thermalexpansion.Furnace
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input`, `output`:

    ```groovy
    mods.thermalexpansion.furnace.add(int, IIngredient, ItemStack)
    ```

- Adds the given ItemStack to the food list, which allows it to have doubled output if the Trivection Chamber augment is installed:

    ```groovy
    mods.thermalexpansion.furnace.addFood(ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.furnace.add(1000, item('minecraft:obsidian') * 2, item('minecraft:clay'))
mods.thermalexpansion.furnace.addFood(item('minecraft:emerald_ore'))
```

</details>

### Recipe Builder

Just like other recipe types, the Redstone Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.furnace.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.FurnaceManager$FurnaceRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.furnace.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay') * 2)
    .register()

mods.thermalexpansion.furnace.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay'))
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given ItemStack from the food list, which allows it to have doubled output if the Trivection Chamber augment is installed:

    ```groovy
    mods.thermalexpansion.furnace.removeFood(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.furnace.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.furnace.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.furnace.removeAll()
    ```

- Removes all entries from the food list:

    ```groovy
    mods.thermalexpansion.furnace.removeAllFood()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.furnace.removeFood(item('minecraft:rabbit:*'))
mods.thermalexpansion.furnace.removeByInput(item('minecraft:cactus:*'))
mods.thermalexpansion.furnace.removeByOutput(item('minecraft:cooked_porkchop'))
mods.thermalexpansion.furnace.removeAll()
mods.thermalexpansion.furnace.removeAllFood()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.furnace.streamRecipes()
    ```
