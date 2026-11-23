---
title: Drying Rack (Tinkers' Construct)
description: Convert an item into a different item by hanging it out to dry.
sidebar:
  label: Drying Rack
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/Drying.java
---

## Description

Convert an item into a different item by hanging it out to dry.

## Identifier

The identifier `mods.tconstruct.drying` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ticon.drying
mods.ticon.Drying
mods.tconstruct.drying/* Used as page default */
mods.tconstruct.Drying
mods.tinkersconstruct.drying
mods.tinkersconstruct.Drying
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.tconstruct.drying.add(DryingRecipe)
    ```

- Adds a new recipe in the format `input`, `output`, `time`:

    ```groovy
    mods.tconstruct.drying.add(IIngredient, ItemStack, int)
    ```

### Recipe Builder

Just like other recipe types, the Drying Rack also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.tconstruct.drying.recipeBuilder()
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

- `int`. The time in ticks it takes for the item to dry. Requires greater than or equal to 1. (Default `20`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `slimeknights.tconstruct.library.DryingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.drying.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:dirt'))
    .time(45)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.tconstruct.drying.remove(DryingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.tconstruct.drying.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.tconstruct.drying.removeByOutput(ItemStack)
    ```

- Removes all recipes that match the given input and the given output:

    ```groovy
    mods.tconstruct.drying.removeByInputAndOutput(IIngredient, ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.tconstruct.drying.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.drying.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.tconstruct.drying.streamRecipes()
    ```
