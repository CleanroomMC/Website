---
title: Fluid Replicator (Tech Reborn)
description: Converts a configurable amount of UU-Matter into a output fluidstack of 1000mb after a given process time, replicating a fluid source block placed in-world and consuming energy per tick.
sidebar:
  label: Fluid Replicator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/FluidReplicator.java
---

## Description

Converts a configurable amount of UU-Matter into a output fluidstack of 1000mb after a given process time, replicating a fluid source block placed in-world and consuming energy per tick.

## Identifier

The identifier `mods.techreborn.fluid_replicator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.techreborn.fluidreplicator
mods.techreborn.fluidReplicator
mods.techreborn.FluidReplicator
mods.techreborn.fluid_replicator/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Fluid Replicator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.techreborn.fluid_replicator.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the amount of UU-Matter consumed to create a bucket of the fluid. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    matter(int)
    ```

- `int`. Sets the power consumed per tick. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    perTick(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `techreborn.api.fluidreplicator.FluidReplicatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.fluid_replicator.recipeBuilder()
    .matter(10)
    .fluidOutput(fluid('water'))
    .time(100)
    .perTick(10)
    .register()

mods.techreborn.fluid_replicator.recipeBuilder()
    .matter(1)
    .fluidOutput(fluid('fluidmethane'))
    .time(5)
    .perTick(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.techreborn.fluid_replicator.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.techreborn.fluid_replicator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.fluid_replicator.removeByOutput(fluid('water'))
mods.techreborn.fluid_replicator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.techreborn.fluid_replicator.streamRecipes()
    ```
