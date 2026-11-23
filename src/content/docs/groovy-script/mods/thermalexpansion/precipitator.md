---
title: Glacial Precipitator (Thermal Expansion)
description: Converts an amount of water into a specific output itemstack, costing power and taking time based on the power cost.
sidebar:
  label: Glacial Precipitator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Precipitator.java
---

## Description

Converts an amount of water into a specific output itemstack, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.precipitator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.precipitator
mods.thermal.Precipitator
mods.thermalexpansion.precipitator/* Used as page default */
mods.thermalexpansion.Precipitator
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `output`, `water`:

    ```groovy
    mods.thermalexpansion.precipitator.add(int, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.precipitator.add(1000, item('minecraft:obsidian'), 100)
```

</details>

### Recipe Builder

Just like other recipe types, the Glacial Precipitator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.precipitator.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the amount of water consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    water(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `PrecipitatorManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.PrecipitatorManager$PrecipitatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.precipitator.recipeBuilder()
    .output(item('minecraft:clay'))
    .register()

mods.thermalexpansion.precipitator.recipeBuilder()
    .water(100)
    .output(item('minecraft:clay'))
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.precipitator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.precipitator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.precipitator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.precipitator.removeByInput(fluid('water'))
mods.thermalexpansion.precipitator.removeByOutput(item('minecraft:snowball'))
mods.thermalexpansion.precipitator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.precipitator.streamRecipes()
    ```
