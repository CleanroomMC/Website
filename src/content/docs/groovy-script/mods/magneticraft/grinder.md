---
title: Grinder (Magneticraft)
description: Converts an input itemstack into an output itemstack with a chance at a second itemstack in a Grinder Multiblock.
sidebar:
  label: Grinder
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/magneticraft/Grinder.java
---

## Description

Converts an input itemstack into an output itemstack with a chance at a second itemstack in a Grinder Multiblock.

## Identifier

The identifier `mods.magneticraft.grinder` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {1}
mods.magneticraft.grinder/* Used as page default */
mods.magneticraft.Grinder
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.magneticraft.grinder.add(IGrinderRecipe)
    ```

### Recipe Builder

Just like other recipe types, the Grinder also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.magneticraft.grinder.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires exactly 1.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires greater than or equal to 1 and less than or equal to 2.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

- `float`. Sets the time in ticks the recipe takes to process. Requires greater than 0. (Default `0.0f`).

    ```groovy
    ticks(float)
    ```

- `float`. Sets the chance the output itemstack will be created. Requires greater than 0 and less than or equal to 1. (Default `0.0f`).

    ```groovy
    chance(float)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.cout970.magneticraft.api.registries.machines.grinder.IGrinderRecipe`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.grinder.recipeBuilder()
    .input(item('minecraft:clay'))
    .output(item('minecraft:diamond'))
    .ticks(50)
    .register()

mods.magneticraft.grinder.recipeBuilder()
    .input(item('minecraft:diamond'))
    .output(item('minecraft:clay'), item('minecraft:gold_ingot'))
    .chance(10)
    .ticks(50)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.magneticraft.grinder.remove(IGrinderRecipe)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.magneticraft.grinder.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.magneticraft.grinder.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.magneticraft.grinder.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.magneticraft.grinder.removeByInput(item('minecraft:iron_ore'))
mods.magneticraft.grinder.removeByOutput(item('minecraft:gravel'))
mods.magneticraft.grinder.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.magneticraft.grinder.streamRecipes()
    ```
