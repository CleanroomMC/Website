---
title: Turntable (Better With Mods)
description: Converts a block into an output block and up to two itemstacks after being powered via rotation power.
sidebar:
  label: Turntable
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Turntable.java
---

## Description

Converts a block into an output block and up to two itemstacks after being powered via rotation power.

## Identifier

The identifier `mods.betterwithmods.turntable` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithmods.turntable/* Used as page default */
mods.betterwithmods.Turntable
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithmods.turntable.add(TurntableRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Turntable also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithmods.turntable.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `BlockIngredient`. Sets the input block.

    ```groovy
    input(String)
    input(IIngredient)
    input(ItemStack...)
    input(IIngredient...)
    input(BlockIngredient)
    input(List<ItemStack>)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the number of rotations required to complete the recipe. (Default `1`).

    ```groovy
    rotations(int)
    ```

- `IBlockState`. Sets the blockstate that replaces the input block. (Default `Blocks.AIR.getDefaultState()`).

    ```groovy
    outputBlock(IBlockState)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.block.recipe.TurntableRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.turntable.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .outputBlock(blockstate('minecraft:clay'))
    .output(item('minecraft:gold_ingot') * 5)
    .rotations(5)
    .register()

mods.betterwithmods.turntable.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .rotations(2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithmods.turntable.remove(TurntableRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithmods.turntable.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithmods.turntable.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithmods.turntable.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.turntable.removeByInput(item('betterwithmods:unfired_pottery'))
mods.betterwithmods.turntable.removeByOutput(item('minecraft:clay_ball'))
mods.betterwithmods.turntable.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithmods.turntable.streamRecipes()
    ```
