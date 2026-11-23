---
title: Precision Assembler (Advanced Rocketry)
description: Converts input items and fluids into output items and fluids, consuming RF.
sidebar:
  label: Precision Assembler
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/advancedrocketry/PrecisionAssembler.java
---

## Description

Converts input items and fluids into output items and fluids, consuming RF.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The 'chances' used with the recipe outputs are actually output weights. For example, setting 'chance' to 0.1 will set the output's chance to 1, unless other outputs add up to the weight of 0.9. The output chances will also not do anything unless 'outputSize' is set to a number greater than 0.

</details>

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The recipes performed in this machine can have more than 9 inputs, but this makes the JEI handler overflow when displaying the recipe and breaks the tooltips.

</details>

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The recipes performed in this machine can have more than 9 outputs, but this makes the JEI handler overflow when displaying the recipe and breaks the tooltips.

</details>

<details class="cr-block cr-info" open>
<summary>Info</summary>

The Precision Assembler can support up to 6 input and output hatches. Each hatch can store either 1 type of fluid or up to 4 types of input or output items. Groovyscript will not add the recipe if it requires more than 6 hatches (i.e., has 6 fluid inputs and an output).

</details>

## Identifier

The identifier `mods.advancedrocketry.precision_assembler` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.advancedrocketry.precisionassembler
mods.advancedrocketry.precisionAssembler
mods.advancedrocketry.PrecisionAssembler
mods.advancedrocketry.precision_assembler/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.advancedrocketry.precision_assembler.add(R)
    ```

### Recipe Builder

Just like other recipe types, the Precision Assembler also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.advancedrocketry.precision_assembler.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires either `input` or `fluidInput` to be non-null.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires either `input` or `fluidInput` to be non-null.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. The version with two arguments can be used to add weighted outputs. Requires either `output` or `fluidOutput` to be non-null.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(ItemStack, float)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires either `output` or `fluidOutput` to be non-null.

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
mods.advancedrocketry.precision_assembler.recipeBuilder()
    .input(item('minecraft:fishing_rod'), item('minecraft:carrot'))
    .output(item('minecraft:carrot_on_a_stick'))
    .power(50)
    .time(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.advancedrocketry.precision_assembler.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.advancedrocketry.precision_assembler.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.advancedrocketry.precision_assembler.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.advancedrocketry.precision_assembler.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.advancedrocketry.precision_assembler.removeByInput(item('minecraft:redstone_block'))
mods.advancedrocketry.precision_assembler.removeByOutput(item('advancedrocketry:atmanalyser'))
mods.advancedrocketry.precision_assembler.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.advancedrocketry.precision_assembler.streamRecipes()
    ```
