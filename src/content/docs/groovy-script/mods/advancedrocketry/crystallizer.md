---
title: Crystallizer (Advanced Rocketry)
description: Converts up to 4 input items into up to 4 output items, consuming RF.
sidebar:
  label: Crystallizer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/advancedrocketry/Crystallizer.java
---

## Description

Converts up to 4 input items into up to 4 output items, consuming RF.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The 'chances' used with the recipe outputs are actually output weights. For example, setting 'chance' to 0.1 will set the output's chance to 1, unless other outputs add up to the weight of 0.9. The output chances will also not do anything unless 'outputSize' is set to a number greater than 0.

</details>

## Identifier

The identifier `mods.advancedrocketry.crystallizer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.advancedrocketry.crystallizer/* Used as page default */
mods.advancedrocketry.Crystallizer
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.advancedrocketry.crystallizer.add(R)
    ```

### Recipe Builder

Just like other recipe types, the Crystallizer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.advancedrocketry.crystallizer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires less than or equal to 4 and either `input` or `fluidInput` to be non-null.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires less than or equal to 1 and either `input` or `fluidInput` to be non-null.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. The version with two arguments can be used to add weighted outputs. Requires less than or equal to 4 and either `output` or `fluidOutput` to be non-null.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires less than or equal to 1 and either `output` or `fluidOutput` to be non-null.

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
mods.advancedrocketry.crystallizer.recipeBuilder()
    .input(item('minecraft:blaze_powder') * 4)
    .output(item('minecraft:blaze_rod'))
    .power(50)
    .time(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.advancedrocketry.crystallizer.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.advancedrocketry.crystallizer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.advancedrocketry.crystallizer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.advancedrocketry.crystallizer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.advancedrocketry.crystallizer.removeByInput(item('libvulpes:productingot', 3))
mods.advancedrocketry.crystallizer.removeByOutput(item('libvulpes:productgem'))
mods.advancedrocketry.crystallizer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.advancedrocketry.crystallizer.streamRecipes()
    ```
