---
title: Furnace (Extra Utilities 2)
description: Converts an input itemstack into an output itemstack, consuming energy.
sidebar:
  label: Furnace
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Furnace.java
---

## Description

Converts an input itemstack into an output itemstack, consuming energy.

:::caution[Warning]
When removing items, keep in mind that the default registry mostly contains INPUT items allowing any metadata. This means you cannot do `item('minecraft:emerald_ore')` and instead must do `item('minecraft:emerald_ore:*')`.
:::

## Identifier

The identifier `mods.extrautils2.furnace` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.extrautils2.furnace/* Used as page default */
mods.extrautils2.Furnace
mods.extrautilities2.furnace
mods.extrautilities2.Furnace
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Furnace also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.extrautils2.furnace.recipeBuilder()
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

- `int`. Sets the time in ticks the recipe takes. Requires greater than 0. (Default `0`).

    ```groovy
    time(int)
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
mods.extrautils2.furnace.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .energy(1000)
    .time(5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.extrautils2.furnace.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.extrautils2.furnace.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrautils2.furnace.removeByInput(item('minecraft:emerald_ore:*'))
mods.extrautils2.furnace.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.extrautils2.furnace.streamRecipes()
    ```
