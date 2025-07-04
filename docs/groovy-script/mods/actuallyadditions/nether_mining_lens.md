---
title: "Nether Mining Lens"
titleTemplate: "Actually Additions | CleanroomMC"
description: "A weighted oredict for the block obtained via firing a Mining Lens at a block of Netherrack. The oredict must have a block, or the world will hang."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/actuallyadditions/NetherMiningLens.java"
---

# Nether Mining Lens (Actually Additions)

## Description

A weighted oredict for the block obtained via firing a Mining Lens at a block of Netherrack. The oredict must have a block, or the world will hang.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {5}
mods.aa.nether_mining_lens
mods.aa.nethermininglens
mods.aa.netherMiningLens
mods.aa.NetherMiningLens
mods.actuallyadditions.nether_mining_lens/* Used as page default */ // [!code focus]
mods.actuallyadditions.nethermininglens
mods.actuallyadditions.netherMiningLens
mods.actuallyadditions.NetherMiningLens
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.actuallyadditions.nether_mining_lens.add(WeightedOre)
    ```


### Recipe Builder

Just like other recipe types, the Nether Mining Lens also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.actuallyadditions.nether_mining_lens.recipeBuilder()
    ```

---

- `String`. Sets the ore given by the recipe. Requires not null.

    ```groovy:no-line-numbers
    ore(String)
    ore(OreDictIngredient)
    ```

- `int`. Sets how likely this ore is to be rolled. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    weight(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.actuallyadditions.api.recipe.WeightedOre`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.actuallyadditions.nether_mining_lens.recipeBuilder()
    .ore(ore('blockDiamond'))
    .weight(100)
    .register()

mods.actuallyadditions.nether_mining_lens.recipeBuilder()
    .ore('blockGold')
    .weight(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.actuallyadditions.nether_mining_lens.remove(WeightedOre)
    ```

- Removes all recipes that match the given ore:

    ```groovy:no-line-numbers
    mods.actuallyadditions.nether_mining_lens.removeByOre(OreDictIngredient)
    ```

- Removes all recipes that match the given ore:

    ```groovy:no-line-numbers
    mods.actuallyadditions.nether_mining_lens.removeByOre(String)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.actuallyadditions.nether_mining_lens.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.actuallyadditions.nether_mining_lens.removeByOre(ore('oreQuartz'))
mods.actuallyadditions.nether_mining_lens.removeByOre('oreQuartz')
mods.actuallyadditions.nether_mining_lens.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.actuallyadditions.nether_mining_lens.streamRecipes()
    ```
