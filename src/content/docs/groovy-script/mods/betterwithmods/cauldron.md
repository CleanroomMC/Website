---
title: Cauldron (Better With Mods)
description: Converts a large number of items into other items, with the ability to require specific amounts of heat.
sidebar:
  label: Cauldron
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Cauldron.java
---

## Description

Converts a large number of items into other items, with the ability to require specific amounts of heat.

## Identifier

The identifier `mods.betterwithmods.cauldron` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithmods.cauldron/* Used as page default */
mods.betterwithmods.Cauldron
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithmods.cauldron.add(CookingPotRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Cauldron also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithmods.cauldron.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets if the Cauldron requires a normal fire (1) or a Stoked Fire (2) below it. (Default `1`).

    ```groovy
    heat(int)
    ```

- `int`. Sets the priority of the recipe in relation to other valid recipes for the given items. (Default `1`).

    ```groovy
    priority(int)
    ```

- `boolean`. Sets if the Cauldron requires any heat source below it. (Default `false`).

    ```groovy
    ignoreHeat()
    ignoreHeat(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.bulk.recipes.CookingPotRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.cauldron.recipeBuilder()
    .input(item('minecraft:clay') * 3)
    .output(item('minecraft:diamond'))
    .heat(2)
    .register()

mods.betterwithmods.cauldron.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot') * 16)
    .ignoreHeat()
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithmods.cauldron.remove(CookingPotRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithmods.cauldron.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithmods.cauldron.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithmods.cauldron.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.cauldron.removeByInput(item('minecraft:gunpowder'))
mods.betterwithmods.cauldron.removeByOutput(item('minecraft:gunpowder'))
mods.betterwithmods.cauldron.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithmods.cauldron.streamRecipes()
    ```
