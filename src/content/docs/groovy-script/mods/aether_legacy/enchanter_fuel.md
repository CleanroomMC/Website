---
title: Enchanter Fuel (Aether Legacy)
description: By default, the Enchanter (Altar) takes Ambrosium Shards as fuel. Using GroovyScript, custom fuels can be added.
sidebar:
  label: Enchanter Fuel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/aetherlegacy/EnchanterFuel.java
---

## Description

By default, the Enchanter (Altar) takes Ambrosium Shards as fuel. Using GroovyScript, custom fuels can be added.

## Identifier

The identifier `mods.aether_legacy.enchanter_fuel` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.aether.enchanterfuel
mods.aether.enchanterFuel
mods.aether.EnchanterFuel
mods.aether.enchanter_fuel
mods.aether_legacy.enchanterfuel
mods.aether_legacy.enchanterFuel
mods.aether_legacy.EnchanterFuel
mods.aether_legacy.enchanter_fuel/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.aether_legacy.enchanter_fuel.add(AetherEnchantmentFuel)
    ```

- Adds an Enchanting fuel in the format `item`, `timeGiven`:

    ```groovy
    mods.aether_legacy.enchanter_fuel.add(ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aether_legacy.enchanter_fuel.add(item('minecraft:blaze_rod'), 1000)
```

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.aether_legacy.enchanter_fuel.remove(AetherEnchantmentFuel)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.aether_legacy.enchanter_fuel.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.aether_legacy.enchanter_fuel.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.aether_legacy.enchanter_fuel.removeByItem(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.aether_legacy.enchanter_fuel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aether_legacy.enchanter_fuel.removeByItem(item('aether_legacy:ambrosium_shard'))
mods.aether_legacy.enchanter_fuel.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.aether_legacy.enchanter_fuel.streamRecipes()
    ```
