---
title: Heat Exchanger (Immersive Technology)
description: Converts up to two input fluidstacks into up to two output fluidstacks after a given amount of time in a multiblock structure.
sidebar:
  label: Heat Exchanger
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/HeatExchanger.java
---

## Description

Converts up to two input fluidstacks into up to two output fluidstacks after a given amount of time in a multiblock structure.

## Identifier

The identifier `mods.immersivetech.heat_exchanger` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.immersivetech.heatexchanger
mods.immersivetech.heatExchanger
mods.immersivetech.HeatExchanger
mods.immersivetech.heat_exchanger/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivetech.heat_exchanger.add(HeatExchangerRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Heat Exchanger also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivetech.heat_exchanger.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 2.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the energy used in total IF consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.HeatExchangerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.heat_exchanger.recipeBuilder()
    .fluidInput(fluid('lava') * 100, fluid('lava') * 50)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.heat_exchanger.recipeBuilder()
    .fluidInput(fluid('water') * 50, fluid('hot_spring_water') * 50)
    .fluidOutput(fluid('lava') * 50, fluid('water') * 10)
    .time(50)
    .energy(5000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivetech.heat_exchanger.remove(HeatExchangerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivetech.heat_exchanger.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersivetech.heat_exchanger.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivetech.heat_exchanger.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.heat_exchanger.removeByInput(fluid('fluegas'))
mods.immersivetech.heat_exchanger.removeByOutput(fluid('hot_spring_water'))
mods.immersivetech.heat_exchanger.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivetech.heat_exchanger.streamRecipes()
    ```
