---
title: "Saw"
titleTemplate: "Better With Mods | CleanroomMC"
description: "Converts a block into output itemstacks after being powered via rotation power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/Saw.java"
---

# Saw (Better With Mods)

## Description

Converts a block into output itemstacks after being powered via rotation power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.betterwithmods.saw/* Used as page default */ // [!code focus]
mods.betterwithmods.Saw
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.saw.add(SawRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Saw also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.betterwithmods.saw.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `BlockIngredient`. Sets the input block of the recipe.

    ```groovy:no-line-numbers
    input(String)
    input(IIngredient)
    input(ItemStack...)
    input(IIngredient...)
    input(BlockIngredient)
    input(List<ItemStack>)
    input(Collection<IIngredient>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithmods.common.registry.block.recipe.SawRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.saw.recipeBuilder()
    .input(item('minecraft:diamond_block'))
    .output(item('minecraft:gold_ingot') * 16)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.betterwithmods.saw.remove(SawRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.betterwithmods.saw.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.betterwithmods.saw.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.betterwithmods.saw.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.betterwithmods.saw.removeByInput(item('minecraft:vine'))
mods.betterwithmods.saw.removeByOutput(item('minecraft:pumpkin'))
mods.betterwithmods.saw.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.betterwithmods.saw.streamRecipes()
    ```
