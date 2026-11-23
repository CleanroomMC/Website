---
title: Electrolytic Crucible Battery (Immersive Technology)
description: Converts an input fluidstack into up to three output fluidstacks after a given amount of time and energy in a multiblock structure.
sidebar:
  label: Electrolytic Crucible Battery
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/ElectrolyticCrucibleBattery.java
---

## Description

Converts an input fluidstack into up to three output fluidstacks after a given amount of time and energy in a multiblock structure.

## Identifier

The identifier `mods.immersivetech.electrolytic_crucible_battery` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.immersivetech.electrolyticcruciblebattery
mods.immersivetech.electrolyticCrucibleBattery
mods.immersivetech.ElectrolyticCrucibleBattery
mods.immersivetech.electrolytic_crucible_battery/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivetech.electrolytic_crucible_battery.add(ElectrolyticCrucibleBatteryRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Electrolytic Crucible Battery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivetech.electrolytic_crucible_battery.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
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

- `int`. Sets the energy used in total IF consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.ElectrolyticCrucibleBatteryRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.electrolytic_crucible_battery.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('hot_spring_water') * 500)
    .output(item('minecraft:clay'))
    .time(100)
    .register()

mods.immersivetech.electrolytic_crucible_battery.recipeBuilder()
    .fluidInput(fluid('water') * 500)
    .fluidOutput(fluid('lava') * 50, fluid('hot_spring_water') * 50, fluid('water') * 400)
    .output(item('minecraft:diamond'))
    .time(50)
    .energy(5000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivetech.electrolytic_crucible_battery.remove(ElectrolyticCrucibleBatteryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivetech.electrolytic_crucible_battery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersivetech.electrolytic_crucible_battery.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivetech.electrolytic_crucible_battery.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.electrolytic_crucible_battery.removeByInput(fluid('moltensalt'))
mods.immersivetech.electrolytic_crucible_battery.removeByOutput(fluid('chlorine'))
mods.immersivetech.electrolytic_crucible_battery.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivetech.electrolytic_crucible_battery.streamRecipes()
    ```
