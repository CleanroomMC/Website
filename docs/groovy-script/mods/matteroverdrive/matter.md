---
title: "Matter Registry"
titleTemplate: "MatterOverdrive: Refitted | CleanroomMC"
description: "Modify the matter value table used by Matter Overdrive's scanner, replicator, and decomposer. Supports individual items, ore dictionary, or entire modIDs."
source_code_link: "https://github.com/Refitbench/MatterOverdrive/blob/master/src/main/java/matteroverdrive/compat/modules/groovyscript/Matter.java"
---

# Matter Registry (MatterOverdrive: Refitted)

## Description

Modify the matter value table used by Matter Overdrive's scanner, replicator, and decomposer. Supports individual items, ore dictionary, or entire modIDs.

## Identifier

The identifier `mods.matteroverdrive.matter` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.matteroverdrive.matter/* Used as page default */ // [!code focus]
mods.matteroverdrive.Matter
```

::::::::::

## Adding Entries

- Set the matter value for an item or ore dictionary group, replacing any existing entry:

    ```groovy:no-line-numbers
    mods.matteroverdrive.matter.add(IIngredient, int)
    ```

- Set the matter value for an item or ore dictionary group, replacing any existing entry:

    ```groovy:no-line-numbers
    mods.matteroverdrive.matter.add(IIngredient, IMatterEntryHandler)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.matteroverdrive.matter.add(item('minecraft:gold_ingot'), 256)
mods.matteroverdrive.matter.add(ore('blockGold'), 256)
```

::::::::::

## Removing Entries

- Remove the matter entry for an item or ore dictionary group:

    ```groovy:no-line-numbers
    mods.matteroverdrive.matter.remove(IIngredient)
    ```

- Prevent a mod's items from being automatically assigned matter values during scanning. Use modID:

    ```groovy:no-line-numbers
    mods.matteroverdrive.matter.blacklistMod(String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.matteroverdrive.matter.remove(item('minecraft:apple'))
mods.matteroverdrive.matter.remove(ore('ingotCopper'))
mods.matteroverdrive.matter.blacklistMod('thaumcraft')
```

::::::::::
