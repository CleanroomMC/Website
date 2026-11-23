---
title: Category Catalysts (Just Enough Items)
description: Modify the items shown on the left of JEI Categories which indicate where the recipe takes place.
sidebar:
  label: Category Catalysts
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/jei/Catalyst.java
---

## Description

Modify the items shown on the left of JEI Categories which indicate where the recipe takes place.

## Identifier

The identifier `mods.jei.catalyst` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.hei.catalyst
mods.hei.Catalyst
mods.jei.catalyst/* Used as page default */
mods.jei.Catalyst
```

</details>

## Adding Entries

- Adds the given catalyst items to the given category:

    ```groovy
    mods.jei.catalyst.add(String, ItemStack)
    ```

- Adds the given catalyst items to the given category:

    ```groovy
    mods.jei.catalyst.add(String, ItemStack...)
    ```

- Adds the given catalyst items to the given category:

    ```groovy
    mods.jei.catalyst.add(String, Collection<ItemStack>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.catalyst.add('minecraft.smelting', item('minecraft:clay') * 8, item('minecraft:cobblestone'))
```

</details>

## Removing Entries

- Removes the given catalyst items from the given category:

    ```groovy
    mods.jei.catalyst.remove(String, ItemStack)
    ```

- Removes the given catalyst items from the given category:

    ```groovy
    mods.jei.catalyst.remove(String, ItemStack...)
    ```

- Removes the given catalyst items from the given category:

    ```groovy
    mods.jei.catalyst.remove(String, Collection<ItemStack>)
    ```

- Removes all catalyst items from the given category:

    ```groovy
    mods.jei.catalyst.removeByType(String)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.jei.catalyst.remove('minecraft.smelting', item('minecraft:furnace'))
mods.jei.catalyst.removeByType('minecraft.anvil')
```

</details>
