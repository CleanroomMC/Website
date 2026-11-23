---
title: Crushing Table (Magneticraft)
description: Converts an input itemstack into an output itemstack when placed on top of the Crushing Table and interacted with by a Hammer which has.
sidebar:
  label: Crushing Table
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/CrushingTable.java
---

## Description

Converts an input itemstack into an output itemstack when placed on top of the Crushing Table and interacted with by a Hammer which has.

## Identifier

The identifier `mods.magneticraft.crushing_table` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.magneticraft.crushingtable
mods.magneticraft.crushingTable
mods.magneticraft.CrushingTable
mods.magneticraft.crushing_table/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.magneticraft.crushing_table.add(ICrushingTableRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Crushing Table also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.magneticraft.crushing_table.recipeBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.crushingtable.ICrushingTableRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.crushing_table.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.magneticraft.crushing_table.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.magneticraft.crushing_table.remove(ICrushingTableRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.magneticraft.crushing_table.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.magneticraft.crushing_table.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.magneticraft.crushing_table.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.crushing_table.removeByInput(item('minecraft:iron_ore'))
mods.magneticraft.crushing_table.removeByOutput(item('minecraft:gunpowder'))
mods.magneticraft.crushing_table.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.magneticraft.crushing_table.streamRecipes()
    ```
