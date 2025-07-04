---
title: "Sag Mill Grinding"
titleTemplate: "Ender IO | CleanroomMC"
description: "Add a new Griding Ball for use in a Sag Mill with the given output multiplier, power multiplier, chance multiplier, and duration (in base power used)."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/SagMillGrinding.java"
---

# Sag Mill Grinding (Ender IO)

## Description

Add a new Griding Ball for use in a Sag Mill with the given output multiplier, power multiplier, chance multiplier, and duration (in base power used).

:::::::::: details Warning {open id="warning"}
EnderIO executes recipes using both its input and its grinding ball slot as inputs, which means it can consume grinding balls as input. This means an item that can be used as an input should not be able to also be used as a grinding ball.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.enderio.sag_mill_grinding/* Used as page default */ // [!code focus]
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

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.enderio.sag_mill_grinding.add(GrindingBall)
    ```


### Recipe Builder

Just like other recipe types, the Sag Mill Grinding also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.enderio.sag_mill_grinding.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `float`. Sets the power multiplier to recipes processed with the grinding ball. Requires greater than 0. (Default `1`).

    ```groovy:no-line-numbers
    power(float)
    ```

- `float`. Sets the chance to double all outputs in recipes with an applicable bonusType. Requires greater than 0. (Default `1`).

    ```groovy:no-line-numbers
    chance(float)
    ```

- `int`. Sets the amount of power used in recipes before the grinding ball is consumed. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    duration(int)
    ```

- `float`. Sets the chance to increase outputs up to 100% with an applicable bonusType. Requires greater than 0. (Default `1`).

    ```groovy:no-line-numbers
    grinding(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `crazypants.enderio.base.recipe.sagmill.GrindingBall`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.sag_mill_grinding.recipeBuilder()
    .input(item('minecraft:clay_ball'))
    .chance(6.66)
    .power(0.001)
    .grinding(3.33)
    .duration(10000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.enderio.sag_mill_grinding.remove(GrindingBall)
    ```

- Removes the Grinding Ball item:

    ```groovy:no-line-numbers
    mods.enderio.sag_mill_grinding.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.enderio.sag_mill_grinding.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.enderio.sag_mill_grinding.remove(item('minecraft:flint'))
mods.enderio.sag_mill_grinding.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.enderio.sag_mill_grinding.streamRecipes()
    ```
