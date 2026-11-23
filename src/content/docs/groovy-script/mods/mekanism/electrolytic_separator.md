---
title: Electrolytic Separator (Mekanism)
description: Converts an input fluid into two output gasstacks at the cost of power.
sidebar:
  label: Electrolytic Separator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/ElectrolyticSeparator.java
---

## Description

Converts an input fluid into two output gasstacks at the cost of power.

## Identifier

The identifier `mods.mekanism.electrolytic_separator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {6}
mods.mekanism.separator
mods.mekanism.Separator
mods.mekanism.electrolyticseparator
mods.mekanism.electrolyticSeparator
mods.mekanism.ElectrolyticSeparator
mods.mekanism.electrolytic_separator/* Used as page default */
```

</details>

## Adding Recipes

- Adds recipes in the format `input`, `leftOutput`, `rightOutput`, `energy`:

    ```groovy
    mods.mekanism.electrolytic_separator.add(FluidStack, GasStack, GasStack, double)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.electrolytic_separator.add(fluid('lava') * 10, gas('cleanGold') * 5, gas('cleanCopper') * 3, 3000)
```

</details>

### Recipe Builder

Just like other recipe types, the Electrolytic Separator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.mekanism.electrolytic_separator.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `GasStackList`. Sets the gas outputs of the recipe. Requires exactly 2.

    ```groovy
    gasOutput(GasStack)
    gasOutput(GasStack...)
    gasOutput(Collection<GasStack>)
    ```

- `double`. Sets the energy cost of the recipe. Requires greater than 0. (Default `0.0d`).

    ```groovy
    energy(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.SeparatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.electrolytic_separator.recipeBuilder()
    .fluidInput(fluid('lava') * 10)
    .gasOutput(gas('cleanGold') * 5, gas('cleanCopper') * 3)
    .energy(3000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.electrolytic_separator.removeByInput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.electrolytic_separator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.electrolytic_separator.removeByInput(fluid('water'))
mods.mekanism.electrolytic_separator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.electrolytic_separator.streamRecipes()
    ```
