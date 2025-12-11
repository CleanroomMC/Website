---
title: "Fluid Fuel"
titleTemplate: "Ender IO | CleanroomMC"
description: "Create a Fuel with a given power per tick and total burn time that produces power with a Coolant while in a Combustion Generator."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/FluidFuel.java"
---

# Fluid Fuel (Ender IO)

## Description

Create a Fuel with a given power per tick and total burn time that produces power with a Coolant while in a Combustion Generator.

## Identifier

The identifier `mods.enderio.fluid_fuel` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {12}
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
mods.enderio.fluid_fuel/* Used as page default */ // [!code focus]
mods.enderio.combustionfuel
mods.enderio.combustionFuel
mods.enderio.CombustionFuel
mods.enderio.combustion_fuel
```

::::::::::

## Adding Recipes

- Adds recipes in the format `fluid`, `rfPerCycle`, `totalBurnTime`:

    ```groovy:no-line-numbers
    mods.enderio.fluid_fuel.addFuel(Fluid, int, int)
    ```

- Adds recipes in the format `fluid`, `rfPerCycle`, `totalBurnTime`:

    ```groovy:no-line-numbers
    mods.enderio.fluid_fuel.addFuel(FluidStack, int, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.fluid_fuel.addFuel(fluid('lava'), 500, 1000)
```

::::::::::

## Removing Recipes

- Removes recipes matching the target fluid:

    ```groovy:no-line-numbers
    mods.enderio.fluid_fuel.remove(Fluid)
    ```

- Removes recipes matching the target fluid:

    ```groovy:no-line-numbers
    mods.enderio.fluid_fuel.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.enderio.fluid_fuel.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.fluid_fuel.remove(fluid('fire_water'))
mods.enderio.fluid_fuel.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.enderio.fluid_fuel.streamRecipes()
    ```
