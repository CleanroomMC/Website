---
title: WorkBench (Armor Plus)
description: A normal crafting recipe, but with a 3x3 grid and in the WorkBench.
sidebar:
  label: WorkBench
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/armorplus/WorkBench.java
---

## Description

A normal crafting recipe, but with a 3x3 grid and in the WorkBench.

## Identifier

The identifier `mods.armorplus.work_bench` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.armorplus.workbench
mods.armorplus.workBench
mods.armorplus.WorkBench
mods.armorplus.work_bench/* Used as page default */
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.armorplus.work_bench.add(R)
    ```

### Recipe Builder

Just like other recipe types, the WorkBench also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.armorplus.work_bench.shapedBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.sofodev.armorplus.api.crafting.IRecipe`).

    ```groovy
    register()
    ```

</details>

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.armorplus.work_bench.shapedBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.sofodev.armorplus.api.crafting.IRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.armorplus.work_bench.shapedBuilder()
    .output(item('minecraft:stone') * 8)
    .matrix('BXX')
    .mirrored()
    .key('B', item('minecraft:stone'))
    .key('X', item('minecraft:gold_ingot'))
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.armorplus.work_bench.shapelessBuilder()
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

- `Closure<ItemStack>`. Sets an operation that modifies the input items or output item.

    ```groovy
    recipeFunction(Closure<ItemStack>)
    ```

- `Closure<Void>`. Sets an operation that happens when the recipe is crafted.

    ```groovy
    recipeAction(Closure<Void>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.sofodev.armorplus.api.crafting.IRecipe`).

    ```groovy
    register()
    ```

</details>

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.armorplus.work_bench.shapelessBuilder()
    ```

---

- `ResourceLocation`. Sets the Resource Location of the recipe.

    ```groovy
    name(String)
    name(ResourceLocation)
    ```

- `List<IIngredient>`. Sets the items required for the recipe. Requires greater than or equal to 1, less than or equal to 9, and either the key-based matrix or the ingredient-based matrix can be defined, not both.

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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.sofodev.armorplus.api.crafting.IRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.armorplus.work_bench.shapelessBuilder()
    .output(item('minecraft:clay') * 8)
    .input(item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.armorplus.work_bench.remove(R)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.armorplus.work_bench.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.armorplus.work_bench.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.armorplus.work_bench.removeByOutput(item('armorplus:the_gift_of_the_gods'))
mods.armorplus.work_bench.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.armorplus.work_bench.streamRecipes()
    ```
