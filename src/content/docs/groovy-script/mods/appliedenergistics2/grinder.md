---
title: Grinder (Applied Energistics 2)
description: Converts an item into one item, with up to two additional items as chance byproducts after a number of turns.
sidebar:
  label: Grinder
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/appliedenergistics2/Grinder.java
---

## Description

Converts an item into one item, with up to two additional items as chance byproducts after a number of turns.

## Identifier

The identifier `mods.appliedenergistics2.grinder` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.ae2.grinder
mods.ae2.Grinder
mods.appliedenergistics2.grinder/* Used as page default */
mods.appliedenergistics2.Grinder
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Grinder also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.appliedenergistics2.grinder.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 3.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the number of turns of the Hand Crank are required. Requires greater than 0. (Default `0`).

    ```groovy
    turns(int)
    ```

- `float`. Sets the chance of the second output item being output. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy
    chance(float, float)
    chance1(float)
    ```

- `float`. Sets the chance of the third output item being output. Requires greater than or equal to 0 and less than or equal to 1. (Default `1.0f`).

    ```groovy
    chance(float, float)
    chance2(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `appeng.api.features.IGrinderRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.grinder.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'), item('minecraft:gold_ingot'), item('minecraft:diamond'))
    .turns(1)
    .chance1(0.5)
    .chance2(0.3)
    .register()

mods.appliedenergistics2.grinder.recipeBuilder()
    .input(item('minecraft:stone'))
    .output(item('minecraft:clay') * 4)
    .turns(10)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.appliedenergistics2.grinder.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.appliedenergistics2.grinder.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.appliedenergistics2.grinder.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.appliedenergistics2.grinder.removeByInput(item('minecraft:gold_ingot'))
mods.appliedenergistics2.grinder.removeByOutput(item('minecraft:quartz'))
mods.appliedenergistics2.grinder.removeAll()
```

</details>
