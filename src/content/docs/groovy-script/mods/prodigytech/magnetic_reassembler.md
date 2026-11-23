---
title: Magnetic Reassembler (Prodigy Tech)
description: A simple 1 to 1 processing machine for dusts.
sidebar:
  label: Magnetic Reassembler
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/SimpleRecipeHandler.java
---

## Description

A simple 1 to 1 processing machine for dusts.

## Identifier

The identifier `mods.prodigytech.magnetic_reassembler` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.prodigytech.magneticreassembler
mods.prodigytech.magneticReassembler
mods.prodigytech.MagneticReassembler
mods.prodigytech.magnetic_reassembler/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Magnetic Reassembler also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.prodigytech.magnetic_reassembler.recipeBuilder()
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

- `int`. The time needed to perform the recipe, in ticks. Will run faster than this number when heated over 125 C. Requires greater than or equal to 1. (Default `(default time for this machine in the mod's config)`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.SimpleRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.magnetic_reassembler.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .time(50)
    .register()

mods.prodigytech.magnetic_reassembler.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:coal'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.prodigytech.magnetic_reassembler.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.prodigytech.magnetic_reassembler.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.magnetic_reassembler.removeByInput(item('minecraft:gravel'))
mods.prodigytech.magnetic_reassembler.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.prodigytech.magnetic_reassembler.streamRecipes()
    ```
