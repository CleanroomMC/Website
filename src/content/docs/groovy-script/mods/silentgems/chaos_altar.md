---
title: Chaos Altar (Silent's Gems)
description: Converts an input itemstack into an output itemstack with an optional catalyst, consuming a specified amount of Chaos from a Chaos Altar. Chaos is consumed at a maximum of 400 per tick, meaning the time taken corresponds to the Chaos cost.
sidebar:
  label: Chaos Altar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/silentsgems/ChaosAltar.java
---

## Description

Converts an input itemstack into an output itemstack with an optional catalyst, consuming a specified amount of Chaos from a Chaos Altar. Chaos is consumed at a maximum of 400 per tick, meaning the time taken corresponds to the Chaos cost.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

If no catalyst is required by the recipe, the Chaos Altar must have no item in the catalyst slot to be valid.

</details>

## Identifier

The identifier `mods.silentgems.chaos_altar` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.silentgems.chaosaltar
mods.silentgems.chaosAltar
mods.silentgems.ChaosAltar
mods.silentgems.chaos_altar/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.silentgems.chaos_altar.add(RecipeChaosAltar)
    ```

### Recipe Builder

Just like other recipe types, the Chaos Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.silentgems.chaos_altar.recipeBuilder()
    ```

---

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

- `int`. Sets the total amount of Chaos required. Requires greater than 0. (Default `0`).

    ```groovy
    cost(int)
    ```

- `ItemStack`. Sets the catalyst itemstack. Requires not null. (Default `ItemStack.EMPTY`).

    ```groovy
    catalyst(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.silentchaos512.gems.api.recipe.altar.RecipeChaosAltar`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.silentgems.chaos_altar.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .cost(5)
    .register()

mods.silentgems.chaos_altar.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay'))
    .catalyst(item('minecraft:diamond'))
    .cost(5000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.silentgems.chaos_altar.remove(RecipeChaosAltar)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.silentgems.chaos_altar.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.silentgems.chaos_altar.removeByOutput(IIngredient)
    ```

- Removes all recipes that match the given catalyst:

    ```groovy
    mods.silentgems.chaos_altar.removeByCatalyst(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.silentgems.chaos_altar.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.silentgems.chaos_altar.removeByInput(item('silentgems:gem'))
mods.silentgems.chaos_altar.removeByOutput(item('silentgems:craftingmaterial'))
mods.silentgems.chaos_altar.removeByCatalyst(item('minecraft:slime_ball'))
mods.silentgems.chaos_altar.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.silentgems.chaos_altar.streamRecipes()
    ```
