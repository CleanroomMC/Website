---
title: "Offering Altar"
titleTemplate: "The Erebus | CleanroomMC"
description: "Converts up to 3 input itemstacks into an output itemstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/erebus/OfferingAltar.java"
---

# Offering Altar (The Erebus)

## Description

Converts up to 3 input itemstacks into an output itemstack.

## Identifier

The identifier `mods.erebus.offering_altar` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.erebus.offeringaltar
mods.erebus.offeringAltar
mods.erebus.OfferingAltar
mods.erebus.offering_altar/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.erebus.offering_altar.add(OfferingAltarRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Offering Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.erebus.offering_altar.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `erebus.recipes.OfferingAltarRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.erebus.offering_altar.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.erebus.offering_altar.recipeBuilder()
    .input(item('minecraft:stone'), ore('gemDiamond'), item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.erebus.offering_altar.remove(OfferingAltarRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.erebus.offering_altar.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.erebus.offering_altar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.erebus.offering_altar.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.erebus.offering_altar.removeByInput(item('minecraft:emerald'))
mods.erebus.offering_altar.removeByOutput(item('erebus:materials', 38))
mods.erebus.offering_altar.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.erebus.offering_altar.streamRecipes()
    ```
