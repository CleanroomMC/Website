---
title: "Warp"
titleTemplate: "Thaumcraft | CleanroomMC"
description: "Determines if holding an item or equipping a piece of armor or a bauble gives warp, and how much warp it gives."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thaumcraft/warp/Warp.java"
---

# Warp (Thaumcraft)

## Description

Determines if holding an item or equipping a piece of armor or a bauble gives warp, and how much warp it gives.

## Identifier

The identifier `mods.thaumcraft.warp` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {5}
mods.tc.warp
mods.tc.Warp
mods.thaum.warp
mods.thaum.Warp
mods.thaumcraft.warp/* Used as page default */ // [!code focus]
mods.thaumcraft.Warp
```

::::::::::

## Adding Recipes

- Adds Warp to the given item in the format `item`, `amount`:

    ```groovy:no-line-numbers
    mods.thaumcraft.warp.addWarp(ItemStack, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.warp.addWarp(item('minecraft:pumpkin'), 3)
```

::::::::::

## Removing Recipes

- Removes Warp from the given item:

    ```groovy:no-line-numbers
    mods.thaumcraft.warp.removeWarp(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.thaumcraft.warp.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.thaumcraft.warp.removeWarp(item('thaumcraft:void_hoe'))
mods.thaumcraft.warp.removeAll()
```

::::::::::
