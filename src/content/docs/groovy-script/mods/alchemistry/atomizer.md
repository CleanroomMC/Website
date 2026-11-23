---
title: Atomizer (Alchemistry)
description: Converts a non-element into its component elements.
sidebar:
  label: Atomizer
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Atomizer.java
---

## Description

Converts a non-element into its component elements.

## Identifier

The identifier `mods.alchemistry.atomizer` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.alchemistry.atomizer/* Used as page default */
mods.alchemistry.Atomizer
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.alchemistry.atomizer.add(AtomizerRecipe)
    ```

- Adds recipes in the format `input`, `output`:

    ```groovy
    mods.alchemistry.atomizer.add(FluidStack, ItemStack)
    ```

### Recipe Builder

Just like other recipe types, the Atomizer also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.alchemistry.atomizer.recipeBuilder()
    ```

---

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `boolean`. Sets if the recipe will also create a Liquifier recipe to invert the process. (Default `false`).

    ```groovy
    reversible()
    reversible(boolean)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.AtomizerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.atomizer.recipeBuilder()
    .fluidInput(fluid('water') * 125)
    .output(item('minecraft:clay'))
    .register()

mods.alchemistry.atomizer.recipeBuilder()
    .fluidInput(fluid('lava') * 500)
    .output(item('minecraft:gold_ingot'))
    .reversible()
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.alchemistry.atomizer.remove(AtomizerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.alchemistry.atomizer.removeByInput(FluidStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.alchemistry.atomizer.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.alchemistry.atomizer.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.atomizer.removeByInput(fluid('water'))
mods.alchemistry.atomizer.removeByOutput(item('alchemistry:compound:7'))
mods.alchemistry.atomizer.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.alchemistry.atomizer.streamRecipes()
    ```
