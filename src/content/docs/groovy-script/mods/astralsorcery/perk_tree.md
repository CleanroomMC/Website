---
title: Perk Tree (Astral Sorcery)
description: Create a custom perk with a custom effect, at a given location.
sidebar:
  label: Perk Tree
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/perktree/GroovyPerkTree.java
---

## Description

Create a custom perk with a custom effect, at a given location.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

This compat is not fully documented. Some or all of its features are not present on the wiki. View the source code to gain an accurate understanding of the compat.

</details>

## Identifier

The identifier `mods.astralsorcery.perk_tree` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.astral.perktree
mods.astral.perkTree
mods.astral.PerkTree
mods.astral.perk_tree
mods.astralsorcery.perktree
mods.astralsorcery.perkTree
mods.astralsorcery.PerkTree
mods.astralsorcery.perk_tree/* Used as page default */
```

</details>

## Adding Entries

- Adds the given perk to the perk map:

    ```groovy
    mods.astralsorcery.perk_tree.add(AbstractPerk)
    ```

- Moves the given perk to the x and y co-ords specified in the format `perk`, `x`, `z`:

    ```groovy
    mods.astralsorcery.perk_tree.movePerk(AbstractPerk, int, int)
    ```

- Adds a connection between two perks:

    ```groovy
    mods.astralsorcery.perk_tree.addConnection(String, String)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.perk_tree.movePerk(mods.astralsorcery.perktree.getPerk('astralsorcery:magnet_ats_reach'), 30, 30)
```

</details>

## Removing Entries

- Removes the perk with the given name:

    ```groovy
    mods.astralsorcery.perk_tree.remove(String)
    ```

- Removes a connection between two perks:

    ```groovy
    mods.astralsorcery.perk_tree.removeConnection(String, String)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.perk_tree.remove('astralsorcery:mec_inc_ms_2')
```

</details>

## Getting the value of entries

- Returns the perk with the given name:

    ```groovy
    mods.astralsorcery.perk_tree.getPerk(String)
    ```

- Returns the perk with the given name:

    ```groovy
    mods.astralsorcery.perk_tree.getPerk(ResourceLocation)
    ```
