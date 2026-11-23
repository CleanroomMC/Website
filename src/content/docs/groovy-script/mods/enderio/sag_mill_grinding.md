---
title: Sag Mill Grinding (Ender IO)
description: Add a new Griding Ball for use in a Sag Mill with the given output multiplier, power multiplier, chance multiplier, and duration (in base power used).
sidebar:
  label: Sag Mill Grinding
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/SagMillGrinding.java
---

## Description

Add a new Griding Ball for use in a Sag Mill with the given output multiplier, power multiplier, chance multiplier, and duration (in base power used).

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

EnderIO executes recipes using both its input and its grinding ball slot as inputs, which means it can consume grinding balls as input. This means an item that can be used as an input should not be able to also be used as a grinding ball.

</details>

## Identifier

The identifier `mods.enderio.sag_mill_grinding` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {12}
mods.eio.grinding
mods.eio.Grinding
mods.eio.sagmillgrinding
mods.eio.sagMillGrinding
mods.eio.SagMillGrinding
mods.eio.sag_mill_grinding
mods.enderio.grinding
mods.enderio.Grinding
mods.enderio.sagmillgrinding
mods.enderio.sagMillGrinding
mods.enderio.SagMillGrinding
mods.enderio.sag_mill_grinding/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.enderio.sag_mill_grinding.add(GrindingBall)
    ```

### Recipe Builder

Just like other recipe types, the Sag Mill Grinding also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.enderio.sag_mill_grinding.recipeBuilder()
    ```

---

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

- `float`. Sets the chance to increase outputs up to 100% with an applicable bonusType. Requires greater than 0. (Default `1`).

    ```groovy
    grinding(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `crazypants.enderio.base.recipe.sagmill.GrindingBall`).

    ```groovy
    register()
    ```

---

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

- Removes the given recipe from the recipe list:

    ```groovy
    mods.enderio.sag_mill_grinding.remove(GrindingBall)
    ```

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
