---
title: Anvil Crafting (Random Things)
description: Converts two itemstacks into an itemstack in the Vanilla Anvil.
sidebar:
  label: Anvil Crafting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/randomthings/Anvil.java
---

## Description

Converts two itemstacks into an itemstack in the Vanilla Anvil.

<details class="cr-block cr-tip" open>
<summary>Tip</summary>

Internally this uses a more restricted version of `AnvilUpdateEvent`, so consider using an event listener for that instead.

</details>

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Consumes the entire stack in the Anvil, regardless of the amount actually required. To avoid issues, consider only using unstackable items.

</details>

:::danger[Bug]
When crafting any recipe done via this, if the output of the Anvil was picked up via clicking it, it will not be craftable again until restarting the game. Can be fixed with a mixin from Universal Tweaks.
:::

## Identifier

The identifier `mods.randomthings.anvil` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.randomthings.anvil/* Used as page default */
mods.randomthings.Anvil
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.randomthings.anvil.add(AnvilRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Anvil Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.randomthings.anvil.recipeBuilder()
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

- `int`. Sets the cost of the recipe in levels consumed. Requires greater than 0. (Default `0`).

    ```groovy
    cost(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lumien.randomthings.recipes.anvil.AnvilRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.randomthings.anvil.recipeBuilder()
    .input(item('minecraft:diamond_sword'), item('minecraft:boat'))
    .output(item('minecraft:diamond'))
    .cost(1)
    .register()

mods.randomthings.anvil.recipeBuilder()
    .input(item('minecraft:iron_sword'), item('minecraft:boat'))
    .output(item('minecraft:gold_ingot') * 16)
    .cost(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.randomthings.anvil.remove(AnvilRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.randomthings.anvil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.randomthings.anvil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.randomthings.anvil.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.randomthings.anvil.removeByInput(item('randomthings:obsidianskull'))
mods.randomthings.anvil.removeByOutput(item('randomthings:lavawader'))
mods.randomthings.anvil.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.randomthings.anvil.streamRecipes()
    ```
