---
title: Rolling Machine (Tech Reborn)
description: Converts a custom crafting recipe into an output itemstack.
sidebar:
  label: Rolling Machine
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/techreborn/RollingMachine.java
---

## Description

Converts a custom crafting recipe into an output itemstack.

## Identifier

The identifier `mods.techreborn.rolling_machine` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {4}
mods.techreborn.rollingmachine
mods.techreborn.rollingMachine
mods.techreborn.RollingMachine
mods.techreborn.rolling_machine/* Used as page default */
```

</details>

## Adding Recipes

- Adds a shaped crafting recipe in the format `output`, `input`:

    ```groovy
    mods.techreborn.rolling_machine.addShaped(ItemStack, List<List<IIngredient>>)
    ```

- Adds a shapeless crafting recipe in the format `output`, `input`:

    ```groovy
    mods.techreborn.rolling_machine.addShapeless(ItemStack, List<IIngredient>)
    ```

### Recipe Builder

Just like other recipe types, the Rolling Machine also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Shaped Rolling Machine Recipe Builder</summary>

---

- Create a Recipe Builder for Shaped Rolling Machine Crafting recipes.

    ```groovy
    mods.techreborn.rolling_machine.shapedBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.rolling_machine.shapedBuilder()
    .output(item('minecraft:stone'))
    .matrix('BXX',
            'X B')
    .key('B', item('minecraft:stone'))
    .key('X', item('minecraft:gold_ingot'))
    .mirrored()
    .register()

mods.techreborn.rolling_machine.shapedBuilder()
    .output(item('minecraft:diamond') * 32)
    .matrix([[item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')],
             [item('minecraft:gold_ingot'), item('minecraft:gold_ingot'), item('minecraft:gold_ingot')]])
    .register()
```

</details>

</details>

<details class="cr-block cr-abstract" open>
<summary>Shapeless Rolling Machine Recipe Builder</summary>

---

- Create a Recipe Builder for Shapeless Rolling Machine Crafting recipes.

    ```groovy
    mods.techreborn.rolling_machine.shapelessBuilder()
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

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `net.minecraft.item.crafting.IRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.rolling_machine.shapelessBuilder()
    .output(item('minecraft:clay') * 8)
    .input(item('minecraft:stone'), item('minecraft:stone'), item('minecraft:stone'))
    .register()

mods.techreborn.rolling_machine.shapelessBuilder()
    .output(item('minecraft:clay') * 32)
    .input(item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'), item('minecraft:diamond'))
    .register()
```

</details>

</details>

## Removing Recipes

- Removes all recipes that match the given output:

    ```groovy
    mods.techreborn.rolling_machine.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.techreborn.rolling_machine.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.techreborn.rolling_machine.removeByOutput(item('minecraft:tripwire_hook'))
mods.techreborn.rolling_machine.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.techreborn.rolling_machine.streamRecipes()
    ```
