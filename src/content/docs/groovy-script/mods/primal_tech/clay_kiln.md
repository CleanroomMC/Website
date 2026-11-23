---
title: Clay Kiln (Primal Tech)
description: Converts an input item into an output itemstack after a given amount of time. Requires the block below to be Minecraft Fire or a Primal Tech Flame Grilled Wopper. Takes some time to heat up before beginning to smelt items.
sidebar:
  label: Clay Kiln
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/primaltech/ClayKiln.java
---

## Description

Converts an input item into an output itemstack after a given amount of time. Requires the block below to be Minecraft Fire or a Primal Tech Flame Grilled Wopper. Takes some time to heat up before beginning to smelt items.

## Identifier

The identifier `mods.primal_tech.clay_kiln` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {8}
mods.primaltech.claykiln
mods.primaltech.clayKiln
mods.primaltech.ClayKiln
mods.primaltech.clay_kiln
mods.primal_tech.claykiln
mods.primal_tech.clayKiln
mods.primal_tech.ClayKiln
mods.primal_tech.clay_kiln/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.primal_tech.clay_kiln.add(ClayKilnRecipes)
    ```

- Adds recipes in the format `output`, `input`, `cookTime`:

    ```groovy
    mods.primal_tech.clay_kiln.add(ItemStack, IIngredient, int)
    ```

### Recipe Builder

Just like other recipe types, the Clay Kiln also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.primal_tech.clay_kiln.recipeBuilder()
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

- `int`. Sets the time in ticks for the recipe to complete after the Clay Kiln is heated up enough. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    cookTime(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `primal_tech.recipes.ClayKilnRecipes`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.primal_tech.clay_kiln.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .cookTime(50)
    .register()

mods.primal_tech.clay_kiln.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:diamond') * 4)
    .cookTime(100)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.primal_tech.clay_kiln.remove(ClayKilnRecipes)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.primal_tech.clay_kiln.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.primal_tech.clay_kiln.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.primal_tech.clay_kiln.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.primal_tech.clay_kiln.removeByInput(item('minecraft:gravel'))
mods.primal_tech.clay_kiln.removeByOutput(item('primal_tech:charcoal_block'))
mods.primal_tech.clay_kiln.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.primal_tech.clay_kiln.streamRecipes()
    ```
