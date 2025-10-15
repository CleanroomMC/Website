---
title: "Frostfire"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Converts an input ingredient into an output itemstack once a second while inside a Frostfire block."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Frostfire.java"
---

# Frostfire (Bewitchment)

## Description

Converts an input ingredient into an output itemstack once a second while inside a Frostfire block.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.bewitchment.frostfire/* Used as page default */ // [!code focus]
mods.bewitchment.Frostfire
```


## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.add(FrostfireRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Frostfire also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.FrostfireRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.frostfire.recipeBuilder()
    .input(item('minecraft:water_bucket'))
    .output(item('minecraft:ice'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.remove(ResourceLocation)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.remove(String)
    ```

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.remove(FrostfireRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.frostfire.removeByInput(item('minecraft:iron_ore'))
mods.bewitchment.frostfire.removeByOutput(item('bewitchment:cold_iron_ingot'))
mods.bewitchment.frostfire.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.frostfire.streamRecipes()
    ```
