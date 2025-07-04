---
title: "Sawmill"
titleTemplate: "Mekanism | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, with an optional additional output."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Sawmill.java"
---

# Sawmill (Mekanism)

## Description

Converts an input itemstack into an output itemstack, with an optional additional output.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.mekanism.sawmill/* Used as page default */ // [!code focus]
mods.mekanism.Sawmill
```


## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy:no-line-numbers
    mods.mekanism.sawmill.add(IIngredient, ItemStack)
    ```

- Adds recipes in the format `ingredient`, `output`, `secondary`:

    ```groovy:no-line-numbers
    mods.mekanism.sawmill.add(IIngredient, ItemStack, ItemStack)
    ```

- Adds recipes in the format `ingredient`, `output`, `secondary`, `chance`:

    ```groovy:no-line-numbers
    mods.mekanism.sawmill.add(IIngredient, ItemStack, ItemStack, double)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.sawmill.add(item('minecraft:diamond_block'), item('minecraft:diamond') * 9, item('minecraft:clay_ball'), 0.7)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Sawmill also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.mekanism.sawmill.recipeBuilder()
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

- `ItemStack`. Sets the extra itemstack produced by the recipe. (Default `ItemStack.EMPTY`).

    ```groovy:no-line-numbers
    extra(ItemStack)
    ```

- `double`. Sets the chance the extra itemstack has to be produced. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0`).

    ```groovy:no-line-numbers
    chance(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.SawmillRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.sawmill.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:diamond') * 9)
    .extra(item('minecraft:clay_ball'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.mekanism.sawmill.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.mekanism.sawmill.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.mekanism.sawmill.removeByInput(item('minecraft:ladder'))
mods.mekanism.sawmill.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.mekanism.sawmill.streamRecipes()
    ```
