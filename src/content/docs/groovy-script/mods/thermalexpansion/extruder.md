---
title: Igneous Extruder (Thermal Expansion)
description: Converts a variable amount of lava and water into a specific output itemstack.
sidebar:
  label: Igneous Extruder
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Extruder.java
---

## Description

Converts a variable amount of lava and water into a specific output itemstack.

## Identifier

The identifier `mods.thermalexpansion.extruder` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.extruder
mods.thermal.Extruder
mods.thermalexpansion.extruder/* Used as page default */
mods.thermalexpansion.Extruder
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input`, `fluidHot`, `fluidCold`, `sedimentary`:

    ```groovy
    mods.thermalexpansion.extruder.add(int, ItemStack, int, int, boolean)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.extruder.add(1000, item('minecraft:gold_block'), 100, 1000, false)
```

</details>

### Recipe Builder

Just like other recipe types, the Igneous Extruder also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.extruder.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `ExtruderManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

- `int`. Sets the amount of lava consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    fluidHot(int)
    ```

- `int`. Sets the amount of water consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    fluidCold(int)
    ```

- `boolean`. Sets if the recipe requires the Clastic Deposition augment installed. (Default `false`).

    ```groovy
    sedimentary()
    sedimentary(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.ExtruderManager$ExtruderRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.extruder.recipeBuilder()
    .fluidHot(100)
    .fluidCold(1000)
    .output(item('minecraft:clay'))
    .register()

mods.thermalexpansion.extruder.recipeBuilder()
    .fluidHot(100)
    .fluidCold(1000)
    .output(item('minecraft:gold_ingot'))
    .sedimentary()
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes for the given type, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy
    mods.thermalexpansion.extruder.removeByType(boolean)
    ```

- Removes the given IIngredient input from the given Igneous Extruder mode, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy
    mods.thermalexpansion.extruder.removeByInput(IIngredient)
    ```

- Removes the given IIngredient input from the given Igneous Extruder mode, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy
    mods.thermalexpansion.extruder.removeByInput(boolean, IIngredient)
    ```

- Removes the given IIngredient output from the given Igneous Extruder mode, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy
    mods.thermalexpansion.extruder.removeByOutput(IIngredient)
    ```

- Removes the given IIngredient output from the given Igneous Extruder mode, with `true` indicating sedimentary, and `false` indicating the normal recipe map:

    ```groovy
    mods.thermalexpansion.extruder.removeByOutput(boolean, IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.extruder.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.extruder.removeByType(true)
mods.thermalexpansion.extruder.removeByInput(fluid('water'))
mods.thermalexpansion.extruder.removeByInput(false, fluid('lava'))
mods.thermalexpansion.extruder.removeByOutput(item('minecraft:obsidian'))
mods.thermalexpansion.extruder.removeByOutput(true, item('minecraft:gravel'))
mods.thermalexpansion.extruder.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.extruder.streamRecipes()
    ```
