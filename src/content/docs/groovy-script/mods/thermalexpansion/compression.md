---
title: Compression Dynamo (Thermal Expansion)
description: Converts an input fluidstack into power, taking time based on the power.
sidebar:
  label: Compression Dynamo
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Compression.java
---

## Description

Converts an input fluidstack into power, taking time based on the power.

## Identifier

The identifier `mods.thermalexpansion.compression` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.compression
mods.thermal.Compression
mods.thermalexpansion.compression/* Used as page default */
mods.thermalexpansion.Compression
```

</details>

## Adding Recipes

- Adds recipes in the format `fluidStack`, `energy`:

    ```groovy
    mods.thermalexpansion.compression.add(FluidStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.compression.add(fluid('steam'), 100)
```

</details>

## Removing Recipes

- Removes all recipes with given FluidStack:

    ```groovy
    mods.thermalexpansion.compression.removeByInput(String)
    ```

- Removes all recipes with given FluidStack:

    ```groovy
    mods.thermalexpansion.compression.removeByInput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.compression.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.compression.removeByInput(fluid('seed_oil'))
mods.thermalexpansion.compression.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.compression.streamRecipes()
    ```
