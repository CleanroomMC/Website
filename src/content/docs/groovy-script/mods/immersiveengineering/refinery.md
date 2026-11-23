---
title: Refinery (Immersive Engineering)
description: Converts 2 input fluidstacks into an output fluidstack, consuming power.
sidebar:
  label: Refinery
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Refinery.java
---

## Description

Converts 2 input fluidstacks into an output fluidstack, consuming power.

## Identifier

The identifier `mods.immersiveengineering.refinery` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ie.refinery
mods.ie.Refinery
mods.immersiveengineering.refinery/* Used as page default */
mods.immersiveengineering.Refinery
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersiveengineering.refinery.add(RefineryRecipe)
    ```

- Adds recipes in the format `output`, `input0`, `input1`, `energy`:

    ```groovy
    mods.immersiveengineering.refinery.add(FluidStack, FluidStack, FluidStack, int)
    ```

### Recipe Builder

Just like other recipe types, the Refinery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersiveengineering.refinery.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 2.

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

- `int`. Sets the amount of power consumed to complete the recipe. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.RefineryRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.refinery.recipeBuilder()
    .fluidInput(fluid('water'), fluid('water'))
    .fluidOutput(fluid('lava'))
    .energy(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersiveengineering.refinery.remove(RefineryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.refinery.removeByInput(FluidStack, FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.refinery.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.refinery.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.refinery.removeByInput(fluid('plantoil'), fluid('ethanol'))
mods.immersiveengineering.refinery.removeByOutput(fluid('biodiesel'))
mods.immersiveengineering.refinery.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.refinery.streamRecipes()
    ```
