---
title: Pulse Centrifuge (LazyAE2)
description: Converts 1 input itemstack into an output itemstack.
sidebar:
  label: Pulse Centrifuge
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/lazyae2/Centrifuge.java
---

## Description

Converts 1 input itemstack into an output itemstack.

## Identifier

The identifier `mods.threng.centrifuge` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.threng.centrifuge/* Used as page default */
mods.threng.Centrifuge
mods.lazyae2.centrifuge
mods.lazyae2.Centrifuge
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.threng.centrifuge.add(PurifyRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Pulse Centrifuge also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.threng.centrifuge.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.github.phantamanta44.threng.recipe.PurifyRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.threng.centrifuge.recipeBuilder()
    .input(ore('blockGlass'))
    .output(item('minecraft:diamond'))
    .register()

mods.threng.centrifuge.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.threng.centrifuge.remove(PurifyRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.threng.centrifuge.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.threng.centrifuge.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.threng.centrifuge.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.threng.centrifuge.removeByInput(item('appliedenergistics2:material'))
mods.threng.centrifuge.removeByOutput(item('appliedenergistics2:material:4'))
mods.threng.centrifuge.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.threng.centrifuge.streamRecipes()
    ```
