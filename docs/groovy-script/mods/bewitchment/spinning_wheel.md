---
title: "Spinning Wheel"
titleTemplate: "Bewitchment | CleanroomMC"
description: "Converts up to 4 itemstacks into up to 2 output itemstacks in the Spinning Wheel at the cost of 1 Magic Power per tick. Takes 10 seconds."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/SpinningWheel.java"
---

# Spinning Wheel (Bewitchment)

## Description

Converts up to 4 itemstacks into up to 2 output itemstacks in the Spinning Wheel at the cost of 1 Magic Power per tick. Takes 10 seconds.

## Identifier

The identifier `mods.bewitchment.spinning_wheel` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {4}
mods.bewitchment.spinningwheel
mods.bewitchment.spinningWheel
mods.bewitchment.SpinningWheel
mods.bewitchment.spinning_wheel/* Used as page default */ // [!code focus]
```

::::::::::

## Adding Recipes

- Adds the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.add(SpinningWheelRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Spinning Wheel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy:no-line-numbers
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.SpinningWheelRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.spinning_wheel.recipeBuilder()
    .input(item('minecraft:string'), item('minecraft:string'), item('minecraft:string'), item('minecraft:string'))
    .output(item('minecraft:gold_ingot') * 4, item('minecraft:web'))
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the recipe:

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.remove(SpinningWheelRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.bewitchment.spinning_wheel.remove(resource('bewitchment:cobweb'))
mods.bewitchment.spinning_wheel.removeByInput(item('minecraft:string'))
mods.bewitchment.spinning_wheel.removeByOutput(item('bewitchment:spirit_string'))
mods.bewitchment.spinning_wheel.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.bewitchment.spinning_wheel.streamRecipes()
    ```
