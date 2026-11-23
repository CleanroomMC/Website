---
title: Induction Smelter (Thermal Expansion)
description: Converts two input itemstacks into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost.
sidebar:
  label: Induction Smelter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Smelter.java
---

## Description

Converts two input itemstacks into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.smelter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.smelter
mods.thermal.Smelter
mods.thermalexpansion.smelter/* Used as page default */
mods.thermalexpansion.Smelter
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input0`, `input1`, `output0`, `output1`, `chance`:

    ```groovy
    mods.thermalexpansion.smelter.add(int, IIngredient, IIngredient, ItemStack, ItemStack, int)
    ```

- Adds an item to the Metallurgic Flux list, which filters the inputs for one of the Induction Smelter slots when enabled:

    ```groovy
    mods.thermalexpansion.smelter.addFlux(ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.smelter.add(1000, item('minecraft:obsidian'), item('minecraft:gold_ingot') * 2, item('minecraft:clay'), item('minecraft:diamond'), 5)
```

</details>

### Recipe Builder

Just like other recipe types, the Induction Smelter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.smelter.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the chance the second output itemstack is created. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy
    chance(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `SmelterManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.SmelterManager$SmelterRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.smelter.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:diamond'))
    .output(item('minecraft:diamond') * 4)
    .register()

mods.thermalexpansion.smelter.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay'), item('minecraft:diamond'))
    .chance(5)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes an item from the Metallurgic Flux list, which filters the inputs for one of the Induction Smelter slots when enabled:

    ```groovy
    mods.thermalexpansion.smelter.removeFlux(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.smelter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.smelter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.smelter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.smelter.removeByInput(ore('sand'))
mods.thermalexpansion.smelter.removeByInput(item('minecraft:iron_ingot'))
mods.thermalexpansion.smelter.removeByOutput(item('thermalfoundation:material:166'))
mods.thermalexpansion.smelter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.smelter.streamRecipes()
    ```
