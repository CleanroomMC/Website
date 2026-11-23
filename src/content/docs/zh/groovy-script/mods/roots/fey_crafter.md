---
title: Fey Crafter (Roots 3)
description: The Fey Crafter is a crafting mechanism that requires an activated Grove Stone nearby to take 5 item inputs and return an item output.
sidebar:
  label: Fey Crafter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/FeyCrafter.java
---

## Description

The Fey Crafter is a crafting mechanism that requires an activated Grove Stone nearby to take 5 item inputs and return an item output.

:::danger[Danger]
 When reloading recipes with the Fey Crafter, you may encounter a `ConcurrentModificationException`!
:::

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.roots.fey_crafter/* Used as page default */
mods.roots.feycrafter
mods.roots.feyCrafter
mods.roots.FeyCrafter
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Fey Crafter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.roots.fey_crafter.recipeBuilder()</summary>

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 5.

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

- `int`. Sets the amount of experience output when completing the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    xp(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.FeyCraftingRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.fey_crafter.recipeBuilder()
    .name('clay_craft')
    .input(item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone')) // Must be exactly 5
    .output(item('minecraft:clay'))
    .xp(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the Fey Crafter recipe with the given name:

    ```groovy
    mods.roots.fey_crafter.removeByName(ResourceLocation)
    ```

- Removes the Fey Crafter recipe with the given output itemstack:

    ```groovy
    mods.roots.fey_crafter.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.roots.fey_crafter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.fey_crafter.removeByName(resource('roots:unending_bowl'))
mods.roots.fey_crafter.removeByOutput(item('minecraft:gravel'))
mods.roots.fey_crafter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.roots.fey_crafter.streamRecipes()
    ```
