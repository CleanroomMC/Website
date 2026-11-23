---
title: Pure Daisy (Botania)
description: Convert a given block to another blockstate after a period of time.
sidebar:
  label: Pure Daisy
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/PureDaisy.java
---

## Description

Convert a given block to another blockstate after a period of time.

## Identifier

The identifier `mods.botania.pure_daisy` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.botania.puredaisy
mods.botania.pureDaisy
mods.botania.PureDaisy
mods.botania.pure_daisy/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.botania.pure_daisy.add(RecipePureDaisy)
    ```

- Adds recipes in the format `output`, `input`:

    ```groovy
    mods.botania.pure_daisy.add(IBlockState, IBlockState)
    ```

- Adds recipes in the format `output`, `input`, `time`:

    ```groovy
    mods.botania.pure_daisy.add(IBlockState, IBlockState, int)
    ```

### Recipe Builder

Just like other recipe types, the Pure Daisy also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.botania.pure_daisy.recipeBuilder()
    ```

---

- `int`. Sets the duration the recipe takes to complete. Requires greater than or equal to 0. (Default `RecipePureDaisy.DEFAULT_TIME (150)`).

    ```groovy
    time(int)
    ```

- `Object`. Sets the valid input states. Requires not null and either an IBlockState or String.

    ```groovy
    input(Block)
    input(String)
    input(IBlockState)
    input(OreDictIngredient)
    ```

- `IBlockState`. Sets the output IBlockState. Requires not null.

    ```groovy
    output(IBlockState)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipePureDaisy`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.pure_daisy.recipeBuilder()
    .input(ore('plankWood'))
    .output(blockstate('minecraft:clay'))
    .time(5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.botania.pure_daisy.remove(RecipePureDaisy)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.pure_daisy.removeByInput(Block)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.pure_daisy.removeByInput(String)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.pure_daisy.removeByInput(IBlockState)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.pure_daisy.removeByInput(OreDictIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.pure_daisy.removeByOutput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.pure_daisy.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.pure_daisy.removeByInput(blockstate('minecraft:water'))
mods.botania.pure_daisy.removeByInput(ore('logWood'))
mods.botania.pure_daisy.removeByOutput(blockstate('botania:livingrock'))
mods.botania.pure_daisy.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.pure_daisy.streamRecipes()
    ```
