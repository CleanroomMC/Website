---
title: Chalice Interaction (Astral Sorcery)
description: When two chalices containing different fluids are placed nearby, fluid may be consumed to produce an output itemstack.
sidebar:
  label: Chalice Interaction
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/ChaliceInteraction.java
---

## Description

When two chalices containing different fluids are placed nearby, fluid may be consumed to produce an output itemstack.

## Identifier

The identifier `mods.astralsorcery.chalice_interaction` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.astral.chaliceinteraction
mods.astral.chaliceInteraction
mods.astral.ChaliceInteraction
mods.astral.chalice_interaction
mods.astralsorcery.chaliceinteraction
mods.astralsorcery.chaliceInteraction
mods.astralsorcery.ChaliceInteraction
mods.astralsorcery.chalice_interaction/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.astralsorcery.chalice_interaction.add(LiquidInteraction)
    ```

- Adds entries in the format `probability`, `component1`, `component2`, `action`:

    ```groovy
    mods.astralsorcery.chalice_interaction.add(int, FluidStack, FluidStack, LiquidInteraction.FluidInteractionAction)
    ```

### Recipe Builder

Just like other recipe types, the Chalice Interaction also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.astralsorcery.chalice_interaction.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 2.

    ```groovy
    component(FluidStack)
    component(FluidStack, float) // 100% chance
    fluidInput(FluidStack) // 100% chance
    fluidInput(FluidStack...)
    fluidInput(FluidStack, float)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0.

    ```groovy
    output(ItemStack) // 100% chance
    output(ItemStack...)
    output(ItemStack, int)
    output(Collection<ItemStack>)
    result(ItemStack) // 100% chance
    result(ItemStack, int)
    ```

- `FloatArrayList`. Sets the chance to consume fluids from the Chalices. Requires exactly 2.

    ```groovy
    component(FluidStack)
    component(FluidStack, float) // 100% chance
    fluidInput(FluidStack) // 100% chance
    fluidInput(FluidStack, float)
    ```

- `IntArrayList`. Sets the chance a given output will occur among all possible combinations of the fluid. Requires greater than 0.

    ```groovy
    output(ItemStack) // 100% chance
    output(ItemStack, int)
    result(ItemStack) // 100% chance
    result(ItemStack, int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.base.LiquidInteraction`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.chalice_interaction.recipeBuilder()
    .output(item('astralsorcery:blockmarble'))
    .fluidInput(fluid('water') * 10)
    .fluidInput(fluid('astralsorcery.liquidstarlight') * 30)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.astralsorcery.chalice_interaction.remove(LiquidInteraction)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.astralsorcery.chalice_interaction.removeByInput(Fluid)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.astralsorcery.chalice_interaction.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.astralsorcery.chalice_interaction.removeByInput(Fluid, Fluid)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.astralsorcery.chalice_interaction.removeByInput(FluidStack, FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.astralsorcery.chalice_interaction.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.astralsorcery.chalice_interaction.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.chalice_interaction.removeByInput(fluid('astralsorcery.liquidstarlight'))
mods.astralsorcery.chalice_interaction.removeByInput(fluid('water'), fluid('lava'))
mods.astralsorcery.chalice_interaction.removeByOutput(item('minecraft:ice'))
mods.astralsorcery.chalice_interaction.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.astralsorcery.chalice_interaction.streamRecipes()
    ```
