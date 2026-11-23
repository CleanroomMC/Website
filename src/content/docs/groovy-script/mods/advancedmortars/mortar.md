---
title: Mortar (Advanced Mortars)
description: Uses any number of specific types of Mortars to convert multiple items into a single output with a possible chance output after a number of player interactions.
sidebar:
  label: Mortar
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/advancedmortars/Mortar.java
---

## Description

Uses any number of specific types of Mortars to convert multiple items into a single output with a possible chance output after a number of player interactions.

## Identifier

The identifier `mods.advancedmortars.mortar` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.advancedmortars.mortar/* Used as page default */
mods.advancedmortars.Mortar
```

</details>

## Adding Recipes

- Adds recipes in the format `types`, `output`, `duration`, `inputs`:

    ```groovy
    mods.advancedmortars.mortar.add(List<String>, ItemStack, int, List<IIngredient>)
    ```

- Adds recipes in the format `types`, `output`, `duration`, `secondaryOutput`, `secondaryOutputChance`, `inputs`:

    ```groovy
    mods.advancedmortars.mortar.add(List<String>, ItemStack, int, ItemStack, float, List<IIngredient>)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.advancedmortars.mortar.add(['stone'], item('minecraft:diamond') * 4, 4, [ore('ingotGold')])
mods.advancedmortars.mortar.add(['stone'], item('minecraft:tnt'), 4, [ore('ingotGold')])
mods.advancedmortars.mortar.add(['iron', 'wood'], item('minecraft:tnt') * 5, 4, item('minecraft:tnt'), 0.7, [ore('ingotIron'), ore('ingotIron'), ore('ingotIron'), ore('ingotIron'),ore('ingotIron'), ore('ingotIron'), ore('ingotIron'), ore('ingotIron')])
```

</details>

### Recipe Builder

Just like other recipe types, the Mortar also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.advancedmortars.mortar.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 0 and less than or equal to 8.

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

- `List<String>`. Sets what types of Mortar are allowed to craft the recipe. Requires a list of Strings that are `EnumMortarType` entries.

    ```groovy
    gold()
    iron()
    type(String...)
    type(List<String>)
    wood()
    stone()
    diamond()
    emerald()
    obsidian()
    ```

- `int`. Sets how many interactions are required to process the recipe. (Default `0`).

    ```groovy
    duration(int)
    ```

- `ItemStack`. Sets the additional output itemstack. (Default `ItemStack.EMPTY`).

    ```groovy
    secondaryOutput(ItemStack)
    secondaryOutput(ItemStack, float)
    ```

- `float`. Sets the chance of the additional output itemstack being output. (Default `1.0f`).

    ```groovy
    secondaryOutput(ItemStack, float)
    secondaryOutputChance(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.advancedmortars.modules.mortar.recipe.RecipeMortar`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.advancedmortars.mortar.recipeBuilder()
    .type('stone')
    .duration(2)
    .output(item('minecraft:grass'))
    .input(item('minecraft:dirt'))
    .register()

mods.advancedmortars.mortar.recipeBuilder()
    .type('emerald')
    .duration(4)
    .output(item('minecraft:wheat_seeds') * 16)
    .secondaryOutput(item('minecraft:melon_seeds'))
    .input(ore('cropWheat'))
    .register()

mods.advancedmortars.mortar.recipeBuilder()
    .type('obsidian')
    .duration(8)
    .output(item('minecraft:wheat_seeds') * 16)
    .secondaryOutput(item('minecraft:melon_seeds'), 0.5)
    .input(ore('cropWheat'))
    .register()
```

</details>

</details>
