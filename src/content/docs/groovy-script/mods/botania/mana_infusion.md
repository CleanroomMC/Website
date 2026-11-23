---
title: Mana Infusion (Botania)
description: Toss an item into a mana pool with an optional catalyst blockstate below the pool.
sidebar:
  label: Mana Infusion
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/botania/ManaInfusion.java
---

## Description

Toss an item into a mana pool with an optional catalyst blockstate below the pool.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

A mana cost greater than 10,000 cannot be converted in a Diluted Mana Pools and a mana cost greater than 1,000,000 cannot be converted in a normal Mana Pool. Both the Fabulous Mana Pool and The Everlasting Guilty Pool have the same capacity as a normal Mana Pool.

</details>

## Identifier

The identifier `mods.botania.mana_infusion` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.botania.manainfusion
mods.botania.manaInfusion
mods.botania.ManaInfusion
mods.botania.mana_infusion/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.botania.mana_infusion.add(RecipeManaInfusion)
    ```

- Adds recipes in the format `output`, `input`, `mana`:

    ```groovy
    mods.botania.mana_infusion.add(ItemStack, IIngredient, int)
    ```

### Recipe Builder

Just like other recipe types, the Mana Infusion also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.botania.mana_infusion.recipeBuilder()
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

- `int`. Sets the mana cost of converting the item. Requires greater than or equal to 1. (Default `100`).

    ```groovy
    mana(int)
    ```

- `IBlockState`. Sets the IBlockState required below the mana pool.

    ```groovy
    catalyst(IBlockState)
    useAlchemy()
    useConjuration()
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `vazkii.botania.api.recipe.RecipeManaInfusion`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.mana_infusion.recipeBuilder()
    .input(ore('ingotGold'))
    .output(item('botania:manaresource', 1))
    .mana(500)
    .catalyst(blockstate('minecraft:stone'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.botania.mana_infusion.remove(RecipeManaInfusion)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.botania.mana_infusion.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.botania.mana_infusion.removeByOutput(ItemStack)
    ```

- Removes all recipes with the given IBlockState catalyst:

    ```groovy
    mods.botania.mana_infusion.removeByCatalyst(IBlockState)
    ```

- Removes all registered recipes:

    ```groovy
    mods.botania.mana_infusion.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.botania.mana_infusion.removeByInput(item('minecraft:ender_pearl'))
mods.botania.mana_infusion.removeByOutput(item('botania:managlass'))
mods.botania.mana_infusion.removeByCatalyst(blockstate('botania:alchemycatalyst'))
mods.botania.mana_infusion.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.botania.mana_infusion.streamRecipes()
    ```
