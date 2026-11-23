---
title: Chemical Infuser (Mekanism)
description: Combines two input gas stacks into a output gas stack.
sidebar:
  label: Chemical Infuser
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/ChemicalInfuser.java
---

## Description

Combines two input gas stacks into a output gas stack.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mekanism.chemical_infuser/* Used as page default */
mods.mekanism.chemicalinfuser
mods.mekanism.chemicalInfuser
mods.mekanism.ChemicalInfuser
```

## Adding Recipes

- Adds recipes in the format `leftInput`, `rightInput`, `output`:

    ```groovy
    mods.mekanism.chemical_infuser.add(GasStack, GasStack, GasStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.chemical_infuser.add(gas('copper') * 10, gas('iron'), gas('gold') * 15)
```

</details>

### Recipe Builder

Just like other recipe types, the Chemical Infuser also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mekanism.chemical_infuser.recipeBuilder()</summary>

- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 2.

    ```groovy
    gasInput(GasStack)
    gasInput(GasStack...)
    gasInput(Collection<GasStack>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 1.

    ```groovy
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.ChemicalInfuserRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.chemical_infuser.recipeBuilder()
    .gasInput(gas('copper') * 10, gas('iron'))
    .gasOutput(gas('gold') * 15)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.chemical_infuser.removeByInput(GasStack, GasStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.chemical_infuser.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.chemical_infuser.removeByInput(gas('hydrogen'), gas('chlorine'))
mods.mekanism.chemical_infuser.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.chemical_infuser.streamRecipes()
    ```
