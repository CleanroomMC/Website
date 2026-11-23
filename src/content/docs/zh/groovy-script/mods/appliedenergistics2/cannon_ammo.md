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

Refer to this via any of the following:

```groovy {7}
mods.ae2.cannon_ammo
mods.ae2.cannonammo
mods.ae2.cannonAmmo
mods.ae2.CannonAmmo
mods.ae2.cannon
mods.ae2.Cannon
mods.appliedenergistics2.cannon_ammo/* Used as page default */
mods.appliedenergistics2.cannonammo
mods.appliedenergistics2.cannonAmmo
mods.appliedenergistics2.CannonAmmo
mods.appliedenergistics2.cannon
mods.appliedenergistics2.Cannon
```

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
