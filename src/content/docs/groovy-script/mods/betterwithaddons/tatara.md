---
title: Tatara (Better With Addons)
description: Converts an input item into an output itemstack if placed within the appropriate multiblock while fueled by Rice Ashes. The multiblock is Lava or Fire directly below the Tatara, 8 Clay around the Lava or Fire, 9 Nether Brick above the Tatara, 4 Stone Brick diagonal to the Tatara and two Iron Blocks across from each other adjacent to the Tatara.
sidebar:
  label: Tatara
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Tatara.java
---

## Description

Converts an input item into an output itemstack if placed within the appropriate multiblock while fueled by Rice Ashes. The multiblock is Lava or Fire directly below the Tatara, 8 Clay around the Lava or Fire, 9 Nether Brick above the Tatara, 4 Stone Brick diagonal to the Tatara and two Iron Blocks across from each other adjacent to the Tatara.

## Identifier

The identifier `mods.betterwithaddons.tatara` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithaddons.tatara/* Used as page default */
mods.betterwithaddons.Tatara
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithaddons.tatara.add(SmeltingRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Tatara also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.betterwithaddons.tatara.recipeBuilder()
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

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.SmeltingRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.tatara.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'))
    .register()

mods.betterwithaddons.tatara.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay') * 4)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithaddons.tatara.remove(SmeltingRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithaddons.tatara.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithaddons.tatara.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithaddons.tatara.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.tatara.removeByInput(item('betterwithaddons:japanmat:20'))
mods.betterwithaddons.tatara.removeByOutput(item('betterwithaddons:kera'))
mods.betterwithaddons.tatara.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithaddons.tatara.streamRecipes()
    ```
