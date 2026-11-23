---
title: Melter (Embers Unofficial Extended Life)
description: Converts an input item into an output fluidstack in a Melter with the ability to have a secondary output fluidstack by adding a Geologic Separator.
sidebar:
  label: Melter
source_code_link: https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/Melter.java
---

## Description

Converts an input item into an output fluidstack in a Melter with the ability to have a secondary output fluidstack by adding a Geologic Separator.

## Identifier

The identifier `mods.embers.melter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.embers.melter/* Used as page default */
mods.embers.Melter
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Melter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.embers.melter.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    fluidOutput(FluidStack)
    fluidOutput(FluidStack...)
    fluidOutput(Collection<FluidStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.ItemMeltingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.melter.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidOutput(fluid('water') * 100)
    .register()

mods.embers.melter.recipeBuilder()
    .input(item('minecraft:gravel'))
    .fluidOutput(fluid('lava') * 50, fluid('water') * 50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.embers.melter.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.embers.melter.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.embers.melter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.melter.removeByInput(item('minecraft:redstone_block'))
mods.embers.melter.removeByOutput(fluid('oil_soul'))
mods.embers.melter.removeByOutput(fluid('iron'))
mods.embers.melter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.embers.melter.streamRecipes()
    ```
