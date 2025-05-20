---
title: "Industrial Grinder"
titleTemplate: "Tech Reborn | CleanroomMC"
description: "Converts an itemstack input and fluidstack input into up to four itemstack outputs after a given process time, consuming energy per tick."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/IndustrialGrinder.java"
---

# Industrial Grinder (Tech Reborn)

## Description

Converts an itemstack input and fluidstack input into up to four itemstack outputs after a given process time, consuming energy per tick.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.techreborn.industrial_grinder/* Used as page default */ // [!code focus]
mods.techreborn.industrialgrinder
mods.techreborn.industrialGrinder
mods.techreborn.IndustrialGrinder
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.techreborn.industrial_grinder.add(R)
    ```


### Recipe Builder

Just like other recipe types, the Industrial Grinder also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.techreborn.industrial_grinder.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `techreborn.api.recipe.machines.IndustrialGrinderRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.industrial_grinder.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('lava') * 50)
    .output(item('minecraft:gold_ingot'), item('minecraft:clay') * 5, item('minecraft:clay') * 2, item('minecraft:clay'))
    .time(10)
    .perTick(100)
    .register()

mods.techreborn.industrial_grinder.recipeBuilder()
    .input(item('minecraft:diamond') * 3)
    .fluidInput(fluid('water') * 250)
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
    mods.techreborn.industrial_grinder.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.techreborn.industrial_grinder.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.techreborn.industrial_grinder.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.techreborn.industrial_grinder.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.techreborn.industrial_grinder.removeByInput(fluid('water'))
mods.techreborn.industrial_grinder.removeByInput(item('techreborn:ore2'))
mods.techreborn.industrial_grinder.removeByOutput(item('techreborn:dust:53'))
mods.techreborn.industrial_grinder.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.techreborn.industrial_grinder.streamRecipes()
    ```
