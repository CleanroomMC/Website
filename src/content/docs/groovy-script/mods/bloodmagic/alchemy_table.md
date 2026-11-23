---
title: "Alchemy Table (Blood Magic: Alchemical Wizardry)"
description: Converts up to 6 input items into an output itemstack, with configurable time, minimum tier of Blood Orb required, and Life Essence drained from the Orb network.
sidebar:
  label: Alchemy Table
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bloodmagic/AlchemyTable.java
---

## Description

Converts up to 6 input items into an output itemstack, with configurable time, minimum tier of Blood Orb required, and Life Essence drained from the Orb network.

:::danger[Danger]
Tier 6 must be enabled in the config to use an Orb of that tier in the Alchemy Table.
:::

## Identifier

The identifier `mods.bloodmagic.alchemy_table` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.bm.alchemytable
mods.bm.alchemyTable
mods.bm.AlchemyTable
mods.bm.alchemy_table
mods.bloodmagic.alchemytable
mods.bloodmagic.alchemyTable
mods.bloodmagic.AlchemyTable
mods.bloodmagic.alchemy_table/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.bloodmagic.alchemy_table.add(RecipeAlchemyTable)
    ```

- Adds recipes in the format `input`, `output`, `syphon`, `ticks`, `minimumTier`:

    ```groovy
    mods.bloodmagic.alchemy_table.add(NonNullList<Ingredient>, ItemStack, int, int, int)
    ```

### Recipe Builder

Just like other recipe types, the Alchemy Table also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bloodmagic.alchemy_table.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 6.

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

- `int`. Sets how long in ticks the recipe should take. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ticks(int)
    ```

- `int`. Sets how much Life Essence is drained from the Blood Network. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    drain(int)
    syphon(int)
    ```

- `int`. Sets the minimum tier the Blood Orb inside the table must be. Requires greater than or equal to 0 and less than `AltarTier.MAXTIERS`, which is determined by the config option `enableTierSixEvenThoughThereIsNoContent`. (Default `0`).

    ```groovy
    tier(int)
    minimumTier(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `WayofTime.bloodmagic.api.impl.recipe.RecipeAlchemyTable`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodmagic.alchemy_table.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .ticks(100)
    .minimumTier(2)
    .syphon(500)
    .register()

mods.bloodmagic.alchemy_table.recipeBuilder()
    .input(item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('bloodmagic:slate'), item('bloodmagic:slate'))
    .output(item('minecraft:clay'))
    .time(2000)
    .tier(5)
    .drain(25000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.bloodmagic.alchemy_table.remove(RecipeAlchemyTable)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bloodmagic.alchemy_table.removeByInput(IIngredient...)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bloodmagic.alchemy_table.removeByInput(NonNullList<IIngredient>)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bloodmagic.alchemy_table.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bloodmagic.alchemy_table.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bloodmagic.alchemy_table.removeByInput(item('minecraft:nether_wart'), item('minecraft:gunpowder'))
mods.bloodmagic.alchemy_table.removeByOutput(item('minecraft:sand'))
mods.bloodmagic.alchemy_table.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bloodmagic.alchemy_table.streamRecipes()
    ```
