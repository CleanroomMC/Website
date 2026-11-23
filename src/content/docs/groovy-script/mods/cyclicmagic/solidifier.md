---
title: Solidifier (Cyclic)
description: Converts up to 4 input itemstacks and an input fluidstack into an output itemstack.
sidebar:
  label: Solidifier
source_code_link: https://github.com/CleanroomMC/GroovyScript/blob/master/src/main/java/com/cleanroommc/groovyscript/compat/mods/cyclic/Solidifier.java
---

## Description

Converts up to 4 input itemstacks and an input fluidstack into an output itemstack.

## Identifier

The identifier `mods.cyclicmagic.solidifier` will be used as the default on this page.

<details class="cr-block cr-quote" open>
<summary>All Identifiers</summary>

Any of these can be used to refer to this compat:

```groovy {3}
mods.cyclic.solidifier
mods.cyclic.Solidifier
mods.cyclicmagic.solidifier/* Used as page default */
mods.cyclicmagic.Solidifier
```

</details>

## Adding Recipes

- Add the given recipe to the recipe list:

    ```groovy
    mods.cyclicmagic.solidifier.add(RecipeSolidifier)
    ```

### Recipe Builder

Just like other recipe types, the Solidifier also uses a recipe builder.

Don't know what a builder is? Check [the builder info page](/groovy-script/getting_started/builder/) out.

<details class="cr-block cr-abstract" open>
<summary>Recipe Builder</summary>

---

- Create the Recipe Builder.

    ```groovy
    mods.cyclicmagic.solidifier.recipeBuilder()
    ```

---

- `IngredientList<IIngredient>`. Sets the item inputs of the recipe. Requires greater than or equal to 1 and less than or equal to 4.

    ```groovy
    input(IIngredient)
    input(IIngredient...)
    input(Collection<IIngredient>)
    ```

- `FluidStackList`. Sets the fluid inputs of the recipe. Requires exactly 1.

    ```groovy
    fluidInput(FluidStack)
    fluidInput(FluidStack...)
    fluidInput(Collection<FluidStack>)
    ```

- `ItemStackList`. Sets the item outputs of the recipe. Requires exactly 1.

    ```groovy
    output(ItemStack)
    output(ItemStack...)
    output(Collection<ItemStack>)
    ```

---

- First validates the builder, returning `null` and outputting errors to the log file if the validation failed, then registers the builder and returns the registered object. (returns `null` or `com.lothrazar.cyclicmagic.block.solidifier.RecipeSolidifier`).

    ```groovy
    register()
    ```

---

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.solidifier.recipeBuilder()
    .input(item('minecraft:clay'))
    .fluidInput(fluid('water') * 175)
    .output(item('minecraft:gold_ingot') * 3)
    .register()

mods.cyclicmagic.solidifier.recipeBuilder()
    .input(ore('logWood'), ore('sand'), ore('gravel'), item('minecraft:diamond'))
    .fluidInput(fluid('lava') * 500)
    .output(item('minecraft:clay') * 2)
    .register()
```

</details>

</details>

## Removing Recipes

- Removes the given recipe from the recipe list:

    ```groovy
    mods.cyclicmagic.solidifier.remove(RecipeSolidifier)
    ```

- Removes all recipes that match the given input:

    ```groovy
    mods.cyclicmagic.solidifier.removeByInput(IIngredient)
    ```

- Removes all recipes that match the given output:

    ```groovy
    mods.cyclicmagic.solidifier.removeByOutput(IIngredient)
    ```

- Removes all registered recipes:

    ```groovy
    mods.cyclicmagic.solidifier.removeAll()
    ```

<details class="cr-block cr-example" open>
<summary>Example</summary>

```groovy
mods.cyclicmagic.solidifier.removeByInput(item('minecraft:bucket'))
mods.cyclicmagic.solidifier.removeByInput(fluid('water'))
mods.cyclicmagic.solidifier.removeByOutput(item('cyclicmagic:crystallized_obsidian'))
mods.cyclicmagic.solidifier.removeAll()
```

</details>

## Getting the value of recipes

- Iterates through every entry in the registry, with the ability to call remove on any element to remove it:

    ```groovy
    mods.cyclicmagic.solidifier.streamRecipes()
    ```
