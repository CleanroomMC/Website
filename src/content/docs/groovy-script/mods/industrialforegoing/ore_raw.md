---
title: Washing Factory (Industrial Foregoing)
description: Converts an input itemstack and input fluidstack into an output fluidstack.
sidebar:
  label: Washing Factory
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/OreRaw.java
---

## Description

Converts an input itemstack and input fluidstack into an output fluidstack.

## Identifier

The identifier `mods.industrialforegoing.ore_raw` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.industrialforegoing.oreraw
mods.industrialforegoing.oreRaw
mods.industrialforegoing.OreRaw
mods.industrialforegoing.ore_raw/* Used as page default */
mods.industrialforegoing.washing
mods.industrialforegoing.Washing
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.industrialforegoing.ore_raw.add(OreFluidEntryRaw)
    ```

- Adds a Washing Factory recipe in the format `ore`, `input`, `output`:

    ```groovy
    mods.industrialforegoing.ore_raw.add(String, FluidStack, FluidStack)
    ```

- Adds a Washing Factory recipe in the format `ore`, `input`, `output`:

    ```groovy
    mods.industrialforegoing.ore_raw.add(OreDictIngredient, FluidStack, FluidStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.ore_raw.add(ore('oreGold'), fluid('meat') * 200, fluid('if.ore_fluid_raw').withNbt(['Ore': 'oreGold']) * 300)
mods.industrialforegoing.ore_raw.add(ore('stone'), fluid('water') * 1000, fluid('lava') * 50)
```

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.industrialforegoing.ore_raw.remove(OreFluidEntryRaw)
    ```

- Removes all recipes that match the given ore:

    ```groovy
    mods.industrialforegoing.ore_raw.removeByOre(String)
    ```

- Removes all recipes that match the given ore:

    ```groovy
    mods.industrialforegoing.ore_raw.removeByOre(OreDictIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.industrialforegoing.ore_raw.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.industrialforegoing.ore_raw.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.ore_raw.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.ore_raw.removeByOre('oreRedstone')
mods.industrialforegoing.ore_raw.removeByOre(ore('oreRedstone'))
mods.industrialforegoing.ore_raw.removeByInput(fluid('meat'))
mods.industrialforegoing.ore_raw.removeByOutput(fluid('if.ore_fluid_raw').withNbt(['Ore': 'oreRedstone']),)
mods.industrialforegoing.ore_raw.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.ore_raw.streamRecipes()
    ```
