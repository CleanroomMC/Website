---
title: Fluix Aggregation (LazyAE2)
description: Converts up to 3 input itemstacks into an output itemstack.
sidebar:
  label: Fluix Aggregation
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/lazyae2/Aggregator.java
---

## Description

Converts up to 3 input itemstacks into an output itemstack.

## Identifier

The identifier `mods.threng.aggregator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.threng.aggregator/* Used as page default */
mods.threng.Aggregator
mods.lazyae2.aggregator
mods.lazyae2.Aggregator
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.threng.aggregator.add(AggRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Fluix Aggregation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.threng.aggregator.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.github.phantamanta44.threng.recipe.AggRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.threng.aggregator.recipeBuilder()
    .input(ore('blockGlass'), item('minecraft:diamond'))
    .output(item('minecraft:diamond') * 4)
    .register()

mods.threng.aggregator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.threng.aggregator.remove(AggRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.threng.aggregator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.threng.aggregator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.threng.aggregator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.threng.aggregator.removeByInput(item('appliedenergistics2:material:45'))
mods.threng.aggregator.removeByOutput(item('appliedenergistics2:material:7'))
mods.threng.aggregator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.threng.aggregator.streamRecipes()
    ```
