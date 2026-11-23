---
title: Blast Furnace (Future MC)
description: Converts an input itemstack into an output itemstack at the cost of burnable fuel.
sidebar:
  label: Blast Furnace
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/BlastFurnace.java
---

## Description

Converts an input itemstack into an output itemstack at the cost of burnable fuel.

## Identifier

The identifier `mods.futuremc.blast_furnace` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.futuremc.blastfurnace
mods.futuremc.blastFurnace
mods.futuremc.BlastFurnace
mods.futuremc.blast_furnace/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.futuremc.blast_furnace.add(SimpleRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Blast Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.futuremc.blast_furnace.recipeBuilder()
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
mods.futuremc.blast_furnace.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.futuremc.blast_furnace.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.futuremc.blast_furnace.remove(SimpleRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.futuremc.blast_furnace.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.futuremc.blast_furnace.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.futuremc.blast_furnace.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.futuremc.blast_furnace.removeByInput(item('minecraft:gold_ore'))
mods.futuremc.blast_furnace.removeByOutput(item('minecraft:iron_ingot'))
mods.futuremc.blast_furnace.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.futuremc.blast_furnace.streamRecipes()
    ```
