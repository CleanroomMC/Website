---
title: Magician Table (EssentialCraft 4)
description: A 5-slot processing machine using MRU. Can be upgraded with various plates to increase its speed.
sidebar:
  label: Magician Table
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/essentialcraft/MagicianTable.java
---

## Description

A 5-slot processing machine using MRU. Can be upgraded with various plates to increase its speed.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

Certain OreDict entries might give unexpected results when used in the Magician Table as inputs. Known entries include: ingotGold, gemEnderPearl.

</details>

## Identifier

The identifier `mods.essentialcraft.magician_table` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.ec4.magiciantable
mods.ec4.magicianTable
mods.ec4.MagicianTable
mods.ec4.magician_table
mods.essentialcraft.magiciantable
mods.essentialcraft.magicianTable
mods.essentialcraft.MagicianTable
mods.essentialcraft.magician_table/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.essentialcraft.magician_table.add(MagicianTableRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Magician Table also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.essentialcraft.magician_table.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 5.

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

- `int`. Sets the base MRU cost for this recipe. This cost also equals the time needed to execute the recipe in ticks. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    mru(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `essentialcraft.api.MagicianTableRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.essentialcraft.magician_table.recipeBuilder()
    .input(item('minecraft:diamond'), ore('ingotGold'), ore('ingotGold'), ore('stickWood'), ore('stickWood'))
    .output(item('minecraft:iron_ingot'))
    .mru(500)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.essentialcraft.magician_table.remove(MagicianTableRecipe)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.essentialcraft.magician_table.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.essentialcraft.magician_table.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.essentialcraft.magician_table.removeByOutput(item('essentialcraft:genitem'))
mods.essentialcraft.magician_table.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.essentialcraft.magician_table.streamRecipes()
    ```
