---
title: "Magnet Centrifuge"
titleTemplate: "Factory Tech | CleanroomMC"
description: "Converts an input itemstack into up to 3 output itemstacks, with the ability to control if stone parts are allowed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/MagnetCentrifuge.java"
---

# Magnet Centrifuge (Factory Tech)

## Description

Converts an input itemstack into up to 3 output itemstacks, with the ability to control if stone parts are allowed.

## Identifier

The identifier `mods.factorytech.magnet_centrifuge` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.factorytech.magnetcentrifuge
mods.factorytech.magnetCentrifuge
mods.factorytech.MagnetCentrifuge
mods.factorytech.magnet_centrifuge/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.magnet_centrifuge.add(MachineRecipes.MachineRecipe<ItemStack, ItemStack[]>)
    ```

### Recipe Builder

Just like other recipe types, the Magnet Centrifuge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.factorytech.magnet_centrifuge.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `boolean`. Sets if the recipe can use stone parts. (Default `false`).

    ```groovy:no-line-numbers
    allowStoneParts()
    allowStoneParts(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.auxiliary.MachineRecipes$MachineRecipe<net.minecraft.item.ItemStack, net.minecraft.item.ItemStack[]>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.magnet_centrifuge.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:obsidian'), item('minecraft:gold_ingot') * 2, item('minecraft:diamond'))
    .register()

mods.factorytech.magnet_centrifuge.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .allowStoneParts()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.magnet_centrifuge.remove(MachineRecipes.MachineRecipe<ItemStack, ItemStack[]>)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.factorytech.magnet_centrifuge.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.factorytech.magnet_centrifuge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.factorytech.magnet_centrifuge.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.magnet_centrifuge.removeByInput(item('minecraft:gravel'))
mods.factorytech.magnet_centrifuge.removeByOutput(item('minecraft:redstone'))
mods.factorytech.magnet_centrifuge.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.factorytech.magnet_centrifuge.streamRecipes()
    ```
