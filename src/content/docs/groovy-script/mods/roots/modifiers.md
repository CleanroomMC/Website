---
title: Modifiers (Roots 3)
description: Controls what spell modifiers are enabled and can be used.
sidebar:
  label: Modifiers
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Modifiers.java
---

## Description

Controls what spell modifiers are enabled and can be used.

## Identifier

The identifier `mods.roots.modifiers` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.roots.modifiers/* Used as page default */
mods.roots.Modifiers
```

</details>

## Adding Entries

- Enable any disabled modifiers with the given string as a resource location, defaulting to a namespace of `roots` if not provided:

    ```groovy
    mods.roots.modifiers.enable(String)
    ```

- Enable the disabled modifier:

    ```groovy
    mods.roots.modifiers.enable(Modifier)
    ```

- Enable all disabled modifiers for the given spell:

    ```groovy
    mods.roots.modifiers.enable(SpellBase)
    ```

- Enable any disabled modifiers with the given resource location:

    ```groovy
    mods.roots.modifiers.enable(ResourceLocation)
    ```

- Enable all disabled modifiers:

    ```groovy
    mods.roots.modifiers.enableAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.modifiers.enable('extended_geas')
mods.roots.modifiers.enable(modifier('roots:weakened_response'))
mods.roots.modifiers.enable(resource('roots:animal_savior'))
mods.roots.modifiers.enableAll()
```

</details>

## Removing Entries

- Disable any enabled modifiers with the given string as a resource location, defaulting to a namespace of `roots` if not provided:

    ```groovy
    mods.roots.modifiers.disable(String)
    ```

- Disable the enabled modifier:

    ```groovy
    mods.roots.modifiers.disable(Modifier)
    ```

- Disable all enabled modifiers for the given spell:

    ```groovy
    mods.roots.modifiers.disable(SpellBase)
    ```

- Disable any enabled modifiers with the given resource location:

    ```groovy
    mods.roots.modifiers.disable(ResourceLocation)
    ```

- Disable all enabled modifiers:

    ```groovy
    mods.roots.modifiers.disableAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.modifiers.disable(spell('spell_geas'))
mods.roots.modifiers.disableAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.roots.modifiers.streamRecipes()
    ```
