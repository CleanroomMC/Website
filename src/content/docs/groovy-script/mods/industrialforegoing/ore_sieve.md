---
title: Fluid Sieving Machine (Industrial Foregoing)
description: Converts an input itemstack and input fluidstack into an output itemstack.
sidebar:
  label: Fluid Sieving Machine
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/OreSieve.java
---

## Description

Converts an input itemstack and input fluidstack into an output itemstack.

## Identifier

The identifier `mods.industrialforegoing.ore_sieve` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.industrialforegoing.oresieve
mods.industrialforegoing.oreSieve
mods.industrialforegoing.OreSieve
mods.industrialforegoing.ore_sieve/* Used as page default */
mods.industrialforegoing.fluidsieving
mods.industrialforegoing.fluidSieving
mods.industrialforegoing.FluidSieving
mods.industrialforegoing.fluid_sieving
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.industrialforegoing.ore_sieve.add(OreFluidEntrySieve)
    ```

- Adds a Fluid Sieving Machine recipe in the format `input`, `output`, `sieveItem`:

    ```groovy
    mods.industrialforegoing.ore_sieve.add(FluidStack, ItemStack, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.ore_sieve.add(fluid('if.ore_fluid_fermented').withNbt(['Ore': 'oreGold']) * 100, item('minecraft:nether_star') * 2, item('minecraft:clay'))
mods.industrialforegoing.ore_sieve.add(fluid('lava') * 5, item('minecraft:gold_ingot'), item('minecraft:clay'))
```

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.industrialforegoing.ore_sieve.remove(OreFluidEntrySieve)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.industrialforegoing.ore_sieve.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.industrialforegoing.ore_sieve.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.ore_sieve.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.ore_sieve.removeByInput(item('minecraft:sand'))
mods.industrialforegoing.ore_sieve.removeByInput(fluid('if.pink_slime'))
mods.industrialforegoing.ore_sieve.removeByOutput(item('industrialforegoing:pink_slime_ingot)
mods.industrialforegoing.ore_sieve.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.ore_sieve.streamRecipes()
    ```
