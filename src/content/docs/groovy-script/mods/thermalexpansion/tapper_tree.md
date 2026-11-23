---
title: Arboreal Extractor Tree Structures (Thermal Expansion)
description: Controls what valid log blocks and leaf blocks are to define a tree structure which the Arboreal Extractor can function on. The "tree" must contain some number of leaves adjacent to the log blocks to be valid.
sidebar:
  label: Arboreal Extractor Tree Structures
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/TapperTree.java
---

## Description

Controls what valid log blocks and leaf blocks are to define a tree structure which the Arboreal Extractor can function on. The \"tree\" must contain some number of leaves adjacent to the log blocks to be valid.

## Identifier

The identifier `mods.thermalexpansion.tapper_tree` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.thermal.tappertree
mods.thermal.tapperTree
mods.thermal.TapperTree
mods.thermal.tapper_tree
mods.thermalexpansion.tappertree
mods.thermalexpansion.tapperTree
mods.thermalexpansion.TapperTree
mods.thermalexpansion.tapper_tree/* Used as page default */
```

</details>

## Adding Entries

- Adds recipes in the format `log`, `leaf`:

    ```groovy
    mods.thermalexpansion.tapper_tree.add(IBlockState, IBlockState)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.tapper_tree.add(blockstate('minecraft:clay'), blockstate('minecraft:gold_block'))
```

</details>

## Removing Entries

- Removes all entries with the given IBlockState as a log:

    ```groovy
    mods.thermalexpansion.tapper_tree.removeByLog(IBlockState)
    ```

- Removes all entries with the given IBlockState as a log:

    ```groovy
    mods.thermalexpansion.tapper_tree.removeByLog(BlockWrapper)
    ```

- Removes all entries with the given IBlockState as a leaf:

    ```groovy
    mods.thermalexpansion.tapper_tree.removeByLeaf(IBlockState)
    ```

- Removes all entries with the given IBlockState as a leaf:

    ```groovy
    mods.thermalexpansion.tapper_tree.removeByLeaf(BlockWrapper)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.tapper_tree.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.tapper_tree.removeByLog(blockstate('minecraft:log', 'variant=spruce'))
mods.thermalexpansion.tapper_tree.removeByLeaf(blockstate('minecraft:leaves', 'variant=birch'))
mods.thermalexpansion.tapper_tree.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.tapper_tree.streamRecipes()
    ```
