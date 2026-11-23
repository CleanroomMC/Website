---
title: Workbench Plus (Additional Enchanted Miner)
description: Converts up to 27 itemstacks into an output itemstack at the cost of power.
sidebar:
  label: Workbench Plus
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/additionalenchantedminer/WorkbenchPlus.java
---

## Description

Converts up to 27 itemstacks into an output itemstack at the cost of power.

## Identifier

The identifier `mods.quarryplus.workbench_plus` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.quarryplus.workbenchplus
mods.quarryplus.workbenchPlus
mods.quarryplus.WorkbenchPlus
mods.quarryplus.workbench_plus/* Used as page default */
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Workbench Plus also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.quarryplus.workbench_plus.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 27.

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

- `double`. Sets the amount of energy consumed to craft the recipe. Requires greater than 0. (Default `0.0d`).

    ```groovy
    energy(double)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.yogpc.qp.recipe.IngredientRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.quarryplus.workbench_plus.recipeBuilder()
    .output(item('minecraft:nether_star'))
    .input(item('minecraft:diamond'),item('minecraft:gold_ingot'))
    .energy(10000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.quarryplus.workbench_plus.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.quarryplus.workbench_plus.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.quarryplus.workbench_plus.removeByOutput(item('quarryplus:quarry'))
mods.quarryplus.workbench_plus.removeAll()
```

</details>
