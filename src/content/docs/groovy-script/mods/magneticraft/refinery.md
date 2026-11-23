---
title: Refinery (Magneticraft)
description: Converts an input fluidstack into up to three output fluidstacks in a Refinery Multiblock.
sidebar:
  label: Refinery
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/Refinery.java
---

## Description

Converts an input fluidstack into up to three output fluidstacks in a Refinery Multiblock.

## Identifier

The identifier `mods.magneticraft.refinery` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.magneticraft.refinery/* Used as page default */
mods.magneticraft.Refinery
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.magneticraft.refinery.add(IRefineryRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Refinery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.magneticraft.refinery.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

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

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy
    duration(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.refinery.IRefineryRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.refinery.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('lava'))
    .duration(50)
    .register()

mods.magneticraft.refinery.recipeBuilder()
    .fluidInput(fluid('lava'))
    .fluidOutput(fluid('water'))
    .duration(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.magneticraft.refinery.remove(IRefineryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.magneticraft.refinery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.magneticraft.refinery.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.magneticraft.refinery.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.refinery.removeByInput(fluid('steam'))
mods.magneticraft.refinery.removeByOutput(fluid('fuel'))
mods.magneticraft.refinery.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.magneticraft.refinery.streamRecipes()
    ```
