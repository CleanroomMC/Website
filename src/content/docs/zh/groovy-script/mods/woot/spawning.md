---
title: Spawning (Woot)
description: Controls item/fluid costs of a given mob or the default cost.
sidebar:
  label: Spawning
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/Spawning.java
---

## Description

Controls item/fluid costs of a given mob or the default cost.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.woot.spawning/* Used as page default */
mods.woot.Spawning
```

## Adding Recipes

- Adds a default fluid requirement to mobs without a specific spawning recipe:

    ```groovy
    mods.woot.spawning.addDefaultFluid(FluidStack)
    ```

- Adds a default item requirement to mobs without a specific spawning recipe:

    ```groovy
    mods.woot.spawning.addDefaultItem(ItemStack)
    ```

### Recipe Builder

Just like other recipe types, the Spawning also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.woot.spawning.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 6.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 6.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `WootMobName`. Sets the entity being targeted. Requires either `name` to be defined and a valid name or `defaultSpawnRecipe` to be true.

    ```groovy
    name(String)
    name(EntityEntry)
    name(WootMobName)
    ```

- `boolean`. Sets if the default recipes are being targeted instead of a specific entity name. Requires either `name` to be defined and a valid name or `defaultSpawnRecipe` to be true. (Default `false`).

    ```groovy
    defaultSpawnRecipe()
    defaultSpawnRecipe(boolean)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `ipsis.woot.farming.ISpawnRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.spawning.recipeBuilder()
    .name('minecraft:zombie')
    .input(item('minecraft:clay'))
    .fluidInput(fluid('water'))
    .register()

mods.woot.spawning.recipeBuilder()
    .defaultSpawnRecipe(true)
    .input(item('minecraft:gold_ingot'), item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe for the given entity:

    ```groovy
    mods.woot.spawning.remove(WootMobName)
    ```

- Removes the recipe for the given entity:

    ```groovy
    mods.woot.spawning.removeByEntity(EntityEntry)
    ```

- Removes the recipe for the given entity:

    ```groovy
    mods.woot.spawning.removeByEntity(String)
    ```

- Removes the recipe for the given entity:

    ```groovy
    mods.woot.spawning.removeByEntity(String, String)
    ```

- Removes the recipe for the given entity:

    ```groovy
    mods.woot.spawning.removeByEntity(WootMobName)
    ```

- Removes all registered recipes:

    ```groovy
    mods.woot.spawning.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.spawning.remove(new WootMobName('minecraft:ender_dragon'))
mods.woot.spawning.removeByEntity(entity('minecraft:ender_dragon'))
mods.woot.spawning.removeByEntity('minecraft:ender_dragon')
mods.woot.spawning.removeByEntity('minecraft:ender_dragon', '')
mods.woot.spawning.removeByEntity(new WootMobName('minecraft:ender_dragon'))
mods.woot.spawning.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.woot.spawning.streamRecipes()
    ```
