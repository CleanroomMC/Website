---
title: Frostfire (Bewitchment)
description: Converts an input ingredient into an output itemstack once a second while inside a Frostfire block.
sidebar:
  label: Frostfire
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Frostfire.java
---

## Description

Converts an input ingredient into an output itemstack once a second while inside a Frostfire block.

## Identifier

The identifier `mods.bewitchment.frostfire` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.frostfire/* Used as page default */
mods.bewitchment.Frostfire
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.frostfire.add(FrostfireRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Frostfire also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.frostfire.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.FrostfireRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.frostfire.recipeBuilder()
    .input(item('minecraft:water_bucket'))
    .output(item('minecraft:ice'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.frostfire.remove(FrostfireRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.frostfire.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.frostfire.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.frostfire.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.frostfire.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.frostfire.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.frostfire.removeByInput(item('minecraft:iron_ore'))
mods.bewitchment.frostfire.removeByOutput(item('bewitchment:cold_iron_ingot'))
mods.bewitchment.frostfire.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.frostfire.streamRecipes()
    ```
