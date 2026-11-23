---
title: Scrapper (The Aurorian)
description: Turns an input item into an output item. Can be sped up by placing a Crystal on top of it. The crystal has a chance to break every time a recipe is executed.
sidebar:
  label: Scrapper
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/theaurorian/Scrapper.java
---

## Description

Turns an input item into an output item. Can be sped up by placing a Crystal on top of it. The crystal has a chance to break every time a recipe is executed.

## Identifier

The identifier `mods.theaurorian.scrapper` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.aurorian.scrapper
mods.aurorian.Scrapper
mods.theaurorian.scrapper/* Used as page default */
mods.theaurorian.Scrapper
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.theaurorian.scrapper.add(ScrapperRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Scrapper also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.theaurorian.scrapper.recipeBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.shiroroku.theaurorian.Recipes.ScrapperRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.theaurorian.scrapper.recipeBuilder()
    .input(item('minecraft:stone_sword'))
    .output(item('minecraft:cobblestone'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.theaurorian.scrapper.remove(ScrapperRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.theaurorian.scrapper.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.theaurorian.scrapper.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.theaurorian.scrapper.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.theaurorian.scrapper.removeByInput(item('minecraft:iron_sword'))
mods.theaurorian.scrapper.removeByOutput(item('theaurorian:scrapaurorianite'))
mods.theaurorian.scrapper.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.theaurorian.scrapper.streamRecipes()
    ```
