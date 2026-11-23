---
title: Anvil Crafting (Better With Mods)
description: Similar to a normal crafting table, but 4x4 instead.
sidebar:
  label: Anvil Crafting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/betterwithmods/AnvilCrafting.java
---

## Description

Similar to a normal crafting table, but 4x4 instead.

## Identifier

The identifier `mods.betterwithmods.anvil_crafting` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.betterwithmods.anvilcrafting
mods.betterwithmods.anvilCrafting
mods.betterwithmods.AnvilCrafting
mods.betterwithmods.anvil_crafting/* Used as page default */
mods.betterwithmods.soulforgedsteelanvil
mods.betterwithmods.soulforgedSteelAnvil
mods.betterwithmods.SoulforgedSteelAnvil
mods.betterwithmods.soulforged_steel_anvil
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.betterwithmods.anvil_crafting.add(IRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Anvil Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Shaped Anvil Recipe Builder</summary>

---

- Create a Recipe Builder for Shaped Anvil Crafting recipes.

    ```groovy
    mods.betterwithmods.anvil_crafting.shapedBuilder()
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

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 16, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.anvil_crafting.shapedBuilder()
    .output(item('minecraft:diamond') * 32)
    .matrix([[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),null],
             [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),null],
             [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),null],
             [null,null,null,item('minecraft:gold_ingot').transform({ _ -> item('minecraft:diamond') })]])
    .register()

mods.betterwithmods.anvil_crafting.shapedBuilder()
    .output(item('minecraft:diamond'))
    .matrix('BXXX')
    .mirrored()
    .key('B', item('minecraft:stone'))
    .key('X', item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Shapeless Anvil Recipe Builder</summary>

---

- Create a Recipe Builder for Shapeless Anvil Crafting recipes.

    ```groovy
    mods.betterwithmods.anvil_crafting.shapelessBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1 and less than or equal to 16.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStack`. Sets the item output. Requires not null.

    ```groovy
    output(ItemStack)
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.anvil_crafting.shapelessBuilder()
    .name(resource('example:anvil_clay'))
    .output(item('minecraft:clay'))
    .input([item('minecraft:cobblestone'), item('minecraft:gold_ingot')])
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.betterwithmods.anvil_crafting.remove(IRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.betterwithmods.anvil_crafting.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.betterwithmods.anvil_crafting.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.betterwithmods.anvil_crafting.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.betterwithmods.anvil_crafting.removeByInput(item('minecraft:redstone'))
mods.betterwithmods.anvil_crafting.removeByOutput(item('betterwithmods:steel_block'))
mods.betterwithmods.anvil_crafting.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.betterwithmods.anvil_crafting.streamRecipes()
    ```
