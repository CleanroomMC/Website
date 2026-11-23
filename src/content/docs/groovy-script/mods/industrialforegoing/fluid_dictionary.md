---
title: Fluid Dictionary Converter (Industrial Foregoing)
description: Converts one fluid into another fluid at a given ratio.
sidebar:
  label: Fluid Dictionary Converter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/FluidDictionary.java
---

## Description

Converts one fluid into another fluid at a given ratio.

## Identifier

The identifier `mods.industrialforegoing.fluid_dictionary` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.industrialforegoing.fluiddictionary
mods.industrialforegoing.fluidDictionary
mods.industrialforegoing.FluidDictionary
mods.industrialforegoing.fluid_dictionary/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.add(FluidDictionaryEntry)
    ```

- Adds a Fluid Dictionary Converter recipe in the format `input`, `output`:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.add(FluidStack, FluidStack)
    ```

- Adds a Fluid Dictionary Converter recipe in the format `input`, `output`, `ratio`:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.add(String, String, double)
    ```

- Adds a Fluid Dictionary Converter recipe in the format `input`, `output`, `ratio`:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.add(FluidStack, FluidStack, double)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.fluid_dictionary.add(fluid('biofuel'), fluid('latex'),)
mods.industrialforegoing.fluid_dictionary.add(fluid('latex'), fluid('biofuel'),)
mods.industrialforegoing.fluid_dictionary.add(fluid('essence'), fluid('latex'), 2)
mods.industrialforegoing.fluid_dictionary.add(fluid('latex'), fluid('essence'), 0.5)
```

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.remove(FluidDictionaryEntry)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.removeByInput(String)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.removeByOutput(String)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.fluid_dictionary.removeByInput(fluid('essence'))
mods.industrialforegoing.fluid_dictionary.removeByOutput(fluid(essence'))
mods.industrialforegoing.fluid_dictionary.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.fluid_dictionary.streamRecipes()
    ```
