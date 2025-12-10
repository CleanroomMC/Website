---
title: "Freezer"
titleTemplate: "Aether Legacy | CleanroomMC"
description: "The Freezer is used to turn certain items into frozen versions."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/aetherlegacy/Freezer.java"
---

# Freezer (Aether Legacy)

## Description

The Freezer is used to turn certain items into frozen versions.

## Identifier

The identifier `mods.aether_legacy.freezer` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {3}
mods.aether.freezer
mods.aether.Freezer
mods.aether_legacy.freezer/* Used as page default */ // [!code focus]
mods.aether_legacy.Freezer
```

::::::::::

## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.add(AetherFreezable)
    ```

- Adds a Freezer recipe in the format `input`, `output`, `time`:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.add(ItemStack, ItemStack, int)
    ```

### Recipe Builder

Just like other recipe types, the Freezer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.recipeBuilder()
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

- `int`. Sets the time the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy:no-line-numbers
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.gildedgames.the_aether.api.freezables.AetherFreezable`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.freezer.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:dirt'))
    .time(200)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.remove(AetherFreezable)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.remove(ResourceLocation)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.aether_legacy.freezer.removeByOutput(item('minecraft:obsidian'))
mods.aether_legacy.freezer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.aether_legacy.freezer.streamRecipes()
    ```
