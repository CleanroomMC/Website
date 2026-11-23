---
title: Crusher (Actually Additions)
description: Converts an input itemstack into an output itemstack with a chance of a second itemstack.
sidebar:
  label: Crusher
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/Crusher.java
---

## Description

Converts an input itemstack into an output itemstack with a chance of a second itemstack.

## Identifier

The identifier `mods.actuallyadditions.crusher` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.aa.crusher
mods.aa.Crusher
mods.actuallyadditions.crusher/* Used as page default */
mods.actuallyadditions.Crusher
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.actuallyadditions.crusher.add(CrusherRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Crusher also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.actuallyadditions.crusher.recipeBuilder()
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

- `int`. Sets the chance for the second output entry to be output. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy
    chance(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.CrusherRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.crusher.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'), item('minecraft:diamond'))
    .chance(100)
    .register()

mods.actuallyadditions.crusher.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:diamond') * 12)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.actuallyadditions.crusher.remove(CrusherRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.actuallyadditions.crusher.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.actuallyadditions.crusher.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.actuallyadditions.crusher.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.crusher.removeByInput(item('minecraft:bone'))
mods.actuallyadditions.crusher.removeByOutput(item('minecraft:sugar'))
mods.actuallyadditions.crusher.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.actuallyadditions.crusher.streamRecipes()
    ```
