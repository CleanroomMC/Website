---
title: "Mixer"
titleTemplate: "Immersive Engineering | CleanroomMC"
description: "Converts any number of input itemstacks and a fluidstack into an output fluidstack, consuming power."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersiveengineering/Mixer.java"
---

# Mixer (Immersive Engineering)

## Description

Converts any number of input itemstacks and a fluidstack into an output fluidstack, consuming power.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {3}
mods.ie.mixer
mods.ie.Mixer
mods.immersiveengineering.mixer/* Used as page default */ // [!code focus]
mods.immersiveengineering.Mixer
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.add(MixerRecipe)
    ```

- Adds recipes in the format `fluidOutput`, `fluidInput`, `energy`, `itemInput`:

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.add(FluidStack, FluidStack, int, List<IIngredient>)
    ```


### Recipe Builder

Just like other recipe types, the Mixer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

- `int`. Sets the amount of power consumed to complete the recipe. (Default `0`).

    ```groovy:no-line-numbers
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `blusunrize.immersiveengineering.api.crafting.MixerRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.mixer.recipeBuilder()
    .input(item('minecraft:diamond'), ore('ingotGold'), ore('ingotGold'), ore('ingotGold'))
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('lava'))
    .energy(100)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.remove(MixerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.removeByInput(FluidStack, IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.immersiveengineering.mixer.removeByInput(fluid('water'), item('minecraft:speckled_melon'))
mods.immersiveengineering.mixer.removeByInput(item('minecraft:sand'), item('minecraft:sand'), item('minecraft:clay_ball'), item('minecraft:gravel'))
mods.immersiveengineering.mixer.removeByOutput(fluid('potion').withNbt([Potion:'minecraft:night_vision']))
mods.immersiveengineering.mixer.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.immersiveengineering.mixer.streamRecipes()
    ```
