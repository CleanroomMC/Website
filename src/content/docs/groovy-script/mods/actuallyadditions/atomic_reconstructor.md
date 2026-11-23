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

The identifier `mods.actuallyadditions.atomic_reconstructor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.aa.atomicreconstructor
mods.aa.atomicReconstructor
mods.aa.AtomicReconstructor
mods.aa.atomic_reconstructor
mods.actuallyadditions.atomicreconstructor
mods.actuallyadditions.atomicReconstructor
mods.actuallyadditions.AtomicReconstructor
mods.actuallyadditions.atomic_reconstructor/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.actuallyadditions.atomic_reconstructor.add(LensConversionRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Atomic Reconstructor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.actuallyadditions.atomic_reconstructor.recipeBuilder()
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

- `Lens`. Sets the type of Lens used for the recipe. Requires not null. (Default `ActuallyAdditionsAPI.lensDefaultConversion`).

    ```groovy
    type(Lens)
    ```

- `int`. Sets the amount of power consumed by the recipe. Requires greater than 0. (Default `1`).

    ```groovy
    energy(int)
    energyUse(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.LensConversionRecipe`).

    ```groovy
    register()
    ```

---

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

- Removes the given recipe from the recipe list:

    ```groovy
    mods.actuallyadditions.atomic_reconstructor.remove(LensConversionRecipe)
    ```

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
