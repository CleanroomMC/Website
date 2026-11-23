---
title: Liquifier (Alchemistry)
description: Converts an input itemstack into an output fluidstack, consuming a set amount of power.
sidebar:
  label: Liquifier
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Liquifier.java
---

## Description

Converts an input itemstack into an output fluidstack, consuming a set amount of power.

## Identifier

The identifier `mods.alchemistry.liquifier` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.alchemistry.liquifier/* Used as page default */
mods.alchemistry.Liquifier
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.alchemistry.liquifier.add(LiquifierRecipe)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.alchemistry.liquifier.add(IIngredient, FluidStack)
    ```

### Recipe Builder

Just like other recipe types, the Liquifier also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.alchemistry.liquifier.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires exactly 1.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.LiquifierRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.liquifier.recipeBuilder()
    .input(element('carbon') * 32)
    .fluidOutput(fluid('water') * 1000)
    .register()

mods.alchemistry.liquifier.recipeBuilder()
    .input(item('minecraft:magma'))
    .fluidOutput(fluid('lava') * 750)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.alchemistry.liquifier.remove(LiquifierRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.alchemistry.liquifier.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.alchemistry.liquifier.removeByOutput(FluidStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.alchemistry.liquifier.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.liquifier.removeByInput(element('water'))
mods.alchemistry.liquifier.removeByOutput(fluid('water'))
mods.alchemistry.liquifier.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.alchemistry.liquifier.streamRecipes()
    ```
