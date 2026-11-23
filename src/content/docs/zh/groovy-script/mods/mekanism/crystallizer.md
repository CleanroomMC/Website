---
title: Crystallizer (Mekanism)
description: Converts an input gasstack into an output itemstack.
sidebar:
  label: Crystallizer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Crystallizer.java
---

## Description

Converts an input gasstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mekanism.crystallizer/* Used as page default */
mods.mekanism.Crystallizer
```

## Adding Recipes

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.mekanism.crystallizer.add(GasStack, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.crystallizer.add(gas('cleanGold'), item('minecraft:gold_ingot'))
```

</details>

### Recipe Builder

Just like other recipe types, the Crystallizer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mekanism.crystallizer.recipeBuilder()</summary>

- `GasStackList`. Sets the gas inputs of the recipe. Requires exactly 1.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.CrystallizerRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.crystallizer.recipeBuilder()
    .gasInput(gas('cleanGold'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.crystallizer.removeByInput(GasStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.crystallizer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.crystallizer.removeByInput(gas('cleanGold'))
mods.mekanism.crystallizer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.crystallizer.streamRecipes()
    ```
