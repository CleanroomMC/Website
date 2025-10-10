---
title: "Oven"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, with the ability to have a chance to produce an optional itemstack, and if producing the optional itemstack will consume a `bewitchment:empty_jar`. Requires furnace fuel to run and takes 10 seconds per recipe."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Oven.java"
---

# Oven (Bewitchment)

## Description

Converts an input itemstack into an output itemstack, with the ability to have a chance to produce an optional itemstack, and if producing the optional itemstack will consume a `bewitchment:empty_jar`. Requires furnace fuel to run and takes 10 seconds per recipe.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.bewitchment.oven/* Used as page default */ // [!code focus]
mods.bewitchment.Oven
```


## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.oven.add(OvenRecipe)
    ```


### Recipe Builder

Just like other recipe types, the Oven also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.oven.recipeBuilder()
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

- `ItemStack`. Sets the byproduct itemstack. Requires not null. (Default `ItemStack.EMPTY`).

    ```groovy:no-line-numbers
    byproduct(ItemStack)
    ```

- `boolean`. Sets if the recipe must consume a jar in order to produce the byproduct. (Default `false`).

    ```groovy:no-line-numbers
    requiresJar(boolean)
    ```

- `float`. Sets the chance the byproduct will be created. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    byproductChance(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.OvenRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.oven.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .requiresJar(false)
    .byproduct(item('minecraft:gold_nugget'))
    .byproductChance(0.2f)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.oven.remove(ResourceLocation)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.oven.remove(String)
    ```

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.oven.remove(OvenRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.oven.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bewitchment.oven.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.oven.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.oven.removeByInput(item('minecraft:sapling'))
mods.bewitchment.oven.removeByOutput(item('bewitchment:garlic_grilled'))
mods.bewitchment.oven.removeByOutput(item('bewitchment:tallow'))
mods.bewitchment.oven.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.oven.streamRecipes()
    ```
