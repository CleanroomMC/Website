---
title: Smoking Rack (The Betweenlands)
description: Converts an input item into an output itemstack over a configurable period of time, consuming Fallen Leaves to do so.
sidebar:
  label: Smoking Rack
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betweenlands/SmokingRack.java
---

## Description

Converts an input item into an output itemstack over a configurable period of time, consuming Fallen Leaves to do so.

## Identifier

The identifier `mods.thebetweenlands.smoking_rack` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.betweenlands.smokingrack
mods.betweenlands.smokingRack
mods.betweenlands.SmokingRack
mods.betweenlands.smoking_rack
mods.thebetweenlands.smokingrack
mods.thebetweenlands.smokingRack
mods.thebetweenlands.SmokingRack
mods.thebetweenlands.smoking_rack/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.thebetweenlands.smoking_rack.add(ISmokingRackRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Smoking Rack also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.thebetweenlands.smoking_rack.recipeBuilder()
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

- `int`. Sets the time the recipe takes times 10 in seconds (3 = 30 seconds). Requires greater than or equal to 1. (Default `1`).

    ```groovy
    time(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `thebetweenlands.api.recipes.ISmokingRackRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.smoking_rack.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .register()

mods.thebetweenlands.smoking_rack.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .time(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.thebetweenlands.smoking_rack.remove(ISmokingRackRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.thebetweenlands.smoking_rack.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.thebetweenlands.smoking_rack.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.thebetweenlands.smoking_rack.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.thebetweenlands.smoking_rack.removeByInput(item('thebetweenlands:anadia'))
mods.thebetweenlands.smoking_rack.removeByOutput(item('thebetweenlands:barnacle_smoked'))
mods.thebetweenlands.smoking_rack.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.thebetweenlands.smoking_rack.streamRecipes()
    ```
