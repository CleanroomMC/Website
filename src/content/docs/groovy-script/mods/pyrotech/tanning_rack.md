---
title: Tanning Rack (Pyrotech)
description: Converts an item over time into a new one.
sidebar:
  label: Tanning Rack
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/TanningRack.java
---

## Description

Converts an item over time into a new one.

## Identifier

The identifier `mods.pyrotech.tanning_rack` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pyrotech.tanningrack
mods.pyrotech.tanningRack
mods.pyrotech.TanningRack
mods.pyrotech.tanning_rack/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.pyrotech.tanning_rack.add(TanningRackRecipe)
    ```

- Adds recipes in the format `name`, `input`, `output`, `dryTime`, `failureItem`:

    ```groovy
    mods.pyrotech.tanning_rack.add(String, IIngredient, ItemStack, int, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.tanning_rack.add('apple_to_dirt', item('minecraft:apple'), item('minecraft:dirt'), 1200, item('minecraft:clay_ball'))
```

</details>

### Recipe Builder

Just like other recipe types, the Tanning Rack also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pyrotech.tanning_rack.recipeBuilder()
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

- `int`. Sets the time required for the recipe to complete. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    dryTime(int)
    ```

- `ItemStack`. Sets the output when the recipe failed.

    ```groovy
    failureItem(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.TanningRackRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.tanning_rack.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:gold_ingot'))
    .dryTime(260)
    .name('iron_to_gold_drying_rack')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.pyrotech.tanning_rack.remove(TanningRackRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.pyrotech.tanning_rack.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.pyrotech.tanning_rack.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pyrotech.tanning_rack.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.tanning_rack.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.tanning_rack.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.tanning_rack.removeByInput(item('minecraft:wheat'))
mods.pyrotech.tanning_rack.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.tanning_rack.streamRecipes()
    ```
