---
title: Magma Crucible (Thermal Expansion)
description: Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost.
sidebar:
  label: Magma Crucible
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Crucible.java
---

## Description

Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.crucible` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.crucible
mods.thermal.Crucible
mods.thermalexpansion.crucible/* Used as page default */
mods.thermalexpansion.Crucible
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input`, `fluidOutput`:

    ```groovy
    mods.thermalexpansion.crucible.add(int, IIngredient, FluidStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.crucible.add(1000, item('minecraft:obsidian'), fluid('water') * 1000)
```

</details>

### Recipe Builder

Just like other recipe types, the Magma Crucible also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.crucible.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `CrucibleManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.CrucibleManager$CrucibleRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.crucible.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('lava') * 25)
    .register()

mods.thermalexpansion.crucible.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidOutput(fluid('water') * 1000)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.crucible.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.crucible.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.crucible.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.crucible.removeByInput(item('minecraft:glowstone_dust'))
mods.thermalexpansion.crucible.removeByOutput(fluid('lava'))
mods.thermalexpansion.crucible.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.crucible.streamRecipes()
    ```
