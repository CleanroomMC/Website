---
title: Cooling Tower (Immersive Technology)
description: Converts up to two input fluidstacks into up to three output fluidstacks after a given amount of time in a multiblock structure.
sidebar:
  label: Cooling Tower
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/CoolingTower.java
---

## Description

Converts up to two input fluidstacks into up to three output fluidstacks after a given amount of time in a multiblock structure.

## Identifier

The identifier `mods.immersivetech.cooling_tower` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.immersivetech.coolingtower
mods.immersivetech.coolingTower
mods.immersivetech.CoolingTower
mods.immersivetech.cooling_tower/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivetech.cooling_tower.add(CoolingTowerRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Cooling Tower also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivetech.cooling_tower.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.CoolingTowerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.cooling_tower.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .time(100)
    .register()

mods.immersivetech.cooling_tower.recipeBuilder()
    .fluidInput(fluid('water') * 50, fluid('hot_spring_water') * 50)
    .fluidOutput(fluid('lava') * 50, fluid('water') * 50, fluid('lava') * 50)
    .time(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivetech.cooling_tower.remove(CoolingTowerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivetech.cooling_tower.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersivetech.cooling_tower.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivetech.cooling_tower.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.cooling_tower.removeByInput(fluid('hot_spring_water'))
mods.immersivetech.cooling_tower.removeByOutput(fluid('water'))
mods.immersivetech.cooling_tower.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivetech.cooling_tower.streamRecipes()
    ```
