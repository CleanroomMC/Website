---
title: Crusher (Extra Utilities 2)
description: Converts an input itemstack into an output itemstack with a chance of an additional itemstack output, consuming energy.
sidebar:
  label: Crusher
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Crusher.java
---

## Description

Converts an input itemstack into an output itemstack with a chance of an additional itemstack output, consuming energy.

## Identifier

The identifier `mods.extrautils2.crusher` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.extrautils2.crusher/* Used as page default */
mods.extrautils2.Crusher
mods.extrautilities2.crusher
mods.extrautilities2.Crusher
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Crusher also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.extrautils2.crusher.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `int`. Sets the time in ticks the recipe takes. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
    ```

- `float`. Sets the chance of the second itemstack being output. Requires greater than or equal to 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    chance(float)
    ```

- `int`. Sets the energy cost of the recipe. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    energy(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.rwtema.extrautils2.api.machine.IMachineRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrautils2.crusher.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .energy(1000)
    .time(5)
    .register()

mods.extrautils2.crusher.recipeBuilder()
    .input(item('minecraft:blaze_rod'))
    .output(item('minecraft:gold_ingot') * 3)
    .output(item('minecraft:gold_ingot'))
    .chance(0.2f)
    .energy(1000)
    .time(5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.extrautils2.crusher.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.extrautils2.crusher.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrautils2.crusher.removeByInput(item('minecraft:blaze_rod'))
mods.extrautils2.crusher.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.extrautils2.crusher.streamRecipes()
    ```
