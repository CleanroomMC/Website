---
title: Solar Neutron Activator (Mekanism)
description: Converts an input gasstack into an output gasstack while exposed to the sun.
sidebar:
  label: Solar Neutron Activator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/SolarNeutronActivator.java
---

## Description

Converts an input gasstack into an output gasstack while exposed to the sun.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mekanism.solar_neutron_activator/* Used as page default */
mods.mekanism.solarneutronactivator
mods.mekanism.solarNeutronActivator
mods.mekanism.SolarNeutronActivator
mods.mekanism.SNA
mods.mekanism.sna
```

## Adding Recipes

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.mekanism.solar_neutron_activator.add(GasStack, GasStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.solar_neutron_activator.add(gas('water'), gas('hydrogen'))
```

</details>

### Recipe Builder

Just like other recipe types, the Solar Neutron Activator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mekanism.solar_neutron_activator.recipeBuilder()</summary>

- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 1.

    ```groovy
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 1.

    ```groovy
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.SolarNeutronRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.solar_neutron_activator.recipeBuilder()
    .gasInput(gas('water'))
    .gasOutput(gas('hydrogen'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.solar_neutron_activator.removeByInput(GasStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.solar_neutron_activator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.solar_neutron_activator.removeByInput(gas('lithium'))
mods.mekanism.solar_neutron_activator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.solar_neutron_activator.streamRecipes()
    ```
