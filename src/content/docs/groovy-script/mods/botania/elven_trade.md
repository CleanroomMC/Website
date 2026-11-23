---
title: Elven Trade (Botania)
description: Convert in any number of item inputs into an item output.
sidebar:
  label: Elven Trade
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/ElvenTrade.java
---

## Description

Convert in any number of item inputs into an item output.

## Identifier

The identifier `mods.botania.elven_trade` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.botania.elventrade
mods.botania.elvenTrade
mods.botania.ElvenTrade
mods.botania.elven_trade/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.botania.elven_trade.add(RecipeElvenTrade)
    ```

- Adds recipes in the format `output`, `inputs`:

    ```groovy
    mods.botania.elven_trade.add(ItemStack, IIngredient...)
    ```

- Adds recipes in the format `output`, `inputs`:

    ```groovy
    mods.botania.elven_trade.add(ItemStack[], IIngredient...)
    ```

- Adds recipes in the format `output`, `inputs`:

    ```groovy
    mods.botania.elven_trade.add(ItemStack, Collection<IIngredient>)
    ```

- Adds recipes in the format `output`, `inputs`:

    ```groovy
    mods.botania.elven_trade.add(Collection<ItemStack>, Collection<IIngredient>)
    ```

### Recipe Builder

Just like other recipe types, the Elven Trade also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.botania.elven_trade.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 99.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 99.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeElvenTrade`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.elven_trade.recipeBuilder()
    .input(ore('ingotGold'), ore('ingotIron'))
    .output(item('botania:manaresource:7'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.botania.elven_trade.remove(RecipeElvenTrade)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.elven_trade.removeByInputs(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.elven_trade.removeByOutputs(ItemStack...)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.elven_trade.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.elven_trade.removeByInputs(ore('ingotManasteel'))
mods.botania.elven_trade.removeByOutputs(item('botania:dreamwood'))
mods.botania.elven_trade.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.elven_trade.streamRecipes()
    ```
