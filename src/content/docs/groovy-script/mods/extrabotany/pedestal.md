---
title: Livingrock Pedestal (Extra Botany)
description: Converts an input item into an output itemstack when placed inside a Livingrock Pedestal and interacted with by an Extra Botany Hammer.
sidebar:
  label: Livingrock Pedestal
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrabotany/Pedestal.java
---

## Description

Converts an input item into an output itemstack when placed inside a Livingrock Pedestal and interacted with by an Extra Botany Hammer.

## Identifier

The identifier `mods.extrabotany.pedestal` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.extrabotany.pedestal/* Used as page default */
mods.extrabotany.Pedestal
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.extrabotany.pedestal.add(RecipePedestal)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.extrabotany.pedestal.add(IIngredient, ItemStack)
    ```

### Recipe Builder

Just like other recipe types, the Livingrock Pedestal also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.extrabotany.pedestal.recipeBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.meteor.extrabotany.common.crafting.recipe.RecipePedestal`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrabotany.pedestal.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()

mods.extrabotany.pedestal.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.extrabotany.pedestal.remove(RecipePedestal)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.extrabotany.pedestal.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.extrabotany.pedestal.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.extrabotany.pedestal.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrabotany.pedestal.removeByInput(item('minecraft:cobblestone'))
mods.extrabotany.pedestal.removeByOutput(item('minecraft:flint'))
mods.extrabotany.pedestal.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.extrabotany.pedestal.streamRecipes()
    ```
