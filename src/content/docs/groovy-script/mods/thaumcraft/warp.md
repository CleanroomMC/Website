---
title: Warp (Thaumcraft)
description: Determines if holding an item or equipping a piece of armor or a bauble gives warp, and how much warp it gives.
sidebar:
  label: Warp
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/warp/Warp.java
---

## Description

Determines if holding an item or equipping a piece of armor or a bauble gives warp, and how much warp it gives.

## Identifier

The identifier `mods.thaumcraft.warp` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {5}
mods.tc.warp
mods.tc.Warp
mods.thaum.warp
mods.thaum.Warp
mods.thaumcraft.warp/* Used as page default */
mods.thaumcraft.Warp
```

</details>

## Adding Recipes

- Adds Warp to the given item in the format `item`, `amount`:

    ```groovy
    mods.thaumcraft.warp.addWarp(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.warp.addWarp(item('minecraft:pumpkin'), 3)
```

</details>

## Removing Recipes

- Removes Warp from the given item:

    ```groovy
    mods.thaumcraft.warp.removeWarp(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thaumcraft.warp.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thaumcraft.warp.removeWarp(item('thaumcraft:void_hoe'))
mods.thaumcraft.warp.removeAll()
```

</details>
