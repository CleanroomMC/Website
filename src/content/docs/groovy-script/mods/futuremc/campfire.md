---
title: Campfire (Future MC)
description: Converts an input itemstack into an output itemstack when placed on the Campfire.
sidebar:
  label: Campfire
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Campfire.java
---

## Description

Converts an input itemstack into an output itemstack when placed on the Campfire.

## Identifier

The identifier `mods.futuremc.campfire` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.futuremc.campfire/* Used as page default */
mods.futuremc.Campfire
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.futuremc.campfire.add(CampfireRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Campfire also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.futuremc.campfire.recipeBuilder()
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

- `int`. Sets the time in ticks the takes to process. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    duration(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thedarkcolour.futuremc.recipe.campfire.CampfireRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.campfire.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .duration(10)
    .register()

mods.futuremc.campfire.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .duration(1)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.futuremc.campfire.remove(CampfireRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.futuremc.campfire.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.futuremc.campfire.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.futuremc.campfire.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.campfire.removeByInput(item('minecraft:fish'))
mods.futuremc.campfire.removeByOutput(item('minecraft:cooked_mutton'))
mods.futuremc.campfire.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.futuremc.campfire.streamRecipes()
    ```
