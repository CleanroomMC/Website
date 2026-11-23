---
title: Fluid Transposer - Empty (Thermal Expansion)
description: Converts an input itemstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost.
sidebar:
  label: Fluid Transposer - Empty
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/TransposerExtract.java
---

## Description

Converts an input itemstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Does not alter fill/empty container recipes.

</details>

## Identifier

The identifier `mods.thermalexpansion.transposer_extract` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.thermal.transposerextract
mods.thermal.transposerExtract
mods.thermal.TransposerExtract
mods.thermal.transposer_extract
mods.thermalexpansion.transposerextract
mods.thermalexpansion.transposerExtract
mods.thermalexpansion.TransposerExtract
mods.thermalexpansion.transposer_extract/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input`, `outputFluid`, `outputItem`, `chance`:

    ```groovy
    mods.thermalexpansion.transposer_extract.add(int, IIngredient, FluidStack, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.transposer_extract.add(1000, item('minecraft:obsidian'), fluid('water') * 50, item('minecraft:diamond') * 2, 100)
```

</details>

### Recipe Builder

Just like other recipe types, the Fluid Transposer - Empty also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.transposer_extract.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the chance the output itemstack is created. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy
    chance(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `TransposerManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.TransposerManager$TransposerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.transposer_extract.recipeBuilder()
    .input(item('minecraft:diamond') * 2)
    .fluidOutput(fluid('water') * 100)
    .register()

mods.thermalexpansion.transposer_extract.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .fluidOutput(fluid('water') * 50)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.transposer_extract.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.transposer_extract.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.transposer_extract.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.transposer_extract.removeByInput(item('minecraft:sponge:1'))
mods.thermalexpansion.transposer_extract.removeByOutput(fluid('seed_oil'))
mods.thermalexpansion.transposer_extract.removeByOutput(item('minecraft:bowl'))
mods.thermalexpansion.transposer_extract.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.transposer_extract.streamRecipes()
    ```
