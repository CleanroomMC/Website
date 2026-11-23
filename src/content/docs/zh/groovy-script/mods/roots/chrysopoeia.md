---
title: Chrysopoeia (Roots 3)
description: Chrysopoeia is a spell that transmutes items held in the main hand.
sidebar:
  label: Chrysopoeia
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Chrysopoeia.java
---

## Description

Chrysopoeia is a spell that transmutes items held in the main hand.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.roots.chrysopoeia/* Used as page default */
mods.roots.Chrysopoeia
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Chrysopoeia also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.roots.chrysopoeia.recipeBuilder()</summary>

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.ChrysopoeiaRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.chrysopoeia.recipeBuilder()
    .name('clay_transmute')
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.roots.chrysopoeia.recipeBuilder()
    .input(item('minecraft:diamond') * 3)
    .output(item('minecraft:gold_ingot') * 3)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the Chrysopoeia recipe with the given input itemstack:

    ```groovy
    mods.roots.chrysopoeia.removeByInput(ItemStack)
    ```

- Removes the Chrysopoeia recipe with the given name:

    ```groovy
    mods.roots.chrysopoeia.removeByName(ResourceLocation)
    ```

- Removes the Chrysopoeia recipe with the given output itemstack:

    ```groovy
    mods.roots.chrysopoeia.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.roots.chrysopoeia.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.chrysopoeia.removeByInput(item('minecraft:rotten_flesh'))
mods.roots.chrysopoeia.removeByName(resource('roots:gold_from_silver'))
mods.roots.chrysopoeia.removeByOutput(item('minecraft:iron_nugget'))
mods.roots.chrysopoeia.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.roots.chrysopoeia.streamRecipes()
    ```
