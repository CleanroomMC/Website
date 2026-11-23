---
title: Arcane Ensorcellator (Thermal Expansion)
description: Converts two input itemstacks and liquid experience into an output itemstack, costing power and taking time based on the power cost.
sidebar:
  label: Arcane Ensorcellator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/thermalexpansion/machine/Enchanter.java
---

## Description

Converts two input itemstacks and liquid experience into an output itemstack, costing power and taking time based on the power cost.

## Identifier

The identifier `mods.thermalexpansion.enchanter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.thermal.enchanter
mods.thermal.Enchanter
mods.thermalexpansion.enchanter/* Used as page default */
mods.thermalexpansion.Enchanter
```

</details>

## Adding Recipes

- Adds recipes in the format `energy`, `primaryInput`, `secondaryInput`, `output`, `experience`:

    ```groovy
    mods.thermalexpansion.enchanter.add(int, IIngredient, IIngredient, ItemStack, int)
    ```

- Adds an item to the Arcana list, which filters the inputs for one of the Arcane Ensorcellator slots when enabled:

    ```groovy
    mods.thermalexpansion.enchanter.addArcana(ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.enchanter.add(1000, item('minecraft:obsidian'), item('minecraft:gold_ingot'), item('minecraft:diamond'), 1000)
mods.thermalexpansion.enchanter.addArcana(item('minecraft:clay'))
```

</details>

### Recipe Builder

Just like other recipe types, the Arcane Ensorcellator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thermalexpansion.enchanter.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- `EnchanterManager.Type`. Sets the type of recipe, which by default does nothing. (Default `EnchanterManager.Type.STANDARD`).

    ```groovy
    type(EnchanterManager.Type)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `EnchanterManager.DEFAULT_ENERGY[0]`).

    ```groovy
    energy(int)
    ```

- `int`. Sets the amount of experience the recipe consumes from the tank. Requires greater than or equal to 0. (Default `EnchanterManager.DEFAULT_EXPERIENCE[0]`).

    ```groovy
    experience(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `cofh.thermalexpansion.util.managers.machine.EnchanterManager$EnchanterRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.enchanter.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot') * 4)
    .output(item('minecraft:diamond'))
    .register()

mods.thermalexpansion.enchanter.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .experience(1000)
    .energy(1000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes an item from the Arcana list, which filters the inputs for one of the Arcane Ensorcellator slots when enabled:

    ```groovy
    mods.thermalexpansion.enchanter.removeArcana(ItemStack)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thermalexpansion.enchanter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thermalexpansion.enchanter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thermalexpansion.enchanter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thermalexpansion.enchanter.removeByInput(item('minecraft:blaze_rod'))
mods.thermalexpansion.enchanter.removeByInput(item('minecraft:book'))
mods.thermalexpansion.enchanter.removeByOutput(item('minecraft:enchanted_book').withNbt(['StoredEnchantments': [['lvl': 1, 'id': 34]]]))
mods.thermalexpansion.enchanter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thermalexpansion.enchanter.streamRecipes()
    ```
