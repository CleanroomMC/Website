---
title: Fluid Fuel (Ender IO)
description: Create a Fuel with a given power per tick and total burn time that produces power with a Coolant while in a Combustion Generator.
sidebar:
  label: Fluid Fuel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/FluidFuel.java
---

## Description

Create a Fuel with a given power per tick and total burn time that produces power with a Coolant while in a Combustion Generator.

## Identifier

The identifier `mods.enderio.fluid_fuel` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {12}
mods.eio.fluidfuel
mods.eio.fluidFuel
mods.eio.FluidFuel
mods.eio.fluid_fuel
mods.eio.combustionfuel
mods.eio.combustionFuel
mods.eio.CombustionFuel
mods.eio.combustion_fuel
mods.enderio.fluidfuel
mods.enderio.fluidFuel
mods.enderio.FluidFuel
mods.enderio.fluid_fuel/* Used as page default */
mods.enderio.combustionfuel
mods.enderio.combustionFuel
mods.enderio.CombustionFuel
mods.enderio.combustion_fuel
```

</details>

## Adding Recipes

- Adds recipes in the format `fluid`, `rfPerCycle`, `totalBurnTime`:

    ```groovy
    mods.enderio.fluid_fuel.addFuel(Fluid, int, int)
    ```

- Adds recipes in the format `fluid`, `rfPerCycle`, `totalBurnTime`:

    ```groovy
    mods.enderio.fluid_fuel.addFuel(FluidStack, int, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.fluid_fuel.addFuel(fluid('lava'), 500, 1000)
```

</details>

## Removing Recipes

- Removes recipes matching the target fluid:

    ```groovy
    mods.enderio.fluid_fuel.remove(Fluid)
    ```

- Removes recipes matching the target fluid:

    ```groovy
    mods.enderio.fluid_fuel.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.enderio.fluid_fuel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.fluid_fuel.remove(fluid('fire_water'))
mods.enderio.fluid_fuel.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.enderio.fluid_fuel.streamRecipes()
    ```
