---
title: Saw (Better With Mods)
description: Converts a block into output itemstacks after being powered via rotation power.
sidebar:
  label: Saw
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Saw.java
---

## Description

Converts a block into output itemstacks after being powered via rotation power.

## Identifier

The identifier `mods.betterwithmods.saw` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithmods.saw/* Used as page default */
mods.betterwithmods.Saw
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithmods.saw.add(SawRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Saw also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithmods.saw.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `BlockIngredient`. Sets the input block of the recipe.

    ```groovy
    input(String)
    input(IIngredient)
    input(ItemStack...)
    input(IIngredient...)
    input(BlockIngredient)
    input(List<ItemStack>)
    input(Collection<IIngredient>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.block.recipe.SawRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.saw.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:gold_ingot') * 16)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithmods.saw.remove(SawRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithmods.saw.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithmods.saw.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithmods.saw.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.saw.removeByInput(item('minecraft:vine'))
mods.betterwithmods.saw.removeByOutput(item('minecraft:pumpkin'))
mods.betterwithmods.saw.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithmods.saw.streamRecipes()
    ```
