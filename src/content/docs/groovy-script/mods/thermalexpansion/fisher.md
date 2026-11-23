---
title: Aquatic Entangler (Thermal Expansion)
description: Controls what itemstacks can be gained and how likely each is to be obtained.
sidebar:
  label: Aquatic Entangler
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/Fisher.java
---

## Description

Controls what itemstacks can be gained and how likely each is to be obtained.

## Identifier

The identifier `mods.thermalexpansion.fisher` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.fisher
mods.thermal.Fisher
mods.thermalexpansion.fisher/* Used as page default */
mods.thermalexpansion.Fisher
```

</details>

## Adding Entries

- Adds recipes in the format `fish`, `weight`:

    ```groovy
    mods.thermalexpansion.fisher.add(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.fisher.add(item('minecraft:clay'), 100)
```

</details>

## Removing Entries

- Removes the given IIngredient as a valid output:

    ```groovy
    mods.thermalexpansion.fisher.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.fisher.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.fisher.remove(item('minecraft:fish:0'))
mods.thermalexpansion.fisher.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.fisher.streamRecipes()
    ```
