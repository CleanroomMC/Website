---
title: DeHydrator (Cyclic)
description: Converts an input itemstack into an output itemstack.
sidebar:
  label: DeHydrator
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Dehydrator.java
---

## Description

Converts an input itemstack into an output itemstack.

## Identifier

The identifier `mods.cyclicmagic.dehydrator` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.cyclic.dehydrator
mods.cyclic.Dehydrator
mods.cyclicmagic.dehydrator/* Used as page default */
mods.cyclicmagic.Dehydrator
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.cyclicmagic.dehydrator.add(RecipeDeHydrate)
    ```

### Recipe Builder

Just like other recipe types, the DeHydrator also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.cyclicmagic.dehydrator.recipeBuilder()
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

- `int`. Sets the amount of time in ticks the recipe takes to process. Requires greater than or equal to 0. (Default `10`).

    ```groovy
    time(int)
    ```

- `int`. Sets the amount of water produced by the DeHydrator on completing a recipe. Requires greater than or equal to 0. (Default `100`).

    ```groovy
    water(int)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.dehydrator.RecipeDeHydrate`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.dehydrator.recipeBuilder()
    .input(item('minecraft:gold_ingot'))
    .output(item('minecraft:clay'))
    .register()

mods.cyclicmagic.dehydrator.recipeBuilder()
    .input(ore('logWood'))
    .output(item('minecraft:clay') * 8)
    .time(100)
    .water(30)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.cyclicmagic.dehydrator.remove(RecipeDeHydrate)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.cyclicmagic.dehydrator.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.cyclicmagic.dehydrator.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.cyclicmagic.dehydrator.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.dehydrator.removeByInput(item('minecraft:clay'))
mods.cyclicmagic.dehydrator.removeByOutput(item('minecraft:deadbush'))
mods.cyclicmagic.dehydrator.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.cyclicmagic.dehydrator.streamRecipes()
    ```
