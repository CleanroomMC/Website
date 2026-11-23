---
title: Packager (Cyclic)
description: Converts up to 6 input itemstacks into an output itemstack.
sidebar:
  label: Packager
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Packager.java
---

## Description

Converts up to 6 input itemstacks into an output itemstack.

## Identifier

The identifier `mods.cyclicmagic.packager` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.cyclic.packager
mods.cyclic.Packager
mods.cyclicmagic.packager/* Used as page default */
mods.cyclicmagic.Packager
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.cyclicmagic.packager.add(RecipePackager)
    ```

### Recipe Builder

Just like other recipe types, the Packager also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.cyclicmagic.packager.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.packager.RecipePackager`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.packager.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.cyclicmagic.packager.recipeBuilder()
    .input(ore('logWood'), ore('sand'), ore('gravel'), item('minecraft:diamond'), item('minecraft:diamond_block'), item('minecraft:gold_block'))
    .output(item('minecraft:clay') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.cyclicmagic.packager.remove(RecipePackager)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.cyclicmagic.packager.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.cyclicmagic.packager.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.cyclicmagic.packager.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.packager.removeByInput(item('minecraft:grass'))
mods.cyclicmagic.packager.removeByOutput(item('minecraft:melon_block'))
mods.cyclicmagic.packager.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.cyclicmagic.packager.streamRecipes()
    ```
