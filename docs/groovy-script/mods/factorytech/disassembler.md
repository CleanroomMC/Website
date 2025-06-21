---
title: "Mob Disassembler"
titleTemplate: "Factory Tech | CleanroomMC"
description: "Kills an entity in-world, dropping the mob's normal loot in addition to custom loot."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/Disassembler.java"
---

# Mob Disassembler (Factory Tech)

## Description

Kills an entity in-world, dropping the mob's normal loot in addition to custom loot.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.factorytech.disassembler/* Used as page default */ // [!code focus]
mods.factorytech.Disassembler
```


## Adding Recipes

- Adds the given entry to the map:

    ```groovy:no-line-numbers
    mods.factorytech.disassembler.add(Map.Entry<Class<? extends EntityLiving>, List<ItemStack>>)
    ```


### Recipe Builder

Just like other recipe types, the Mob Disassembler also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.factorytech.disassembler.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `Class<? extends EntityLiving>`. Sets the entity class used. Requires not null.

    ```groovy:no-line-numbers
    entity(EntityEntry)
    entity(Class<? extends EntityLiving>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `java.util.Map$Entry<java.lang.Class<? extends net.minecraft.entity.EntityLiving>, java.util.List<net.minecraft.item.ItemStack>>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.disassembler.recipeBuilder()
    .entity(entity('minecraft:chicken'))
    .output(item('minecraft:obsidian'), item('minecraft:gold_ingot') * 2, item('minecraft:clay'), item('minecraft:diamond'))
    .register()

mods.factorytech.disassembler.recipeBuilder()
    .entity(entity('minecraft:rabbit'))
    .output(item('minecraft:clay'), item('minecraft:diamond') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given entry from the map:

    ```groovy:no-line-numbers
    mods.factorytech.disassembler.remove(Map.Entry<Class<? extends EntityLiving>, List<ItemStack>>)
    ```

- Removes all recipes matching the given entity class:

    ```groovy:no-line-numbers
    mods.factorytech.disassembler.removeByEntity(Class<? extends EntityLiving>)
    ```

- Removes all recipes matching the given entity class:

    ```groovy:no-line-numbers
    mods.factorytech.disassembler.removeByEntity(EntityEntry)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.factorytech.disassembler.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.factorytech.disassembler.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.disassembler.removeByEntity(entity('minecraft:creeper'))
mods.factorytech.disassembler.removeByOutput(item('minecraft:rotten_flesh'))
mods.factorytech.disassembler.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.factorytech.disassembler.streamRecipes()
    ```
