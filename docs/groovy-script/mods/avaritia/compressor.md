---
title: "Compressor"
titleTemplate: "Avaritia | CleanroomMC"
description: "Converts any number of a single item into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/avaritia/Compressor.java"
---

# Compressor (Avaritia)

## Description

Converts any number of a single item into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.avaritia.compressor/* Used as page default */ // [!code focus]
mods.avaritia.Compressor
```


## Adding Recipes

- Adds recipes in the format `output`, `input`, `cost`:

    ```groovy:no-line-numbers
    mods.avaritia.compressor.add(ItemStack, IIngredient, int)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.avaritia.compressor.add(item('minecraft:nether_star'), item('minecraft:clay_ball'), 100)
```

::::::::::

### Recipe Builder

Just like other recipe types, the Compressor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.avaritia.compressor.recipeBuilder()
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

- `int`. Sets the amount of items required to convert. (Default `300`).

    ```groovy:no-line-numbers
    input(IIngredient)
    inputCount(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `morph.avaritia.recipe.compressor.ICompressorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.avaritia.compressor.recipeBuilder()
    .input(item('minecraft:clay_ball') * 100)
    .output(item('minecraft:nether_star'))
    .inputCount(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.avaritia.compressor.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.avaritia.compressor.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.avaritia.compressor.removeByOutput(item('avaritia:singularity', 0))
mods.avaritia.compressor.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.avaritia.compressor.streamRecipes()
    ```
