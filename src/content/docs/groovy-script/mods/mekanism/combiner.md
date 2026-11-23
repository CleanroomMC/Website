---
title: Combiner (Mekanism)
description: Combines an input itemstack with an extra itemstack to create an output itemstack.
sidebar:
  label: Combiner
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/mekanism/Combiner.java
---

## Description

Combines an input itemstack with an extra itemstack to create an output itemstack.

## Identifier

The identifier `mods.mekanism.combiner` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.mekanism.combiner/* Used as page default */
mods.mekanism.Combiner
```

</details>

## Adding Recipes

- Adds recipes in the format `ingredient`, `extra`, `output`:

    ```groovy
    mods.mekanism.combiner.add(IIngredient, ItemStack, ItemStack)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.combiner.add(ore('gemQuartz') * 8, item('minecraft:netherrack'), item('minecraft:quartz_ore'))
```

</details>

### Recipe Builder

Just like other recipe types, the Combiner also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.mekanism.combiner.recipeBuilder()
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

- `ItemStack`. Sets the extra input item, defaults to Cobblestone. (Default `new ItemStack(Blocks.COBBLESTONE)`).

    ```groovy
    extra(ItemStack)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `mekanism.common.recipe.machines.CombinerRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.combiner.recipeBuilder()
    .input(ore('gemQuartz') * 8)
    .extra(item('minecraft:netherrack'))
    .output(item('minecraft:quartz_ore'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given input:

    ```groovy
    mods.mekanism.combiner.removeByInput(IIngredient, ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.mekanism.combiner.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.mekanism.combiner.removeByInput(item('minecraft:flint'), item('minecraft:cobblestone'))
mods.mekanism.combiner.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.mekanism.combiner.streamRecipes()
    ```
