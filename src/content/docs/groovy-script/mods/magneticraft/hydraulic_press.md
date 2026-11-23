---
title: Hydraulic Press (Magneticraft)
description: Converts an input itemstack into an output itemstack when set to a given mode in a Hydraulic Press Multiblock.
sidebar:
  label: Hydraulic Press
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/HydraulicPress.java
---

## Description

Converts an input itemstack into an output itemstack when set to a given mode in a Hydraulic Press Multiblock.

## Identifier

The identifier `mods.magneticraft.hydraulic_press` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.magneticraft.hydraulicpress
mods.magneticraft.hydraulicPress
mods.magneticraft.HydraulicPress
mods.magneticraft.hydraulic_press/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.magneticraft.hydraulic_press.add(IHydraulicPressRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Hydraulic Press also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.magneticraft.hydraulic_press.recipeBuilder()
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

- `HydraulicPressMode`. Sets the mode the Hydraulic Press need to be set on. Requires not null.

    ```groovy
    mode(HydraulicPressMode)
    heavy()
    light()
    medium()
    ```

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy
    ticks(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.hydraulicpress.IHydraulicPressRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.hydraulic_press.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .ticks(50)
    .register()

mods.magneticraft.hydraulic_press.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .ticks(50)
    .medium()
    .register()

mods.magneticraft.hydraulic_press.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .ticks(100)
    .mode(HydraulicPressMode.HEAVY)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.magneticraft.hydraulic_press.remove(IHydraulicPressRecipe)
    ```

- Removes all entries with the given mode:

    ```groovy
    mods.magneticraft.hydraulic_press.removeByMode(HydraulicPressMode)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.magneticraft.hydraulic_press.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.magneticraft.hydraulic_press.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.magneticraft.hydraulic_press.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.hydraulic_press.removeByMode(HydraulicPressMode.MEDIUM)
mods.magneticraft.hydraulic_press.removeByInput(item('minecraft:iron_ingot'))
mods.magneticraft.hydraulic_press.removeByOutput(item('minecraft:cobblestone'))
mods.magneticraft.hydraulic_press.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.magneticraft.hydraulic_press.streamRecipes()
    ```
