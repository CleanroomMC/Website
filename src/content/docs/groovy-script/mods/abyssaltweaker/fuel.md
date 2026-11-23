---
title: Fuel (Abyssal Tweaker)
description: Allows configuring the items that can be used as Transmutator and/or Crystallizer fuels.
sidebar:
  label: Fuel
source_code_link: https://github.com/TeamDimensional/AbyssalTweaker/blob/master/src/main/java/com/teamdimensional/abyssaltweaker/compat/groovyscript/Fuel.java
---

## Description

Allows configuring the items that can be used as Transmutator and/or Crystallizer fuels.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.abyssaltweaker.fuel/* Used as page default */
mods.abyssaltweaker.Fuel
```

## Adding Entries

- Adds a Crystallizer fuel:

    ```groovy
    mods.abyssaltweaker.fuel.addCrystallizer(IIngredient, int)
    ```

- Adds a Transmutator fuel:

    ```groovy
    mods.abyssaltweaker.fuel.addTransmutator(IIngredient, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.abyssaltweaker.fuel.addCrystallizer(item('minecraft:stone'), 50)
mods.abyssaltweaker.fuel.addTransmutator(item('minecraft:cobblestone'), 50)
```

</details>

## Removing Entries

- Removes a Crystallizer fuel:

    ```groovy
    mods.abyssaltweaker.fuel.removeCrystallizer(IIngredient)
    ```

- Removes a Transmutator fuel:

    ```groovy
    mods.abyssaltweaker.fuel.removeTransmutator(IIngredient)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.abyssaltweaker.fuel.removeCrystallizer(item('abyssalcraft:dreadshard'))
mods.abyssaltweaker.fuel.removeTransmutator(item('minecraft:blaze_rod'))
```

</details>
