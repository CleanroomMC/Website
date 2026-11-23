---
title: Explosion Furnace (Prodigy Tech)
description: Uses an explosive, a dampener, and an optional reagent to convert items. The power value of all recipes, all explosives, and all dampeners should be close to avoid an efficiency loss.
sidebar:
  label: Explosion Furnace
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/prodigytech/ExplosionFurnace.java
---

## Description

Uses an explosive, a dampener, and an optional reagent to convert items. The power value of all recipes, all explosives, and all dampeners should be close to avoid an efficiency loss.

## Identifier

The identifier `mods.prodigytech.explosion_furnace` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.prodigytech.explosionfurnace
mods.prodigytech.explosionFurnace
mods.prodigytech.ExplosionFurnace
mods.prodigytech.explosion_furnace/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.prodigytech.explosion_furnace.add(ExplosionFurnaceManager.ExplosionFurnaceRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Explosion Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.prodigytech.explosion_furnace.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

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

- `int`. Sets the power used by this recipe. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    power(int)
    ```

- `int`. Sets the number of input items that can be converted with 1 reagent. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    craftPerReagent(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `lykrast.prodigytech.common.recipe.ExplosionFurnaceManager$ExplosionFurnaceRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.explosion_furnace.recipeBuilder()
    .input(ore('ingotGold'), item('minecraft:diamond'))
    .craftPerReagent(8)
    .power(160)
    .output(item('minecraft:emerald_block'))
    .register()

mods.prodigytech.explosion_furnace.recipeBuilder()
    .input(item('minecraft:stone'))
    .power(160)
    .output(item('minecraft:glowstone'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.prodigytech.explosion_furnace.remove(ExplosionFurnaceManager.ExplosionFurnaceRecipe)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.prodigytech.explosion_furnace.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.prodigytech.explosion_furnace.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.prodigytech.explosion_furnace.removeByOutput(item('prodigytech:ferramic_ingot'))
mods.prodigytech.explosion_furnace.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.prodigytech.explosion_furnace.streamRecipes()
    ```
