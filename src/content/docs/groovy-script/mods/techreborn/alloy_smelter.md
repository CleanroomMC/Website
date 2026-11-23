---
title: Alloy Smelter (Tech Reborn)
description: Converts two itemstack inputs into an itemstack output after a given process time, consuming energy per tick.
sidebar:
  label: Alloy Smelter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/AlloySmelter.java
---

## Description

Converts two itemstack inputs into an itemstack output after a given process time, consuming energy per tick.

## Identifier

The identifier `mods.techreborn.alloy_smelter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.techreborn.alloysmelter
mods.techreborn.alloySmelter
mods.techreborn.AlloySmelter
mods.techreborn.alloy_smelter/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.techreborn.alloy_smelter.add(R)
    ```

### Recipe Builder

Just like other recipe types, the Alloy Smelter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.techreborn.alloy_smelter.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the power consumed per tick. Requires greater than 0. (Default `0`).

    ```groovy
    perTick(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `reborncore.api.praescriptum.recipes.Recipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.alloy_smelter.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:diamond') * 2)
    .output(item('minecraft:gold_ingot'))
    .time(10)
    .perTick(100)
    .register()

mods.techreborn.alloy_smelter.recipeBuilder()
    .input(item('minecraft:diamond') * 3, item('minecraft:diamond') * 2)
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
    mods.techreborn.alloy_smelter.remove(R)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.techreborn.alloy_smelter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.techreborn.alloy_smelter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.techreborn.alloy_smelter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.alloy_smelter.removeByInput(item('techreborn:ingot:4'))
mods.techreborn.alloy_smelter.removeByOutput(item('techreborn:ingot:5'))
mods.techreborn.alloy_smelter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.techreborn.alloy_smelter.streamRecipes()
    ```
