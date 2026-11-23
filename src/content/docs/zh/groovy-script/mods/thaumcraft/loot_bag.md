---
title: Lootbag (Thaumcraft)
description: Control what the different rarities of lootbag drop when opened.
sidebar:
  label: Lootbag
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/LootBag.java
---

## Description

Control what the different rarities of lootbag drop when opened.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

This compat is not fully documented. Some or all of its features are not present on the wiki. View the source code to gain an accurate understanding of the compat.

</details>

:::danger[Bug]
Armor chances are hard coded into randomized loot function, and are not currently removable.
:::

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.thaumcraft.loot_bag/* Used as page default */
mods.thaumcraft.lootbag
mods.thaumcraft.lootBag
mods.thaumcraft.LootBag
mods.tc.loot_bag
mods.tc.lootbag
mods.tc.lootBag
mods.tc.LootBag
mods.thaum.loot_bag
mods.thaum.lootbag
mods.thaum.lootBag
mods.thaum.LootBag
```

## Adding Recipes

- Adds an item with a given weight to the target lootbag in the format `item`, `chance`, `rarity`:

    ```groovy
    mods.thaumcraft.loot_bag.add(ItemStack, int, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.loot_bag.add(item('minecraft:diamond_block'), 100, 2)
mods.thaumcraft.loot_bag.add(item('minecraft:dirt'), 100, 0)
```

</details>

## Removing Recipes

- Removes an item from the target lootbag in the format `item`, `rarity`:

    ```groovy
    mods.thaumcraft.loot_bag.remove(ItemStack, int)
    ```

- Removes all items from the target lootbag rarity:

    ```groovy
    mods.thaumcraft.loot_bag.removeAll(int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.loot_bag.remove(item('minecraft:ender_pearl'), 0)
mods.thaumcraft.loot_bag.removeAll(2)
```

</details>
