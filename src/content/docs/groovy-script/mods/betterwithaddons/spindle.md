---
title: Spindle (Better With Addons)
description: Converts an input itemstack into an output itemstack, with the ability to consume the Spindle, when placed against a Spinning Wheel powered by Mechanical Power.
sidebar:
  label: Spindle
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Spindle.java
---

## Description

Converts an input itemstack into an output itemstack, with the ability to consume the Spindle, when placed against a Spinning Wheel powered by Mechanical Power.

## Identifier

The identifier `mods.betterwithaddons.spindle` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithaddons.spindle/* Used as page default */
mods.betterwithaddons.Spindle
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithaddons.spindle.add(SpindleRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Spindle also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithaddons.spindle.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `boolean`. Sets if the Spindle will break and be consumed when crafting. (Default `false`).

    ```groovy
    popoff()
    popoff(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.SpindleRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.spindle.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.spindle.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:diamond'))
    .popoff()
    .register()

mods.betterwithaddons.spindle.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithaddons.spindle.remove(SpindleRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithaddons.spindle.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithaddons.spindle.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithaddons.spindle.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.spindle.removeByInput(item('minecraft:vine'))
mods.betterwithaddons.spindle.removeByOutput(item('betterwithaddons:bolt'))
mods.betterwithaddons.spindle.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithaddons.spindle.streamRecipes()
    ```
