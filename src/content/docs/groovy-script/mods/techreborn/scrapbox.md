---
title: Scrapbox (Tech Reborn)
description: Converts a scrapbox into a random itemstack output, either via manual player interaction or via a machine with a given process time, consuming energy per tick.
sidebar:
  label: Scrapbox
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/Scrapbox.java
---

## Description

Converts a scrapbox into a random itemstack output, either via manual player interaction or via a machine with a given process time, consuming energy per tick.

## Identifier

The identifier `mods.techreborn.scrapbox` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.techreborn.scrapbox/* Used as page default */
mods.techreborn.Scrapbox
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.techreborn.scrapbox.add(R)
    ```

### Recipe Builder

Just like other recipe types, the Scrapbox also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.techreborn.scrapbox.recipeBuilder()
    ```

---

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe takes to complete. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `int`. Sets the power consumed per tick. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    perTick(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `techreborn.api.recipe.machines.ScrapboxRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.scrapbox.recipeBuilder()
    .output(item('minecraft:clay'))
    .register()

mods.techreborn.scrapbox.recipeBuilder()
    .output(item('minecraft:gold_block'))
    .time(2)
    .perTick(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.techreborn.scrapbox.remove(R)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.techreborn.scrapbox.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.techreborn.scrapbox.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.scrapbox.removeByOutput(item('minecraft:diamond'))
mods.techreborn.scrapbox.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.techreborn.scrapbox.streamRecipes()
    ```
