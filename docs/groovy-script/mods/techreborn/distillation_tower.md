---
title: "Distillation Tower"
titleTemplate: "Tech Reborn | CleanroomMC"
description: "Converts one or two itemstack inputs into up to four an itemstack output after a given process time, consuming energy per tick."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/DistillationTower.java"
---

# Distillation Tower (Tech Reborn)

## Description

Converts one or two itemstack inputs into up to four an itemstack output after a given process time, consuming energy per tick.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.techreborn.distillation_tower/* Used as page default */ // [!code focus]
mods.techreborn.distillationtower
mods.techreborn.distillationTower
mods.techreborn.DistillationTower
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.distillation_tower.add(R)
    ```


### Recipe Builder

Just like other recipe types, the Distillation Tower also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.techreborn.distillation_tower.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `boolean`. Sets if the recipe matches based on the oredict of inputs. (Default `false`).

    ```groovy:no-line-numbers
    oreDict(boolean)
    ```

- `int`. Sets the power consumed per tick. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    perTick(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `techreborn.api.recipe.machines.DistillationTowerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.distillation_tower.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:diamond') * 2)
    .output(item('minecraft:gold_ingot'), item('minecraft:clay') * 5, item('minecraft:clay') * 2, item('minecraft:clay'))
    .time(10)
    .perTick(100)
    .register()

mods.techreborn.distillation_tower.recipeBuilder()
    .input(item('minecraft:diamond') * 3, item('minecraft:diamond') * 2)
    .output(item('minecraft:clay') * 2)
    .time(5)
    .perTick(32)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.distillation_tower.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.techreborn.distillation_tower.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.techreborn.distillation_tower.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.techreborn.distillation_tower.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.distillation_tower.removeByInput(item('techreborn:dynamiccell').withNbt(['Fluid': ['FluidName': 'fluidoil', 'Amount': 1000]]))
mods.techreborn.distillation_tower.removeByOutput(item('techreborn:dynamiccell').withNbt(['Fluid': ['FluidName': 'fluidmethane', 'Amount': 1000]]))
mods.techreborn.distillation_tower.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.techreborn.distillation_tower.streamRecipes()
    ```
