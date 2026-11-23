---
title: Tempering Oven (Factory Tech)
description: Converts an input itemstack into an output itemstack, with the ability to control if stone parts are allowed and how long the recipe takes.
sidebar:
  label: Tempering Oven
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/Temperer.java
---

## Description

Converts an input itemstack into an output itemstack, with the ability to control if stone parts are allowed and how long the recipe takes.

## Identifier

The identifier `mods.factorytech.temperer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.factorytech.temperer/* Used as page default */
mods.factorytech.Temperer
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.factorytech.temperer.add(TileEntityTemperer.TempererRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Tempering Oven also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.factorytech.temperer.recipeBuilder()
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

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 5. (Default `5`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.tileentity.specialized.TileEntityTemperer$TempererRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.temperer.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.factorytech.temperer.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .time(30)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.factorytech.temperer.remove(TileEntityTemperer.TempererRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.factorytech.temperer.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.factorytech.temperer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.factorytech.temperer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.temperer.removeByInput(item('minecraft:iron_ingot'))
mods.factorytech.temperer.removeByOutput(item('factorytech:machinepart:4'))
mods.factorytech.temperer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.factorytech.temperer.streamRecipes()
    ```
