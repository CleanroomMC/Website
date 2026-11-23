---
title: Lightwell (Astral Sorcery)
description: Converts an input item into fluid, with a chance at breaking every time fluid is produced. The amount of fluid produced per interval can be increased via starlight.
sidebar:
  label: Lightwell
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/Lightwell.java
---

## Description

Converts an input item into fluid, with a chance at breaking every time fluid is produced. The amount of fluid produced per interval can be increased via starlight.

## Identifier

The identifier `mods.astralsorcery.lightwell` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.astral.lightwell
mods.astral.Lightwell
mods.astralsorcery.lightwell/* Used as page default */
mods.astralsorcery.Lightwell
```

</details>

## Adding Recipes

- Adds recipes in the format `catalyst`, `output`, `productionMultiplier`, `shatterMultiplier`:

    ```groovy
    mods.astralsorcery.lightwell.add(ItemStack, Fluid, float, float)
    ```

- Adds recipes in the format `catalyst`, `output`, `productionMultiplier`, `shatterMultiplier`, `color`:

    ```groovy
    mods.astralsorcery.lightwell.add(ItemStack, Fluid, float, float, Color)
    ```

### Recipe Builder

Just like other recipe types, the Lightwell also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.astralsorcery.lightwell.recipeBuilder()
    ```

---

- `Color`. Sets the color of the produced particles.

    ```groovy
    catalystColor(int)
    catalystColor(Color)
    catalystColor(int, int, int)
    catalystColor(int, int, int, int)
    ```

- `Fluid`. Sets the output fluid. Requires not null.

    ```groovy
    output(FluidStack)
    ```

- `ItemStack`. Sets the input item. Requires not null.

    ```groovy
    catalyst(ItemStack)
    ```

- `float`. Sets how likely the catalyst is to shatter when producing fluid, with higher being less likely but never 0. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy
    shatterMultiplier(float)
    ```

- `float`. Sets the base amount of fluid produced per tick. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy
    productionMultiplier(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.base.WellLiquefaction$LiquefactionEntry`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.lightwell.recipeBuilder()
    .catalyst(item('minecraft:stone'))
    .output(fluid('astralsorcery.liquidstarlight'))
    .productionMultiplier(1.0F)
    .shatterMultiplier(15.0F)
    .catalystColor(16725260)
    .register()

mods.astralsorcery.lightwell.recipeBuilder()
    .catalyst(item('minecraft:obsidian'))
    .output(fluid('astralsorcery.liquidstarlight'))
    .productionMultiplier(1.0F)
    .shatterMultiplier(15.0F)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.astralsorcery.lightwell.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.astralsorcery.lightwell.removeByOutput(FluidStack)
    ```

- Removes all recipes that match the given catalyst:

    ```groovy
    mods.astralsorcery.lightwell.removeByCatalyst(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.astralsorcery.lightwell.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.lightwell.removeByInput(item('minecraft:packed_ice'))
mods.astralsorcery.lightwell.removeByOutput(fluid('lava'))
mods.astralsorcery.lightwell.removeByCatalyst(item('minecraft:ice'))
mods.astralsorcery.lightwell.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.astralsorcery.lightwell.streamRecipes()
    ```
