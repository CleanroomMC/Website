---
title: Ice Dragonforge (Ice And Fire)
description: Converts two input itemstacks into an output itemstack in a multiblock Dragonforge Ice Multiblock while there is a stage 3+ Ice Dragon nearby.
sidebar:
  label: Ice Dragonforge
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/iceandfire/IceForge.java
---

## Description

Converts two input itemstacks into an output itemstack in a multiblock Dragonforge Ice Multiblock while there is a stage 3+ Ice Dragon nearby.

## Identifier

The identifier `mods.iceandfire.ice_forge` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.iceandfire.iceforge
mods.iceandfire.iceForge
mods.iceandfire.IceForge
mods.iceandfire.ice_forge/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.iceandfire.ice_forge.add(DragonForgeRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Ice Dragonforge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.iceandfire.ice_forge.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.github.alexthe666.iceandfire.recipe.DragonForgeRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.iceandfire.ice_forge.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.iceandfire.ice_forge.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.iceandfire.ice_forge.remove(DragonForgeRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.iceandfire.ice_forge.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.iceandfire.ice_forge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.iceandfire.ice_forge.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.iceandfire.ice_forge.removeByInput(item('minecraft:iron_ingot'))
mods.iceandfire.ice_forge.removeByInput(item('iceandfire:ice_dragon_blood'))
mods.iceandfire.ice_forge.removeByOutput(item('iceandfire:dragonsteel_ice_ingot'))
mods.iceandfire.ice_forge.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.iceandfire.ice_forge.streamRecipes()
    ```
