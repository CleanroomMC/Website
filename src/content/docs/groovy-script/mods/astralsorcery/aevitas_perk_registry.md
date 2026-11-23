---
title: Aevitas Perk Registry (Astral Sorcery)
description: Having the Stone Enrichment perk will convert nearby stone blocks into random ores.
sidebar:
  label: Aevitas Perk Registry
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/astralsorcery/OreChance.java
---

## Description

Having the Stone Enrichment perk will convert nearby stone blocks into random ores.

## Identifier

The identifier `mods.astralsorcery.aevitas_perk_registry` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.astral.aevitasperkregistry
mods.astral.aevitasPerkRegistry
mods.astral.AevitasPerkRegistry
mods.astral.aevitas_perk_registry
mods.astralsorcery.aevitasperkregistry
mods.astralsorcery.aevitasPerkRegistry
mods.astralsorcery.AevitasPerkRegistry
mods.astralsorcery.aevitas_perk_registry/* Used as page default */
```

</details>

## Adding Entries

- Adds entries in the format `ore`, `weight`:

    ```groovy
    mods.astralsorcery.aevitas_perk_registry.add(String, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.aevitas_perk_registry.add(ore('blockDiamond'), 10000)
```

</details>

## Removing Entries

- Removes entries of the given ore:

    ```groovy
    mods.astralsorcery.aevitas_perk_registry.remove(String)
    ```

- Removes entries of the given ore:

    ```groovy
    mods.astralsorcery.aevitas_perk_registry.remove(OreDictIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.astralsorcery.aevitas_perk_registry.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.astralsorcery.aevitas_perk_registry.remove(ore('oreDiamond'))
mods.astralsorcery.aevitas_perk_registry.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.astralsorcery.aevitas_perk_registry.streamRecipes()
    ```
