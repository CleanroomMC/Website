---
title: Stone Oven (Pyrotech)
description: When powered by burning fuel can convert items.
sidebar:
  label: Stone Oven
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/StoneOven.java
---

## Description

When powered by burning fuel can convert items.

:::caution[Warning]
Stone and Refractory Oven includes some recipes from the Furnace Registry that can't be removed here, you have to use `furnace.add` or `furnace.remove` to manipulate those recipes directly.
:::

## Identifier

The identifier `mods.pyrotech.stone_oven` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pyrotech.stoneoven
mods.pyrotech.stoneOven
mods.pyrotech.StoneOven
mods.pyrotech.stone_oven/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.pyrotech.stone_oven.add(StoneOvenRecipe)
    ```

- Adds recipes in the format `name`, `input`, `output`, `duration`:

    ```groovy
    mods.pyrotech.stone_oven.add(String, IIngredient, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.stone_oven.add('apple_to_dirt_stone', item('minecraft:apple'), item('minecraft:dirt'), 1000)
```

</details>

### Recipe Builder

Just like other recipe types, the Stone Oven also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pyrotech.stone_oven.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- `int`. Sets the time required for the recipe to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    duration(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.machine.recipe.StoneOvenRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.stone_oven.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald'))
    .duration(400)
    .name('diamond_campfire_to_emerald_stone')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.pyrotech.stone_oven.remove(StoneOvenRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.pyrotech.stone_oven.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.pyrotech.stone_oven.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pyrotech.stone_oven.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.stone_oven.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.stone_oven.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.stone_oven.removeByInput(item('minecraft:porkchop'))
mods.pyrotech.stone_oven.removeByOutput(item('minecraft:cooked_porkchop'))
mods.pyrotech.stone_oven.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.stone_oven.streamRecipes()
    ```
