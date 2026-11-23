---
title: Wooden Basin (Primal Tech)
description: Converts up to 4 items and 1000mb of fluid into an output itemstack.
sidebar:
  label: Wooden Basin
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/primaltech/WoodenBasin.java
---

## Description

Converts up to 4 items and 1000mb of fluid into an output itemstack.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

The recipe requires items to be inserted in a specific order, which is displayed in JEI as top, left, right, bottom. Consider only one type of item to avoid issues.

</details>

## Identifier

The identifier `mods.primal_tech.wooden_basin` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.primaltech.woodenbasin
mods.primaltech.woodenBasin
mods.primaltech.WoodenBasin
mods.primaltech.wooden_basin
mods.primal_tech.woodenbasin
mods.primal_tech.woodenBasin
mods.primal_tech.WoodenBasin
mods.primal_tech.wooden_basin/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.primal_tech.wooden_basin.add(WoodenBasinRecipes)
    ```

- Adds recipes in the format `output`, `fluid`, `inputs`:

    ```groovy
    mods.primal_tech.wooden_basin.add(ItemStack, FluidStack, IIngredient...)
    ```

### Recipe Builder

Just like other recipe types, the Wooden Basin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.primal_tech.wooden_basin.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `primal_tech.recipes.WoodenBasinRecipes`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.primal_tech.wooden_basin.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('lava'))
    .output(item('minecraft:clay'))
    .register()

mods.primal_tech.wooden_basin.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:clay'), item('minecraft:gold_ingot'), item('minecraft:clay'))
    .fluidInput(fluid('water'))
    .output(item('minecraft:diamond') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.primal_tech.wooden_basin.remove(WoodenBasinRecipes)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.primal_tech.wooden_basin.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.primal_tech.wooden_basin.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.primal_tech.wooden_basin.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.primal_tech.wooden_basin.removeByInput(fluid('lava'))
mods.primal_tech.wooden_basin.removeByInput(item('minecraft:cobblestone'))
mods.primal_tech.wooden_basin.removeByOutput(item('minecraft:obsidian'))
mods.primal_tech.wooden_basin.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.primal_tech.wooden_basin.streamRecipes()
    ```
