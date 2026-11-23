---
title: Pets (Bewitchment)
description: Sets what animals are valid for summoning via the `FortuneMeetPet` effect.
sidebar:
  label: Pets
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Pet.java
---

## Description

Sets what animals are valid for summoning via the `FortuneMeetPet` effect.

## Identifier

The identifier `mods.bewitchment.pet` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.pet/* Used as page default */
mods.bewitchment.Pet
```

</details>

## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy
    mods.bewitchment.pet.add(EntityEntry)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.pet.add(entity('minecraft:cow'))
```

</details>

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy
    mods.bewitchment.pet.remove(EntityEntry)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.pet.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.pet.remove(entity('minecraft:ocelot'))
mods.bewitchment.pet.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.pet.streamRecipes()
    ```
