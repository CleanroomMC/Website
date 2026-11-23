---
title: Aetherium Anvil (Aetherworks)
description: Converts an input item into an output item using the Aetherium Forge Anvil. The anvil requires a specific temperature range and a number of hits to process the item. The anvil can fail up to 3 times before the item is destroyed.
sidebar:
  label: Aetherium Anvil
source_code_link: https://github.com/Ender-Development/Aetherworks-Extended-Life/blob/master/src/main/java/v0id/aw/compat/groovyscript/Anvil.java
---

## Description

Converts an input item into an output item using the Aetherium Forge Anvil. The anvil requires a specific temperature range and a number of hits to process the item. The anvil can fail up to 3 times before the item is destroyed.

## Identifier

The identifier `mods.aetherworks.anvil` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.aetherworks.anvil/* Used as page default */
mods.aetherworks.Anvil
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Aetherium Anvil also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.aetherworks.anvil.recipeBuilder()
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

- `int`. Sets the value of the difficulty. Requires greater than or equal to 1 and less than or equal to 10. (Default `1`).

    ```groovy
    difficulty(int)
    ```

- `int`. Sets the value how much ember is used per hit. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    embersPerHit(int)
    ```

- `int`. Sets the value how many hits are required to process the item. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    hits(int)
    ```

- `int`. Sets the maximum temperature the anvil can have. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    temperature(int, int)
    temperature(int, int, int)
    maxTemperature(int)
    ```

- `int`. Sets the minimum temperature the anvil can have. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    temperature(int, int)
    temperature(int, int, int)
    minTemperature(int)
    ```

- `int`. Sets the value how much the temperature can fluctuate, while processing the item. Requires greater than or equal to 1. (Default `1`).

    ```groovy
    temperature(int, int, int)
    temperatureFluctuation(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `v0id.aw.common.recipe.AetheriumAnvilRecipes$AetheriumAnvilRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aetherworks.anvil.recipeBuilder()
    .input(item('minecraft:iron_ingot'))
    .output(item('minecraft:iron_nugget') * 9)
    .difficulty(2)
    .embersPerHit(100)
    .hits(10)
    .temperature(1900, 2500, 10)
    .register()

mods.aetherworks.anvil.recipeBuilder()
    .input(ore('plateGold'))
    .output(item('minecraft:gold_ingot') * 9)
    .difficulty(4)
    .embersPerHit(150)
    .hits(5)
    .minTemperature(2000)
    .maxTemperature(2100)
    .temperatureFluctuation(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.aetherworks.anvil.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.aetherworks.anvil.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.aetherworks.anvil.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.aetherworks.anvil.removeByInput(item('aetherworks:item_resource', 9))
mods.aetherworks.anvil.removeByOutput(item('aetherworks:item_resource', 7))
mods.aetherworks.anvil.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.aetherworks.anvil.streamRecipes()
    ```
