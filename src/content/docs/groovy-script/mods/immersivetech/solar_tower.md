---
title: Solar Tower (Immersive Technology)
description: Converts an input fluidstack into an output fluidstack after a given amount of time in a multiblock structure, with the time being able to be sped up via Solar Reflector multiblocks.
sidebar:
  label: Solar Tower
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/SolarTower.java
---

## Description

Converts an input fluidstack into an output fluidstack after a given amount of time in a multiblock structure, with the time being able to be sped up via Solar Reflector multiblocks.

## Identifier

The identifier `mods.immersivetech.solar_tower` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.immersivetech.solartower
mods.immersivetech.solarTower
mods.immersivetech.SolarTower
mods.immersivetech.solar_tower/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivetech.solar_tower.add(SolarTowerRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Solar Tower also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivetech.solar_tower.recipeBuilder()
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

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.SolarTowerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.solar_tower.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.solar_tower.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .fluidOutput(fluid('lava') * 50)
    .time(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivetech.solar_tower.remove(SolarTowerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivetech.solar_tower.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersivetech.solar_tower.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivetech.solar_tower.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.solar_tower.removeByInput(fluid('water'))
mods.immersivetech.solar_tower.removeByOutput(fluid('superheatedmoltensodium'))
mods.immersivetech.solar_tower.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivetech.solar_tower.streamRecipes()
    ```
