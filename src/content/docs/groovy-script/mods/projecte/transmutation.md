---
title: World Transmutation (ProjectE)
description: Converts an input blockstate into an output blockstate when right-clicked with by a Philosopher's Stone, with the ability to be converted into a different output blockstate when holding shift.
sidebar:
  label: World Transmutation
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/projecte/Transmutation.java
---

## Description

Converts an input blockstate into an output blockstate when right-clicked with by a Philosopher's Stone, with the ability to be converted into a different output blockstate when holding shift.

## Identifier

The identifier `mods.projecte.transmutation` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.projecte.transmutation/* Used as page default */
mods.projecte.Transmutation
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.projecte.transmutation.add(WorldTransmutations.Entry)
    ```

### Recipe Builder

Just like other recipe types, the World Transmutation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.projecte.transmutation.recipeBuilder()
    ```

---

- `IBlockState`. Sets the input blockstate. Requires not null.

    ```groovy
    input(Block)
    input(IBlockState)
    ```

- `IBlockState`. Sets the normal output blockstate. Requires not null.

    ```groovy
    output(Block)
    output(IBlockState)
    output(Block, Block)
    output(IBlockState, IBlockState) // output, altOutput
    ```

- `IBlockState`. Sets the shift output blockstate.

    ```groovy
    output(Block, Block)
    output(IBlockState, IBlockState) // output, altOutput
    altOutput(Block)
    altOutput(IBlockState)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `moze_intel.projecte.utils.WorldTransmutations$Entry`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.projecte.transmutation.recipeBuilder()
    .input(blockstate('minecraft:end_stone'))
    .output(blockstate('minecraft:diamond_block'), blockstate('minecraft:gold_block'))
    .register()

mods.projecte.transmutation.recipeBuilder()
    .input(blockstate('minecraft:diamond_block'))
    .output(blockstate('minecraft:end_stone'))
    .altOutput(blockstate('minecraft:gold_block'))
    .register()

mods.projecte.transmutation.recipeBuilder()
    .input(blockstate('minecraft:gold_block'))
    .output(blockstate('minecraft:diamond_block'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.projecte.transmutation.remove(WorldTransmutations.Entry)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.projecte.transmutation.removeByInput(IBlockState)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.projecte.transmutation.removeByOutput(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy
    mods.projecte.transmutation.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.projecte.transmutation.removeByInput(blockstate('minecraft:wool'))
mods.projecte.transmutation.removeByOutput(blockstate('minecraft:dirt'))
mods.projecte.transmutation.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.projecte.transmutation.streamRecipes()
    ```
