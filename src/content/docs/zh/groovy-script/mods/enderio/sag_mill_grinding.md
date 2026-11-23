---
title: Sag Mill Grinding (Ender IO)
description: Add a new Griding Ball for use in a Sag Mill with the given output multiplier, power multiplier, chance multiplier, and duration (in base power used).
sidebar:
  label: Sag Mill Grinding
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/SagMillGrinding.java
---

## Description

Add a new Griding Ball for use in a Sag Mill with the given output multiplier, power multiplier, chance multiplier, and duration (in base power used).

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.enderio.sag_mill_grinding/* Used as page default */
mods.enderio.sagmillgrinding
mods.enderio.sagMillGrinding
mods.enderio.SagMillGrinding
mods.enderio.grinding
mods.enderio.Grinding
mods.eio.sag_mill_grinding
mods.eio.sagmillgrinding
mods.eio.sagMillGrinding
mods.eio.SagMillGrinding
mods.eio.grinding
mods.eio.Grinding
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Sag Mill Grinding also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.enderio.sag_mill_grinding.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `float`. Sets the power multiplier to recipes processed with the grinding ball. Requires greater than 0. (Default `1`).

    ```groovy
    power(float)
    ```

- `float`. Sets the chance to double all outputs in recipes with an applicable bonusType. Requires greater than 0. (Default `1`).

    ```groovy
    chance(float)
    ```

- `int`. Sets the amount of power used in recipes before the grinding ball is consumed. Requires greater than 0. (Default `0`).

    ```groovy
    duration(int)
    ```

- `float`. Format error: Sets the chance to increase outputs up to 100% with an applicable bonusType. Requires greater than 0. (Default `1`).

    ```groovy
    grinding(float)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `crazypants.enderio.base.recipe.sagmill.GrindingBall`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.sag_mill_grinding.recipeBuilder()
    .input(item('minecraft:clay_ball'))
    .chance(6.66)
    .power(0.001)
    .grinding(3.33)
    .duration(10000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the Grinding Ball item:

    ```groovy
    mods.enderio.sag_mill_grinding.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.enderio.sag_mill_grinding.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.sag_mill_grinding.remove(item('minecraft:flint'))
mods.enderio.sag_mill_grinding.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.enderio.sag_mill_grinding.streamRecipes()
    ```
