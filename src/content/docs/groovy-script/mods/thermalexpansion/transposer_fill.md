---
title: Fluid Transposer - Fill (Thermal Expansion)
description: Converts an input itemstack and input fluidstack into an output itemstack with chance, costing power and taking time based on the power cost.
sidebar:
  label: Fluid Transposer - Fill
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/TransposerFill.java
---

## Description

Converts an input itemstack and input fluidstack into an output itemstack with chance, costing power and taking time based on the power cost.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Does not alter fill/empty container recipes.

</details>

## Identifier

The identifier `mods.thermalexpansion.transposer_fill` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.thermal.transposerfill
mods.thermal.transposerFill
mods.thermal.TransposerFill
mods.thermal.transposer_fill
mods.thermalexpansion.transposerfill
mods.thermalexpansion.transposerFill
mods.thermalexpansion.TransposerFill
mods.thermalexpansion.transposer_fill/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input`, `fluidInput`, `outputItem`, `chance`:

    ```groovy
    mods.thermalexpansion.transposer_fill.add(int, IIngredient, FluidStack, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.transposer_fill.add(1000, item('minecraft:obsidian'), fluid('water') * 50, item('minecraft:diamond') * 2, 100)
```

</details>

### Recipe Builder

Just like other recipe types, the Fluid Transposer - Fill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.transposer_fill.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
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
mods.thermalexpansion.transposer_fill.recipeBuilder()
    .input(item('minecraft:diamond') * 2)
    .fluidInput(fluid('water') * 100)
    .register()

mods.thermalexpansion.transposer_fill.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .fluidInput(fluid('water') * 50)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.transposer_fill.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.transposer_fill.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.transposer_fill.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.transposer_fill.removeByInput(fluid('glowstone'))
mods.thermalexpansion.transposer_fill.removeByInput(item('minecraft:concrete_powder:3'))
mods.thermalexpansion.transposer_fill.removeByOutput(item('minecraft:ice'))
mods.thermalexpansion.transposer_fill.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.transposer_fill.streamRecipes()
    ```
