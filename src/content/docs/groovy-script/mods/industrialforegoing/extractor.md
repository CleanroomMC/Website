---
title: Latex Extractor (Industrial Foregoing)
description: Converts an input block in-world into a fluidstack over time, eventually breaking the block.
sidebar:
  label: Latex Extractor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/Extractor.java
---

## Description

Converts an input block in-world into a fluidstack over time, eventually breaking the block.

## Identifier

The identifier `mods.industrialforegoing.extractor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.industrialforegoing.extractor/* Used as page default */
mods.industrialforegoing.Extractor
mods.industrialforegoing.treefluidextractor
mods.industrialforegoing.treeFluidExtractor
mods.industrialforegoing.TreeFluidExtractor
mods.industrialforegoing.tree_fluid_extractor
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.industrialforegoing.extractor.add(ExtractorEntry)
    ```

- Adds a Latex Extractor recipe in the format `input`, `output`:

    ```groovy
    mods.industrialforegoing.extractor.add(ItemStack, FluidStack)
    ```

- Adds a Latex Extractor recipe in the format `input`, `output`, `breakChance`:

    ```groovy
    mods.industrialforegoing.extractor.add(ItemStack, FluidStack, float)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.extractor.add(item('minecraft:clay'), fluid('lava') * 50)
mods.industrialforegoing.extractor.add(item('minecraft:stone'), fluid('water') * 100, 1)
```

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.industrialforegoing.extractor.remove(ExtractorEntry)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.industrialforegoing.extractor.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.industrialforegoing.extractor.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.extractor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.extractor.removeByInput(item('minecraft:log2:1'))
mods.industrialforegoing.extractor.removeByOutput(fluid('latex'))
mods.industrialforegoing.extractor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.extractor.streamRecipes()
    ```
