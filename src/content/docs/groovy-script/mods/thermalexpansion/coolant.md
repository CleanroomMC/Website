---
title: Thermal Mediator (Thermal Expansion)
description: Consumes fluid to speed up the tick rate of adjacent machines and devices and generate power in the Compression Dynamo.
sidebar:
  label: Thermal Mediator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Coolant.java
---

## Description

Consumes fluid to speed up the tick rate of adjacent machines and devices and generate power in the Compression Dynamo.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Due to a limitation involving displaying the entry in JEI, entries must output at least 4000 rf.

</details>

## Identifier

The identifier `mods.thermalexpansion.coolant` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.coolant
mods.thermal.Coolant
mods.thermalexpansion.coolant/* Used as page default */
mods.thermalexpansion.Coolant
```

</details>

## Adding Entries

- Adds recipes in the format `energy`, `input`, `fluidOutput`:

    ```groovy
    mods.thermalexpansion.coolant.add(FluidStack, int, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.coolant.add(fluid('lava'), 4000, 30)
```

</details>

## Removing Entries

- Removes the given fluid from the Thermal Mediator:

    ```groovy
    mods.thermalexpansion.coolant.remove(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.coolant.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.coolant.remove(fluid('cryotheum'))
mods.thermalexpansion.coolant.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.coolant.streamRecipes()
    ```
