---
title: "Fluid Agitator"
titleTemplate: "Factory Tech | CleanroomMC"
description: "Converts either one or two input fluidstacks and up to one input itemstack into an output itemstack, output fluidstack, or both."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/Agitator.java"
---

# Fluid Agitator (Factory Tech)

## Description

Converts either one or two input fluidstacks and up to one input itemstack into an output itemstack, output fluidstack, or both.

## Identifier

The identifier `mods.factorytech.agitator` will be used as the default on this page.

:::::::::: details All Identifiers {open id="quote"}

Any of these can be used to refer to this compat:

```groovy:no-line-numbers {1}
mods.factorytech.agitator/* Used as page default */ // [!code focus]
mods.factorytech.Agitator
```

::::::::::

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.agitator.add(TileEntityAgitator.AgitatorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Fluid Agitator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.factorytech.agitator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy:no-line-numbers
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.tileentity.specialized.TileEntityAgitator$AgitatorRecipe`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.agitator.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('water') * 100)
    .output(item('minecraft:diamond'))
    .register()

mods.factorytech.agitator.recipeBuilder()
    .fluidInput(fluid('ftglowstone') * 100)
    .output(item('minecraft:clay'))
    .register()

mods.factorytech.agitator.recipeBuilder()
    .fluidInput(fluid('lava') * 100, fluid('water') * 100)
    .output(item('minecraft:clay'))
    .register()

mods.factorytech.agitator.recipeBuilder()
    .fluidInput(fluid('lava') * 100, fluid('ftglowstone') * 100)
    .fluidOutput(fluid('ftglowstone') * 100)
    .register()

mods.factorytech.agitator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .fluidInput(fluid('water') * 100)
    .output(item('minecraft:diamond') * 5)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.agitator.remove(TileEntityAgitator.AgitatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.factorytech.agitator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.factorytech.agitator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.factorytech.agitator.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.agitator.removeByInput(fluid('lava'))
mods.factorytech.agitator.removeByInput(fluid('ftglowstone'))
mods.factorytech.agitator.removeByInput(item('minecraft:sand'))
mods.factorytech.agitator.removeByOutput(fluid('h2so4'))
mods.factorytech.agitator.removeByOutput(item('minecraft:stone'))
mods.factorytech.agitator.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.factorytech.agitator.streamRecipes()
    ```
