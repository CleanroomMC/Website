---
title: Chopping Block (Pyrotech)
description: When using a axe it can convert items
sidebar:
  label: Chopping Block
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/ChoppingBlock.java
---

## Description

When using a axe it can convert items

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.pyrotech.chopping_block/* Used as page default */
mods.pyrotech.choppingblock
mods.pyrotech.choppingBlock
mods.pyrotech.ChoppingBlock
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Chopping Block also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.pyrotech.chopping_block.recipeBuilder()</summary>

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

- `IntList`. Sets how often the item needs to be hit with output amount. Call it 4 times for 4 different tiers (Crude, Stone, Iron, Diamond).

    ```groovy
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.ChoppingBlockRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.chopping_block.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald'))
    .chops(25, 1)
    .chops(20, 1)
    .chops(15, 1)
    .chops(10, 2)
    .name('diamond_to_emerald_chopping_block')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.pyrotech.chopping_block.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.chopping_block.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.chopping_block.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.chopping_block.removeByInput(item('minecraft:log2'))
mods.pyrotech.chopping_block.removeByOutput(item('minecraft:planks', 4))
mods.pyrotech.chopping_block.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.chopping_block.streamRecipes()
    ```
