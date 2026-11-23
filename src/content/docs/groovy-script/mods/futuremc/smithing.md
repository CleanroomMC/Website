---
title: Smithing (Future MC)
description: Converts two input itemstacks into an output output itemstack in the Smithing Table.
sidebar:
  label: Smithing
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Smithing.java
---

## Description

Converts two input itemstacks into an output output itemstack in the Smithing Table.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Crafting with stackable items may require picking up and placing an input to allow crafting the recipe again.

</details>

## Identifier

The identifier `mods.futuremc.smithing` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.futuremc.smithing/* Used as page default */
mods.futuremc.Smithing
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.futuremc.smithing.add(SmithingRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Smithing also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.futuremc.smithing.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thedarkcolour.futuremc.recipe.smithing.SmithingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.smithing.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()

mods.futuremc.smithing.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 4, item('minecraft:clay'))
    .output(item('minecraft:clay') * 8)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.futuremc.smithing.remove(SmithingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.futuremc.smithing.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.futuremc.smithing.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.futuremc.smithing.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.smithing.removeByInput(item('minecraft:diamond_hoe'))
mods.futuremc.smithing.removeByInput(item('futuremc:netherite_ingot'))
mods.futuremc.smithing.removeByOutput(item('futuremc:netherite_pickaxe'))
mods.futuremc.smithing.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.futuremc.smithing.streamRecipes()
    ```
