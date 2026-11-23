---
title: Alchemical Imbuer (Thermal Expansion)
description: Converts an input fluidstack and input itemstack into an output fluidstack, costing power and taking time based on the power cost.
sidebar:
  label: Alchemical Imbuer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Brewer.java
---

## Description

Converts an input fluidstack and input itemstack into an output fluidstack, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.brewer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {5}
mods.thermal.brewer
mods.thermal.Brewer
mods.thermal.imbuer
mods.thermal.Imbuer
mods.thermalexpansion.brewer/* Used as page default */
mods.thermalexpansion.Brewer
mods.thermalexpansion.imbuer
mods.thermalexpansion.Imbuer
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input`, `fluidInput`, `fluidOutput`:

    ```groovy
    mods.thermalexpansion.brewer.add(int, IIngredient, FluidStack, FluidStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.brewer.add(1000, item('minecraft:obsidian') * 2, fluid('water') * 1000, fluid('steam') * 100)
```

</details>

### Recipe Builder

Just like other recipe types, the Alchemical Imbuer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.brewer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `BrewerManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.BrewerManager$BrewerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.brewer.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('water') * 100)
    .fluidOutput(fluid('lava') * 100)
    .register()

mods.thermalexpansion.brewer.recipeBuilder()
    .input(item('minecraft:diamond') * 2)
    .fluidInput(fluid('water') * 1000)
    .fluidOutput(fluid('steam') * 100)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.brewer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.brewer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.brewer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.brewer.removeByInput(fluid('potion').withNbt(['Potion': 'minecraft:leaping']))
mods.thermalexpansion.brewer.removeByInput(item('minecraft:glowstone_dust'))
mods.thermalexpansion.brewer.removeByOutput(fluid('potion_splash').withNbt(['Potion': 'cofhcore:luck2']))
mods.thermalexpansion.brewer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.brewer.streamRecipes()
    ```
