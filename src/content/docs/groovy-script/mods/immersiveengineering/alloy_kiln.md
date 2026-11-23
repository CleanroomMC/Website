---
title: Alloy Kiln (Immersive Engineering)
description: Converts two input itemstacks into an output itemstack, consuming fuel (based on burn time).
sidebar:
  label: Alloy Kiln
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/AlloyKiln.java
---

## Description

Converts two input itemstacks into an output itemstack, consuming fuel (based on burn time).

## Identifier

The identifier `mods.immersiveengineering.alloy_kiln` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ie.alloykiln
mods.ie.alloyKiln
mods.ie.AlloyKiln
mods.ie.alloy_kiln
mods.immersiveengineering.alloykiln
mods.immersiveengineering.alloyKiln
mods.immersiveengineering.AlloyKiln
mods.immersiveengineering.alloy_kiln/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersiveengineering.alloy_kiln.add(AlloyRecipe)
    ```

- Adds recipes in the format `output`, `input0`, `input1`, `time`:

    ```groovy
    mods.immersiveengineering.alloy_kiln.add(ItemStack, IIngredient, IIngredient, int)
    ```

### Recipe Builder

Just like other recipe types, the Alloy Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersiveengineering.alloy_kiln.recipeBuilder()
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

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.AlloyRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.alloy_kiln.recipeBuilder()
    .input(item('minecraft:diamond'), ore('ingotGold'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersiveengineering.alloy_kiln.remove(AlloyRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.alloy_kiln.removeByInput(ItemStack, ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.alloy_kiln.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.alloy_kiln.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.alloy_kiln.removeByInput(item('minecraft:gold_ingot'), item('immersiveengineering:metal:3'))
mods.immersiveengineering.alloy_kiln.removeByOutput(item('immersiveengineering:metal:6'))
mods.immersiveengineering.alloy_kiln.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.alloy_kiln.streamRecipes()
    ```
