---
title: Resonator (Extra Utilities 2)
description: Converts and input itemstack into an output itemstack, consuming Grid Power from the Owner's GP network. Can also require an active Rainbow Generator.
sidebar:
  label: Resonator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/extrautils2/Resonator.java
---

## Description

Converts and input itemstack into an output itemstack, consuming Grid Power from the Owner's GP network. Can also require an active Rainbow Generator.

## Identifier

The identifier `mods.extrautils2.resonator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.extrautils2.resonator/* Used as page default */
mods.extrautils2.Resonator
mods.extrautilities2.resonator
mods.extrautilities2.Resonator
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.extrautils2.resonator.add(IResonatorRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Resonator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.extrautils2.resonator.recipeBuilder()
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

- `int`. Sets the total Grid Power required for the recipe in 1/100ths of a single GP (int 1000 = 10 GP). Requires greater than or equal to 100. (Default `0`).

    ```groovy
    cost(int)
    energy(int)
    ```

- `boolean`. Sets if the output itemstack should gain an NBT tag attaching the player who placed the Resonator to the itemstack. Notably used for Red Coal, to determine the bonus burn time from Grid Power. (Default `false`).

    ```groovy
    ownerTag()
    ownerTag(boolean)
    ```

- `Closure<Boolean>`. Sets the function used to determine if the recipe should run, with the Closure taking 3 parameters, `TileEntity resonator`, `int frequency`, `ItemStack input` and returning a `boolean`.

    ```groovy
    rainbow()
    shouldProgress(Closure<Boolean>)
    ```

- `String`. Sets the text in JEI displaying an additional requirement for the recipe to run.

    ```groovy
    rainbow()
    requirementText(String)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.rwtema.extrautils2.api.resonator.IResonatorRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrautils2.resonator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .rainbow()
    .energy(1000)
    .register()

mods.extrautils2.resonator.recipeBuilder()
    .input(item('minecraft:gold_block'))
    .output(item('minecraft:clay') * 5)
    .energy(100)
    .register()

mods.extrautils2.resonator.recipeBuilder()
    .input(item('minecraft:redstone'))
    .output(item('extrautils2:ingredients:4'))
    .ownerTag()
    .energy(5000)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.extrautils2.resonator.remove(IResonatorRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.extrautils2.resonator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.extrautils2.resonator.removeByOutput(ItemStack)
    ```

- Removes all registered recipes:

    ```groovy
    mods.extrautils2.resonator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.extrautils2.resonator.removeByInput(item('minecraft:quartz_block'))
mods.extrautils2.resonator.removeByOutput(item('extrautils2:ingredients:4'))
mods.extrautils2.resonator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.extrautils2.resonator.streamRecipes()
    ```
