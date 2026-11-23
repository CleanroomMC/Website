---
title: Seed Reprocessor (Mystical Agriculture)
description: Converts an input itemstack into an output itemstack, taking a set amount of time based on the machine and consuming fuel.
sidebar:
  label: Seed Reprocessor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mysticalagriculture/Reprocessor.java
---

## Description

Converts an input itemstack into an output itemstack, taking a set amount of time based on the machine and consuming fuel.

## Identifier

The identifier `mods.mysticalagriculture.reprocessor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.mysticalagriculture.reprocessor/* Used as page default */
mods.mysticalagriculture.Reprocessor
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.mysticalagriculture.reprocessor.add(ReprocessorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Seed Reprocessor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.mysticalagriculture.reprocessor.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.blakebr0.mysticalagriculture.crafting.ReprocessorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mysticalagriculture.reprocessor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 3)
    .register()

mods.mysticalagriculture.reprocessor.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.mysticalagriculture.reprocessor.remove(ReprocessorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.mysticalagriculture.reprocessor.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.mysticalagriculture.reprocessor.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mysticalagriculture.reprocessor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mysticalagriculture.reprocessor.removeByInput(item('mysticalagriculture:stone_seeds'))
mods.mysticalagriculture.reprocessor.removeByOutput(item('mysticalagriculture:dirt_essence'))
mods.mysticalagriculture.reprocessor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mysticalagriculture.reprocessor.streamRecipes()
    ```
