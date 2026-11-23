---
title: Furnace (Minecraft)
description: Converts an input item into an output itemstack after a configurable amount of time, with the ability to give experience and using fuel to run. Can also convert the item in the fuel slot.
sidebar:
  label: Furnace
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/vanilla/Furnace.java
---

## Description

Converts an input item into an output itemstack after a configurable amount of time, with the ability to give experience and using fuel to run. Can also convert the item in the fuel slot.

<details class="cr-block cr-note" open>
<summary>Note</summary>

Fuel Conversion Recipes may not function as desired in all furnaces - only the vanilla furnace has specific support. By default the only recipe reproduces the vanilla behavior of a wet sponge converting an empty bucket into a water bucket.

</details>

## Identifier

The identifier `furnace` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {2}
Furnace
furnace/* Used as page default */
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

</details>

## Adding Recipes

- Adds a recipe in the format `input`, `output`:

    ```groovy
    furnace.add(IIngredient, ItemStack)
    ```

- Adds a recipe in the format `input`, `output`, `experience`:

    ```groovy
    furnace.add(IIngredient, ItemStack, float)
    ```

- Adds a recipe in the format `input`, `output`, `experience`, `time`:

    ```groovy
    furnace.add(IIngredient, ItemStack, float, int)
    ```

- Add a conversion recipe in the format `smelted`, `fuel`, with `fuel` using an IIngredient transformer:

    ```groovy
    furnace.addFuelConversion(IIngredient, IIngredient)
    ```

- Add the given recipe to the recipe list:

    ```groovy
    furnace.addFuelConversion(CustomFurnaceManager.FuelConversionRecipe)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
furnace.add(ore('ingotIron'), item('minecraft:diamond'))
furnace.add(item('minecraft:nether_star'), item('minecraft:clay') * 64, 13)
furnace.add(item('minecraft:diamond'), item('minecraft:clay'), 2, 50)
furnace.addFuelConversion(item('minecraft:diamond'), item('minecraft:bucket').transform(item('minecraft:lava_bucket')))
```

</details>

### Recipe Builder

Just like other recipe types, the Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    furnace.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- `float`. Sets the experience rewarded for smelting the given input. Requires greater than or equal to 0. (Default `0.1f`).

    ```groovy
    exp(float)
    experience(float)
    ```

- `int`. Sets the time in ticks the recipe takes. Requires greater than or equal to 1. (Default `200`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cleanroommc.groovyscript.compat.vanilla.Furnace$Recipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
furnace.recipeBuilder()
    .input(ore('ingotGold'))
    .output(item('minecraft:nether_star'))
    .exp(0.5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    furnace.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    furnace.removeByOutput(IIngredient)
    ```

- Removes the given recipe from the recipe list:

    ```groovy
    furnace.removeFuelConversion(CustomFurnaceManager.FuelConversionRecipe)
    ```

- Removes all conversion recipes with the given smelted item:

    ```groovy
    furnace.removeFuelConversionBySmeltedStack(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    furnace.removeAll()
    ```

- Removes all conversion recipes:

    ```groovy
    furnace.removeAllFuelConversions()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
furnace.removeByInput(item('minecraft:clay:*'))
furnace.removeByOutput(item('minecraft:brick'))
furnace.removeFuelConversionBySmeltedStack(item('minecraft:sponge', 1))
furnace.removeAll()
furnace.removeAllFuelConversions()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    furnace.streamRecipes()
    ```

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    furnace.streamFuelConversions()
    ```
