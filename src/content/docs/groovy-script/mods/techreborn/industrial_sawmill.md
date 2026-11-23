---
title: Sawmill (Tech Reborn)
description: Converts an itemstack input and fluidstack output into three itemstack outputs after a given process time, consuming energy per tick.
sidebar:
  label: Sawmill
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/IndustrialSawmill.java
---

## Description

Converts an itemstack input and fluidstack output into three itemstack outputs after a given process time, consuming energy per tick.

## Identifier

The identifier `mods.techreborn.industrial_sawmill` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.techreborn.industrialsawmill
mods.techreborn.industrialSawmill
mods.techreborn.IndustrialSawmill
mods.techreborn.industrial_sawmill/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.techreborn.industrial_sawmill.add(R)
    ```

### Recipe Builder

Just like other recipe types, the Sawmill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.techreborn.industrial_sawmill.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `boolean`. Sets if the recipe matches based on the oredict of inputs. (Default `false`).

    ```groovy
    oreDict(boolean)
    ```

- `int`. Sets the power consumed per tick. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    perTick(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `techreborn.api.recipe.machines.IndustrialSawmillRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.industrial_sawmill.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('lava') * 100)
    .output(item('minecraft:gold_ingot'), item('minecraft:clay') * 5, item('minecraft:clay'))
    .time(10)
    .perTick(100)
    .register()

mods.techreborn.industrial_sawmill.recipeBuilder()
    .input(item('minecraft:diamond') * 3)
    .fluidInput(fluid('water') * 500)
    .output(item('minecraft:clay') * 2)
    .time(5)
    .perTick(32)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.techreborn.industrial_sawmill.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.techreborn.industrial_sawmill.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.techreborn.industrial_sawmill.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.techreborn.industrial_sawmill.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.industrial_sawmill.removeByInput(fluid('water'))
mods.techreborn.industrial_sawmill.removeByInput(item('minecraft:log'))
mods.techreborn.industrial_sawmill.removeByOutput(item('minecraft:planks:4'))
mods.techreborn.industrial_sawmill.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.techreborn.industrial_sawmill.streamRecipes()
    ```
