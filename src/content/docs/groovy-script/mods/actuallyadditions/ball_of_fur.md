---
title: Ball of Fur (Actually Additions)
description: A weighted itemstack output for using a Ball of Fur, dropped by a cat.
sidebar:
  label: Ball of Fur
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/BallOfFur.java
---

## Description

A weighted itemstack output for using a Ball of Fur, dropped by a cat.

## Identifier

The identifier `mods.actuallyadditions.ball_of_fur` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.aa.balloffur
mods.aa.ballOfFur
mods.aa.BallOfFur
mods.aa.ball_of_fur
mods.actuallyadditions.balloffur
mods.actuallyadditions.ballOfFur
mods.actuallyadditions.BallOfFur
mods.actuallyadditions.ball_of_fur/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.actuallyadditions.ball_of_fur.add(BallOfFurReturn)
    ```

### Recipe Builder

Just like other recipe types, the Ball of Fur also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.actuallyadditions.ball_of_fur.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets how likely this entry is to be rolled. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    weight(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.BallOfFurReturn`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.ball_of_fur.recipeBuilder()
    .output(item('minecraft:clay') * 32)
    .weight(15)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.actuallyadditions.ball_of_fur.remove(BallOfFurReturn)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.actuallyadditions.ball_of_fur.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.actuallyadditions.ball_of_fur.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.ball_of_fur.removeByOutput(item('minecraft:feather'))
mods.actuallyadditions.ball_of_fur.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.actuallyadditions.ball_of_fur.streamRecipes()
    ```
