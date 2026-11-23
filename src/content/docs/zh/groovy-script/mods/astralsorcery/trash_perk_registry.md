---
title: Trash Perk Registry (Astral Sorcery)
description: Having the Trash to Treasure perk turns items the player drops in the list defined in the config at 'perks/key_void_trash/DropList' into a chance at random ores.
sidebar:
  label: Trash Perk Registry
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/OreChance.java
---

## Description

Having the Trash to Treasure perk turns items the player drops in the list defined in the config at 'perks/key_void_trash/DropList' into a chance at random ores.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.astralsorcery.trash_perk_registry/* Used as page default */
mods.astralsorcery.trashperkregistry
mods.astralsorcery.trashPerkRegistry
mods.astralsorcery.TrashPerkRegistry
mods.astral.trash_perk_registry
mods.astral.trashperkregistry
mods.astral.trashPerkRegistry
mods.astral.TrashPerkRegistry
```

## Adding Entries

- Adds entries in the format `ore`, `weight`:

    ```groovy
    mods.astralsorcery.trash_perk_registry.add(String, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.trash_perk_registry.add(ore('blockDiamond'), 10000)
```

</details>

## Removing Entries

- Removes entries of the given ore:

    ```groovy
    mods.astralsorcery.trash_perk_registry.remove(OreDictIngredient)
    ```

- Removes entries of the given ore:

    ```groovy
    mods.astralsorcery.trash_perk_registry.remove(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.astralsorcery.trash_perk_registry.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.trash_perk_registry.remove(ore('oreDiamond'))
mods.astralsorcery.trash_perk_registry.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.astralsorcery.trash_perk_registry.streamRecipes()
    ```
