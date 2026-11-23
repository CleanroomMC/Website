---
title: Moonlight Forge (The Aurorian)
description: Combines two items to get a third item. Only works at night, and works faster the higher it is placed in the world.
sidebar:
  label: Moonlight Forge
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/theaurorian/MoonlightForge.java
---

## Description

Combines two items to get a third item. Only works at night, and works faster the higher it is placed in the world.

## Identifier

The identifier `mods.theaurorian.moonlight_forge` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.aurorian.moonlightforge
mods.aurorian.moonlightForge
mods.aurorian.MoonlightForge
mods.aurorian.moonlight_forge
mods.theaurorian.moonlightforge
mods.theaurorian.moonlightForge
mods.theaurorian.MoonlightForge
mods.theaurorian.moonlight_forge/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.theaurorian.moonlight_forge.add(MoonlightForgeRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Moonlight Forge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.theaurorian.moonlight_forge.recipeBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shiroroku.theaurorian.Recipes.MoonlightForgeRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.theaurorian.moonlight_forge.recipeBuilder()
    .input(item('minecraft:stone_sword'), item('minecraft:diamond'))
    .output(item('minecraft:diamond_sword'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.theaurorian.moonlight_forge.remove(MoonlightForgeRecipe)
    ```

- Removes a recipe by the input item and the catalyst item:

    ```groovy
    mods.theaurorian.moonlight_forge.removeByInput(IIngredient, IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.theaurorian.moonlight_forge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.theaurorian.moonlight_forge.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.theaurorian.moonlight_forge.removeByInput(item('theaurorian:moonstonesword'), item('theaurorian:aurorianiteingot'))
mods.theaurorian.moonlight_forge.removeByOutput(item('theaurorian:queenschipper'))
mods.theaurorian.moonlight_forge.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.theaurorian.moonlight_forge.streamRecipes()
    ```
