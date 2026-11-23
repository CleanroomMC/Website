---
title: Athame Loot (Bewitchment)
description: When killing a mob with the Athame in the main hand, drops a random amount between `0` and `stackSize + lootingLevel` of each item that the entity passes the predicate of.
sidebar:
  label: Athame Loot
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/AthameLoot.java
---

## Description

When killing a mob with the Athame in the main hand, drops a random amount between `0` and `stackSize + lootingLevel` of each item that the entity passes the predicate of.

## Identifier

The identifier `mods.bewitchment.athame_loot` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.bewitchment.athameloot
mods.bewitchment.athameLoot
mods.bewitchment.AthameLoot
mods.bewitchment.athame_loot/* Used as page default */
```

</details>

## Adding Entries

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(EntityEntry, ItemStack)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(EntityEntry, ItemStack...)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(EntityEntry, Collection<ItemStack>)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(Predicate<EntityLivingBase>, ItemStack)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(Predicate<EntityLivingBase>, ItemStack...)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(Class<? extends EntityLivingBase>, ItemStack)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(Class<? extends EntityLivingBase>, ItemStack...)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(Predicate<EntityLivingBase>, Collection<ItemStack>)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy
    mods.bewitchment.athame_loot.add(Class<? extends EntityLivingBase>, Collection<ItemStack>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.athame_loot.add(entity('minecraft:pig'), item('minecraft:gold_ingot'))
mods.bewitchment.athame_loot.add(entity('minecraft:cow'), item('minecraft:clay') * 5, item('minecraft:iron_sword'))
```

</details>

## Removing Entries

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.athame_loot.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.athame_loot.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.athame_loot.removeByOutput(item('bewitchment:spectral_dust'))
mods.bewitchment.athame_loot.removeAll()
```

</details>
