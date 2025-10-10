---
title: "Distillery"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Converts up to 6 input ingredients into up to 6 output itemstacks in the Distillery at the cost of 1 Magic Power per tick. Takes 10 seconds."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Distillery.java"
---

# Distillery (Bewitchment)

## Description

Converts up to 6 input ingredients into up to 6 output itemstacks in the Distillery at the cost of 1 Magic Power per tick. Takes 10 seconds.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.bewitchment.distillery/* Used as page default */ // [!code focus]
mods.bewitchment.Distillery
```


## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.add(DistilleryRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Distillery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.DistilleryRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.distillery.recipeBuilder()
    .input(item('minecraft:glass_bottle'))
    .input(item('minecraft:snow'))
    .input(item('bewitchment:cleansing_balm'))
    .input(item('bewitchment:fiery_unguent'))
    .output(item('bewitchment:bottled_frostfire'))
    .output(item('bewitchment:empty_jar') * 2)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.remove(ResourceLocation)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.remove(String)
    ```

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.remove(DistilleryRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.distillery.remove(resource('bewitchment:bottled_frostfire'))
mods.bewitchment.distillery.removeByInput(item('bewitchment:perpetual_ice'))
mods.bewitchment.distillery.removeByOutput(item('bewitchment:demonic_elixir'))
mods.bewitchment.distillery.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.distillery.streamRecipes()
    ```
