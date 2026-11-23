---
title: Atomic Reconstructor (Actually Additions)
description: The Atomic Reconstructor is a block which uses energy to convert a block or item in front of it into other items.
sidebar:
  label: Atomic Reconstructor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/AtomicReconstructor.java
---

## Description

The Atomic Reconstructor is a block which uses energy to convert a block or item in front of it into other items.

## Identifier

Refer to this via any of the following:

```groovy {5}
mods.aa.atomic_reconstructor
mods.aa.atomicreconstructor
mods.aa.atomicReconstructor
mods.aa.AtomicReconstructor
mods.actuallyadditions.atomic_reconstructor/* Used as page default */
mods.actuallyadditions.atomicreconstructor
mods.actuallyadditions.atomicReconstructor
mods.actuallyadditions.AtomicReconstructor
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Atomic Reconstructor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.actuallyadditions.atomic_reconstructor.recipeBuilder()</summary>

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

- `int`. Sets the amount of power consumed by the recipe. Requires greater than 0. (Default `1`).

    ```groovy
    energy(int)
    energyUse(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.LensConversionRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.atomic_reconstructor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .energyUse(1000)
    .register()

mods.actuallyadditions.atomic_reconstructor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .energy(1000)
    .register()

mods.actuallyadditions.atomic_reconstructor.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given ore:

    ```groovy
    mods.actuallyadditions.atomic_reconstructor.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.actuallyadditions.atomic_reconstructor.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.actuallyadditions.atomic_reconstructor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.atomic_reconstructor.removeByInput(item('minecraft:diamond'))
mods.actuallyadditions.atomic_reconstructor.removeByOutput(item('actuallyadditions:block_crystal'))
mods.actuallyadditions.atomic_reconstructor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.actuallyadditions.atomic_reconstructor.streamRecipes()
    ```
