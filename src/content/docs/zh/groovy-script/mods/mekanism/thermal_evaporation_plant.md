---
title: Thermal Evaporation Plant (Mekanism)
description: Converts an input fluidstack into an output fluidstack over time based on multiblock temperature.
sidebar:
  label: Thermal Evaporation Plant
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/ThermalEvaporationPlant.java
---

## Description

Converts an input fluidstack into an output fluidstack over time based on multiblock temperature.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mekanism.thermal_evaporation_plant/* Used as page default */
mods.mekanism.thermalevaporationplant
mods.mekanism.thermalEvaporationPlant
mods.mekanism.ThermalEvaporationPlant
mods.mekanism.thermal_evaporation
mods.mekanism.thermalevaporation
mods.mekanism.thermalEvaporation
mods.mekanism.ThermalEvaporation
mods.mekanism.TEP
mods.mekanism.tep
```

## Adding Recipes

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.mekanism.thermal_evaporation_plant.add(FluidStack, FluidStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.thermal_evaporation_plant.add(fluid('water'), fluid('steam'))
```

</details>

### Recipe Builder

Just like other recipe types, the Thermal Evaporation Plant also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mekanism.thermal_evaporation_plant.recipeBuilder()</summary>

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.ThermalEvaporationRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.thermal_evaporation_plant.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('steam'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.thermal_evaporation_plant.removeByInput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.thermal_evaporation_plant.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.thermal_evaporation_plant.removeByInput(fluid('water'))
mods.mekanism.thermal_evaporation_plant.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.thermal_evaporation_plant.streamRecipes()
    ```
