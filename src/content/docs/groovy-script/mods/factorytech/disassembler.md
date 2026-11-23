---
title: Mob Disassembler (Factory Tech)
description: Kills an entity in-world, dropping the mob's normal loot in addition to custom loot.
sidebar:
  label: Mob Disassembler
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/Disassembler.java
---

## Description

Kills an entity in-world, dropping the mob's normal loot in addition to custom loot.

## Identifier

The identifier `mods.factorytech.disassembler` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.factorytech.disassembler/* Used as page default */
mods.factorytech.Disassembler
```

</details>

## Adding Recipes

- Adds the given entry to the map:

    ```groovy
    mods.factorytech.disassembler.add(Map.Entry<Class<? extends EntityLiving>, List<ItemStack>>)
    ```

### Recipe Builder

Just like other recipe types, the Mob Disassembler also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.factorytech.disassembler.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `Class<? extends EntityLiving>`. Sets the entity class used. Requires not null.

    ```groovy
    entity(EntityEntry)
    entity(Class<? extends EntityLiving>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `java.util.Map$Entry<java.lang.Class<? extends net.minecraft.entity.EntityLiving>, java.util.List<net.minecraft.item.ItemStack>>`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.disassembler.recipeBuilder()
    .entity(entity('minecraft:chicken'))
    .output(item('minecraft:obsidian'), item('minecraft:gold_ingot') * 2, item('minecraft:clay'), item('minecraft:diamond'))
    .register()

mods.factorytech.disassembler.recipeBuilder()
    .entity(entity('minecraft:rabbit'))
    .output(item('minecraft:clay'), item('minecraft:diamond') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given entry from the map:

    ```groovy
    mods.factorytech.disassembler.remove(Map.Entry<Class<? extends EntityLiving>, List<ItemStack>>)
    ```

- Removes all recipes matching the given entity class:

    ```groovy
    mods.factorytech.disassembler.removeByEntity(EntityEntry)
    ```

- Removes all recipes matching the given entity class:

    ```groovy
    mods.factorytech.disassembler.removeByEntity(Class<? extends EntityLiving>)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.factorytech.disassembler.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.factorytech.disassembler.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.disassembler.removeByEntity(entity('minecraft:creeper'))
mods.factorytech.disassembler.removeByOutput(item('minecraft:rotten_flesh'))
mods.factorytech.disassembler.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.factorytech.disassembler.streamRecipes()
    ```
