---
title: Stone Kiln (Pyrotech)
description: Converts an item into a new one by burning it. Has a chance to fail.
sidebar:
  label: Stone Kiln
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/StoneKiln.java
---

## Description

Converts an item into a new one by burning it. Has a chance to fail.

## Identifier

The identifier `mods.pyrotech.stone_kiln` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pyrotech.stonekiln
mods.pyrotech.stoneKiln
mods.pyrotech.StoneKiln
mods.pyrotech.stone_kiln/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.pyrotech.stone_kiln.add(StoneKilnRecipe)
    ```

- Adds recipes in the format `name`, `input`, `output`, `burnTime`, `failureChance`, `failureOutput`:

    ```groovy
    mods.pyrotech.stone_kiln.add(String, IIngredient, ItemStack, int, float, ItemStack...)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.stone_kiln.add('clay_to_iron_stone', item('minecraft:clay_ball') * 5, item('minecraft:iron_ingot'), 1200, 0.5f, item('minecraft:dirt'), item('minecraft:cobblestone'))
```

</details>

### Recipe Builder

Just like other recipe types, the Stone Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pyrotech.stone_kiln.recipeBuilder()
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
    burnTime(int)
    ```

- `float`. Sets the chance to fail the recipe. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy
    failureChance(float)
    ```

- `ItemStackList`. Sets the output when the recipe failed.

    ```groovy
    failureOutput(ItemStack)
    failureOutput(ItemStack...)
    failureOutput(Iterable<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.machine.recipe.StoneKilnRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.stone_kiln.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:gold_ingot'))
    .burnTime(400)
    .failureChance(1f)
    .failureOutput(item('minecraft:wheat'), item('minecraft:carrot'), item('minecraft:sponge'))
    .name('iron_to_gold_kiln_with_failure_items_stone')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.pyrotech.stone_kiln.remove(StoneKilnRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.pyrotech.stone_kiln.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.pyrotech.stone_kiln.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pyrotech.stone_kiln.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.stone_kiln.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.stone_kiln.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.stone_kiln.removeByOutput(item('pyrotech:bucket_clay'))
mods.pyrotech.stone_kiln.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.stone_kiln.streamRecipes()
    ```
