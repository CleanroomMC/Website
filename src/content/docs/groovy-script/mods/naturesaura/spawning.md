---
title: Altar of Birthing (Nature's Aura)
description: Converts multiple input itemstacks into a summoned entity, costing aura and taking time.
sidebar:
  label: Altar of Birthing
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/naturesaura/Spawning.java
---

## Description

Converts multiple input itemstacks into a summoned entity, costing aura and taking time.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

While more than 4 items can function as the input of a Altar of Birthing recipe, only the first 4 are shown in JEI.

</details>

## Identifier

The identifier `mods.naturesaura.spawning` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.naturesaura.spawning/* Used as page default */
mods.naturesaura.Spawning
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Altar of Birthing also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.naturesaura.spawning.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets how much aura the recipe drains from the environment. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    aura(int)
    ```

- `int`. Sets the time the recipe takes to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    time(int)
    ```

- `ResourceLocation`. Sets the entity spawned. Requires not null.

    ```groovy
    entity(EntityEntry)
    entity(ResourceLocation)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `de.ellpeck.naturesaura.api.recipes.AnimalSpawnerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.naturesaura.spawning.recipeBuilder()
    .name('demo')
    .input(item('minecraft:clay'))
    .entity(entity('minecraft:bat'))
    .aura(100)
    .time(100)
    .register()

mods.naturesaura.spawning.recipeBuilder()
    .name(resource('example:demo'))
    .input(item('minecraft:mutton'))
    .entity(entity('minecraft:wolf'))
    .aura(30)
    .time(5)
    .register()

mods.naturesaura.spawning.recipeBuilder()
    .input(item('minecraft:bone'), item('minecraft:dye:15') * 4)
    .entity(resource('minecraft:skeleton'))
    .aura(10)
    .time(10)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the Altar of Birthing recipe with the given name:

    ```groovy
    mods.naturesaura.spawning.removeByName(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.naturesaura.spawning.removeByInput(IIngredient)
    ```

- Removes all Altar of Birthing recipes that summon the given entity:

    ```groovy
    mods.naturesaura.spawning.removeByEntity(EntityEntry)
    ```

- Removes all Altar of Birthing recipes that summon the given entity:

    ```groovy
    mods.naturesaura.spawning.removeByEntity(ResourceLocation)
    ```

- Removes all registered recipes:

    ```groovy
    mods.naturesaura.spawning.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.naturesaura.spawning.removeByName(resource('naturesaura:cow'))
mods.naturesaura.spawning.removeByInput(item('minecraft:bone'))
mods.naturesaura.spawning.removeByEntity(entity('minecraft:polar_bear'))
mods.naturesaura.spawning.removeByEntity(resource('minecraft:cave_spider'))
mods.naturesaura.spawning.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.naturesaura.spawning.streamRecipes()
    ```
