---
title: Osmium Compressor (Mekanism)
description: Converts an input itemstack and 200 of a gasstack into an output itemstack. By default, will use Liquid Osmium as the gasstack.
sidebar:
  label: Osmium Compressor
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/OsmiumCompressor.java
---

## Description

Converts an input itemstack and 200 of a gasstack into an output itemstack. By default, will use Liquid Osmium as the gasstack.

## Identifier

The identifier `mods.mekanism.osmium_compressor` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.mekanism.osmiumcompressor
mods.mekanism.osmiumCompressor
mods.mekanism.OsmiumCompressor
mods.mekanism.osmium_compressor/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `ingredient`, `gasInput`, `output`:

    ```groovy
    mods.mekanism.osmium_compressor.add(IIngredient, GasStack, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.osmium_compressor.add(item('minecraft:diamond'), gas('hydrogen'), item('minecraft:nether_star'))
```

</details>

### Recipe Builder

Just like other recipe types, the Osmium Compressor also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.mekanism.osmium_compressor.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `GasStackList`. Sets the gas inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1. (Default `MekanismFluids.LiquidOsmium`).

    ```groovy
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.OsmiumCompressorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.osmium_compressor.recipeBuilder()
    .input(item('minecraft:diamond'))
    .gasInput(gas('hydrogen'))/* Always uses 200 gas */
    .output(item('minecraft:nether_star'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.osmium_compressor.removeByInput(IIngredient, GasStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.osmium_compressor.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.osmium_compressor.removeByInput(ore('dustRefinedObsidian'), gas('liquidosmium'))
mods.mekanism.osmium_compressor.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.osmium_compressor.streamRecipes()
    ```
