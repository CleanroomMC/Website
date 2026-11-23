---
title: Fractionating Still - Alchemical Retort (Thermal Expansion)
description: Converts an input fluidstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost.
sidebar:
  label: Fractionating Still - Alchemical Retort
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/RefineryPotion.java
---

## Description

Converts an input fluidstack into an output fluidstack and optional output itemstack with chance, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.refinery_potion` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.thermal.refinerypotion
mods.thermal.refineryPotion
mods.thermal.RefineryPotion
mods.thermal.refinery_potion
mods.thermalexpansion.refinerypotion
mods.thermalexpansion.refineryPotion
mods.thermalexpansion.RefineryPotion
mods.thermalexpansion.refinery_potion/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `fluidInput`, `outputFluid`, `outputItem`, `chance`:

    ```groovy
    mods.thermalexpansion.refinery_potion.add(int, FluidStack, FluidStack, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.refinery_potion.add(1000, fluid('ender') * 100, fluid('steam') * 30, item('minecraft:clay'), 75)
```

</details>

### Recipe Builder

Just like other recipe types, the Fractionating Still - Alchemical Retort also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.refinery_potion.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the chance the output itemstack is created. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy
    chance(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `RefineryManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.RefineryManager$RefineryRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.refinery_potion.recipeBuilder()
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('steam') * 200)
    .register()

mods.thermalexpansion.refinery_potion.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .fluidOutput(fluid('steam') * 30)
    .output(item('minecraft:clay'))
    .chance(75)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.refinery_potion.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.refinery_potion.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.refinery_potion.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.refinery_potion.removeByInput(fluid('potion_lingering').withNbt(['Potion': 'cofhcore:healing3']))
mods.thermalexpansion.refinery_potion.removeByOutput(fluid('potion_splash').withNbt(['Potion': 'cofhcore:leaping4']))
mods.thermalexpansion.refinery_potion.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.refinery_potion.streamRecipes()
    ```
