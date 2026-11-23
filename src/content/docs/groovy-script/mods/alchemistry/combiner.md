---
title: Chemical Combiner (Alchemistry)
description: Converts up to 9 input itemstacks into an output itemstack.
sidebar:
  label: Chemical Combiner
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/alchemistry/Combiner.java
---

## Description

Converts up to 9 input itemstacks into an output itemstack.

## Identifier

The identifier `mods.alchemistry.combiner` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.alchemistry.combiner/* Used as page default */
mods.alchemistry.Combiner
mods.alchemistry.chemicalcombiner
mods.alchemistry.chemicalCombiner
mods.alchemistry.ChemicalCombiner
mods.alchemistry.chemical_combiner
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.alchemistry.combiner.add(CombinerRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Chemical Combiner also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.alchemistry.combiner.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 9.

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

- `String`. Sets the required gamestage to add the recipe.

    ```groovy
    gamestage(String)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `al132.alchemistry.recipes.CombinerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.combiner.recipeBuilder()
    .input(item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2, item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:gold_block') * 2)
    .register()

mods.alchemistry.combiner.recipeBuilder()
    .input(ItemStack.EMPTY, ItemStack.EMPTY, item('minecraft:clay'))
    .output(item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.alchemistry.combiner.remove(CombinerRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.alchemistry.combiner.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.alchemistry.combiner.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.alchemistry.combiner.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.alchemistry.combiner.removeByInput(element('carbon'))
mods.alchemistry.combiner.removeByOutput(item('minecraft:glowstone'))
mods.alchemistry.combiner.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.alchemistry.combiner.streamRecipes()
    ```
