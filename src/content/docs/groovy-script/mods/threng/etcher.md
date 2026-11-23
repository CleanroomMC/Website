---
title: ME Circuit Etching (LazyAE2)
description: Converts up to 3 input itemstacks from specific slots into an output itemstack.
sidebar:
  label: ME Circuit Etching
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/lazyae2/Etcher.java
---

## Description

Converts up to 3 input itemstacks from specific slots into an output itemstack.

## Identifier

The identifier `mods.threng.etcher` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.threng.etcher/* Used as page default */
mods.threng.Etcher
mods.lazyae2.etcher
mods.lazyae2.Etcher
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.threng.etcher.add(EtchRecipe)
    ```

### Recipe Builder

Just like other recipe types, the ME Circuit Etching also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.threng.etcher.recipeBuilder()
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

- `IIngredient`. Sets the top slot of the recipe. (Default `IIngredient.EMPTY`).

    ```groovy
    top(IIngredient)
    ```

- `IIngredient`. Sets the bottom slot of the recipe. (Default `IIngredient.EMPTY`).

    ```groovy
    bottom(IIngredient)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `io.github.phantamanta44.threng.recipe.EtchRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.threng.etcher.recipeBuilder()
    .input(ore('blockGlass'))
    .top(item('minecraft:diamond'))
    .bottom(item('minecraft:clay'))
    .output(item('minecraft:diamond') * 5)
    .register()

mods.threng.etcher.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.threng.etcher.remove(EtchRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.threng.etcher.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.threng.etcher.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.threng.etcher.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.threng.etcher.removeByInput(item('minecraft:diamond'))
mods.threng.etcher.removeByOutput(item('appliedenergistics2:material:22'))
mods.threng.etcher.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.threng.etcher.streamRecipes()
    ```
