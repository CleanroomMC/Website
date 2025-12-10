---
title: "Quern"
titleTemplate: "Atum 2 | CleanroomMC"
description: "Converts an input item into an output itemstack after a given number of rotations, which are done via a player right clicking the Quern."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/atum/Quern.java"
---

# Quern (Atum 2)

## Description

Converts an input item into an output itemstack after a given number of rotations, which are done via a player right clicking the Quern.

## Identifier

The identifier `mods.atum.quern` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.atum.quern/* Used as page default */ // [!code focus]
mods.atum.Quern
```

::::::::::

## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.atum.quern.add(IQuernRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Quern also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.atum.quern.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

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

- `int`. Sets the amount of rotation required to convert the input into the output. Requires greater than 0. (Default `0`).

    ```groovy:no-line-numbers
    rotations(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.teammetallurgy.atum.api.recipe.quern.IQuernRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.atum.quern.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .rotations(1)
    .register()

mods.atum.quern.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .rotations(5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.atum.quern.remove(IQuernRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.atum.quern.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.atum.quern.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.atum.quern.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.atum.quern.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.atum.quern.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.atum.quern.removeByInput(item('minecraft:blaze_rod'))
mods.atum.quern.removeByOutput(item('minecraft:sugar'))
mods.atum.quern.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.atum.quern.streamRecipes()
    ```
