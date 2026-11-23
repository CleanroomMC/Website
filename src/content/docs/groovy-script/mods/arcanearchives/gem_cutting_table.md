---
title: Gem Cutting Table (Arcane Archives)
description: Converts any number of itemstacks into a single output itemstack via selecting the desired output itemstack in the GUI.
sidebar:
  label: Gem Cutting Table
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/arcanearchives/GemCuttingTable.java
---

## Description

Converts any number of itemstacks into a single output itemstack via selecting the desired output itemstack in the GUI.

<details class="cr-block cr-warning" open>
<summary>Warning</summary>

While more than 8 items can function as the input of a Stygian Iron Anvil recipe, only the first 8 are shown in JEI.

</details>

## Identifier

The identifier `mods.arcanearchives.gem_cutting_table` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {6}
mods.arcanearchives.GCT
mods.arcanearchives.gct
mods.arcanearchives.gemcuttingtable
mods.arcanearchives.gemCuttingTable
mods.arcanearchives.GemCuttingTable
mods.arcanearchives.gem_cutting_table/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Gem Cutting Table also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.arcanearchives.gem_cutting_table.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1.

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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.aranaira.arcanearchives.api.IGCTRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.arcanearchives.gem_cutting_table.recipeBuilder()
    .name('clay_craft')
    .input(item('minecraft:stone') * 64)
    .output(item('minecraft:clay'))
    .register()

mods.arcanearchives.gem_cutting_table.recipeBuilder()
    .input(item('minecraft:stone'),item('minecraft:gold_ingot'),item('minecraft:gold_nugget'))
    .output(item('minecraft:clay') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.arcanearchives.gem_cutting_table.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.arcanearchives.gem_cutting_table.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.arcanearchives.gem_cutting_table.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.arcanearchives.gem_cutting_table.removeByInput(item('minecraft:gold_nugget'))
mods.arcanearchives.gem_cutting_table.removeByOutput(item('arcanearchives:shaped_quartz'))
mods.arcanearchives.gem_cutting_table.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.arcanearchives.gem_cutting_table.streamRecipes()
    ```
