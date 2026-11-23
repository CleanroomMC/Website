---
title: Petal Apothecary (Botania)
description: Converts item inputs into an item output consuming water and a seed.
sidebar:
  label: Petal Apothecary
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/Apothecary.java
---

## Description

Converts item inputs into an item output consuming water and a seed.

## Identifier

The identifier `mods.botania.apothecary` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.botania.apothecary/* Used as page default */
mods.botania.Apothecary
mods.botania.petalapothecary
mods.botania.petalApothecary
mods.botania.PetalApothecary
mods.botania.petal_apothecary
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.botania.apothecary.add(RecipePetals)
    ```

- Adds recipes in the format `output`, `inputs`:

    ```groovy
    mods.botania.apothecary.add(ItemStack, IIngredient...)
    ```

### Recipe Builder

Just like other recipe types, the Petal Apothecary also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.botania.apothecary.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 20.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipePetals`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.apothecary.recipeBuilder()
    .input(ore('blockGold'), ore('ingotIron'), item('minecraft:apple'))
    .output(item('minecraft:golden_apple'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.botania.apothecary.remove(RecipePetals)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.apothecary.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.apothecary.removeByInputs(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.apothecary.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.apothecary.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.apothecary.removeByInput(ore('runeFireB'))
mods.botania.apothecary.removeByInputs(ore('petalYellow'), ore('petalBrown'))
mods.botania.apothecary.removeByOutput(item('botania:specialflower').withNbt(['type': 'puredaisy']))
mods.botania.apothecary.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.apothecary.streamRecipes()
    ```
