---
title: Kiln (Atum 2)
description: Smelts an input item into an output itemstack and giving experience similar to a Furnace, but can process up to 4 stacks simultaneously. Makes a copy of the vanilla furnace recipes, excluding entries on a blacklist.
sidebar:
  label: Kiln
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/atum/Kiln.java
---

## Description

Smelts an input item into an output itemstack and giving experience similar to a Furnace, but can process up to 4 stacks simultaneously. Makes a copy of the vanilla furnace recipes, excluding entries on a blacklist.

## Identifier

The identifier `mods.atum.kiln` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.atum.kiln/* Used as page default */
mods.atum.Kiln
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.atum.kiln.add(IKilnRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.atum.kiln.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

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

- `float`. Sets the experience gained by taking the output item out of the Kiln. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy
    experience(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.teammetallurgy.atum.api.recipe.kiln.IKilnRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.atum.kiln.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.atum.kiln.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .experience(0.5f)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.atum.kiln.remove(IKilnRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.atum.kiln.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.atum.kiln.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.atum.kiln.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.atum.kiln.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.atum.kiln.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.atum.kiln.removeByInput(item('minecraft:netherrack'))
mods.atum.kiln.removeByOutput(item('minecraft:stone'))
mods.atum.kiln.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.atum.kiln.streamRecipes()
    ```
