---
title: "Crucible"
titleTemplate: "Factory Tech | CleanroomMC"
description: "Converts an input itemstack into an output fluidstack."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/Crucible.java"
---

# Crucible (Factory Tech)

## Description

Converts an input itemstack into an output fluidstack.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.factorytech.crucible/* Used as page default */ // [!code focus]
mods.factorytech.Crucible
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.crucible.add(MachineRecipes.MachineRecipe<ItemStack, FluidStack>)
    ```


### Recipe Builder

Just like other recipe types, the Crucible also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.factorytech.crucible.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy:no-line-numbers
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.auxiliary.MachineRecipes$MachineRecipe<net.minecraft.item.ItemStack, net.minecraftforge.fluids.FluidStack>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.crucible.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('water'))
    .register()

mods.factorytech.crucible.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .fluidOutput(fluid('lava') * 30)
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.crucible.remove(MachineRecipes.MachineRecipe<ItemStack, FluidStack>)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.factorytech.crucible.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.factorytech.crucible.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.factorytech.crucible.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.crucible.removeByInput(item('minecraft:ice'))
mods.factorytech.crucible.removeByOutput(fluid('lava'))
mods.factorytech.crucible.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.factorytech.crucible.streamRecipes()
    ```
