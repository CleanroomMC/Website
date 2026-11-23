---
title: Electrolyser (Advanced Rocketry)
description: Converts an input fluid into up to 2 output fluids, consuming RF.
sidebar:
  label: Electrolyser
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/advancedrocketry/Electrolyser.java
---

## Description

Converts an input fluid into up to 2 output fluids, consuming RF.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The 'chances' used with the recipe outputs are actually output weights. For example, setting 'chance' to 0.1 will set the output's chance to 1, unless other outputs add up to the weight of 0.9. The output chances will also not do anything unless 'outputSize' is set to a number greater than 0.

</details>

## Identifier

The identifier `mods.advancedrocketry.electrolyser` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.advancedrocketry.electrolyser/* Used as page default */
mods.advancedrocketry.Electrolyser
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.advancedrocketry.electrolyser.add(R)
    ```

### Recipe Builder

Just like other recipe types, the Electrolyser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.advancedrocketry.electrolyser.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the time needed to perform the recipe in ticks. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the power consumed by the recipe in RF/t. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    power(int)
    ```

- `int`. Sets the maximum amount of outputs produced by each recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    outputSize(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `zmaster587.libVulpes.interfaces.IRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.advancedrocketry.electrolyser.recipeBuilder()
    .fluidInput(fluid('lava') * 10)
    .fluidOutput(fluid('nitrogen') * 50)
    .power(50)
    .time(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.advancedrocketry.electrolyser.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.advancedrocketry.electrolyser.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.advancedrocketry.electrolyser.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.advancedrocketry.electrolyser.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.advancedrocketry.electrolyser.removeByInput(fluid('water'))
mods.advancedrocketry.electrolyser.removeByOutput(fluid('oxygen'))
mods.advancedrocketry.electrolyser.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.advancedrocketry.electrolyser.streamRecipes()
    ```
