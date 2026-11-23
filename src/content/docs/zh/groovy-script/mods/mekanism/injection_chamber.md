---
title: Injection Chamber (Mekanism)
description: Converts an input itemstack and 200 of a gasstack into an output itemstack.
sidebar:
  label: Injection Chamber
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/InjectionChamber.java
---

## Description

Converts an input itemstack and 200 of a gasstack into an output itemstack.

## Identifier

Refer to this via any of the following:

```groovy {1}
mods.mekanism.injection_chamber/* Used as page default */
mods.mekanism.injectionchamber
mods.mekanism.injectionChamber
mods.mekanism.InjectionChamber
mods.mekanism.injector
mods.mekanism.Injector
```

## Adding Recipes

- Adds recipes in the format `ingredient`, `gasInput`, `output`:

    ```groovy
    mods.mekanism.injection_chamber.add(IIngredient, GasStack, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.injection_chamber.add(item('minecraft:diamond'), gas('water'), item('minecraft:nether_star'))
```

</details>

### Recipe Builder

Just like other recipe types, the Injection Chamber also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/zh/groovy-script/groovy/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>mods.mekanism.injection_chamber.recipeBuilder()</summary>

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.InjectionRecipe`).

    ```groovy
    register()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.injection_chamber.recipeBuilder()
    .input(item('minecraft:diamond'))
    .gasInput(gas('water'))/* Always uses 200 gas */
    .output(item('minecraft:nether_star'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.injection_chamber.removeByInput(IIngredient, GasStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.injection_chamber.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.injection_chamber.removeByInput(item('minecraft:hardened_clay'), gas('water'))
mods.mekanism.injection_chamber.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.injection_chamber.streamRecipes()
    ```
