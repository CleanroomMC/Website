---
title: Brewing Barrel (Rustic)
description: Converts a fluid into another fluid after a long period of time. If the fluid is an instanceof FluidBooze, has a variable Quality that can be refined through further cycles of conversion.
sidebar:
  label: Brewing Barrel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/rustic/BrewingBarrel.java
---

## Description

Converts a fluid into another fluid after a long period of time. If the fluid is an instanceof FluidBooze, has a variable Quality that can be refined through further cycles of conversion.

## Identifier

The identifier `mods.rustic.brewing_barrel` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.rustic.brewingbarrel
mods.rustic.brewingBarrel
mods.rustic.BrewingBarrel
mods.rustic.brewing_barrel/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.rustic.brewing_barrel.add(IBrewingBarrelRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Brewing Barrel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.rustic.brewing_barrel.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `rustic.common.crafting.IBrewingBarrelRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.rustic.brewing_barrel.recipeBuilder()
    .fluidInput(fluid('ironberryjuice'))
    .fluidOutput(fluid('lava'))
    .register()

mods.rustic.brewing_barrel.recipeBuilder()
    .fluidInput(fluid('water'))
    .fluidOutput(fluid('lava'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.rustic.brewing_barrel.remove(IBrewingBarrelRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.rustic.brewing_barrel.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.rustic.brewing_barrel.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.rustic.brewing_barrel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.rustic.brewing_barrel.removeByInput(fluid('ironberryjuice'))
mods.rustic.brewing_barrel.removeByOutput(fluid('ale'))
mods.rustic.brewing_barrel.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.rustic.brewing_barrel.streamRecipes()
    ```
