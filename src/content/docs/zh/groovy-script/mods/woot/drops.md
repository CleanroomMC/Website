---
title: Drops (Woot)
description: Controls extra drops given by mobs. Chance and Size are both arrays 4 long, containing the values for levels 0/1/2/3 levels of Looting.
sidebar:
  label: Drops
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/woot/Drops.java
---

## Description

Controls extra drops given by mobs. Chance and Size are both arrays 4 long, containing the values for levels 0/1/2/3 levels of Looting.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.woot.drops/* Used as page default */
mods.woot.Drops
```

## Adding Recipes

- Adds recipes in the format `wootMobName`, `itemStack`, `chances`, `sizes`:

    ```groovy
    mods.woot.drops.add(WootMobName, ItemStack, List<Integer>, List<Integer>)
    ```

### Recipe Builder

Just like other recipe types, the Drops also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.woot.drops.recipeBuilder()</summary>

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `WootMobName`. Sets the entity and nbt tags. Requires not null.

    ```groovy
    name(String)
    name(EntityEntry)
    name(WootMobName)
    name(String, String)
    ```

- `List<Integer>`. Sets the quantity of the drop for each level of Looting. Requires exactly 4.

    ```groovy
    size(int)
    size(int...)
    size(Collection<Integer>)
    ```

- `List<Integer>`. Sets the chance of the drop for each level of Looting. Requires exactly 4.

    ```groovy
    chance(int)
    chance(int...)
    chance(Collection<Integer>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.ItemStack`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.drops.recipeBuilder()
    .name('minecraft:zombie')
    .output(item('minecraft:clay'))
    .chance(10, 30, 60, 100)
    .size(5, 10, 20, 50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes recipes matching the given entity:

    ```groovy
    mods.woot.drops.removeByEntity(EntityEntry)
    ```

- Removes recipes matching the given entity:

    ```groovy
    mods.woot.drops.removeByEntity(String)
    ```

- Removes recipes matching the given entity:

    ```groovy
    mods.woot.drops.removeByEntity(String, String)
    ```

- Removes recipes matching the given entity:

    ```groovy
    mods.woot.drops.removeByEntity(WootMobName)
    ```

- Removes recipes matching the given output item:

    ```groovy
    mods.woot.drops.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.woot.drops.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.woot.drops.removeByEntity(entity('minecraft:ender_dragon'))
mods.woot.drops.removeByEntity('minecraft:ender_dragon')
mods.woot.drops.removeByEntity('minecraft:ender_dragon', '')
mods.woot.drops.removeByEntity(new WootMobName('minecraft:ender_dragon'))
mods.woot.drops.removeByOutput(item('minecraft:dragon_breath'))
mods.woot.drops.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.woot.drops.streamRecipes()
    ```
