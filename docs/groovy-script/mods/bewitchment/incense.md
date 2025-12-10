---
title: "Incense"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Converts up to 8 input ingredients in the Brazier when activated by a Flint and Steel for any number of potion effects that apply whenever a player wakes up nearby."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Incense.java"
---

# Incense (Bewitchment)

## Description

Converts up to 8 input ingredients in the Brazier when activated by a Flint and Steel for any number of potion effects that apply whenever a player wakes up nearby.

## Identifier

The identifier `mods.bewitchment.incense` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.bewitchment.incense/* Used as page default */ // [!code focus]
mods.bewitchment.Incense
```

::::::::::

## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.incense.add(Incense)
    ```

### Recipe Builder

Just like other recipe types, the Incense also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.incense.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 8.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the time the Brazier will remain active before being extinguished in seconds. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

- `List<Potion>`. Sets the potion effects provided upon waking up while the Incense is active. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    potion(Potion)
    potion(Potion...)
    potion(Collection<Potion>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.Incense`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.incense.recipeBuilder()
    .input(item('minecraft:clay'), item('minecraft:gold_ingot') * 5, item('minecraft:iron_ingot'))
    .potion(potion('minecraft:strength'), potion('minecraft:resistance'))
    .time(10000)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.incense.remove(Incense)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.incense.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.incense.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.incense.removeByInput(IIngredient)
    ```

- Removes all recipes providing the given potion effect:

    ```groovy:no-line-numbers
    mods.bewitchment.incense.removeByPotion(Potion)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.incense.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.incense.removeByInput(item('bewitchment:essence_of_vitality'))
mods.bewitchment.incense.removeByPotion(potion('minecraft:haste'))
mods.bewitchment.incense.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.incense.streamRecipes()
    ```
