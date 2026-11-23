---
title: Phytogenic Insolator (Thermal Expansion)
description: Converts two input itemstacks into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost.
sidebar:
  label: Phytogenic Insolator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Insolator.java
---

## Description

Converts two input itemstacks into an output itemstack and optional output itemstack with a chance, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.insolator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.insolator
mods.thermal.Insolator
mods.thermalexpansion.insolator/* Used as page default */
mods.thermalexpansion.Insolator
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `water`, `primaryInput`, `secondaryInput`, `primaryOutput`, `secondaryOutput`, `secondaryChance`, `type`:

    ```groovy
    mods.thermalexpansion.insolator.add(int, int, IIngredient, IIngredient, ItemStack, ItemStack, int, InsolatorManager.Type)
    ```

- Adds an item to the Fertilizer list, which filters the inputs for one of the Phytogenic Insolator slots when enabled:

    ```groovy
    mods.thermalexpansion.insolator.addFertilizer(ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.insolator.add(1000, 100, item('minecraft:obsidian'), item('minecraft:gold_ingot') * 2, item('minecraft:clay'), item('minecraft:diamond'), 5, InsolatorManager.Type.TREE)
```

</details>

### Recipe Builder

Just like other recipe types, the Phytogenic Insolator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.insolator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `InsolatorManager.Type`. Sets the type of the recipe, which controls if the recipe requires the Sapling Infuser augment installed. (Default `InsolatorManager.Type.STANDARD`).

    ```groovy
    tree()
    type(InsolatorManager.Type)
    standard()
    ```

- `int`. Sets the amount of water consumed by the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    water(int)
    ```

- `int`. Sets the chance a secondary output is created, typically the input seed or sapling. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    chance(int)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `InsolatorManager.DEFAULT_ENERGY`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.InsolatorManager$InsolatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.insolator.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:diamond'))
    .output(item('minecraft:diamond') * 4)
    .register()

mods.thermalexpansion.insolator.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay'), item('minecraft:diamond'))
    .chance(5)
    .water(100)
    .tree()
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.insolator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.insolator.removeByOutput(IIngredient)
    ```

- Removes an item from the Fertilizer list, which filters the inputs for one of the Phytogenic Insolator slots when enabled:

    ```groovy
    mods.thermalexpansion.insolator.removeFertilizer(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.insolator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.insolator.removeByInput(item('thermalfoundation:fertilizer'))
mods.thermalexpansion.insolator.removeByInput(item('minecraft:double_plant:4'))
mods.thermalexpansion.insolator.removeByOutput(item('minecraft:red_flower:6'))
mods.thermalexpansion.insolator.removeByOutput(item('minecraft:melon_seeds'))
mods.thermalexpansion.insolator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.insolator.streamRecipes()
    ```
