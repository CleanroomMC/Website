---
title: Pacifist (Roots 3)
description: Pacifist is a list of entities which killing will give the player the advancement 'Untrue Pacifist'.
sidebar:
  label: Pacifist
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/roots/Pacifist.java
---

## Description

Pacifist is a list of entities which killing will give the player the advancement 'Untrue Pacifist'.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.roots.pacifist/* Used as page default */
mods.roots.Pacifist
```

## Adding Entries

### Recipe Builder

Just like other recipe types, the Pacifist also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.roots.pacifist.recipeBuilder()</summary>

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `Class<? extends Entity>`. Sets the target entity. Requires not null.

    ```groovy
    entity(EntityEntry)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `epicsquid.roots.recipe.PacifistEntry`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.pacifist.recipeBuilder()
    .name('wither_skeleton_pacifist')
    .entity(entity('minecraft:wither_skeleton'))
    .register()
```

</details>

</details>

## Removing Entries

- Removes the Pacifist entry with the given Entity class:

    ```groovy
    mods.roots.pacifist.removeByClass(Class<? extends Entity>)
    ```

- Removes the Pacifist entry for the given Entity:

    ```groovy
    mods.roots.pacifist.removeByEntity(EntityEntry)
    ```

- Removes the Pacifist entry with the given name:

    ```groovy
    mods.roots.pacifist.removeByName(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy
    mods.roots.pacifist.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.roots.pacifist.removeByEntity(entity('minecraft:cow'))
mods.roots.pacifist.removeByName(resource('minecraft:chicken'))
mods.roots.pacifist.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.roots.pacifist.streamRecipes()
    ```
