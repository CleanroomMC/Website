---
title: "Athame Loot"
titleTemplate: "Bewitchment | CleanroomMC"
description: "When killing a mob with the Athame in the main hand, drops a random amount between `0` and `stackSize + lootingLevel` of each item that the entity passes the predicate of."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/AthameLoot.java"
---

# Athame Loot (Bewitchment)

## Description

When killing a mob with the Athame in the main hand, drops a random amount between `0` and `stackSize + lootingLevel` of each item that the entity passes the predicate of.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.bewitchment.athame_loot/* Used as page default */ // [!code focus]
mods.bewitchment.athameloot
mods.bewitchment.athameLoot
mods.bewitchment.AthameLoot
```


## Adding Entries

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(Class<? extends EntityLivingBase>, Collection<ItemStack>)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(Class<? extends EntityLivingBase>, ItemStack)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(Class<? extends EntityLivingBase>, ItemStack...)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(EntityEntry, Collection<ItemStack>)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(EntityEntry, ItemStack)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(EntityEntry, ItemStack...)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(Predicate<EntityLivingBase>, Collection<ItemStack>)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(Predicate<EntityLivingBase>, ItemStack)
    ```

- Register a new Athame Loot entry in the format `entity`, `stacks`:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.add(Predicate<EntityLivingBase>, ItemStack...)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.athame_loot.add(entity('minecraft:pig'), item('minecraft:gold_ingot'))
mods.bewitchment.athame_loot.add(entity('minecraft:cow'), item('minecraft:clay') * 5, item('minecraft:iron_sword'))
```

::::::::::

## Removing Entries

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.athame_loot.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.athame_loot.removeByOutput(item('bewitchment:spectral_dust'))
mods.bewitchment.athame_loot.removeAll()
```

::::::::::
