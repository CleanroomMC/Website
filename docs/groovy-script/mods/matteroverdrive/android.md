---
title: "Android Biotic Stats"
titleTemplate: "MatterOverdrive: Refitted | CleanroomMC"
description: "Tweak Android biotic stat parameters such as XP cost, required items, and enabled state."
source_code_link: "https://github.com/Refitbench/MatterOverdrive/blob/master/src/main/java/matteroverdrive/compat/modules/groovyscript/Android.java"
---

# Android Biotic Stats (MatterOverdrive: Refitted)

## Description

Tweak Android biotic stat parameters such as XP cost, required items, and enabled state.

:::::::::: details Info {open id="info"}
Use the `androidStat(name)` bracket handler to obtain an AbstractBioticStat.
::::::::::

:::::::::: details Tip {open id="tip"}
Use the command `/android list` to print all registered biotic stat names to chat.
::::::::::

## Identifier

The identifier `mods.matteroverdrive.android` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.matteroverdrive.android/* Used as page default */ // [!code focus]
mods.matteroverdrive.Android
```

::::::::::

## Modify Stat State

- Set the given biotic stat to be enabled, overriding config-based rules:

    ```groovy:no-line-numbers
    mods.matteroverdrive.android.enable(AbstractBioticStat)
    ```

- Set the given biotic stat to be disabled, overriding config-based rules, disabling the stat features:

    ```groovy:no-line-numbers
    mods.matteroverdrive.android.disable(AbstractBioticStat)
    ```

- Set the given biotic stat to be delisted. Cannot be installed from the Android Station, but current installs continue to function:

    ```groovy:no-line-numbers
    mods.matteroverdrive.android.unregister(AbstractBioticStat)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.matteroverdrive.android.unregister(androidStat('cloak'))
```

::::::::::

## Modify Stat Requirements

- Set the XP cost in levels required for the given biotic stat:

    ```groovy:no-line-numbers
    mods.matteroverdrive.android.setXp(AbstractBioticStat, int)
    ```

- Add an item that must be present in the player's inventory to install the given biotic stat:

    ```groovy:no-line-numbers
    mods.matteroverdrive.android.addRequiredItem(AbstractBioticStat, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.matteroverdrive.android.setXp(androidStat('shield'), 25)
mods.matteroverdrive.android.addRequiredItem(androidStat('shield'), item('minecraft:iron_ingot') * 5)
```

::::::::::

## Remove Stat Requirements

- Remove all required installation items from the given biotic stat:

    ```groovy:no-line-numbers
    mods.matteroverdrive.android.clearRequiredItems(AbstractBioticStat)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.matteroverdrive.android.clearRequiredItems(androidStat('shield'))
```

::::::::::

## Query Biotic Stats

- Returns a sorted list of all currently registered biotic stat unlocalized names:

    ```groovy:no-line-numbers
    mods.matteroverdrive.android.getStatNames()
    ```
