---
title: Wind Rune (EssentialCraft 4)
description: Transforms various items using ESPE.
sidebar:
  label: Wind Rune
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/WindRune.java
---

## Description

Transforms various items using ESPE.

## Identifier

The identifier `mods.essentialcraft.wind_rune` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ec4.windrune
mods.ec4.windRune
mods.ec4.WindRune
mods.ec4.wind_rune
mods.essentialcraft.windrune
mods.essentialcraft.windRune
mods.essentialcraft.WindRune
mods.essentialcraft.wind_rune/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.essentialcraft.wind_rune.add(WindImbueRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Wind Rune also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.essentialcraft.wind_rune.recipeBuilder()
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

- `int`. Sets the ESPE cost for this recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    espe(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `essentialcraft.api.WindImbueRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.essentialcraft.wind_rune.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:diamond_block'))
    .espe(500)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.essentialcraft.wind_rune.remove(WindImbueRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.essentialcraft.wind_rune.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.essentialcraft.wind_rune.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.essentialcraft.wind_rune.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.essentialcraft.wind_rune.removeByInput(item('minecraft:diamond'))
mods.essentialcraft.wind_rune.removeByOutput(item('essentialcraft:air_potion'))
mods.essentialcraft.wind_rune.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.essentialcraft.wind_rune.streamRecipes()
    ```
