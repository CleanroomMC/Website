---
title: "Pit Kiln"
titleTemplate: "Pyrotech | CleanroomMC"
description: "Converts an item into a new one by burning it. Has a chance to fail."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/PitKiln.java"
---

# Pit Kiln (Pyrotech)

## Description

Converts an item into a new one by burning it. Has a chance to fail.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.pyrotech.pit_kiln/* Used as page default */ // [!code focus]
mods.pyrotech.pitkiln
mods.pyrotech.pitKiln
mods.pyrotech.PitKiln
mods.pyrotech.kiln
mods.pyrotech.Kiln
```


## Adding Recipes

- Adds recipes in the format `name`, `input`, `output`, `burnTime`, `failureChance`, `failureOutput`:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.add(String, IIngredient, ItemStack, int, float, Iterable<ItemStack>)
    ```

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.add(KilnPitRecipe)
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.pit_kiln.add('clay_to_iron', item('minecraft:clay_ball') * 5, item('minecraft:iron_ingot'), 1200, 0.5f, [item('minecraft:dirt'), item('minecraft:cobblestone')])
```

::::::::::

### Recipe Builder

Just like other recipe types, the Pit Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.recipeBuilder()
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

- `int`. Sets the time required for the recipe to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy:no-line-numbers
    burnTime(int)
    ```

- `float`. Sets the chance to fail the recipe. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy:no-line-numbers
    failureChance(float)
    ```

- `ItemStackList`. Sets the output when the recipe failed.

    ```groovy:no-line-numbers
    failureOutput(ItemStack)
    failureOutput(ItemStack...)
    failureOutput(Iterable<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.KilnPitRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.pit_kiln.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:gold_ingot'))
    .burnTime(400)
    .failureChance(1f)
    .failureOutput(item('minecraft:wheat'), item('minecraft:carrot'), item('minecraft:sponge'))
    .name('iron_to_gold_kiln_with_failure_items')
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.remove(ResourceLocation)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.remove(String)
    ```

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.remove(KilnPitRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.pyrotech.pit_kiln.removeByOutput(item('pyrotech:bucket_clay'))
mods.pyrotech.pit_kiln.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.pyrotech.pit_kiln.streamRecipes()
    ```
