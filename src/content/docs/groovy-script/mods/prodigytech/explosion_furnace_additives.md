---
title: Explosion Furnace Additives (Prodigy Tech)
description: Turn an item into an explosive or into a dampener when inserted into the Explosion Furnace.
sidebar:
  label: Explosion Furnace Additives
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/ExplosionFurnaceAdditives.java
---

## Description

Turn an item into an explosive or into a dampener when inserted into the Explosion Furnace.

## Identifier

The identifier `mods.prodigytech.explosion_furnace_additives` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.prodigytech.explosionfurnaceadditives
mods.prodigytech.explosionFurnaceAdditives
mods.prodigytech.ExplosionFurnaceAdditives
mods.prodigytech.explosion_furnace_additives/* Used as page default */
```

</details>

## Adding Entries

- Adds a dampener:

    ```groovy
    mods.prodigytech.explosion_furnace_additives.addDampener(IIngredient, int)
    ```

- Adds an explosive:

    ```groovy
    mods.prodigytech.explosion_furnace_additives.addExplosive(IIngredient, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.explosion_furnace_additives.addDampener(item('minecraft:stone'), 50)
mods.prodigytech.explosion_furnace_additives.addExplosive(item('minecraft:cobblestone'), 50)
```

</details>

## Removing Entries

- Removes a dampener by the input item:

    ```groovy
    mods.prodigytech.explosion_furnace_additives.removeDampener(IIngredient)
    ```

- Removes an explosive by the input item:

    ```groovy
    mods.prodigytech.explosion_furnace_additives.removeExplosive(IIngredient)
    ```

- Removes all registered dampeners:

    ```groovy
    mods.prodigytech.explosion_furnace_additives.removeAllDampeners()
    ```

- Removes all registered explosives:

    ```groovy
    mods.prodigytech.explosion_furnace_additives.removeAllExplosives()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.explosion_furnace_additives.removeDampener(ore('dustAsh'))
mods.prodigytech.explosion_furnace_additives.removeExplosive(ore('gunpowder'))
mods.prodigytech.explosion_furnace_additives.removeAllDampeners()
mods.prodigytech.explosion_furnace_additives.removeAllExplosives()
```

</details>
