---
title: Energetic Infuser (Thermal Expansion)
description: Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost.
sidebar:
  label: Energetic Infuser
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Charger.java
---

## Description

Converts an input itemstack into an output itemstack, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.charger` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.charger
mods.thermal.Charger
mods.thermalexpansion.charger/* Used as page default */
mods.thermalexpansion.Charger
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `input`, `output`:

    ```groovy
    mods.thermalexpansion.charger.add(int, IIngredient, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.charger.add(1000, item('minecraft:obsidian'), item('minecraft:diamond') * 2)
```

</details>

### Recipe Builder

Just like other recipe types, the Energetic Infuser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.charger.recipeBuilder()
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

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `ChargerManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.ChargerManager$ChargerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.charger.recipeBuilder()
    .input(item('minecraft:diamond') * 5)
    .output(item('minecraft:clay'))
    .register()

mods.thermalexpansion.charger.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 2)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.charger.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.charger.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.charger.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.charger.removeByInput(item('thermalfoundation:bait:1'))
mods.thermalexpansion.charger.removeByOutput(item('thermalfoundation:fertilizer:2'))
mods.thermalexpansion.charger.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.charger.streamRecipes()
    ```
