---
title: Extreme Crafting (Avaritia)
description: A normal crafting table, by 9x9 instead.
sidebar:
  label: Extreme Crafting
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/avaritia/ExtremeCrafting.java
---

## Description

A normal crafting table, by 9x9 instead.

## Identifier

The identifier `mods.avaritia.extreme_crafting` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.avaritia.extremecrafting
mods.avaritia.extremeCrafting
mods.avaritia.ExtremeCrafting
mods.avaritia.extreme_crafting/* Used as page default */
```

</details>

## Adding Recipes

- Adds a shaped crafting recipe in the format `output`, `input`:

    ```groovy
    mods.avaritia.extreme_crafting.addShaped(ItemStack, List<List<IIngredient>>)
    ```

- Adds a shapeless crafting recipe in the format `output`, `input`:

    ```groovy
    mods.avaritia.extreme_crafting.addShapeless(ItemStack, List<IIngredient>)
    ```

### Recipe Builder

Just like other recipe types, the Extreme Crafting also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Shaped Extreme Crafting Recipe Builder</summary>

---

- Create a Recipe Builder for Shaped Extreme Crafting recipes.

    ```groovy
    mods.avaritia.extreme_crafting.shapedBuilder()
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

- `List<List<IIngredient>>`. Sets the items required in each slot in the grid as IIngredients. Requires greater than or equal to 1, less than or equal to 81, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `morph.avaritia.recipe.extreme.IExtremeRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.avaritia.extreme_crafting.shapedBuilder()
    .matrix([[item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot'),item('minecraft:gold_ingot')]])
    .output(item('minecraft:gold_block'))
    .register()

mods.avaritia.extreme_crafting.shapedBuilder()
    .output(item('minecraft:stone') * 64)
    .matrix('DLLLLLDDD',
            '  DNIGIND',
            'DDDNIGIND',
            '  DLLLLLD')
    .key('D', item('minecraft:diamond'))
    .key('L', item('minecraft:redstone'))
    .key('N', item('minecraft:stone').reuse())
    .key('I', item('minecraft:iron_ingot'))
    .key('G', item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Shapeless Extreme Crafting Recipe Builder</summary>

---

- Create a Recipe Builder for Shapeless Extreme Crafting recipes.

    ```groovy
    mods.avaritia.extreme_crafting.shapelessBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1 and less than or equal to 81.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `morph.avaritia.recipe.extreme.IExtremeRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.avaritia.extreme_crafting.shapelessBuilder()
    .output(item('minecraft:stone') * 64)
    .input(item('minecraft:stone'), item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'), item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'), item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'), item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'), item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'),item('minecraft:stone'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.avaritia.extreme_crafting.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.avaritia.extreme_crafting.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.avaritia.extreme_crafting.removeByOutput(item('avaritia:resource', 6))
mods.avaritia.extreme_crafting.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.avaritia.extreme_crafting.streamRecipes()
    ```
