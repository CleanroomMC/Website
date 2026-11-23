---
title: "Heat Frame Cooling (PneumaticCraft: Repressurized)"
description: Converts an input itemstack into an output itemstack when inside an inventory placed within a Heat Frame which is cooled.
sidebar:
  label: Heat Frame Cooling
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pneumaticcraft/HeatFrameCooling.java
---

## Description

Converts an input itemstack into an output itemstack when inside an inventory placed within a Heat Frame which is cooled.

## Identifier

The identifier `mods.pneumaticcraft.heat_frame_cooling` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pneumaticcraft.heatframecooling
mods.pneumaticcraft.heatFrameCooling
mods.pneumaticcraft.HeatFrameCooling
mods.pneumaticcraft.heat_frame_cooling/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.pneumaticcraft.heat_frame_cooling.add(HeatFrameCoolingRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Heat Frame Cooling also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pneumaticcraft.heat_frame_cooling.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `me.desht.pneumaticcraft.common.recipes.HeatFrameCoolingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.heat_frame_cooling.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()

mods.pneumaticcraft.heat_frame_cooling.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:obsidian'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.pneumaticcraft.heat_frame_cooling.remove(HeatFrameCoolingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pneumaticcraft.heat_frame_cooling.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pneumaticcraft.heat_frame_cooling.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pneumaticcraft.heat_frame_cooling.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pneumaticcraft.heat_frame_cooling.removeByInput(item('minecraft:water_bucket'))
mods.pneumaticcraft.heat_frame_cooling.removeByOutput(item('minecraft:obsidian'))
mods.pneumaticcraft.heat_frame_cooling.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pneumaticcraft.heat_frame_cooling.streamRecipes()
    ```
