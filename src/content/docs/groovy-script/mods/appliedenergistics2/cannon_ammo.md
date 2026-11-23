---
title: Cannon Ammo (Applied Energistics 2)
description: Item and weight, where weight is a factor in how much damage is dealt.
sidebar:
  label: Cannon Ammo
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/appliedenergistics2/CannonAmmo.java
---

## Description

Item and weight, where weight is a factor in how much damage is dealt.

## Identifier

The identifier `mods.appliedenergistics2.cannon_ammo` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {12}
mods.ae2.cannon
mods.ae2.Cannon
mods.ae2.cannonammo
mods.ae2.cannonAmmo
mods.ae2.CannonAmmo
mods.ae2.cannon_ammo
mods.appliedenergistics2.cannon
mods.appliedenergistics2.Cannon
mods.appliedenergistics2.cannonammo
mods.appliedenergistics2.cannonAmmo
mods.appliedenergistics2.CannonAmmo
mods.appliedenergistics2.cannon_ammo/* Used as page default */
```

</details>

## Adding Entries

- Adds ammo in the format `item`, `value`:

    ```groovy
    mods.appliedenergistics2.cannon_ammo.add(ItemStack, double)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.cannon_ammo.add(item('minecraft:clay'), 10000)
```

</details>

## Removing Entries

- Removes the ammo entry for the given item:

    ```groovy
    mods.appliedenergistics2.cannon_ammo.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.appliedenergistics2.cannon_ammo.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.cannon_ammo.remove(item('minecraft:gold_nugget'))
mods.appliedenergistics2.cannon_ammo.removeAll()
```

</details>
