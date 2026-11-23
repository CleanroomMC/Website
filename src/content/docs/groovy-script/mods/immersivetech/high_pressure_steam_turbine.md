---
title: High-Pressure Steam Turbine (Immersive Technology)
description: Converts an input fluidstack into an output fluidstack after a given amount of time in a multiblock structure, producing power for an adjacent Alternator multiblock.
sidebar:
  label: High-Pressure Steam Turbine
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/HighPressureSteamTurbine.java
---

## Description

Converts an input fluidstack into an output fluidstack after a given amount of time in a multiblock structure, producing power for an adjacent Alternator multiblock.

## Identifier

The identifier `mods.immersivetech.high_pressure_steam_turbine` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.immersivetech.highpressuresteamturbine
mods.immersivetech.highPressureSteamTurbine
mods.immersivetech.HighPressureSteamTurbine
mods.immersivetech.high_pressure_steam_turbine/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivetech.high_pressure_steam_turbine.add(HighPressureSteamTurbineRecipe)
    ```

### Recipe Builder

Just like other recipe types, the High-Pressure Steam Turbine also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivetech.high_pressure_steam_turbine.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.HighPressureSteamTurbineRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.high_pressure_steam_turbine.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.high_pressure_steam_turbine.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .fluidOutput(fluid('lava') * 50)
    .time(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivetech.high_pressure_steam_turbine.remove(HighPressureSteamTurbineRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivetech.high_pressure_steam_turbine.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersivetech.high_pressure_steam_turbine.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivetech.high_pressure_steam_turbine.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.high_pressure_steam_turbine.removeByInput(fluid('highpressuresteam'))
mods.immersivetech.high_pressure_steam_turbine.removeByOutput(fluid('steam'))
mods.immersivetech.high_pressure_steam_turbine.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivetech.high_pressure_steam_turbine.streamRecipes()
    ```
