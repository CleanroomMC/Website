---
title: Magnet (Botania)
description: Add or remove items from the magnet blacklist.
sidebar:
  label: Magnet
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Magnet.java
---

## Description

Add or remove items from the magnet blacklist.

## Identifier

The identifier `mods.botania.magnet` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.botania.magnet/* Used as page default */
mods.botania.Magnet
```

</details>

## Adding Entries

- Adds the given Block, IBlockState, or IIngredient to the magnet blacklist:

    ```groovy
    mods.botania.magnet.addToBlacklist(Block, int)
    ```

- Adds the given Block, IBlockState, or IIngredient to the magnet blacklist:

    ```groovy
    mods.botania.magnet.addToBlacklist(IBlockState)
    ```

- Adds the given Block, IBlockState, or IIngredient to the magnet blacklist:

    ```groovy
    mods.botania.magnet.addToBlacklist(IIngredient)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.magnet.addToBlacklist(item('minecraft:diamond'))
```

</details>

## Removing Entries

- Removes the given Block, IBlockState, or IIngredient from the magnet blacklist:

    ```groovy
    mods.botania.magnet.removeFromBlacklist(Block, int)
    ```

- Removes the given Block, IBlockState, or IIngredient from the magnet blacklist:

    ```groovy
    mods.botania.magnet.removeFromBlacklist(IBlockState)
    ```

- Removes the given Block, IBlockState, or IIngredient from the magnet blacklist:

    ```groovy
    mods.botania.magnet.removeFromBlacklist(IIngredient)
    ```

## Getting the value of entries

- Checks if the given Block, IBlockState, or IIngredient is prevented from being interacted with by the magnet:

    ```groovy
    mods.botania.magnet.isInBlacklist(Block, int)
    ```

- Checks if the given Block, IBlockState, or IIngredient is prevented from being interacted with by the magnet:

    ```groovy
    mods.botania.magnet.isInBlacklist(IBlockState)
    ```

- Checks if the given Block, IBlockState, or IIngredient is prevented from being interacted with by the magnet:

    ```groovy
    mods.botania.magnet.isInBlacklist(IIngredient)
    ```
