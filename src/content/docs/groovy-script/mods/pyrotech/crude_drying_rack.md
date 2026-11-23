---
title: Crude Drying Rack (Pyrotech)
description: Converts an item over time into a new one.
sidebar:
  label: Crude Drying Rack
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/CrudeDryingRack.java
---

## Description

Converts an item over time into a new one.

## Identifier

The identifier `mods.pyrotech.crude_drying_rack` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pyrotech.crudedryingrack
mods.pyrotech.crudeDryingRack
mods.pyrotech.CrudeDryingRack
mods.pyrotech.crude_drying_rack/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.pyrotech.crude_drying_rack.add(CrudeDryingRackRecipe)
    ```

- Adds recipes in the format `name`, `input`, `output`, `dryTime`:

    ```groovy
    mods.pyrotech.crude_drying_rack.add(String, IIngredient, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.crude_drying_rack.add('apple_to_dirt', item('minecraft:apple'), item('minecraft:dirt'), 1200)
```

</details>

### Recipe Builder

Just like other recipe types, the Crude Drying Rack also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pyrotech.crude_drying_rack.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.CrudeDryingRackRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.crude_drying_rack.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald'))
    .dryTime(260)
    .name('diamond_to_emerald_crude_drying_rack')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.pyrotech.crude_drying_rack.remove(CrudeDryingRackRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.pyrotech.crude_drying_rack.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.pyrotech.crude_drying_rack.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pyrotech.crude_drying_rack.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.crude_drying_rack.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.crude_drying_rack.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.crude_drying_rack.removeByInput(item('minecraft:wheat'))
mods.pyrotech.crude_drying_rack.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.crude_drying_rack.streamRecipes()
    ```
