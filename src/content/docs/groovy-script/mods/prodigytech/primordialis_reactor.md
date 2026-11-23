---
title: Primordialis Reactor (Prodigy Tech)
description: Turns organic matter into Primordium.
sidebar:
  label: Primordialis Reactor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/PrimordialisReactor.java
---

## Description

Turns organic matter into Primordium.

## Identifier

The identifier `mods.prodigytech.primordialis_reactor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.prodigytech.primordialisreactor
mods.prodigytech.primordialisReactor
mods.prodigytech.PrimordialisReactor
mods.prodigytech.primordialis_reactor/* Used as page default */
```

</details>

## Adding Entries

- Adds an item that can be converted:

    ```groovy
    mods.prodigytech.primordialis_reactor.add(IIngredient)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.primordialis_reactor.add(item('minecraft:diamond'))
```

</details>

## Removing Entries

- Removes an item that can be converted:

    ```groovy
    mods.prodigytech.primordialis_reactor.remove(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.prodigytech.primordialis_reactor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.primordialis_reactor.remove(ore('sugarcane'))
mods.prodigytech.primordialis_reactor.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.prodigytech.primordialis_reactor.streamRecipes()
    ```
