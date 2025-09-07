---
title: "Metal Cutter"
titleTemplate: "Factory Tech | CleanroomMC"
description: "Converts an input itemstack into an output itemstack, with the ability to control if stone parts are allowed."
source_code_link: "https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/MetalCutter.java"
---

# Metal Cutter (Factory Tech)

## Description

Converts an input itemstack into an output itemstack, with the ability to control if stone parts are allowed.

## Identifier

Refer to this via any of the following:

```groovy:no-line-numbers {1}
mods.factorytech.metal_cutter/* Used as page default */ // [!code focus]
mods.factorytech.metalcutter
mods.factorytech.metalCutter
mods.factorytech.MetalCutter
```


## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.metal_cutter.add(MachineRecipes.MachineRecipe<ItemStack, ItemStack>)
    ```


### Recipe Builder

Just like other recipe types, the Metal Cutter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](../../getting_started/builder.md) out.

:::::::::: details Recipe Builder {open id="abstract"}

---

- Create the Recipe Builder.

    ```groovy:no-line-numbers
    mods.factorytech.metal_cutter.recipeBuilder()
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

- `boolean`. Sets if the recipe can use stone parts. (Default `false`).

    ```groovy:no-line-numbers
    allowStoneParts()
    allowStoneParts(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.auxiliary.MachineRecipes$MachineRecipe<net.minecraft.item.ItemStack, net.minecraft.item.ItemStack>`).

    ```groovy:no-line-numbers
    register()
    ```

---

::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.metal_cutter.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.factorytech.metal_cutter.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .allowStoneParts()
    .register()
```

:::::::::

::::::::::

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy:no-line-numbers
    mods.factorytech.metal_cutter.remove(MachineRecipes.MachineRecipe<ItemStack, ItemStack>)
    ```

- Removes all recipes that match the given input:

    ```groovy:no-line-numbers
    mods.factorytech.metal_cutter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy:no-line-numbers
    mods.factorytech.metal_cutter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy:no-line-numbers
    mods.factorytech.metal_cutter.removeAll()
    ```

:::::::::: details Example {open id="example"}
```groovy:no-line-numbers
mods.factorytech.metal_cutter.removeByInput(item('minecraft:gold_ingot'))
mods.factorytech.metal_cutter.removeByOutput(item('factorytech:machinepart:20'))
mods.factorytech.metal_cutter.removeAll()
```

::::::::::

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy:no-line-numbers
    mods.factorytech.metal_cutter.streamRecipes()
    ```
