---
title: Metal Press (Immersive Engineering)
description: Converts an input itemstack into an output itemstack, with a mold catalyst, consuming power.
sidebar:
  label: Metal Press
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/MetalPress.java
---

## Description

Converts an input itemstack into an output itemstack, with a mold catalyst, consuming power.

## Identifier

The identifier `mods.immersiveengineering.metal_press` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ie.metalpress
mods.ie.metalPress
mods.ie.MetalPress
mods.ie.metal_press
mods.immersiveengineering.metalpress
mods.immersiveengineering.metalPress
mods.immersiveengineering.MetalPress
mods.immersiveengineering.metal_press/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `output`, `input`, `mold`, `energy`:

    ```groovy
    mods.immersiveengineering.metal_press.add(ItemStack, IIngredient, ItemStack, int)
    ```

### Recipe Builder

Just like other recipe types, the Metal Press also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersiveengineering.metal_press.recipeBuilder()
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

- `ItemStack`. Sets the mold item placed on the top face of the Metal Press as a catalyst. Requires not empty.

    ```groovy
    mold(ItemStack)
    ```

- `int`. Sets the amount of power consumed to complete the recipe. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.MetalPressRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.metal_press.recipeBuilder()
    .mold(item('minecraft:diamond'))
    .input(ore('ingotGold'))
    .output(item('minecraft:clay'))
    .energy(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes with the given mold:

    ```groovy
    mods.immersiveengineering.metal_press.removeByMold(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersiveengineering.metal_press.removeByInput(ItemStack)
    ```

- Removes recipes with the given mold and input item, in the format `mold`, `input`:

    ```groovy
    mods.immersiveengineering.metal_press.removeByInput(ItemStack, ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.immersiveengineering.metal_press.removeByOutput(ItemStack)
    ```

- Removes recipes with the given mold and output item, in the format `mold`, `output`:

    ```groovy
    mods.immersiveengineering.metal_press.removeByOutput(ItemStack, ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersiveengineering.metal_press.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersiveengineering.metal_press.removeByMold(item('immersiveengineering:mold:4'))
mods.immersiveengineering.metal_press.removeByInput(item('minecraft:iron_ingot'))
mods.immersiveengineering.metal_press.removeByInput(item('immersiveengineering:mold'), item('immersiveengineering:metal:8'))
mods.immersiveengineering.metal_press.removeByOutput(item('immersiveengineering:material:2'))
mods.immersiveengineering.metal_press.removeByOutput(item('immersiveengineering:mold'), item('immersiveengineering:metal:31'))
mods.immersiveengineering.metal_press.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersiveengineering.metal_press.streamRecipes()
    ```
