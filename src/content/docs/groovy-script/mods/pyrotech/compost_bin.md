---
title: Compost Bin (Pyrotech)
description: Can convert multiple items into a new one when its full.
sidebar:
  label: Compost Bin
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/pyrotech/CompostBin.java
---

## Description

Can convert multiple items into a new one when its full.

## Identifier

The identifier `mods.pyrotech.compost_bin` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.pyrotech.compostbin
mods.pyrotech.compostBin
mods.pyrotech.CompostBin
mods.pyrotech.compost_bin/* Used as page default */
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.pyrotech.compost_bin.add(CompostBinRecipe)
    ```

- Adds recipes in the format `name`, `input`, `output`, `compostValue`:

    ```groovy
    mods.pyrotech.compost_bin.add(String, IIngredient, ItemStack, int)
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.compost_bin.add('iron_to_clay2', ore('ingotIron') * 5, item('minecraft:clay_ball') * 20, 2)
```

</details>

### Recipe Builder

Just like other recipe types, the Compost Bin also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.pyrotech.compost_bin.recipeBuilder()
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

- `int`. Sets how much the items fills the bin. Requires greater than or equal to 1. (Default `0`).

    ```groovy
    compostValue(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.codetaylor.mc.pyrotech.modules.tech.basic.recipe.CompostBinRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.compost_bin.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:emerald') * 4)
    .compostValue(25)
    .name('diamond_to_emerald_compost_bin')
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.pyrotech.compost_bin.remove(CompostBinRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.pyrotech.compost_bin.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.pyrotech.compost_bin.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.pyrotech.compost_bin.removeByInput(ItemStack)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.pyrotech.compost_bin.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.pyrotech.compost_bin.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.pyrotech.compost_bin.removeByInput(item('minecraft:golden_carrot'))
mods.pyrotech.compost_bin.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.pyrotech.compost_bin.streamRecipes()
    ```
