---
title: Freezer Fuel (Aether Legacy)
description: " By default, the Freezer takes Icestone as fuel. Using GroovyScript, custom fuels can be added."
sidebar:
  label: Freezer Fuel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/aetherlegacy/FreezerFuel.java
---

## Description

 By default, the Freezer takes Icestone as fuel. Using GroovyScript, custom fuels can be added.

## Identifier

The identifier `mods.aether_legacy.freezer_fuel` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.aether.freezerfuel
mods.aether.freezerFuel
mods.aether.FreezerFuel
mods.aether.freezer_fuel
mods.aether_legacy.freezerfuel
mods.aether_legacy.freezerFuel
mods.aether_legacy.FreezerFuel
mods.aether_legacy.freezer_fuel/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.aether_legacy.freezer_fuel.add(AetherFreezableFuel)
    ```

- Adds a Freezer fuel in the format `item`, `timeGiven`:

    ```groovy
    mods.aether_legacy.freezer_fuel.add(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aether_legacy.freezer_fuel.add(item('minecraft:packed_ice'), 1000)
```

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.aether_legacy.freezer_fuel.remove(AetherFreezableFuel)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.aether_legacy.freezer_fuel.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.aether_legacy.freezer_fuel.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.aether_legacy.freezer_fuel.removeByItem(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.aether_legacy.freezer_fuel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aether_legacy.freezer_fuel.removeByItem(item('aether_legacy:icestone'))
mods.aether_legacy.freezer_fuel.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.aether_legacy.freezer_fuel.streamRecipes()
    ```
