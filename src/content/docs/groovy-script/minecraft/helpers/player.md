---
title: Starting Inventory (Minecraft)
description: Sets the starting inventory of the player, including armor slots and offhand.
sidebar:
  label: Starting Inventory
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Player.java
---

## Description

Sets the starting inventory of the player, including armor slots and offhand.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

No more than a total of 41 items can be inserted into the inventory.

</details>

<details class="cr-block cr-tip" open>
<summary>Tip</summary>

When testing the Starting Inventory items, use `setTestStartingItems(true)` to allow testing every time a player logs in instead of just the first.

</details>

## Identifier

The identifier `minecraft.player` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {9}
mc.player
mc.Player
MC.player
MC.Player
vanilla.player
vanilla.Player
Vanilla.player
Vanilla.Player
minecraft.player/* Used as page default */
minecraft.Player
Minecraft.player
Minecraft.Player
mods.mc.player
mods.mc.Player
mods.MC.player
mods.MC.Player
mods.vanilla.player
mods.vanilla.Player
mods.Vanilla.player
mods.Vanilla.Player
mods.minecraft.player
mods.minecraft.Player
mods.Minecraft.player
mods.Minecraft.Player
```

</details>

## Editing Values

- Sets if items given when joining the world regardless of if the flag has already been set:

    ```groovy
    minecraft.player.setTestStartingItems(boolean)
    ```

- Sets if the player inventory is cleared prior to giving the player these items:

    ```groovy
    minecraft.player.setReplaceDefaultInventory(boolean)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
minecraft.player.setTestStartingItems(true)
minecraft.player.setReplaceDefaultInventory(true)
```

</details>

## Adding Entries

- Adds the given itemstack to the inventory list:

    ```groovy
    minecraft.player.addStartingItem(ItemStack)
    ```

- Adds the given itemstack to a specific slot in the inventory list in the format `itemstack`, `slot`:

    ```groovy
    minecraft.player.addStartingItem(ItemStack, int)
    ```

- Removes all previously added inputs and sets the starting inventory in the format `isSlotSpecific`, `items`:

    ```groovy
    minecraft.player.setStartingItems(boolean, ItemStack...)
    ```

- Removes all previously added inputs and sets the starting inventory in the format `isSlotSpecific`, `items`:

    ```groovy
    minecraft.player.setStartingItems(boolean, List<ItemStack>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
minecraft.player.addStartingItem(item('minecraft:clay_ball'))
minecraft.player.addStartingItem(item('minecraft:gold_ingot'))
minecraft.player.addStartingItem(item('minecraft:diamond'))
minecraft.player.addStartingItem(item('minecraft:nether_star'))
minecraft.player.addStartingItem(item('minecraft:water_bucket'))
minecraft.player.setStartingItems(true, item('minecraft:clay').withNbt([display:[Name:'Hotbar']]), null, null, null, null, null, null, null, null, item('minecraft:clay').withNbt([display:[Name:'Top row of inventory']]), null, null, null, null, null, null, null, null, item('minecraft:clay').withNbt([display:[Name:'Middle row of inventory']]), null, null, null, null, null, null, null, null, item('minecraft:clay').withNbt([display:[Name:'Bottom row of inventory']]), null, null, null, null, null, null, null, null, item('minecraft:diamond_boots'), item('minecraft:diamond_leggings'), item('minecraft:diamond_chestplate'), item('minecraft:diamond_helmet'), item('minecraft:clay').withNbt([display:[Name:'Offhand']]))
```

</details>
