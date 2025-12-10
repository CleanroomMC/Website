---
title: "Furnace"
titleTemplate: "Minecraft | CleanroomMC"
description: "Converts an input item into an output itemstack after a configurable amount of time, with the ability to give experience and using fuel to run. Can also convert the item in the fuel slot."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Furnace.java"
---

# Furnace (Minecraft)

## Description

Converts an input item into an output itemstack after a configurable amount of time, with the ability to give experience and using fuel to run. Can also convert the item in the fuel slot.

:::::::::: details Note {open id="note"}
Fuel Conversion Recipes may not function as desired in all furnaces - only the vanilla furnace has specific support. By default the only recipe reproduces the vanilla behavior of a wet sponge converting an empty bucket into a water bucket.
::::::::::

## Identifier

The identifier `furnace` will be used as the default on this page.

:::::::::: details All Identifiers {id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {2}
Furnace
furnace/* Used as page default */ // [!code focus]
mc.furnace
mc.Furnace
MC.furnace
MC.Furnace
vanilla.furnace
vanilla.Furnace
Vanilla.furnace
Vanilla.Furnace
minecraft.furnace
minecraft.Furnace
Minecraft.furnace
Minecraft.Furnace
mods.mc.furnace
mods.mc.Furnace
mods.MC.furnace
mods.MC.Furnace
mods.vanilla.furnace
mods.vanilla.Furnace
mods.Vanilla.furnace
mods.Vanilla.Furnace
mods.minecraft.furnace
mods.minecraft.Furnace
mods.Minecraft.furnace
mods.Minecraft.Furnace
```

::::::::::

## Adding Recipes

- Adds a recipe in the format `input`, `output`:

    ```groovy:no-line-numbers
    furnace.add(IIngredient, ItemStack)
    ```

- Adds a recipe in the format `input`, `output`, `experience`:

    ```groovy:no-line-numbers
    furnace.add(IIngredient, ItemStack, float)
    ```

- Adds a recipe in the format `input`, `output`, `experience`, `time`:

    ```groovy:no-line-numbers
    furnace.add(IIngredient, ItemStack, float, int)
    ```

- Add a conversion recipe in the format `smelted`, `fuel`, with `fuel` using an IIngredient transformer:

    ```groovy:no-line-numbers
    furnace.addFuelConversion(IIngredient, IIngredient)
    ```

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    furnace.addFuelConversion(CustomFurnaceManager.FuelConversionRecipe)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
furnace.add(ore('ingotIron'), item('minecraft:diamond'))
furnace.add(item('minecraft:nether_star'), item('minecraft:clay') * 64, 13)
furnace.add(item('minecraft:diamond'), item('minecraft:clay'), 2, 50)
furnace.addFuelConversion(item('minecraft:diamond'), item('minecraft:bucket').transform(item('minecraft:lava_bucket')))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    furnace.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `float`. Sets the experience rewarded for smelting the given input. Requires greater than or equal to 0. (Default `0.1f`).

    ```groovy:no-line-numbers
    exp(float)
    experience(float)
    ```

- `int`. Sets the time in ticks the recipe takes. Requires greater than or equal to 1. (Default `200`).

    ```groovy:no-line-numbers
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.vanilla.Furnace$Recipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
furnace.recipeBuilder()
    .input(ore('ingotGold'))
    .output(item('minecraft:nether_star'))
    .exp(0.5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    furnace.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    furnace.removeByOutput(IIngredient)
    ```

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    furnace.removeFuelConversion(CustomFurnaceManager.FuelConversionRecipe)
    ```

- Removes all conversion recipes with the given smelted item:

    ```groovy:no-line-numbers
    furnace.removeFuelConversionBySmeltedStack(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    furnace.removeAll()
    ```

- Removes all conversion recipes:

    ```groovy:no-line-numbers
    furnace.removeAllFuelConversions()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
furnace.removeByInput(item('minecraft:clay:*'))
furnace.removeByOutput(item('minecraft:brick'))
furnace.removeFuelConversionBySmeltedStack(item('minecraft:sponge', 1))
furnace.removeAll()
furnace.removeAllFuelConversions()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    furnace.streamRecipes()
    ```

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    furnace.streamFuelConversions()
    ```
