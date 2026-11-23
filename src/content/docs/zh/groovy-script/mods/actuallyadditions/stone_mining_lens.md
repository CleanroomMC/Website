---
title: Stone Mining Lens (Actually Additions)
description: A weighted oredict for the block obtained via firing a Mining Lens at a block of Stone. The oredict must have a block, or the world will hang.
sidebar:
  label: Stone Mining Lens
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/StoneMiningLens.java
---

## Description

A weighted oredict for the block obtained via firing a Mining Lens at a block of Stone. The oredict must have a block, or the world will hang.

## Identifier

Refer to this via any of the following:

```groovy {5}
mods.aa.stone_mining_lens
mods.aa.stonemininglens
mods.aa.stoneMiningLens
mods.aa.StoneMiningLens
mods.actuallyadditions.stone_mining_lens/* Used as page default */
mods.actuallyadditions.stonemininglens
mods.actuallyadditions.stoneMiningLens
mods.actuallyadditions.StoneMiningLens
```

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Stone Mining Lens also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.actuallyadditions.stone_mining_lens.recipeBuilder()</summary>

- `String`. Sets the ore given by the recipe. Requires not null.

    ```groovy
    ore(String)
    ore(OreDictIngredient)
    ```

- `int`. Sets how likely this ore is to be rolled. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    weight(int)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.WeightedOre`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.stone_mining_lens.recipeBuilder()
    .ore(ore('blockDiamond'))
    .weight(100)
    .register()

mods.actuallyadditions.stone_mining_lens.recipeBuilder()
    .ore('blockGold')
    .weight(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given ore:

    ```groovy
    mods.actuallyadditions.stone_mining_lens.removeByOre(OreDictIngredient)
    ```

- Removes all recipes that match the given ore:

    ```groovy
    mods.actuallyadditions.stone_mining_lens.removeByOre(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.actuallyadditions.stone_mining_lens.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.actuallyadditions.stone_mining_lens.removeByOre(ore('oreCoal'))
mods.actuallyadditions.stone_mining_lens.removeByOre('oreLapis')
mods.actuallyadditions.stone_mining_lens.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.actuallyadditions.stone_mining_lens.streamRecipes()
    ```
