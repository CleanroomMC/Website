---
title: Stoenecutter (Future MC)
description: Converts an input itemstack into an output itemstack via selecting the desired output from the Stonecutter GUI.
sidebar:
  label: Stoenecutter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Stonecutter.java
---

## Description

Converts an input itemstack into an output itemstack via selecting the desired output from the Stonecutter GUI.

## Identifier

The identifier `mods.futuremc.stonecutter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.futuremc.stonecutter/* Used as page default */
mods.futuremc.Stonecutter
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.futuremc.stonecutter.add(SimpleRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Stoenecutter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.futuremc.stonecutter.recipeBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thedarkcolour.futuremc.recipe.SimpleRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.stonecutter.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.futuremc.stonecutter.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.futuremc.stonecutter.remove(SimpleRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.futuremc.stonecutter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.futuremc.stonecutter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.futuremc.stonecutter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.stonecutter.removeByInput(item('minecraft:stonebrick'))
mods.futuremc.stonecutter.removeByOutput(item('minecraft:stone_slab'))
mods.futuremc.stonecutter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.futuremc.stonecutter.streamRecipes()
    ```
