---
title: "River Grate"
titleTemplate: "Factory Tech | CleanroomMC"
description: "Slowly produces the output entries while in a river biome surrounded by water, and between y 60 and 70."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/RiverGrate.java"
---

# River Grate (Factory Tech)

## Description

Slowly produces the output entries while in a river biome surrounded by water, and between y 60 and 70.

## Identifier

The identifier `mods.factorytech.river_grate` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.factorytech.rivergrate
mods.factorytech.riverGrate
mods.factorytech.RiverGrate
mods.factorytech.river_grate/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.river_grate.add(MachineRecipes.MachineRecipe<Double, ItemStack>)
    ```

### Recipe Builder

Just like other recipe types, the River Grate also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.factorytech.river_grate.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `double`. Sets the weight compared to other entries. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy:no-line-numbers
    weight(double)
    ```

- `boolean`. Sets if the recipe can use stone parts. (Default `false`).

    ```groovy:no-line-numbers
    allowStoneParts()
    allowStoneParts(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.auxiliary.MachineRecipes$MachineRecipe<java.lang.Double, net.minecraft.item.ItemStack>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.river_grate.recipeBuilder()
    .output(item('minecraft:diamond'))
    .weight(10)
    .register()

mods.factorytech.river_grate.recipeBuilder()
    .output(item('minecraft:clay'))
    .allowStoneParts()
    .weight(30)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.river_grate.remove(MachineRecipes.MachineRecipe<Double, ItemStack>)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.factorytech.river_grate.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.factorytech.river_grate.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.river_grate.removeByOutput(item('minecraft:fish'))
mods.factorytech.river_grate.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.factorytech.river_grate.streamRecipes()
    ```
