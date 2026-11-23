---
title: "Sacrificial (Blood Magic: Alchemical Wizardry)"
description: How much Life Essence is gained when using the Sacrificial Dagger on a mob.
sidebar:
  label: Sacrificial
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bloodmagic/Sacrificial.java
---

## Description

How much Life Essence is gained when using the Sacrificial Dagger on a mob.

## Identifier

Refer to this via any of the following:

```groovy {3}
mods.bm.sacrificial
mods.bm.Sacrificial
mods.bloodmagic.sacrificial/* Used as page default */
mods.bloodmagic.Sacrificial
```

## Adding Recipes

- Adds recipes in the format `entity`, `value`:

    ```groovy
    mods.bloodmagic.sacrificial.add(Entity, int)
    ```

- Adds recipes in the format `entity`, `value`:

    ```groovy
    mods.bloodmagic.sacrificial.add(ResourceLocation, int)
    ```

- Adds recipes in the format `entity`, `value`:

    ```groovy
    mods.bloodmagic.sacrificial.add(String, int)
    ```

### Recipe Builder

Just like other recipe types, the Sacrificial also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.bloodmagic.sacrificial.recipeBuilder()</summary>

- `int`. Sets how much Life Essence the entity gives. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    value(int)
    ```

- `ResourceLocation`. Sets the target entity. Requires not null.

    ```groovy
    entity(Entity)
    entity(String)
    entity(ResourceLocation)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `java.lang.Object`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodmagic.sacrificial.recipeBuilder()
    .entity('minecraft:enderman')
    .value(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes any Sacrificial values entry with the given Entity as a ResourceLocation:

    ```groovy
    mods.bloodmagic.sacrificial.remove(Entity)
    ```

- Removes any Sacrificial values entry with the given EntityEntry as a ResourceLocation:

    ```groovy
    mods.bloodmagic.sacrificial.remove(EntityEntry)
    ```

- Removes any Sacrificial values entry with the given ResourceLocation:

    ```groovy
    mods.bloodmagic.sacrificial.remove(ResourceLocation)
    ```

- Removes any Sacrificial values entry with the given String as a ResourceLocation:

    ```groovy
    mods.bloodmagic.sacrificial.remove(String)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bloodmagic.sacrificial.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodmagic.sacrificial.remove(entity('minecraft:villager'))
mods.bloodmagic.sacrificial.remove(resource('minecraft:villager'))
mods.bloodmagic.sacrificial.remove('minecraft:villager')
mods.bloodmagic.sacrificial.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bloodmagic.sacrificial.streamRecipes()
    ```
