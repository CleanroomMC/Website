---
title: Stamper (Embers Unofficial Extended Life)
description: Converts an input fluid into an output item with a provided stamp in a Stamper.
sidebar:
  label: Stamper
source_code_link: https://github.com/Ender-Development/Embers-Extended-Life/blob/master/src/main/java/teamroots/embers/compat/groovyscript/Stamper.java
---

## Description

Converts an input fluid into an output item with a provided stamp in a Stamper.

## Identifier

The identifier `mods.embers.stamper` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.embers.stamper/* Used as page default */
mods.embers.Stamper
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Stamper also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.embers.stamper.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 1.

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

- `IIngredient`. Sets the stamp used for the recipe. Requires Stamp Required. (Default `IIngredient.EMPTY`).

    ```groovy
    stamp(IIngredient)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `teamroots.embers.recipe.ItemStampingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.stamper.recipeBuilder()
    .stamp(item('minecraft:clay'))
    .fluidInput(fluid('water') * 100)
    .output(item('minecraft:brick'))
    .register()

mods.embers.stamper.recipeBuilder()
    .input(item('minecraft:gravel'))
    .stamp(item('minecraft:flint'))
    .output(item('minecraft:glass'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.embers.stamper.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.embers.stamper.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.embers.stamper.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.embers.stamper.removeByInput(item('embers:shard_ember'))
mods.embers.stamper.removeByOutput(item('embers:plate_iron'))
mods.embers.stamper.removeByOutput(item('embers:dust_ash'))
mods.embers.stamper.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.embers.stamper.streamRecipes()
    ```
