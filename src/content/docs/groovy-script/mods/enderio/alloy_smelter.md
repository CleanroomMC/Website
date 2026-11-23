---
title: Alloy Smelter (Ender IO)
description: Convert up to 3 itemstack inputs into an itemstack output, using energy and giving XP. Can be restricted to require a given tier of machine. Can be set to require at least SIMPLE, NORMAL, or ENHANCED tiers, or to IGNORE the tier. SIMPLE and IGNORE are effectively the same.
sidebar:
  label: Alloy Smelter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/enderio/AlloySmelter.java
---

## Description

Convert up to 3 itemstack inputs into an itemstack output, using energy and giving XP. Can be restricted to require a given tier of machine. Can be set to require at least SIMPLE, NORMAL, or ENHANCED tiers, or to IGNORE the tier. SIMPLE and IGNORE are effectively the same.

## Identifier

The identifier `mods.enderio.alloy_smelter` will be used as the default on this page.

<details class="cr-block cr-quote">
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {12}
mods.eio.alloying
mods.eio.Alloying
mods.eio.alloysmelter
mods.eio.alloySmelter
mods.eio.AlloySmelter
mods.eio.alloy_smelter
mods.enderio.alloying
mods.enderio.Alloying
mods.enderio.alloysmelter
mods.enderio.alloySmelter
mods.enderio.AlloySmelter
mods.enderio.alloy_smelter/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Alloy Smelter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.enderio.alloy_smelter.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

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

- `float`. Sets the experience gained by taking the output item out of the Alloy Smelter. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy
    xp(float)
    ```

- `RecipeLevel`. Sets the minimum required machine tier of the recipe. (Default `RecipeLevel.IGNORE`).

    ```groovy
    tierAny()
    tierNormal()
    tierSimple()
    tierEnhanced()
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than 0. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `java.lang.Void`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.alloy_smelter.recipeBuilder()
    .input(item('minecraft:diamond') * 4, item('minecraft:clay') * 32)
    .output(item('minecraft:nether_star'))
    .energy(100000)
    .xp(500)
    .tierEnhanced()
    .register()

mods.enderio.alloy_smelter.recipeBuilder()
    .input(item('minecraft:clay') * 4, item('minecraft:diamond'))
    .output(item('minecraft:obsidian'))
    .tierNormal()
    .register()

mods.enderio.alloy_smelter.recipeBuilder()
    .input(item('minecraft:diamond') * 4, item('minecraft:gold_ingot') * 2)
    .output(item('minecraft:clay') * 4)
    .tierSimple()
    .register()

mods.enderio.alloy_smelter.recipeBuilder()
    .input(item('minecraft:diamond') * 2, item('minecraft:gold_nugget') * 2)
    .output(item('minecraft:clay') * 4)
    .tierAny()
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.enderio.alloy_smelter.remove(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.enderio.alloy_smelter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.enderio.alloy_smelter.remove(item('enderio:item_material:70'))
mods.enderio.alloy_smelter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.enderio.alloy_smelter.streamRecipes()
    ```
