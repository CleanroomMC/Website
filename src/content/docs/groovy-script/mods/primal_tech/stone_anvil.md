---
title: Stone Anvil (Primal Tech)
description: Converts an input item into an output itemstack after being interacted with by a player using a Stone Mallet.
sidebar:
  label: Stone Anvil
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/primaltech/StoneAnvil.java
---

## Description

Converts an input item into an output itemstack after being interacted with by a player using a Stone Mallet.

## Identifier

The identifier `mods.primal_tech.stone_anvil` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.primaltech.stoneanvil
mods.primaltech.stoneAnvil
mods.primaltech.StoneAnvil
mods.primaltech.stone_anvil
mods.primal_tech.stoneanvil
mods.primal_tech.stoneAnvil
mods.primal_tech.StoneAnvil
mods.primal_tech.stone_anvil/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.primal_tech.stone_anvil.add(StoneAnvilRecipes)
    ```

- Adds recipes in the format `output`, `input`:

    ```groovy
    mods.primal_tech.stone_anvil.add(ItemStack, IIngredient)
    ```

### Recipe Builder

Just like other recipe types, the Stone Anvil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.primal_tech.stone_anvil.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `primal_tech.recipes.StoneAnvilRecipes`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.primal_tech.stone_anvil.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.primal_tech.stone_anvil.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.primal_tech.stone_anvil.remove(StoneAnvilRecipes)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.primal_tech.stone_anvil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.primal_tech.stone_anvil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.primal_tech.stone_anvil.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.primal_tech.stone_anvil.removeByInput(item('primal_tech:flint_block'))
mods.primal_tech.stone_anvil.removeByOutput(item('minecraft:flint'))
mods.primal_tech.stone_anvil.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.primal_tech.stone_anvil.streamRecipes()
    ```
