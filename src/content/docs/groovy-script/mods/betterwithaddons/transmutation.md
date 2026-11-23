---
title: Ancestral Infusion Transmutation (Better With Addons)
description: Converts an input item into an output itemstack, consuming Spirits from the Infused Soul Sand placed below the Ancestral Infuser if placed within the appropriate multiblock. The multiblock is either Soul Sand or Infused Soul Sand placed below the Ancestral Infuser and exclusively air blocks adjacent to the Infuser and Soul Sand blocks.
sidebar:
  label: Ancestral Infusion Transmutation
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Transmutation.java
---

## Description

Converts an input item into an output itemstack, consuming Spirits from the Infused Soul Sand placed below the Ancestral Infuser if placed within the appropriate multiblock. The multiblock is either Soul Sand or Infused Soul Sand placed below the Ancestral Infuser and exclusively air blocks adjacent to the Infuser and Soul Sand blocks.

## Identifier

The identifier `mods.betterwithaddons.transmutation` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithaddons.transmutation/* Used as page default */
mods.betterwithaddons.Transmutation
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithaddons.transmutation.add(TransmutationRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Ancestral Infusion Transmutation also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithaddons.transmutation.recipeBuilder()
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

- `int`. Sets the amount of spirits consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    spirits(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.infuser.TransmutationRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.transmutation.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .spirits(0)
    .register()

mods.betterwithaddons.transmutation.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .spirits(5)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithaddons.transmutation.remove(TransmutationRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithaddons.transmutation.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithaddons.transmutation.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithaddons.transmutation.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.transmutation.removeByInput(item('minecraft:reeds'))
mods.betterwithaddons.transmutation.removeByOutput(item('betterwithaddons:crop_rice'))
mods.betterwithaddons.transmutation.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithaddons.transmutation.streamRecipes()
    ```
