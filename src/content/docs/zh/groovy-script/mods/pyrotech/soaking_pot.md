---
title: Soaking Pot (Pyrotech)
description: Converts an item into a new one by soaking it in a liquid. Can require a campfire
sidebar:
  label: Soaking Pot
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/SoakingPot.java
---

## Description

Converts an item into a new one by soaking it in a liquid. Can require a campfire

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.pyrotech.soaking_pot/* Used as page default */
mods.pyrotech.soakingpot
mods.pyrotech.soakingPot
mods.pyrotech.SoakingPot
```

## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `time`:

    ```groovy
    mods.pyrotech.soaking_pot.add(String, IIngredient, FluidStack, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.soaking_pot.add('dirt_to_apple', item('minecraft:dirt'), fluid('water'), item('minecraft:apple'), 1200)
```

</details>

### Recipe Builder

Just like other recipe types, the Soaking Pot also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.pyrotech.soaking_pot.recipeBuilder()</summary>

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

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time required for the recipe to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    time(int)
    ```

- `boolean`. Sets if a campfire is required underneath. (Default `false`).

    ```groovy
    campfireRequired(boolean)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.soaking_pot.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('amongium') * 125)
    .output(item('minecraft:emerald'))
    .time(400)
    .campfireRequired(true)
    .name('diamond_to_emerald_with_amongium_soaking_pot')
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.pyrotech.soaking_pot.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.soaking_pot.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.soaking_pot.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.soaking_pot.removeByOutput(item('pyrotech:material', 54))
mods.pyrotech.soaking_pot.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.soaking_pot.streamRecipes()
    ```
