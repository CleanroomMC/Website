---
title: Soaking Pot (Pyrotech)
description: Converts an item into a new one by soaking it in a liquid. Can require a campfire.
sidebar:
  label: Soaking Pot
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/SoakingPot.java
---

## Description

Converts an item into a new one by soaking it in a liquid. Can require a campfire.

## Identifier

The identifier `mods.pyrotech.soaking_pot` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pyrotech.soakingpot
mods.pyrotech.soakingPot
mods.pyrotech.SoakingPot
mods.pyrotech.soaking_pot/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.pyrotech.soaking_pot.add(SoakingPotRecipe)
    ```

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

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pyrotech.soaking_pot.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.SoakingPotRecipe`).

    ```groovy
    register()
    ```

---

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
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.pyrotech.soaking_pot.remove(SoakingPotRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.pyrotech.soaking_pot.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.pyrotech.soaking_pot.remove(ResourceLocation)
    ```

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
