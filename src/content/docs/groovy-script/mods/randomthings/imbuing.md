---
title: Imbuing Station (Random Things)
description: Converts four itemstacks into an itemstack in the Random Things Imbuing Station.
sidebar:
  label: Imbuing Station
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/randomthings/Imbuing.java
---

## Description

Converts four itemstacks into an itemstack in the Random Things Imbuing Station.

## Identifier

The identifier `mods.randomthings.imbuing` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.randomthings.imbuing/* Used as page default */
mods.randomthings.Imbuing
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.randomthings.imbuing.add(ImbuingRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Imbuing Station also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.randomthings.imbuing.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 3 and each input item used must be unique.

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

- `IIngredient`. Sets the center IIngredient. Requires not null.

    ```groovy
    mainInput(IIngredient)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lumien.randomthings.recipes.imbuing.ImbuingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.randomthings.imbuing.recipeBuilder()
    .mainInput(item('minecraft:clay'))
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:gold_block'))
    .output(item('minecraft:diamond') * 8)
    .register()

mods.randomthings.imbuing.recipeBuilder()
    .mainInput(item('minecraft:diamond'))
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:diamond'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.randomthings.imbuing.remove(ImbuingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.randomthings.imbuing.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.randomthings.imbuing.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.randomthings.imbuing.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.randomthings.imbuing.removeByInput(item('minecraft:cobblestone'))
mods.randomthings.imbuing.removeByInput(item('minecraft:coal'))
mods.randomthings.imbuing.removeByOutput(item('randomthings:imbue:3'))
mods.randomthings.imbuing.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.randomthings.imbuing.streamRecipes()
    ```
