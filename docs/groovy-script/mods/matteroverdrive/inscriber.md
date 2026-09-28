---
title: "Inscriber"
titleTemplate: "MatterOverdrive: Refitted | CleanroomMC"
description: "Add or remove recipes from the Inscriber."
source_code_link: "https://github.com/Refitbench/MatterOverdrive/blob/master/src/main/java/matteroverdrive/compat/modules/groovyscript/Inscriber.java"
---

# Inscriber (MatterOverdrive: Refitted)

## Description

Add or remove recipes from the Inscriber.

## Identifier

The identifier `mods.matteroverdrive.inscriber` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.matteroverdrive.inscriber/* Used as page default */ // [!code focus]
mods.matteroverdrive.Inscriber
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.matteroverdrive.inscriber.add(InscriberRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Inscriber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Build and register a new Inscriber recipe with two inputs, one output, an energy cost, and a processing time.

    ```groovy:no-line-numbers
    mods.matteroverdrive.inscriber.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 2.

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

- `int`. Ticks required to complete the recipe. Must be greater than 0. (Default `300`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `int`. Energy consumed per recipe in RF. Must be greater than 0. (Default `64000`).

    ```groovy:no-line-numbers
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `matteroverdrive.data.recipes.InscriberRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.matteroverdrive.inscriber.recipeBuilder()
    .input(item('minecraft:redstone'))
    .input(item('minecraft:gold_ingot'))
    .output(item('matteroverdrive:circuit_basic'))
    .energy(32000)
    .time(120)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.matteroverdrive.inscriber.remove(InscriberRecipe)
    ```

- Remove all Inscriber recipes whose main and secondary inputs match the given ingredients:

    ```groovy:no-line-numbers
    mods.matteroverdrive.inscriber.removeByInputs(IIngredient, IIngredient)
    ```

- Remove all Inscriber recipes whose output matches the given ingredient:

    ```groovy:no-line-numbers
    mods.matteroverdrive.inscriber.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.matteroverdrive.inscriber.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.matteroverdrive.inscriber.removeByInputs(item('matteroverdrive:isolinear_circuit'), item('minecraft:gold_ingot'))
mods.matteroverdrive.inscriber.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.matteroverdrive.inscriber.streamRecipes()
    ```
