---
title: "Refinery (PneumaticCraft: Repressurized)"
description: Converts an input fluidstack into between 2 and 4 fluidstacks, consuming Temperature, with the number of fluidstacks output depending on the recipe and the number of Refineries vertically stacked.
sidebar:
  label: Refinery
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/Refinery.java
---

## Description

Converts an input fluidstack into between 2 and 4 fluidstacks, consuming Temperature, with the number of fluidstacks output depending on the recipe and the number of Refineries vertically stacked.

## Identifier

The identifier `mods.pneumaticcraft.refinery` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.pneumaticcraft.refinery/* Used as page default */
mods.pneumaticcraft.Refinery
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.pneumaticcraft.refinery.add(RefineryRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Refinery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.refinery.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 2 and less than or equal to 4.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the required temperate in Kelvin required to process the recipe. (Default `373`).

    ```groovy
    requiredTemperature(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.RefineryRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.refinery.recipeBuilder()
    .fluidInput(fluid('water') * 1000)
    .fluidOutput(fluid('lava') * 750, fluid('lava') * 250, fluid('lava') * 100, fluid('lava') * 50)
    .register()

mods.pneumaticcraft.refinery.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('water') * 50, fluid('kerosene') * 25)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.pneumaticcraft.refinery.remove(RefineryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pneumaticcraft.refinery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pneumaticcraft.refinery.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.refinery.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.refinery.removeByInput(fluid('oil'))
mods.pneumaticcraft.refinery.removeByOutput(fluid('kerosene'))
mods.pneumaticcraft.refinery.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.refinery.streamRecipes()
    ```
