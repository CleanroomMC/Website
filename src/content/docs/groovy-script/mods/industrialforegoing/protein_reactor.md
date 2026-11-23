---
title: Protein Reactor (Industrial Foregoing)
description: Converts an input item into Protein, with the amount of Protein generated being based on the number of concurrent conversion processes inside the Protein Reactor.
sidebar:
  label: Protein Reactor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/industrialforegoing/ProteinReactor.java
---

## Description

Converts an input item into Protein, with the amount of Protein generated being based on the number of concurrent conversion processes inside the Protein Reactor.

## Identifier

The identifier `mods.industrialforegoing.protein_reactor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.industrialforegoing.proteinreactor
mods.industrialforegoing.proteinReactor
mods.industrialforegoing.ProteinReactor
mods.industrialforegoing.protein_reactor/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.industrialforegoing.protein_reactor.add(IReactorEntry)
    ```

- Adds a Protein Reactor recipe in the format `input`:

    ```groovy
    mods.industrialforegoing.protein_reactor.add(ItemStack)
    ```

- Adds a Protein Reactor recipe in the format `input`, `nbtCheck`:

    ```groovy
    mods.industrialforegoing.protein_reactor.add(ItemStack, Predicate<NBTTagCompound>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.protein_reactor.add(item('minecraft:clay'))
```

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.industrialforegoing.protein_reactor.remove(IReactorEntry)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.industrialforegoing.protein_reactor.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.industrialforegoing.protein_reactor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.industrialforegoing.protein_reactor.removeByInput(item('minecraft:porkchop'))
mods.industrialforegoing.protein_reactor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.industrialforegoing.protein_reactor.streamRecipes()
    ```
