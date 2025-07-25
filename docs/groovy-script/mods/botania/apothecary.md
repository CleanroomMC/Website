---
title: "Petal Apothecary"
titleTemplate: "Botania | CleanroomMC"
description: "Converts item inputs into an item output consuming water and a seed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Apothecary.java"
---

# Petal Apothecary (Botania)

## Description

Converts item inputs into an item output consuming water and a seed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.botania.apothecary/* Used as page default */ // [!code focus]
mods.botania.Apothecary
mods.botania.petal_apothecary
mods.botania.petalapothecary
mods.botania.petalApothecary
mods.botania.PetalApothecary
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.botania.apothecary.add(RecipePetals)
    ```

- Adds recipes in the format `output`, `inputs`:

    ```groovy:no-line-numbers
    mods.botania.apothecary.add(ItemStack, IIngredient...)
    ```


### Recipe Builder

Just like other recipe types, the Petal Apothecary also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.botania.apothecary.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 20.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipePetals`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.apothecary.recipeBuilder()
    .input(ore('blockGold'), ore('ingotIron'), item('minecraft:apple'))
    .output(item('minecraft:golden_apple'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.botania.apothecary.remove(RecipePetals)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.apothecary.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.botania.apothecary.removeByInputs(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.botania.apothecary.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.botania.apothecary.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.botania.apothecary.removeByInput(ore('runeFireB'))
mods.botania.apothecary.removeByInputs(ore('petalYellow'), ore('petalBrown'))
mods.botania.apothecary.removeByOutput(item('botania:specialflower').withNbt(['type': 'puredaisy']))
mods.botania.apothecary.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.botania.apothecary.streamRecipes()
    ```
