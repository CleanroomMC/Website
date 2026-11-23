---
title: Fluid Coolant (Ender IO)
description: Create a Coolant with a given coolant rate that produces power with a Fuel while in a Combustion Generator.
sidebar:
  label: Fluid Coolant
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/FluidCoolant.java
---

## Description

Create a Coolant with a given coolant rate that produces power with a Fuel while in a Combustion Generator.

## Identifier

The identifier `mods.enderio.fluid_coolant` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {12}
mods.eio.fluidcoolant
mods.eio.fluidCoolant
mods.eio.FluidCoolant
mods.eio.fluid_coolant
mods.eio.combustioncoolant
mods.eio.combustionCoolant
mods.eio.CombustionCoolant
mods.eio.combustion_coolant
mods.enderio.fluidcoolant
mods.enderio.fluidCoolant
mods.enderio.FluidCoolant
mods.enderio.fluid_coolant/* Used as page default */
mods.enderio.combustioncoolant
mods.enderio.combustionCoolant
mods.enderio.CombustionCoolant
mods.enderio.combustion_coolant
```

</details>

## Adding Recipes

- Adds recipes in the format `fluid`, `degreesPerMb`:

    ```groovy
    mods.enderio.fluid_coolant.addCoolant(Fluid, float)
    ```

- Adds recipes in the format `fluid`, `degreesPerMb`:

    ```groovy
    mods.enderio.fluid_coolant.addCoolant(FluidStack, float)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.fluid_coolant.addCoolant(fluid('xpjuice'), 1000)
```

</details>

## Removing Recipes

- Removes recipes matching the target fluid:

    ```groovy
    mods.enderio.fluid_coolant.remove(Fluid)
    ```

- Removes recipes matching the target fluid:

    ```groovy
    mods.enderio.fluid_coolant.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.enderio.fluid_coolant.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.fluid_coolant.remove(fluid('water'))
mods.enderio.fluid_coolant.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.enderio.fluid_coolant.streamRecipes()
    ```
