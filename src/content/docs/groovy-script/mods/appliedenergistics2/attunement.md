---
title: P2P Attunement (Applied Energistics 2)
description: Controls using specific items, any items from a mod, or any items with a Capability to convert a P2P into a specific tunnel type.
sidebar:
  label: P2P Attunement
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/appliedenergistics2/Attunement.java
---

## Description

Controls using specific items, any items from a mod, or any items with a Capability to convert a P2P into a specific tunnel type.

## Identifier

The identifier `mods.appliedenergistics2.attunement` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ae2.attunement
mods.ae2.Attunement
mods.appliedenergistics2.attunement/* Used as page default */
mods.appliedenergistics2.Attunement
```

</details>

## Adding Recipes

- Adds tunnel attunement for all items in the given mod in the format `mod`, `tunnel`:

    ```groovy
    mods.appliedenergistics2.attunement.add(String, TunnelType)
    ```

- Adds tunnel attunement for the given item in the format `item`, `tunnel`:

    ```groovy
    mods.appliedenergistics2.attunement.add(ItemStack, TunnelType)
    ```

- Adds tunnel attunement for all items with the given capability in the format `capability`, `tunnel`:

    ```groovy
    mods.appliedenergistics2.attunement.add(Capability<?>, TunnelType)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.attunement.add('thermaldynamics', tunnel('redstone'))
mods.appliedenergistics2.attunement.add(item('minecraft:clay'), tunnel('item'))
mods.appliedenergistics2.attunement.add(Capabilities.FORGE_ENERGY, tunnel('item'))
```

</details>

## Removing Recipes

- Removes tunnel attunement for the given mod in the format `mod`, `tunnel`:

    ```groovy
    mods.appliedenergistics2.attunement.remove(String, TunnelType)
    ```

- Removes tunnel attunement for the given item in the format `item`, `tunnel`:

    ```groovy
    mods.appliedenergistics2.attunement.remove(ItemStack, TunnelType)
    ```

- Removes tunnel attunement for the given capability in the format `capability`, `tunnel`:

    ```groovy
    mods.appliedenergistics2.attunement.remove(Capability<?>, TunnelType)
    ```

- Removes the modid from creating any tunnel:

    ```groovy
    mods.appliedenergistics2.attunement.removeByMod(String)
    ```

- Removes the item from creating any tunnel:

    ```groovy
    mods.appliedenergistics2.attunement.removeByItem(ItemStack)
    ```

- Remove all ways to create the given tunnel:

    ```groovy
    mods.appliedenergistics2.attunement.removeByTunnel(TunnelType)
    ```

- Removes the given Capability from creating any tunnel:

    ```groovy
    mods.appliedenergistics2.attunement.removeByCapability(Capability<?>)
    ```

- Removes all registered recipes:

    ```groovy
    mods.appliedenergistics2.attunement.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.attunement.remove('thermaldynamics', tunnel('fe_power'))
mods.appliedenergistics2.attunement.remove(item('minecraft:lever'), tunnel('redstone'))
mods.appliedenergistics2.attunement.remove(Capabilities.FORGE_ENERGY, tunnel('fe_power'))
mods.appliedenergistics2.attunement.removeByTunnel(tunnel('item'))
mods.appliedenergistics2.attunement.removeAll()
```

</details>
