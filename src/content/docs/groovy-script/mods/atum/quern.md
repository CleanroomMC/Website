---
title: Quern (Atum 2)
description: Converts an input item into an output itemstack after a given number of rotations, which are done via a player right clicking the Quern.
sidebar:
  label: Quern
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/atum/Quern.java
---

## Description

Converts an input item into an output itemstack after a given number of rotations, which are done via a player right clicking the Quern.

## Identifier

The identifier `mods.atum.quern` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.atum.quern/* Used as page default */
mods.atum.Quern
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.atum.quern.add(IQuernRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Quern also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.atum.quern.recipeBuilder()
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

- `int`. Sets the amount of rotation required to convert the input into the output. Requires greater than 0. (Default `0`).

    ```groovy
    rotations(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.teammetallurgy.atum.api.recipe.quern.IQuernRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.atum.quern.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .rotations(1)
    .register()

mods.atum.quern.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .rotations(5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.atum.quern.remove(IQuernRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.atum.quern.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.atum.quern.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.atum.quern.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.atum.quern.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.atum.quern.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.atum.quern.removeByInput(item('minecraft:blaze_rod'))
mods.atum.quern.removeByOutput(item('minecraft:sugar'))
mods.atum.quern.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.atum.quern.streamRecipes()
    ```
