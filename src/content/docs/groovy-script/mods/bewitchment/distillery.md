---
title: Distillery (Bewitchment)
description: Converts up to 6 input ingredients into up to 6 output itemstacks in the Distillery at the cost of 1 Magic Power per tick. Takes 10 seconds.
sidebar:
  label: Distillery
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Distillery.java
---

## Description

Converts up to 6 input ingredients into up to 6 output itemstacks in the Distillery at the cost of 1 Magic Power per tick. Takes 10 seconds.

## Identifier

The identifier `mods.bewitchment.distillery` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.distillery/* Used as page default */
mods.bewitchment.Distillery
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.distillery.add(DistilleryRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Distillery also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.distillery.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.DistilleryRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.distillery.recipeBuilder()
    .input(item('minecraft:glass_bottle'))
    .input(item('minecraft:snow'))
    .input(item('bewitchment:cleansing_balm'))
    .input(item('bewitchment:fiery_unguent'))
    .output(item('bewitchment:bottled_frostfire'))
    .output(item('bewitchment:empty_jar') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.distillery.remove(DistilleryRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.distillery.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.distillery.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.distillery.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.distillery.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.distillery.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.distillery.remove(resource('bewitchment:bottled_frostfire'))
mods.bewitchment.distillery.removeByInput(item('bewitchment:perpetual_ice'))
mods.bewitchment.distillery.removeByOutput(item('bewitchment:demonic_elixir'))
mods.bewitchment.distillery.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.distillery.streamRecipes()
    ```
