---
title: Compression Chamber (Factory Tech)
description: Converts an input itemstack and input fluidstack into an output itemstack.
sidebar:
  label: Compression Chamber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/factorytech/Compressor.java
---

## Description

Converts an input itemstack and input fluidstack into an output itemstack.

## Identifier

The identifier `mods.factorytech.compressor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.factorytech.compressor/* Used as page default */
mods.factorytech.Compressor
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.factorytech.compressor.add(TileEntityCompressionChamber.CompressorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Compression Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.factorytech.compressor.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `dalapo.factech.tileentity.specialized.TileEntityCompressionChamber$CompressorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.compressor.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.factorytech.compressor.recipeBuilder()
    .input(item('minecraft:diamond'))
    .fluidInput(fluid('lava') * 100)
    .output(item('minecraft:clay'))
    .register()

mods.factorytech.compressor.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .fluidInput(fluid('water') * 100)
    .output(item('minecraft:diamond') * 5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.factorytech.compressor.remove(TileEntityCompressionChamber.CompressorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.factorytech.compressor.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.factorytech.compressor.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.factorytech.compressor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.factorytech.compressor.removeByInput(fluid('water'))
mods.factorytech.compressor.removeByInput(item('factorytech:machinepart:60'))
mods.factorytech.compressor.removeByOutput(item('factorytech:machinepart:141'))
mods.factorytech.compressor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.factorytech.compressor.streamRecipes()
    ```
