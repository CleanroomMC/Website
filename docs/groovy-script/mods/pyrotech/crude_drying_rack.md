---
title: "Crude Drying Rack"
titleTemplate: "Pyrotech | CleanroomMC"
description: "Converts an item over time into a new one."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/CrudeDryingRack.java"
---

# Crude Drying Rack (Pyrotech)

## Description

Converts an item over time into a new one.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.crude_drying_rack/* Used as page default */ // [!code focus]
mods.pyrotech.crudedryingrack
mods.pyrotech.crudeDryingRack
mods.pyrotech.CrudeDryingRack
```


## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `dryTime`:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.add(String, IIngredient, ItemStack, int)
    ```

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.add(CrudeDryingRackRecipe)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.crude_drying_rack.add('apple_to_dirt', item('minecraft:apple'), item('minecraft:dirt'), 1200)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Crude Drying Rack also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.recipeBuilder()
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

- `int`. Sets the time required for the recipe to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    dryTime(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.CrudeDryingRackRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.crude_drying_rack.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald'))
    .dryTime(260)
    .name('diamond_to_emerald_crude_drying_rack')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.remove(ResourceLocation)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.remove(String)
    ```

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.remove(CrudeDryingRackRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.crude_drying_rack.removeByInput(item('minecraft:wheat'))
mods.pyrotech.crude_drying_rack.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.crude_drying_rack.streamRecipes()
    ```
