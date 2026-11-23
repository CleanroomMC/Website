---
title: Reactant Dynamo (Thermal Expansion)
description: Converts an input itemstack and input fluidstack into power, taking time based on the power.
sidebar:
  label: Reactant Dynamo
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Reactant.java
---

## Description

Converts an input itemstack and input fluidstack into power, taking time based on the power.

## Identifier

The identifier `mods.thermalexpansion.reactant` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.reactant
mods.thermal.Reactant
mods.thermalexpansion.reactant/* Used as page default */
mods.thermalexpansion.Reactant
```

</details>

## Adding Recipes

- Adds recipes in the format `ingredient`, `fluidStack`, `energy`:

    ```groovy
    mods.thermalexpansion.reactant.add(IIngredient, FluidStack, int)
    ```

- Adds a fluid to the Element Catalyzer Fluid list, enabling its use with the Elemental Catalyzer augment installed:

    ```groovy
    mods.thermalexpansion.reactant.addElementalFluid(String)
    ```

- Adds a fluid to the Element Catalyzer Fluid list, enabling its use with the Elemental Catalyzer augment installed:

    ```groovy
    mods.thermalexpansion.reactant.addElementalFluid(FluidStack)
    ```

- Adds an itemstack to the Element Catalyzer Fluid list, enabling its use with the Elemental Catalyzer augment installed:

    ```groovy
    mods.thermalexpansion.reactant.addElementalReactant(ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.reactant.add(item('minecraft:clay'), fluid('steam'), 100)
mods.thermalexpansion.reactant.addElementalFluid(fluid('glowstone'))
mods.thermalexpansion.reactant.addElementalReactant(item('minecraft:gunpowder'))
mods.thermalexpansion.reactant.addElementalReactant(item('minecraft:clay'))
```

</details>

### Recipe Builder

Just like other recipe types, the Reactant Dynamo also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.reactant.recipeBuilder()
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

- `int`. Sets the amount of energy produced by the recipe. Requires greater than 0. (Default `ReactantManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.dynamo.ReactantManager$Reaction`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.reactant.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('steam'))
    .register()

mods.thermalexpansion.reactant.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('glowstone'))
    .energy(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes with given IIngredient or fluid name:

    ```groovy
    mods.thermalexpansion.reactant.removeByInput(IIngredient)
    ```

- Removes a fluid from the Element Catalyzer Fluid list, disabling its use with the Elemental Catalyzer augment installed:

    ```groovy
    mods.thermalexpansion.reactant.removeElementalFluid(String)
    ```

- Removes a fluid from the Element Catalyzer Fluid list, disabling its use with the Elemental Catalyzer augment installed:

    ```groovy
    mods.thermalexpansion.reactant.removeElementalFluid(FluidStack)
    ```

- Removes an itemstack from the Element Catalyzer Fluid list, disabling its use with the Elemental Catalyzer augment installed:

    ```groovy
    mods.thermalexpansion.reactant.removeElementalReactant(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.reactant.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.reactant.removeByInput(item('minecraft:blaze_powder'))
mods.thermalexpansion.reactant.removeByInput(fluid('redstone'))
mods.thermalexpansion.reactant.removeElementalFluid(fluid('cryotheum'))
mods.thermalexpansion.reactant.removeElementalReactant(item('thermalfoundation:material:1024'))
mods.thermalexpansion.reactant.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.reactant.streamRecipes()
    ```
