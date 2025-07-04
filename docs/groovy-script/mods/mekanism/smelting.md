---
title: "Smelting"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input itemstack into an output itemstack in a recipe exclusive to the Smelter. Overrides the default furnace recipe, if applicable."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Smelting.java"
---

# Smelting (Mekanism)

## Description

Converts an input itemstack into an output itemstack in a recipe exclusive to the Smelter. Overrides the default furnace recipe, if applicable.

:::::::::: info Danger {id="danger"}
Recipes exclusive to the Mekanism Smelter may not be displayed in JEI.
::::::::::

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.smelting/* Used as page default */ // [!code focus]
mods.mekanism.Smelting
mods.mekanism.smelter
mods.mekanism.Smelter
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.smelting.add(IIngredient, ItemStack)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.smelting.add(item('minecraft:diamond_block'), item('minecraft:clay'))
```

::::::::::

### Recipe Builder

Just like other recipe types, the Smelting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.mekanism.smelting.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.SmeltingRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.smelting.recipeBuilder()
    .input(item('minecraft:clay_ball'))
    .output(item('minecraft:clay'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.smelting.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.smelting.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.smelting.removeByInput(item('minecraft:clay'))
mods.mekanism.smelting.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.smelting.streamRecipes()
    ```
