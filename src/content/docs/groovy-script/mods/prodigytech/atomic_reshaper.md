---
title: Atomic Reshaper (Prodigy Tech)
description: Uses Hot Air and Primordium to convert items. Can have a weighted random based output.
sidebar:
  label: Atomic Reshaper
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/AtomicReshaper.java
---

## Description

Uses Hot Air and Primordium to convert items. Can have a weighted random based output.

## Identifier

The identifier `mods.prodigytech.atomic_reshaper` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.prodigytech.atomicreshaper
mods.prodigytech.atomicReshaper
mods.prodigytech.AtomicReshaper
mods.prodigytech.atomic_reshaper/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Atomic Reshaper also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.prodigytech.atomic_reshaper.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy
    output(ItemStack, int)
    ```

- `int`. The time needed to perform the recipe, in ticks. Will run faster than this number when heated over 250 C. Requires greater than or equal to 1. (Default `Config.atomicReshaperProcessTime`).

    ```groovy
    time(int)
    ```

- `int`. The amount of Primordium units consumed by this recipe. 1 Primordium equals 100 Primordium units. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    primordium(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.AtomicReshaperManager$AtomicReshaperRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.atomic_reshaper.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:emerald_block'))
    .primordium(10)
    .time(50)
    .register()

mods.prodigytech.atomic_reshaper.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:diamond_block'), 10)
    .output(item('minecraft:carrot'), 3)
    .primordium(7)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.prodigytech.atomic_reshaper.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.prodigytech.atomic_reshaper.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.atomic_reshaper.removeByInput(ore('paper'))
mods.prodigytech.atomic_reshaper.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.prodigytech.atomic_reshaper.streamRecipes()
    ```
