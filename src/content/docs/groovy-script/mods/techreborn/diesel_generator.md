---
title: Diesel Generator (Tech Reborn)
description: Converts a fluidstack input into power, at a given rate per tick.
sidebar:
  label: Diesel Generator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/DieselGenerator.java
---

## Description

Converts a fluidstack input into power, at a given rate per tick.

## Identifier

The identifier `mods.techreborn.diesel_generator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.techreborn.dieselgenerator
mods.techreborn.dieselGenerator
mods.techreborn.DieselGenerator
mods.techreborn.diesel_generator/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.techreborn.diesel_generator.add(R)
    ```

### Recipe Builder

Just like other recipe types, the Diesel Generator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.techreborn.diesel_generator.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `double`. Sets the total amount of energy generated from a bucket. Requires greater than 0. (Default `0.0d`).

    ```groovy
    energy(double)
    ```

- `double`. Sets the FE generated per tick. Requires greater than 0. (Default `0.0d`).

    ```groovy
    perTick(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `reborncore.api.praescriptum.fuels.Fuel`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.diesel_generator.recipeBuilder()
    .fluidInput(fluid('water'))
    .energy(10000)
    .perTick(500)
    .register()

mods.techreborn.diesel_generator.recipeBuilder()
    .fluidInput(fluid('lava'))
    .energy(200)
    .perTick(10)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.techreborn.diesel_generator.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.techreborn.diesel_generator.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.techreborn.diesel_generator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.diesel_generator.removeByInput(fluid('fluiddiesel'))
mods.techreborn.diesel_generator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.techreborn.diesel_generator.streamRecipes()
    ```
