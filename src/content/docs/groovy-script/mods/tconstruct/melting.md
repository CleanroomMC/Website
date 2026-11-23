---
title: Melting (Tinkers' Construct)
description: Modifies what items can be melted down in the Smeltery.
sidebar:
  label: Melting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/tinkersconstruct/Melting.java
---

## Description

Modifies what items can be melted down in the Smeltery.

## Identifier

The identifier `mods.tconstruct.melting` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ticon.melting
mods.ticon.Melting
mods.tconstruct.melting/* Used as page default */
mods.tconstruct.Melting
mods.tinkersconstruct.melting
mods.tinkersconstruct.Melting
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.tconstruct.melting.add(MeltingRecipe)
    ```

- Adds a new recipe in the format `input`, `output`, `time`:

    ```groovy
    mods.tconstruct.melting.add(IIngredient, FluidStack, int)
    ```

### Recipe Builder

Just like other recipe types, the Melting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.tconstruct.melting.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `int`. Sets the time required for melting, which is based on temperature. Requires If time is set, temperature will be ignored. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Required temperature for melting. Also determines the speed of the melt. Requires greater than or equal to 1 and if time is set, temperature will be ignored. (Default `300`).

    ```groovy
    temperature(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `slimeknights.tconstruct.library.smeltery.MeltingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.melting.recipeBuilder()
    .input(item('minecraft:gravel'))
    .fluidOutput(fluid('lava') * 25)
    .time(80)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.tconstruct.melting.remove(MeltingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.tconstruct.melting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.tconstruct.melting.removeByOutput(FluidStack)
    ```

- Removes all recipes that match the given input and the given output:

    ```groovy
    mods.tconstruct.melting.removeByInputAndOutput(IIngredient, FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.tconstruct.melting.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.tconstruct.melting.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.tconstruct.melting.streamRecipes()
    ```
