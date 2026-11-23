---
title: Dissolution Chamber (Mekanism)
description: Converts an input itemstack into an output gasstack at the cost of 100mb of Sulfuric Acid.
sidebar:
  label: Dissolution Chamber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/DissolutionChamber.java
---

## Description

Converts an input itemstack into an output gasstack at the cost of 100mb of Sulfuric Acid.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mekanism.dissolution_chamber/* Used as page default */
mods.mekanism.dissolutionchamber
mods.mekanism.dissolutionChamber
mods.mekanism.DissolutionChamber
mods.mekanism.dissolver
mods.mekanism.Dissolver
```

## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy
    mods.mekanism.dissolution_chamber.add(IIngredient, GasStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.dissolution_chamber.add(item('minecraft:packed_ice'), gas('water'))
```

</details>

### Recipe Builder

Just like other recipe types, the Dissolution Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mekanism.dissolution_chamber.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 1.

    ```groovy
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.DissolutionRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.dissolution_chamber.recipeBuilder()
    .input(item('minecraft:packed_ice'))
    .gasOutput(gas('water') * 2000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.dissolution_chamber.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.dissolution_chamber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.dissolution_chamber.removeByInput(item('mekanism:oreblock:0'))
mods.mekanism.dissolution_chamber.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.dissolution_chamber.streamRecipes()
    ```
