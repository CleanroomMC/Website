---
title: Entity Randomizer (ProjectE)
description: Converts an entity on the list into a random other entity on the list when a projectile fired from the Philosopher's Stone hits it. There are two lists, one for 'mobs' and the other for 'peacefuls', but any entity can go on either list.
sidebar:
  label: Entity Randomizer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/projecte/EntityRandomizer.java
---

## Description

Converts an entity on the list into a random other entity on the list when a projectile fired from the Philosopher's Stone hits it. There are two lists, one for 'mobs' and the other for 'peacefuls', but any entity can go on either list.

## Identifier

The identifier `mods.projecte.entity_randomizer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.projecte.entityrandomizer
mods.projecte.entityRandomizer
mods.projecte.EntityRandomizer
mods.projecte.entity_randomizer/* Used as page default */
```

</details>

## Adding Entries

- Adds the given `entity` that extends `EntityLiving` to the mob list:

    ```groovy
    mods.projecte.entity_randomizer.addMob(EntityEntry)
    ```

- Adds the given `entity` that extends `EntityLiving` to the mob list:

    ```groovy
    mods.projecte.entity_randomizer.addMob(Class<? extends EntityLiving>)
    ```

- Adds the given `entity` that extends `EntityLiving` to the peaceful list:

    ```groovy
    mods.projecte.entity_randomizer.addPeaceful(EntityEntry)
    ```

- Adds the given `entity` that extends `EntityLiving` to the peaceful list:

    ```groovy
    mods.projecte.entity_randomizer.addPeaceful(Class<? extends EntityLiving>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.projecte.entity_randomizer.addMob(entity('minecraft:pig'))
mods.projecte.entity_randomizer.addPeaceful(entity('minecraft:zombie'))
```

</details>

## Removing Entries

- Removes the given `entity` that extends `EntityLiving` from the mob list:

    ```groovy
    mods.projecte.entity_randomizer.removeMob(EntityEntry)
    ```

- Removes the given `entity` that extends `EntityLiving` from the mob list:

    ```groovy
    mods.projecte.entity_randomizer.removeMob(Class<? extends EntityLiving>)
    ```

- Removes the given `entity` that extends `EntityLiving` from the peaceful list:

    ```groovy
    mods.projecte.entity_randomizer.removePeaceful(EntityEntry)
    ```

- Removes the given `entity` that extends `EntityLiving` from the peaceful list:

    ```groovy
    mods.projecte.entity_randomizer.removePeaceful(Class<? extends EntityLiving>)
    ```

- Removes all registered recipes:

    ```groovy
    mods.projecte.entity_randomizer.removeAll()
    ```

- Removes all entries from the mob list:

    ```groovy
    mods.projecte.entity_randomizer.removeAllMobs()
    ```

- Removes all entries from the peacefuls list:

    ```groovy
    mods.projecte.entity_randomizer.removeAllPeacefuls()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.projecte.entity_randomizer.removeMob(entity('minecraft:zombie'))
mods.projecte.entity_randomizer.removePeaceful(entity('minecraft:pig'))
mods.projecte.entity_randomizer.removeAll()
mods.projecte.entity_randomizer.removeAllMobs()
mods.projecte.entity_randomizer.removeAllPeacefuls()
```

</details>

## Getting the value of entries

- Iterates through every entry in the mob list:

    ```groovy
    mods.projecte.entity_randomizer.streamMobs()
    ```

- Iterates through every entry in the peacefuls list:

    ```groovy
    mods.projecte.entity_randomizer.streamPeacefuls()
    ```
