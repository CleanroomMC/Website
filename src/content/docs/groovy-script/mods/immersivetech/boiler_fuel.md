---
title: Boiler Fuel (Immersive Technology)
description: Converts an input fluidstack into heat for the Boiler multiblock structure over a given amount of time.
sidebar:
  label: Boiler Fuel
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/immersivetechnology/BoilerFuel.java
---

## Description

Converts an input fluidstack into heat for the Boiler multiblock structure over a given amount of time.

## Identifier

The identifier `mods.immersivetech.boiler_fuel` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.immersivetech.boilerfuel
mods.immersivetech.boilerFuel
mods.immersivetech.BoilerFuel
mods.immersivetech.boiler_fuel/* Used as page default */
```

</details>

## Adding Entries

- Add the given recipe to the recipe list:

    ```groovy
    mods.immersivetech.boiler_fuel.add(BoilerRecipe.BoilerFuelRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Boiler Fuel also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.immersivetech.boiler_fuel.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `double`. Sets the total heat gained by the Boiler. Requires greater than or equal to 0. (Default `0.0d`).

    ```groovy
    heat(double)
    ```

- `int`. Sets the time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mctmods.immersivetechnology.api.crafting.BoilerRecipe$BoilerFuelRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.boiler_fuel.recipeBuilder()
    .fluidInput(fluid('lava') * 100)
    .time(100)
    .heat(10)
    .register()

mods.immersivetech.boiler_fuel.recipeBuilder()
    .fluidInput(fluid('water') * 50)
    .time(50)
    .heat(0.05)
    .register()
```

</details>

</details>

## Removing Entries

- Removes the given recipe from the recipe list:

    ```groovy
    mods.immersivetech.boiler_fuel.remove(BoilerRecipe.BoilerFuelRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.immersivetech.boiler_fuel.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.immersivetech.boiler_fuel.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.immersivetech.boiler_fuel.removeByInput(fluid('biodiesel'))
mods.immersivetech.boiler_fuel.removeAll()
```

</details>

## Getting the value of entries

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.immersivetech.boiler_fuel.streamRecipes()
    ```
