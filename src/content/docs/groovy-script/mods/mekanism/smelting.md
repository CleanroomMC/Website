---
title: Smelting (Mekanism)
description: Converts an input itemstack into an output itemstack in a recipe exclusive to the Smelter. Overrides the default furnace recipe, if applicable.
sidebar:
  label: Smelting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Smelting.java
---

## Description

Converts an input itemstack into an output itemstack in a recipe exclusive to the Smelter. Overrides the default furnace recipe, if applicable.

:::danger[Danger]
Recipes exclusive to the Mekanism Smelter may not be displayed in JEI.
:::

## Identifier

The identifier `mods.mekanism.smelting` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.mekanism.smelter
mods.mekanism.Smelter
mods.mekanism.smelting/* Used as page default */
mods.mekanism.Smelting
```

</details>

## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy
    mods.mekanism.smelting.add(IIngredient, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.smelting.add(item('minecraft:diamond_block'), item('minecraft:clay'))
```

</details>

### Recipe Builder

Just like other recipe types, the Smelting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.mekanism.smelting.recipeBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.SmeltingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.smelting.recipeBuilder()
    .input(item('minecraft:clay_ball'))
    .output(item('minecraft:clay'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.smelting.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.smelting.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.smelting.removeByInput(item('minecraft:clay'))
mods.mekanism.smelting.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.smelting.streamRecipes()
    ```
