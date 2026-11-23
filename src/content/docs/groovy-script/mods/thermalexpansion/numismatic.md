---
title: Numismatic Dynamo (Thermal Expansion)
description: Converts an input itemstack into power, taking time based on the power.
sidebar:
  label: Numismatic Dynamo
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/dynamo/Numismatic.java
---

## Description

Converts an input itemstack into power, taking time based on the power.

## Identifier

The identifier `mods.thermalexpansion.numismatic` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.numismatic
mods.thermal.Numismatic
mods.thermalexpansion.numismatic/* Used as page default */
mods.thermalexpansion.Numismatic
```

</details>

## Adding Recipes

- Adds recipes in the format `itemStack`, `energy`:

    ```groovy
    mods.thermalexpansion.numismatic.add(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.numismatic.add(item('minecraft:clay'), 100)
```

</details>

## Removing Recipes

- Removes all recipes with given IIngredient:

    ```groovy
    mods.thermalexpansion.numismatic.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.numismatic.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.numismatic.removeByInput(item('thermalfoundation:coin:69'))
mods.thermalexpansion.numismatic.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.numismatic.streamRecipes()
    ```
