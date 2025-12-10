---
title: "Fluid Sieving Machine"
titleTemplate: "Industrial Foregoing | CleanroomMC"
description: "Converts an input itemstack and input fluidstack into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/OreSieve.java"
---

# Fluid Sieving Machine (Industrial Foregoing)

## Description

Converts an input itemstack and input fluidstack into an output itemstack.

## Identifier

The identifier `mods.industrialforegoing.ore_sieve` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.industrialforegoing.oresieve
mods.industrialforegoing.oreSieve
mods.industrialforegoing.OreSieve
mods.industrialforegoing.ore_sieve/* Used as page default */ // [!code focus]
mods.industrialforegoing.fluidsieving
mods.industrialforegoing.fluidSieving
mods.industrialforegoing.FluidSieving
mods.industrialforegoing.fluid_sieving
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.add(OreFluidEntrySieve)
    ```

- Adds a Fluid Sieving Machine recipe in the format `input`, `output`, `sieveItem`:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.add(FluidStack, ItemStack, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.ore_sieve.add(fluid('if.ore_fluid_fermented').withNbt(['Ore': 'oreGold']) * 100, item('minecraft:nether_star') * 2, item('minecraft:clay'))
mods.industrialforegoing.ore_sieve.add(fluid('lava') * 5, item('minecraft:gold_ingot'), item('minecraft:clay'))
```

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.remove(OreFluidEntrySieve)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.industrialforegoing.ore_sieve.removeByInput(item('minecraft:sand'))
mods.industrialforegoing.ore_sieve.removeByInput(fluid('if.pink_slime'))
mods.industrialforegoing.ore_sieve.removeByOutput(item('industrialforegoing:pink_slime_ingot)
mods.industrialforegoing.ore_sieve.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.industrialforegoing.ore_sieve.streamRecipes()
    ```
