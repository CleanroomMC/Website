---
title: Mineralis Ritual Registry (Astral Sorcery)
description: Using a mineralis ritual will convert nearby stone blocks into random ores.
sidebar:
  label: Mineralis Ritual Registry
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/OreChance.java
---

## Description

Using a mineralis ritual will convert nearby stone blocks into random ores.

## Identifier

The identifier `mods.astralsorcery.mineralis_ritual_registry` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.astral.mineralisritualregistry
mods.astral.mineralisRitualRegistry
mods.astral.MineralisRitualRegistry
mods.astral.mineralis_ritual_registry
mods.astralsorcery.mineralisritualregistry
mods.astralsorcery.mineralisRitualRegistry
mods.astralsorcery.MineralisRitualRegistry
mods.astralsorcery.mineralis_ritual_registry/* Used as page default */
```

</details>

## Adding Entries

- Adds entries in the format `ore`, `weight`:

    ```groovy
    mods.astralsorcery.mineralis_ritual_registry.add(String, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.mineralis_ritual_registry.add(ore('blockDiamond'), 10000)
```

</details>

## Removing Entries

- Removes entries of the given ore:

    ```groovy
    mods.astralsorcery.mineralis_ritual_registry.remove(String)
    ```

- Removes entries of the given ore:

    ```groovy
    mods.astralsorcery.mineralis_ritual_registry.remove(OreDictIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.astralsorcery.mineralis_ritual_registry.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.mineralis_ritual_registry.remove(ore('oreDiamond'))
mods.astralsorcery.mineralis_ritual_registry.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.astralsorcery.mineralis_ritual_registry.streamRecipes()
    ```
