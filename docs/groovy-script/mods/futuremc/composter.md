---
title: "Composter"
titleTemplate: "Future MC | CleanroomMC"
description: "Converts input items into a chance to get a layer of compost, with 8 layers providing a single bonemeal."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/futuremc/Composter.java"
---

# Composter (Future MC)

## Description

Converts input items into a chance to get a layer of compost, with 8 layers providing a single bonemeal.

## Identifier

The identifier `mods.futuremc.composter` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.futuremc.composter/* Used as page default */ // [!code focus]
mods.futuremc.Composter
```

::::::::::

## Adding Entries

- Adds entries in the format `ingredient`, `chance`:

    ```groovy:no-line-numbers
    mods.futuremc.composter.add(Ingredient, byte)
    ```

- Adds entries in the format `ingredient`, `chance`:

    ```groovy:no-line-numbers
    mods.futuremc.composter.add(IIngredient, byte)
    ```

### Recipe Builder

Just like other recipe types, the Composter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.futuremc.composter.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the chance the recipe has to provide a layer of compost. Requires greater than or equal to 0 and less than or equal to 100. (Default `0`).

    ```groovy:no-line-numbers
    chance(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `org.apache.commons.lang3.tuple.Pair<net.minecraft.item.crafting.Ingredient, java.lang.Byte>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.composter.recipeBuilder()
    .input(item('minecraft:clay'))
    .chance(100)
    .register()

mods.futuremc.composter.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .chance(30)
    .register()
```

:::::::::

::::::::::

## Removing Entries

- Removes an entry with the same Ingredient:

    ```groovy:no-line-numbers
    mods.futuremc.composter.remove(Ingredient)
    ```

- Removes an entry with the same Ingredient:

    ```groovy:no-line-numbers
    mods.futuremc.composter.remove(IIngredient)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.futuremc.composter.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.futuremc.composter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.futuremc.composter.removeByInput(item('minecraft:cactus'))
mods.futuremc.composter.removeAll()
```

::::::::::

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.futuremc.composter.streamRecipes()
    ```
