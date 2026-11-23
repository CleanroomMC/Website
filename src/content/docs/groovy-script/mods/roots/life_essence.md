---
title: Life Essence (Roots 3)
description: When shift right clicking a mob in the Life Essence Pool with Runic Shears, it will drop a Life-Essence, which allows that mob to be spawned via the Creature Summoning ritual.
sidebar:
  label: Life Essence
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/LifeEssence.java
---

## Description

When shift right clicking a mob in the Life Essence Pool with Runic Shears, it will drop a Life-Essence, which allows that mob to be spawned via the Creature Summoning ritual.

## Identifier

The identifier `mods.roots.life_essence` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.roots.lifeessence
mods.roots.lifeEssence
mods.roots.LifeEssence
mods.roots.life_essence/* Used as page default */
```

</details>

## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy
    mods.roots.life_essence.add(Class<? extends EntityLivingBase>)
    ```

- Adds entries in the format `entity`:

    ```groovy
    mods.roots.life_essence.add(EntityEntry)
    ```

- Adds entries in the format `entity`:

    ```groovy
    mods.roots.life_essence.add(EntityLivingBase)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.life_essence.add(entity('minecraft:wither_skeleton'))
```

</details>

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy
    mods.roots.life_essence.remove(Class<? extends EntityLivingBase>)
    ```

- Removes the Life Essence entry for the given Entity:

    ```groovy
    mods.roots.life_essence.remove(EntityEntry)
    ```

- Removes the Life Essence entry for the given Entity:

    ```groovy
    mods.roots.life_essence.remove(EntityLivingBase)
    ```

- Removes all registered recipes:

    ```groovy
    mods.roots.life_essence.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.life_essence.remove(entity('minecraft:sheep'))
mods.roots.life_essence.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.roots.life_essence.streamRecipes()
    ```
