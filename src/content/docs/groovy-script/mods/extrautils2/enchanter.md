---
title: Enchanter (Extra Utilities 2)
description: Converts two input itemstacks into an output itemstack, consuming energy and require nearby enchantment power providers.
sidebar:
  label: Enchanter
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Enchanter.java
---

## Description

Converts two input itemstacks into an output itemstack, consuming energy and require nearby enchantment power providers.

## Identifier

The identifier `mods.extrautils2.enchanter` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.extrautils2.enchanter/* Used as page default */
mods.extrautils2.Enchanter
mods.extrautilities2.enchanter
mods.extrautilities2.Enchanter
```

</details>

## Adding Recipes

### Recipe Builder

Just like other recipe types, the Enchanter also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.extrautils2.enchanter.recipeBuilder()
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
mods.extrautils2.enchanter.recipeBuilder()
    .input(item('minecraft:gold_ingot'), item('minecraft:diamond'))
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
    mods.extrautils2.enchanter.removeByInput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.extrautils2.enchanter.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrautils2.enchanter.removeByInput(item('minecraft:bookshelf'))
mods.extrautils2.enchanter.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.extrautils2.enchanter.streamRecipes()
    ```
