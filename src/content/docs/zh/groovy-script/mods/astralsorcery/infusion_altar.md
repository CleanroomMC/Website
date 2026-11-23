---
title: Infusion Altar (Astral Sorcery)
description: Consumes buckets of Liquid Starlight when interacted with by a Resonating Wand to convert input items into output itemstacks after a time.
sidebar:
  label: Infusion Altar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/InfusionAltar.java
---

## Description

Consumes buckets of Liquid Starlight when interacted with by a Resonating Wand to convert input items into output itemstacks after a time.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.astralsorcery.infusion_altar/* Used as page default */
mods.astralsorcery.infusionaltar
mods.astralsorcery.infusionAltar
mods.astralsorcery.InfusionAltar
mods.astral.infusion_altar
mods.astral.infusionaltar
mods.astral.infusionAltar
mods.astral.InfusionAltar
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Infusion Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.astralsorcery.infusion_altar.recipeBuilder()</summary>

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

- `int`. Sets the time the recipe takes to complete. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `boolean`. Sets if using a chalice speeds up the recipe time. (Default `false`).

    ```groovy
    chalice()
    chalice(boolean)
    ```

- `float`. Sets the chance of consuming a bucket of Starlight. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    consumption(float)
    ```

- `boolean`. Sets if the recipe consumes all 12 buckets of Starlight surrounding the Infusion Altar instead of just one. (Default `false`).

    ```groovy
    consumeMultiple()
    consumeMultiple(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `hellfirepvp.astralsorcery.common.crafting.infusion.recipes.BasicInfusionRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.infusion_altar.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .consumption(1f)
    .chalice(false)
    .consumeMultiple(true)
    .time(10)
    .register()

mods.astralsorcery.infusion_altar.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.astralsorcery.infusion_altar.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.astralsorcery.infusion_altar.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.astralsorcery.infusion_altar.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.infusion_altar.removeByInput(item('minecraft:diamond_ore'))
mods.astralsorcery.infusion_altar.removeByOutput(item('minecraft:iron_ingot'))
mods.astralsorcery.infusion_altar.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.astralsorcery.infusion_altar.streamRecipes()
    ```
