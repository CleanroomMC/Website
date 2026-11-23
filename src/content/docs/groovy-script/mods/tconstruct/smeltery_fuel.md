---
title: Smeltery Fuel (Tinkers' Construct)
description: Modifies what fluids are accepted as fuels for the Smeltery and how long each fuels the Smeltery.
sidebar:
  label: Smeltery Fuel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/SmelteryFuel.java
---

## Description

Modifies what fluids are accepted as fuels for the Smeltery and how long each fuels the Smeltery.

## Identifier

The identifier `mods.tconstruct.smeltery_fuel` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ticon.smelteryfuel
mods.ticon.smelteryFuel
mods.ticon.SmelteryFuel
mods.ticon.smeltery_fuel
mods.tconstruct.smelteryfuel
mods.tconstruct.smelteryFuel
mods.tconstruct.SmelteryFuel
mods.tconstruct.smeltery_fuel/* Used as page default */
mods.tinkersconstruct.smelteryfuel
mods.tinkersconstruct.smelteryFuel
mods.tinkersconstruct.SmelteryFuel
mods.tinkersconstruct.smeltery_fuel
```

</details>

## Adding Entries

- Adds the given fluid as a smeltery fuel with the given burn time:

    ```groovy
    mods.tconstruct.smeltery_fuel.addFuel(FluidStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.smeltery_fuel.addFuel(fluid('water'), 250)
```

</details>

## Removing Entries

- Removes the given fluid from being a smeltery fuel:

    ```groovy
    mods.tconstruct.smeltery_fuel.removeFuel(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.tconstruct.smeltery_fuel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.smeltery_fuel.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.tconstruct.smeltery_fuel.streamRecipes()
    ```
