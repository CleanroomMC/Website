---
title: Energy Core (Draconic Evolution)
description: A multiblock with 8 tiers for storing large amounts of energy.
sidebar:
  label: Energy Core
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/draconicevolution/EnergyCore.java
---

## Description

A multiblock with 8 tiers for storing large amounts of energy.

## Identifier

The identifier `mods.draconicevolution.energy_core` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.de.energycore
mods.de.energyCore
mods.de.EnergyCore
mods.de.energy_core
mods.draconicevolution.energycore
mods.draconicevolution.energyCore
mods.draconicevolution.EnergyCore
mods.draconicevolution.energy_core/* Used as page default */
```

</details>

## Editing Values

- Sets the outer block for the multiblock in the format `tier`, `block`:

    ```groovy
    mods.draconicevolution.energy_core.setInnerBlock(int, IBlockState...)
    ```

- Sets the inner block for the multiblock in the format `tier`, `block`:

    ```groovy
    mods.draconicevolution.energy_core.setOuterBlock(int, IBlockState...)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.draconicevolution.energy_core.setInnerBlock(7, blockstate('minecraft:stone', 1))
mods.draconicevolution.energy_core.setOuterBlock(7, blockstate('minecraft:diamond_block'))
mods.draconicevolution.energy_core.setOuterBlock(2, blockstate('minecraft:diamond_block'))
```

</details>
