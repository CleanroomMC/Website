---
title: Rune Altar (Botania)
description: Converts a items inputs into an item output at the cost of mana when a Livingrock item is thrown atop the altar and right clicked with a Wand of the Forest.
sidebar:
  label: Rune Altar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/RuneAltar.java
---

## Description

Converts a items inputs into an item output at the cost of mana when a Livingrock item is thrown atop the altar and right clicked with a Wand of the Forest.

## Identifier

The identifier `mods.botania.rune_altar` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.botania.runealtar
mods.botania.runeAltar
mods.botania.RuneAltar
mods.botania.rune_altar/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.botania.rune_altar.add(RecipeRuneAltar)
    ```

- Adds recipes in the format `output`, `mana`, `inputs`:

    ```groovy
    mods.botania.rune_altar.add(ItemStack, int, IIngredient...)
    ```

### Recipe Builder

Just like other recipe types, the Rune Altar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.botania.rune_altar.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1 and that `input` IIngredients cannot contain Botania's Livingrock Item.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the mana cost of processing the recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    mana(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeRuneAltar`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.rune_altar.recipeBuilder()
    .input(ore('gemEmerald'), item('minecraft:apple'))
    .output(item('minecraft:diamond'))
    .mana(500)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.botania.rune_altar.remove(RecipeRuneAltar)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.rune_altar.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.rune_altar.removeByInputs(IIngredient...)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.rune_altar.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.rune_altar.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.rune_altar.removeByInput(ore('runeEarthB'))
mods.botania.rune_altar.removeByInputs(ore('feather'), ore('string'))
mods.botania.rune_altar.removeByOutput(item('botania:rune:1'))
mods.botania.rune_altar.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.rune_altar.streamRecipes()
    ```
