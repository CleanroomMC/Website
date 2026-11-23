---
title: Ancestral Infusion Crafting (Better With Addons)
description: Converts a custom crafting recipe an output itemstack, consuming Spirits from the Infused Soul Sand placed below the Ancestral Infuser if placed within the appropriate multiblock. The multiblock is either Soul Sand or Infused Soul Sand placed below the Ancestral Infuser and exclusively air blocks adjacent to the Infuser and Soul Sand blocks.
sidebar:
  label: Ancestral Infusion Crafting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithaddons/Infuser.java
---

## Description

Converts a custom crafting recipe an output itemstack, consuming Spirits from the Infused Soul Sand placed below the Ancestral Infuser if placed within the appropriate multiblock. The multiblock is either Soul Sand or Infused Soul Sand placed below the Ancestral Infuser and exclusively air blocks adjacent to the Infuser and Soul Sand blocks.

## Identifier

The identifier `mods.betterwithaddons.infuser` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.betterwithaddons.infuser/* Used as page default */
mods.betterwithaddons.Infuser
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithaddons.infuser.add(InfuserRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Ancestral Infusion Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Shaped Infusion Recipe Builder</summary>

---

- Create a Recipe Builder for Shaped Infusion Crafting recipes.

    ```groovy
    mods.betterwithaddons.infuser.shapedBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `String[]`. Sets the items required in each slot of the grid as char. Requires either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    row(String)
    shape(String...)
    matrix(String...)
    ```

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 9, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

    ```groovy
    shape(List<List<IIngredient>>)
    matrix(List<List<IIngredient>>)
    ```

- `Char2ObjectOpenHashMap<IIngredient>`. Sets the item the given char corresponds to. (Default `' ' = IIngredient.EMPTY`).

    ```groovy
    key(char, IIngredient)
    key(String, IIngredient)
    key(Map<String, IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy
    output(ItemStack)
    ```

- `int`. Sets the amount of spirits consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    spirits(int)
    ```

- `boolean`. Sets if the recipe is horizontally mirrored. (Default `false`).

    ```groovy
    mirrored()
    mirrored(boolean)
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy
    recipeAction(Closure<Void>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.infuser.InfuserRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.infuser.shapedBuilder()
    .output(item('minecraft:stone'))
    .matrix('BXX',
            'X B')
    .key('B', item('minecraft:stone'))
    .key('X', item('minecraft:gold_ingot'))
    .spirits(1)
    .mirrored()
    .register()

mods.betterwithaddons.infuser.shapedBuilder()
    .output(item('minecraft:diamond') * 32)
    .matrix([[item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')]])
    .spirits(6)
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Shapeless Infusion Recipe Builder</summary>

---

- Create a Recipe Builder for Shapeless Infusion Crafting recipes.

    ```groovy
    mods.betterwithaddons.infuser.shapelessBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1 and less than or equal to 9.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy
    output(ItemStack)
    ```

- `int`. Sets the amount of spirits consumed. Requires greater than or equal to 0. (Default `0`).

    ```groovy
    spirits(int)
    ```

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy
    recipeAction(Closure<Void>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `betterwithaddons.crafting.recipes.infuser.InfuserRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.infuser.shapelessBuilder()
    .output(item('minecraft:clay') * 8)
    .input(item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'))
    .register()

mods.betterwithaddons.infuser.shapelessBuilder()
    .output(item('minecraft:clay') * 32)
    .input(item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'))
    .spirits(8)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithaddons.infuser.remove(InfuserRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithaddons.infuser.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithaddons.infuser.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithaddons.infuser.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithaddons.infuser.removeByInput(item('betterwithaddons:japanmat:16'))
mods.betterwithaddons.infuser.removeByOutput(item('betterwithaddons:ya'))
mods.betterwithaddons.infuser.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithaddons.infuser.streamRecipes()
    ```
