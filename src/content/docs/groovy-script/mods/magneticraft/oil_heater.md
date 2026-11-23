---
title: Oil Heater (Magneticraft)
description: Converts an input fluidstack into an output fluidstack in a Oil Heater Multiblock.
sidebar:
  label: Oil Heater
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/OilHeater.java
---

## Description

Converts an input fluidstack into an output fluidstack in a Oil Heater Multiblock.

## Identifier

The identifier `mods.magneticraft.oil_heater` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.magneticraft.oilheater
mods.magneticraft.oilHeater
mods.magneticraft.OilHeater
mods.magneticraft.oil_heater/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.magneticraft.oil_heater.add(IOilHeaterRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Oil Heater also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.magneticraft.oil_heater.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy
    duration(float)
    ```

- `float`. Sets the minimum temperature required to process the recipe. (Default `0.0f`).

    ```groovy
    minTemperature(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.oilheater.IOilHeaterRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.oil_heater.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('lava'))
    .duration(50)
    .minTemperature(200)
    .register()

mods.magneticraft.oil_heater.recipeBuilder()
    .fluidInput(fluid('lava'))
    .fluidOutput(fluid('water'))
    .duration(100)
    .minTemperature(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.magneticraft.oil_heater.remove(IOilHeaterRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.magneticraft.oil_heater.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.magneticraft.oil_heater.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.magneticraft.oil_heater.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.oil_heater.removeByInput(fluid('oil'))
mods.magneticraft.oil_heater.removeByOutput(fluid('steam'))
mods.magneticraft.oil_heater.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.magneticraft.oil_heater.streamRecipes()
    ```
