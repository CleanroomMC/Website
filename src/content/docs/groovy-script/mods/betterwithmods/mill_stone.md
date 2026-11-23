---
title: Mill Stone (Better With Mods)
description: Converts input itemstacks into output itemstacks after being ground via rotation power for a given time.
sidebar:
  label: Mill Stone
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/MillStone.java
---

## Description

Converts input itemstacks into output itemstacks after being ground via rotation power for a given time.

## Identifier

The identifier `mods.betterwithmods.mill_stone` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {6}
mods.betterwithmods.mill
mods.betterwithmods.Mill
mods.betterwithmods.millstone
mods.betterwithmods.millStone
mods.betterwithmods.MillStone
mods.betterwithmods.mill_stone/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithmods.mill_stone.add(MillRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Mill Stone also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithmods.mill_stone.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    time(int)
    ticks(int)
    ```

- `int`. Sets the priority of the recipe in relation to other valid recipes for the given items. (Default `1`).

    ```groovy
    priority(int)
    ```

- `SoundEvent`. Sets what sound is played by the mill during the recipe.

    ```groovy
    soundEvent(SoundEvent)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.bulk.recipes.MillRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.mill_stone.recipeBuilder()
    .input(item('minecraft:diamond') * 3)
    .output(item('minecraft:gold_ingot') * 16)
    .register()

mods.betterwithmods.mill_stone.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:gold_ingot'), item('minecraft:gold_block'), item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithmods.mill_stone.remove(MillRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithmods.mill_stone.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithmods.mill_stone.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithmods.mill_stone.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.mill_stone.removeByInput(item('minecraft:netherrack'))
mods.betterwithmods.mill_stone.removeByOutput(item('minecraft:blaze_powder'))
mods.betterwithmods.mill_stone.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithmods.mill_stone.streamRecipes()
    ```
