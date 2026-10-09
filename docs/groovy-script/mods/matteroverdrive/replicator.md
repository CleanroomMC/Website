---
title: "Replicator Blacklist"
titleTemplate: "MatterOverdrive: Refitted | CleanroomMC"
description: "Add items to the replicator blacklist. Blacklisted items cannot be replicated even if they have a matter value assigned."
source_code_link: "https://github.com/Refitbench/MatterOverdrive/blob/master/src/main/java/matteroverdrive/compat/modules/groovyscript/Replicator.java"
---

# Replicator Blacklist (MatterOverdrive: Refitted)

## Description

Add items to the replicator blacklist. Blacklisted items cannot be replicated even if they have a matter value assigned.

## Identifier

The identifier `mods.matteroverdrive.replicator` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.matteroverdrive.replicator/* Used as page default */ // [!code focus]
mods.matteroverdrive.Replicator
```

::::::::::

## Adding Entries

- Add an item, item stack, or ingredient to the replicator blacklist:

    ```groovy:no-line-numbers
    mods.matteroverdrive.replicator.addBlacklist(IIngredient)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.matteroverdrive.replicator.addBlacklist(item('matteroverdrive:matter_dust'))
mods.matteroverdrive.replicator.addBlacklist(ore('blockGold'))
```

::::::::::
