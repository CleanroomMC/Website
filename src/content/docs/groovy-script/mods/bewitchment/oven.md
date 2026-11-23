---
title: Oven (Bewitchment)
description: Converts an input itemstack into an output itemstack, with the ability to have a chance to produce an optional itemstack, and if producing the optional itemstack will consume a `bewitchment:empty_jar`. Requires furnace fuel to run and takes 10 seconds per recipe.
sidebar:
  label: Oven
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/bewitchment/Oven.java
---

## Description

Converts an input itemstack into an output itemstack, with the ability to have a chance to produce an optional itemstack, and if producing the optional itemstack will consume a `bewitchment:empty_jar`. Requires furnace fuel to run and takes 10 seconds per recipe.

## Identifier

The identifier `mods.bewitchment.oven` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.bewitchment.oven/* Used as page default */
mods.bewitchment.Oven
```

</details>

## Adding Recipes

- Adds the recipe:

    ```groovy
    mods.bewitchment.oven.add(OvenRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Oven also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.bewitchment.oven.recipeBuilder()
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

- `ItemStack`. Sets the byproduct itemstack. Requires not null. (Default `ItemStack.EMPTY`).

    ```groovy
    byproduct(ItemStack)
    ```

- `boolean`. Sets if the recipe must consume a jar in order to produce the byproduct. (Default `false`).

    ```groovy
    requiresJar(boolean)
    ```

- `float`. Sets the chance the byproduct will be created. Requires greater than or equal to 0. (Default `0.0f`).

    ```groovy
    byproductChance(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.bewitchment.api.registry.OvenRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.oven.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .requiresJar(false)
    .byproduct(item('minecraft:gold_nugget'))
    .byproductChance(0.2f)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the recipe:

    ```groovy
    mods.bewitchment.oven.remove(OvenRecipe)
    ```

- Removes the recipe with the given String as its Resource Location:

    ```groovy
    mods.bewitchment.oven.remove(String)
    ```

- Removes the recipe with the given Resource Location:

    ```groovy
    mods.bewitchment.oven.remove(ResourceLocation)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.bewitchment.oven.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.bewitchment.oven.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.bewitchment.oven.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.bewitchment.oven.removeByInput(item('minecraft:sapling'))
mods.bewitchment.oven.removeByOutput(item('bewitchment:garlic_grilled'))
mods.bewitchment.oven.removeByOutput(item('bewitchment:tallow'))
mods.bewitchment.oven.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.bewitchment.oven.streamRecipes()
    ```
