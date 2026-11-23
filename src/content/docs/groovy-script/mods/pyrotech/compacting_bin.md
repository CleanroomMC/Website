---
title: Compacting Bin (Pyrotech)
description: When using a shovel it can convert items.
sidebar:
  label: Compacting Bin
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/CompactingBin.java
---

## Description

When using a shovel it can convert items.

## Identifier

The identifier `mods.pyrotech.compacting_bin` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pyrotech.compactingbin
mods.pyrotech.compactingBin
mods.pyrotech.CompactingBin
mods.pyrotech.compacting_bin/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.pyrotech.compacting_bin.add(CompactingBinRecipe)
    ```

- Adds recipes in the format `name`, `input`, `output`, `hits`:

    ```groovy
    mods.pyrotech.compacting_bin.add(String, IIngredient, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.compacting_bin.add('iron_to_clay', ore('ingotIron') * 5, item('minecraft:clay_ball') * 20, 9)
```

</details>

### Recipe Builder

Just like other recipe types, the Compacting Bin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pyrotech.compacting_bin.recipeBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

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

- `int`. Sets how often the item needs to be hit. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    toolUses(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.CompactingBinRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.compacting_bin.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald'))
    .toolUses(5)
    .name('diamond_to_emerald_compacting_bin')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.pyrotech.compacting_bin.remove(CompactingBinRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.pyrotech.compacting_bin.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.pyrotech.compacting_bin.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pyrotech.compacting_bin.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.compacting_bin.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.compacting_bin.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.compacting_bin.removeByInput(item('minecraft:snowball'))
mods.pyrotech.compacting_bin.removeByOutput(item('minecraft:bone_block'))
mods.pyrotech.compacting_bin.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.compacting_bin.streamRecipes()
    ```
