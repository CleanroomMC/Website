---
title: Aquatic Entangler Bait (Thermal Expansion)
description: Controls what items can be used in the bait slot of the Aquatic Entangler and how effective they are.
sidebar:
  label: Aquatic Entangler Bait
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/device/FisherBait.java
---

## Description

Controls what items can be used in the bait slot of the Aquatic Entangler and how effective they are.

## Identifier

The identifier `mods.thermalexpansion.fisher_bait` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.thermal.fisherbait
mods.thermal.fisherBait
mods.thermal.FisherBait
mods.thermal.fisher_bait
mods.thermalexpansion.fisherbait
mods.thermalexpansion.fisherBait
mods.thermalexpansion.FisherBait
mods.thermalexpansion.fisher_bait/* Used as page default */
```

</details>

## Adding Entries

- Adds recipes in the format `stack`, `multiplier`:

    ```groovy
    mods.thermalexpansion.fisher_bait.add(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.fisher_bait.add(item('minecraft:clay'), 100)
```

</details>

## Removing Entries

- Removes the given IIngredient as a valid bait item:

    ```groovy
    mods.thermalexpansion.fisher_bait.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.fisher_bait.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.fisher_bait.remove(item('thermalfoundation:bait:2'))
mods.thermalexpansion.fisher_bait.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.fisher_bait.streamRecipes()
    ```
