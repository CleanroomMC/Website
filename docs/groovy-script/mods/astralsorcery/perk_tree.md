---
title: "Perk Tree"
titleTemplate: "Astral Sorcery | CleanroomMC"
description: "Create a custom perk with a custom effect, at a given location."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/perktree/GroovyPerkTree.java"
---

# Perk Tree (Astral Sorcery)

## Description

Create a custom perk with a custom effect, at a given location.

:::::::::: details Warning {open id="warning"}
This compat is not fully documented. Some or all of its features are not present on the wiki. View the source code to gain an accurate understanding of the compat.
::::::::::

## Identifier

The identifier `mods.astralsorcery.perk_tree` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {8}
mods.astral.perktree
mods.astral.perkTree
mods.astral.PerkTree
mods.astral.perk_tree
mods.astralsorcery.perktree
mods.astralsorcery.perkTree
mods.astralsorcery.PerkTree
mods.astralsorcery.perk_tree/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Entries

- Adds the given perk to the perk map:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree.add(AbstractPerk)
    ```

- Moves the given perk to the x and y co-ords specified in the format `perk`, `x`, `z`:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree.movePerk(AbstractPerk, int, int)
    ```

- Adds a connection between two perks:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree.addConnection(String, String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.perk_tree.movePerk(mods.astralsorcery.perktree.getPerk('astralsorcery:magnet_ats_reach'), 30, 30)
```

::::::::::

## Removing Entries

- Removes the perk with the given name:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree.remove(String)
    ```

- Removes a connection between two perks:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree.removeConnection(String, String)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.astralsorcery.perk_tree.remove('astralsorcery:mec_inc_ms_2')
```

::::::::::

## Getting the value of entries

- Returns the perk with the given name:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree.getPerk(String)
    ```

- Returns the perk with the given name:

    ```groovy:no-line-numbers
    mods.astralsorcery.perk_tree.getPerk(ResourceLocation)
    ```
