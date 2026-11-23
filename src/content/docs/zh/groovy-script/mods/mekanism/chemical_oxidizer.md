---
title: Chemical Oxidizer (Mekanism)
description: Converts an input itemstack into an output gasstack.
sidebar:
  label: Chemical Oxidizer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/ChemicalOxidizer.java
---

## Description

Converts an input itemstack into an output gasstack.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mekanism.chemical_oxidizer/* Used as page default */
mods.mekanism.chemicaloxidizer
mods.mekanism.chemicalOxidizer
mods.mekanism.ChemicalOxidizer
mods.mekanism.oxidizer
mods.mekanism.Oxidizer
```

## Adding Recipes

- Adds recipes in the format `ingredient`, `output`:

    ```groovy
    mods.mekanism.chemical_oxidizer.add(IIngredient, GasStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.chemical_oxidizer.add(ore('dustGold'), gas('gold'))
```

</details>

### Recipe Builder

Just like other recipe types, the Chemical Oxidizer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mekanism.chemical_oxidizer.recipeBuilder()</summary>

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.OxidationRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.chemical_oxidizer.recipeBuilder()
    .input(ore('dustGold'))
    .gasOutput(gas('gold'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.chemical_oxidizer.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.chemical_oxidizer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.chemical_oxidizer.removeByInput(ore('dustSulfur'))
mods.mekanism.chemical_oxidizer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.chemical_oxidizer.streamRecipes()
    ```
