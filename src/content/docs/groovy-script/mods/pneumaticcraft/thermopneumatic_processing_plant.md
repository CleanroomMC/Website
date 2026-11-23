---
title: "Thermopneumatic Processing Plant (PneumaticCraft: Repressurized)"
description: Converts an input fluidstack into an output fluidstack, consuming Pressure and Temperature, with an optional itemstack being consumed.
sidebar:
  label: Thermopneumatic Processing Plant
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/ThermopneumaticProcessingPlant.java
---

## Description

Converts an input fluidstack into an output fluidstack, consuming Pressure and Temperature, with an optional itemstack being consumed.

## Identifier

The identifier `mods.pneumaticcraft.thermopneumatic_processing_plant` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pneumaticcraft.thermopneumaticprocessingplant
mods.pneumaticcraft.thermopneumaticProcessingPlant
mods.pneumaticcraft.ThermopneumaticProcessingPlant
mods.pneumaticcraft.thermopneumatic_processing_plant/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.pneumaticcraft.thermopneumatic_processing_plant.add(IThermopneumaticProcessingPlantRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Thermopneumatic Processing Plant also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.thermopneumatic_processing_plant.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

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

- `float`. Sets the Pressure consumed to perform the craft. (Default `0.0f`).

    ```groovy
    pressure(float)
    ```

- `double`. Sets the required temperate in Kelvin required to process the recipe. (Default `0.0d`).

    ```groovy
    requiredTemperature(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.api.recipe.IThermopneumaticProcessingPlantRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.thermopneumatic_processing_plant.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('kerosene') * 100)
    .pressure(4)
    .requiredTemperature(323)
    .register()

mods.pneumaticcraft.thermopneumatic_processing_plant.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('lava') * 100)
    .pressure(4)
    .requiredTemperature(323)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.pneumaticcraft.thermopneumatic_processing_plant.remove(IThermopneumaticProcessingPlantRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pneumaticcraft.thermopneumatic_processing_plant.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pneumaticcraft.thermopneumatic_processing_plant.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.thermopneumatic_processing_plant.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.thermopneumatic_processing_plant.removeByInput(item('minecraft:coal'))
mods.pneumaticcraft.thermopneumatic_processing_plant.removeByInput(fluid('diesel'))
mods.pneumaticcraft.thermopneumatic_processing_plant.removeByOutput(fluid('lpg'))
mods.pneumaticcraft.thermopneumatic_processing_plant.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.thermopneumatic_processing_plant.streamRecipes()
    ```
