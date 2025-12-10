---
title: "Pets"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Sets what animals are valid for summoning via the `FortuneMeetPet` effect."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Pet.java"
---

# Pets (Bewitchment)

## Description

Sets what animals are valid for summoning via the `FortuneMeetPet` effect.

## Identifier

The identifier `mods.bewitchment.pet` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.bewitchment.pet/* Used as page default */ // [!code focus]
mods.bewitchment.Pet
```

::::::::::

## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.bewitchment.pet.add(EntityEntry)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.pet.add(entity('minecraft:cow'))
```

::::::::::

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.bewitchment.pet.remove(EntityEntry)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.pet.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.pet.remove(entity('minecraft:ocelot'))
mods.bewitchment.pet.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.pet.streamRecipes()
    ```
